export type NO_OP = () => void;
export const NO_OP = () => { };

export const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

export class LocalStorageHelpers {
  public getBool(key: string) {
    return localStorage.getItem(key) === "true";
  }
  public getJSON<T>(key: string) {
    return JSON.parse(localStorage.getItem(key) as string) as T;
  }
}
