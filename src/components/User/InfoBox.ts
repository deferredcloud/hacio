import m from "mithril";
import Icon from "../../icons/Icon";
import type { FunctionComponent } from "../../types";
import { showModal } from "../../utils/modal";

const imgUrl = new URL("../../public/pp.jpeg", import.meta.url).href;

export const InfoBox: FunctionComponent = {
  view: () =>
    m(
      "div",
      {
        className: "flex justify-center items-center h-[64px] dark:text-white text-black dark:bg-[#0A0A0A] bg-white", // Ensure full width of the remaining space
      },
      [
        m(
          "button",
          {
            className: "cursor-pointer",
            onclick: () => {
              showModal({
                _tag: "NotificationModal",
                title: "Notifications",
                content: "There are no notifications for today.",
                icon: "Notification",
                actions: [],
                type: "error",
              });
            },
          },
          m(Icon, { icon: "Notification", className: "mx-8" }),
        ),
        m(
          "button",
          {
            className: "cursor-pointer",
            onclick: () => {
              showModal({
                _tag: "HelpModal",
                title: "Help",
                content: "WIP no help instructions just yet!",
                icon: "Help",
                actions: [],
                type: "error",
              });
            },
          },
          m(Icon, { icon: "Help", className: "mr-12" }),
        ),
        m("div", { className: "flex flex-col" }, [
          m("span", { className: "jetbrains-mono-bold" }, "Ethan Morgan"),
          m(
            "span",
            { className: "jetbrains-mono-bold dark:text-white text-black dark:bg-[#0A0A0A]" },
            "ethan@acme.org",
          ),
        ]),
        m("img", {
          src: imgUrl,
          alt: "profile picture",
          className:
            "mx-6 w-[48px] h-[48px] rounded-md border border-[#EFEFEF]",
        }),
      ],
    ),
};

export default InfoBox;
