import { type Signal, signal } from "@preact/signals-core";
import classNames from "classnames";
import m from "mithril";
import Icon from "../icons/Icon";
import { expandSettings, shrink } from "../state/global";
import { type FunctionComponent, navNames } from "../types";
import { NO_OP, capitalize } from "../utils";
import SideNavButton from "./Buttons/SideNavButton";

const NavContainer: FunctionComponent<{ shrink: boolean }> = {
  view: ({ children, attrs }) => {
    const { shrink } = attrs;

    return m(
      "div",
      {
        className: classNames(
          "dark:bg-[#0A0A0A] bg-[#FFFFFF] h-full border-r-[#EFEFEF] border-r-2 transition-all ease-in-out",
          {
            "md:w-[320px] lg:w-[365px] translate-x-0": !shrink,
            "w-[96px]": shrink,
          },
        ),
      },
      children,
    );
  },
};

const ExpandButton: FunctionComponent<{
  shrink: boolean;
  onShrinkNav: () => void;
}> = {
  view: ({ attrs }) =>
    m(
      "button",
      {
        onclick: attrs.onShrinkNav,
        className: classNames(
          "flex px-[16px] mb-12 justify-center transition-all",
          {
            "rotate-180": attrs.shrink,
          },
        ),
      },
      m(Icon, { icon: "ExpandLeft" }),
    ),
};

const SideNav: FunctionComponent = () => {
  const currentPath = window.location.href.split("/")[3];
  const navSelected: Signal<string> = signal(
    currentPath.length === 0 ? "dashboard" : currentPath,
  );
  const onShrinkNav = () => {
    shrink.value = !shrink.value;
  };

  return {
    view: () =>
      m(NavContainer, { shrink: shrink.value }, [
        m(
          "div",
          {
            className: "jetbrains-mono-bold px-[16px] justify-center",
          },
          [
            m(
              "div",
              {
                className:
                  "flex text-center mt-6 px-[16px] mb-12 justify-center",
              },
              "LOGO",
            ),
            m(ExpandButton, {
              shrink: shrink.value,
              onShrinkNav,
            }),
            m("div", { className: "flex flex-col" }, [
              navNames.map((name) =>
                m(SideNavButton, {
                  isSelected: capitalize(navSelected.value) === name,
                  isShrunk: shrink.value,
                  name: name,
                  onClick: () => {
                    navSelected.value = name;
                    if (name === "Settings") {
                      expandSettings.value = !expandSettings.value;
                    }
                    m.route.set(`/${name}`);
                  },
                  expandSettings: expandSettings.value,
                  onExpandSettings: NO_OP,
                }),
              ),
            ]),
            m(
              "div",
              {
                className: classNames(
                  "flex flex-col gap-y-4 font-normal pl-14 pt-4 h-[300px] w-full",
                  {
                    hidden: !expandSettings.value || shrink.value,
                    "translate-y-0": expandSettings.value,
                  },
                ),
              },
              [m("span", "Profile"), m("span", "Settings")],
            ),
          ],
        ),
      ]),
  };
};

export default SideNav;
