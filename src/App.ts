import type { Component } from "mithril";
import m from "mithril";
import Screen from "./components/Screen";

import "./App.css";

export function App(): Component {
	return {
		view: () => {
			return m(
				Screen,
				m(
					"div",
					{
						className: "flex justify-center items-center text-3xl font-bold",
					},
					"Dashboard/Home",
				),
			);
		},
	};
}
