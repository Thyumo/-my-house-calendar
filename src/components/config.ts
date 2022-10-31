const ACTIVE_VIEW = "month";
const DISABLED_VIEWS = ["years", "day"];
const EVENT_OPTIONS = {
    title: true,
    drag: false,
    resize: false,
    delete: true,
    create: true
}

type EnabledView = "year" | "month" | "week";

export {
    ACTIVE_VIEW,
    DISABLED_VIEWS,
    EVENT_OPTIONS,
};

export type {
    EnabledView
}
