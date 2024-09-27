import { signal, type Signal } from "@preact/signals";
import { LocalStorageHelpers } from "../utils";

const localStorageHelpers = new LocalStorageHelpers();

// States
export const shrink: Signal<boolean> = signal(
	localStorageHelpers.getBool("shrink"),
);

export const expandSettings: Signal<boolean> = signal(
	localStorageHelpers.getBool("expandSettings"),
);

expandSettings.subscribe((v) => {
	localStorage.setItem("expandSettings", `${v}`);
});

export const showNotificationsModal: Signal<boolean> = signal(
	localStorageHelpers.getBool("showNotificationsModal"),
);

// Subscribers
shrink.subscribe((v) => {
	localStorage.setItem("shrink", `${v}`);
});

showNotificationsModal.subscribe((v) => {
	localStorage.setItem("showNotificationsModal", `${v}`);
});
