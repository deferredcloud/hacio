import m from "mithril";

import classNames from "classnames";
import { basicModal } from "../../state/global";
import type { FunctionComponent } from "../../types";
import Modal from "./Modal";
import ShadowCover from "./ShadowCover";

const Modals: FunctionComponent = {
  view: () =>
    m(
      "div",
      {
        className: classNames("transition-all ease-in-out", {
          hidden: !basicModal.value.isOpen,
        }),
      },
      [
        m(ShadowCover, {
          className: classNames("transition-opacity ease-in-out", {
            "opacity-50": basicModal.value.isOpen,
            "opacity-0": !basicModal.value.isOpen,
          }),
        }),
        m(
          "div",
          {
            className: classNames("", {
              "flex jetbrains-mono-bold fixed inset-0 overflow-y-auto justify-center items-center z-50 transition-opacity ease-in-out":
                basicModal.value,
              "opacity-100": basicModal.value,
              "opacity-0": !basicModal.value,
            }),
          },
          m(Modal),
        ),
      ],
    ),
};

export default Modals;
