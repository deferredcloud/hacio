export type NO_OP = () => void;
export const NO_OP = () => {};

export const capitalize = (s: string): string =>
	s.charAt(0).toUpperCase() + s.slice(1);

export class LocalStorageHelpers {
	getBool(key: string) {
		return localStorage.getItem(key) === "true";
	}
}
