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

export type ModalTypes = "warning" | "error" | "success" | "info";
export type ModalAction = {
  label: string;
  action: () => void;
};

export type ModalState = {
  _tag: string;
  title: string;
  content?: string;
  icon: IconTypes;
  actions?: ModalAction[];
  isOpen?: boolean;
  type?: ModalTypes;
};

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type FunctionComponent<Attrs = {}, State = {}> =
  | Component<Attrs, State>
  | (() => Component<Attrs, State>);
