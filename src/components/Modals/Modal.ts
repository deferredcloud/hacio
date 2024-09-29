import classNames from "classnames";
import m from "mithril";
import Icon from "../../icons/Icon";
import { basicModal } from "../../state/global";
import type { FunctionComponent, ModalState } from "../../types";
import { getIconColour, hideModal } from "../../utils/modal";

const Modal: FunctionComponent<ModalState> = () => {
  return {
    view: () =>
      m(
        "div",
        {
          className: classNames(
            "grid grid-rows-2 px-12 py-6 z-50 rounded-xl bg-white",
          ),
        },
        [
          m("div", [
            m(
              "div",
              {
                className: "flex flex-row items-center gap-x-8",
              },
              [
                m(Icon, {
                  icon: basicModal.value.icon,
                  className: `${getIconColour(basicModal.value.type)} text-6xl`,
                }),
                m(
                  "span",
                  { className: "text-2xl font-bold" },
                  basicModal.value.title,
                ),
              ],
            ),
          ]),
          m("div", { className: "flex-col" }, [
            m(
              "span",
              { className: "font-normal text-xl" },
              basicModal.value.content,
            ),
            m(
              "div",
              {
                className: "flex justify-bottom justify-center",
              },
              [
                m(
                  "button",
                  {
                    onclick: () => {
                      hideModal();
                    },
                    className:
                      "bg-[#0066FF] cursor-pointer mt-8 shadow-md text-white rounded-md w-[244px] h-[44px]",
                  },
                  "Close",
                ),
              ],
            ),
          ]),
        ],
      ),
  };
};

export default Modal;
