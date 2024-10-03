import classNames from "classnames";
import m from "mithril";
import Icon from "../../icons/Icon";
import type { FunctionComponent, IconTypes } from "../../types";

type Attrs = {
	isSelected: boolean;
	isShrunk: boolean;
	name: IconTypes;
	onClick: () => void;
	onExpandSettings: () => void;
	expandSettings: boolean;
};

export const SideNavButton: FunctionComponent<Attrs> = {
	view: ({ attrs }) => {
		const { isSelected, isShrunk, onClick, name, expandSettings } = attrs;
		return m(
			m.route.Link,
			{
				href: name === "Dashboard" ? "" : name.toLocaleLowerCase(),
				onclick: onClick,
				className: classNames("flex w-full", {
					"dark:text-black text-white dark:bg-white bg-black rounded-md text-white": isSelected,
				}),
			},
			[
				m(
					"div",
					{
						className: "flex flex-row items-center m-4 space-x-4",
					},
					[
						m(Icon, { icon: name }),
						isShrunk ? null : m("div", name),
						m(
							"div",
							{
								className: classNames("flex transition-all", {
									hidden: name !== "Settings" || isShrunk,
									"rotate-180": expandSettings,
								}),
							},
							m(Icon, { icon: "ChevronDown" }),
						),
					],
				),
			],
		);
	},
};

export default SideNavButton;
