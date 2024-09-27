import Icon from "../../icons/Icon";
import { showNotificationsModal } from "../../state/global";
import type { FunctionComponent } from "../../types";
import m from "mithril";

const imgUrl = new URL("../../public/pp.jpeg", import.meta.url).href;

export const InfoBox: FunctionComponent = {
	view: () =>
		m(
			"div",
			{
				className: "flex justify-center items-center h-[64px] bg-[#FFFFFF]", // Ensure full width of the remaining space
			},
			[
				m(
					"button",
					{
						className: "cursor-pointer",
						onclick: () => {
							showNotificationsModal.value = true;
						},
					},
					m(Icon, { icon: "Notification", className: "mx-8" }),
				),
				m(Icon, { icon: "Help", className: "mr-8" }),
				m("div", { className: "flex flex-col" }, [
					m(
						"span",
						{ className: "jetbrains-mono-bold font-bold" },
						"Ethan Morgan",
					),
					m(
						"span",
						{ className: "jetbrains-mono-bold text-[#6A6A6A]" },
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
