import m from "mithril";
import SideNav from "./SideNav";
import TopBar from "./TopBar";
import type { FunctionComponent } from "../types";
import Modals from "./Modals/Modals";

const Screen: FunctionComponent = {
  view: ({ children }) =>
    m("div", [
      m("div", { className: "w-screen flex h-svh max-h-svh" }, [
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
