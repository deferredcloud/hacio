import type { Component } from "mithril";
import m from "mithril";
import Screen from "./components/Screen";

import "./App.css";
import Button from "./components/Buttons/Button";

export function App(): Component {
	return {
		view: () => {
			return m(
				Screen,
				m(
					"div",
					{
						className:
							"flex flex-col gap-y-12 justify-center items-center text-3xl font-bold",
					},
					[
						m("div", "Dashboard/Home"),
						m(Button, {
							label: "Click me",
							icon: "Calendar",
							onClick: () => {},
						}),
					],
				),
			);
		},
	};
}
