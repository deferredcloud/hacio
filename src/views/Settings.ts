import m from "mithril";
import type { FunctionComponent } from "../types";
import Screen from "../components/Screen";

const Settings: FunctionComponent = {
	view: () => {
		return m(
			Screen,
			m(
				"div",
				{ className: "flex justify-center items-center text-3xl font-bold" },
				"Settings Page",
			),
		);
	},
};

export default Settings;
