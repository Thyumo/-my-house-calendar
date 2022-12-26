import * as Realm from "realm-web";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

const appRealm = new Realm.App({ id: "my-house-calendar-sopap" })

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://eu-west-1.aws.realm.mongodb.com/api/client/v2.0/app/my-house-calendar-sopap/graphql',
  fetch: async (uri, options) => {
    const accessToken = await getValidAccessToken();
    return fetch(uri, { ...options, headers: { Authorization: `Bearer ${accessToken}` }});
  }
});

// Authentication
async function getValidAccessToken() {
    // Guarantee that there's a logged in user with a valid access token
    if (! appRealm.currentUser) {
      // If no user is logged in, log in an anonymous user. The logged in user will have a valid
      // access token.
      await appRealm.logIn(Realm.Credentials.anonymous());
    } else {
      // An already logged in user's access token might be stale. To guarantee that the token is
      // valid, we refresh the user's custom data which also refreshes their access token.
      await appRealm.currentUser.refreshCustomData();
    }

    return appRealm.currentUser?.accessToken;
  }

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
