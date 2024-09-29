import m from "mithril";
import SideNav from "./SideNav";
import TopBar from "./TopBar";
import type { FunctionComponent } from "../types";
import Modals from "./Modals/Modals";
import SearchHelper from "./SearchHelper/SearchHelper";
import { showSearchHelper } from "../state/global";

// Event listeners
document.addEventListener("keypress", (event) => {
  const isCmdOrCtrlPressed = event.metaKey || event.ctrlKey;
  const isKPressed = event.key === "k" || event.key === "K";

  if (isCmdOrCtrlPressed && isKPressed) {
    showSearchHelper.value = !showSearchHelper.value;
    event.preventDefault();
  }
  if (event.key === "Escape") {
    showSearchHelper.value = false;
  }
});

const Screen: FunctionComponent = {
  view: ({ children }) =>
    m("div", [
      m("div", { className: "w-screen flex h-svh max-h-svh" }, [
        m(SearchHelper),
        m(Modals),
        m(SideNav),
        m("div", { className: "w-full flex flex-col" }, [
          m(TopBar),
          m("div", { className: "flex-1 grid" }, children),
        ]),
      ]),
    ]),
};

export default Screen;
