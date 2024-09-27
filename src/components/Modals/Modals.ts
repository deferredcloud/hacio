import m, { type Children } from "mithril";

import classNames from "classnames";
import { showNotificationsModal } from "../../state/global";
import type { FunctionComponent } from "../../types";
import NotificationsModal from "./NotificationsModal";
import ShadowCover from "./ShadowCover";

const AllModals: Children = [m(NotificationsModal)];

const Modals: FunctionComponent = {
	view: () =>
		m(
			"div",
			{
				className: classNames("transition-all ease-in-out", {
					"opacity-100": showNotificationsModal.value,
					"opacity-0": !showNotificationsModal.value,
				}),
			},
			[
				m(ShadowCover, {
					className: classNames("transition-opacity ease-in-out", {
						"opacity-50": showNotificationsModal.value,
						"opacity-0": !showNotificationsModal.value,
					}),
				}),
				m(
					"div",
					{
						className: classNames("", {
							"flex jetbrains-mono-bold fixed inset-0 overflow-y-auto justify-center items-center z-50 transition-opacity ease-in-out":
								showNotificationsModal.value,
							"opacity-100": showNotificationsModal.value,
							"opacity-0": !showNotificationsModal.value,
						}),
					},
					m(NotificationsModal),
				),
			],
		),
};

export default Modals;
