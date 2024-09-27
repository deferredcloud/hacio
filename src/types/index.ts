import type { Component } from "mithril";

export type IconTypes =
	| "Notification"
	| "NotificationPlus"
	| "Help"
	| "ExpandLeft"
	| "ExpandRight"
	| "Dashboard"
	| "Analytics"
	| "Calendar"
	| "Mail"
	| "ChevronDown"
	| "ChevronUp"
	| "Settings";

export const navNames: IconTypes[] = [
	"Dashboard",
	"Analytics",
	"Calendar",
	"Mail",
	"Settings",
];

export type Modals = "NotificationModal";

export const modalNames: Modals[] = ["NotificationModal"];

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type FunctionComponent<Attrs = {}, State = {}> =
	| Component<Attrs, State>
	| (() => Component<Attrs, State>);
