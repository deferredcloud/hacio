import m from "mithril";
import type { FunctionComponent } from "../../types";
import { showNotificationsModal } from "../../state/global";
import classNames from "classnames";

type Attrs = {
	title: string;
	body: string;
	showClose?: boolean;
	action: () => void;
};

const NotificationsModal: FunctionComponent<Attrs> = {
	view: ({ attrs }) =>
		m(
			"div",
			{
				className: classNames(
					"grid grid-rows-2 px-12 py-6 space-y-12 z-50 rounded-xl bg-white",
					{
						hidden: !showNotificationsModal.value,
					},
				),
			},
			[
				m("div", { className: "flex flex-col space-y-4" }, [
					m(
						"span",
						{
							className: "text-2xl",
						},
						attrs.title ?? "Notifications",
					),
					m(
						"span",
						{ className: "text-xl" },
						attrs.title ?? "There are no notifications for today.",
					),
				]),

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
									showNotificationsModal.value = !showNotificationsModal.value;
								},
								className:
									"bg-[#0066FF] shadow-md text-white rounded-md w-[244px] h-[44px]",
							},
							"Close",
						),
					],
				),
			],
		),
};

export default NotificationsModal;
