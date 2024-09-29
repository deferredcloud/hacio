import classNames from "classnames";
import m from "mithril";
import type { FunctionComponent } from "../../types";
import { showSearchHelper } from "../../state/global";
import ShadowCover from "../Modals/ShadowCover";

const SearchHelper: FunctionComponent = {
  view: () =>
    m(
      "div",
      {
        className: classNames("transition-all ease-in-out", {
          hidden: !showSearchHelper.value,
        }),
      },
      [
        m(ShadowCover, {
          className: classNames("transition-opacity ease-in-out", {
            "opacity-50": showSearchHelper.value,
            "opacity-0": !showSearchHelper.value,
          }),
        }),
        m(
          "div",
          {
            className: classNames("", {
              "flex jetbrains-mono-bold fixed inset-0 overflow-y-auto justify-center items-center z-50 transition-opacity ease-in-out":
                showSearchHelper.value,
              "opacity-100": showSearchHelper.value,
              "opacity-0": !showSearchHelper.value,
            }),
          },
          m(
            "div",
            {
              className: classNames(
                "grid grid-rows-2 px-12 py-6 z-50 rounded-xl bg-white",
              ),
            },
            [
              m(
                "div",
                {
                  className: "flex flex-row items-center gap-x-8",
                },
                m(
                  "span",
                  { className: "font-normal text-xl" },
                  "Add a search helper in here to explore the website",
                ),
              ),
            ],
          ),
        ),
      ],
    ),
};

export default SearchHelper;
