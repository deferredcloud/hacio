import m from "mithril";
import type { FunctionComponent, IconTypes } from "../../types";
import Icon from "../../icons/Icon";

type Attrs = {
	label: string;
	onClick: () => void;
	isDisabled?: boolean;
	className?: string;
	icon?: IconTypes;
	iconPosition?: "left" | "right";
};

const Button: FunctionComponent<Attrs> = {
	view: ({ attrs }) => {
		const {
			label,
			onClick,
			isDisabled,
			className,
			icon,
			iconPosition = "left",
		} = attrs;
		return m(
			"button",
			{
				className: `flex items-center dark:text-black text-white dark:bg-white bg-black rounded-lg justify-center px-4 py-2 text-xl font-normal ${className}`,
				disabled: isDisabled,
				onclick: onClick,
			},
			[
				icon &&
					iconPosition === "left" &&
					m("span", { className: "mr-2" }, m(Icon, { icon })),
				label,
				icon &&
					iconPosition === "right" &&
					m("span", { className: "ml-2" }, m(Icon, { icon })),
			],
		);
	},
};

export default Button;
