import { type Signal, signal } from "@preact/signals-core";
import classNames from "classnames";
import m from "mithril";
import Icon from "../icons/Icon";
import { type FunctionComponent, type IconTypes, navNames } from "../types";
import SideNavButton from "./Buttons/SideNavButton";
import { capitalize, NO_OP } from "../utils";
import { expandSettings, shrink } from "../state/global";

const NavContainer: FunctionComponent<{ shrink: boolean }> = {
	view: ({ children, attrs }) => {
		const { shrink } = attrs;

		return m(
			"div",
			{
				className: classNames(
					"bg-[#FFFFFF] h-full border-r-[#EFEFEF] border-r-2 transition-all ease-in-out",
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
						className: "jetbrains-mono-bold px-[16px] justify-center font-bold",
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
										expandSettings.value = !expandSettings.value;
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
								className: classNames("flex", {
									hidden: !expandSettings.value,
									"translate-y-0": expandSettings.value,
								}),
							},
							[
								m(
									"div",
									{
										className:
											"flex rounded-md bg-[#F9F9FB] justify-center mt-4 h-[300px] w-full border",
									},
									m("div", { className: "flex flex-col" }, []),
								),
							],
						),
					],
				),
			]),
	};
};

export default SideNav;
