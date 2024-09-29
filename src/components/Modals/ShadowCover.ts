import m from "mithril";
import type { FunctionComponent } from "../../types";

type Attrs = {
  className: string;
};

const ShadowCover: FunctionComponent<Attrs> = {
  view: ({ attrs }) =>
    m("div", {
      className: `backdrop overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none justify-center items-center flex bg-black opacity-30 ${attrs.className}`,
    }),
};

export default ShadowCover;
