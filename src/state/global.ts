import { type Signal, signal } from "@preact/signals";
import { LocalStorageHelpers } from "../utils";
import type { ModalState } from "../types";

const localStorageHelpers = new LocalStorageHelpers();

// States
export const shrink: Signal<boolean> = signal(
  localStorageHelpers.getBool("shrink"),
);

export const expandSettings: Signal<boolean> = signal(
  localStorageHelpers.getBool("expandSettings"),
);

export const basicModal: Signal<ModalState> = signal({
  _tag: "",
  title: "",
  content: "",
  icon: "Help",
  actions: [],
  isOpen: false,
  modalType: "info",
});

expandSettings.subscribe((v) => {
  localStorage.setItem("expandSettings", `${v}`);
});

// Subscribers
shrink.subscribe((v) => {
  localStorage.setItem("shrink", `${v}`);
});
