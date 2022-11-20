// apollo.config.js
module.exports = {
    client: {
      service: {
        name: 'my-app',
        // URL to the GraphQL API
        url: 'https://eu-west-1.aws.realm.mongodb.com/api/client/v2.0/app/my-house-calendar-sopap/graphql',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
        'src/**/*.ts'
      ],
    },
  }
