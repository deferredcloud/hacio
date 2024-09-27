import type Mithril from "mithril";
import m from "mithril";
import type { FunctionComponent } from "../types";

type Attr = {
	children: Mithril.Children;
	className?: string;
};

export const FlexBox: FunctionComponent<Attr> = {
	view: ({ attrs }) =>
		m("div", { className: `flex ${attrs.className}` }, attrs.children),
};

export default FlexBox;
