import m, { type Children } from "mithril";
import type { FunctionComponent } from "../types";
import SearchInput from "./inputs/SearchInput";
import InfoBox from "./User/InfoBox";

export const TopBar: FunctionComponent = {
	view: () =>
		m(
			"div",
			{
				className:
					"flex justify-between items-center border-b-[#EFEFEF] border-b-2", // Ensure full width of the remaining space
			},
			[m(SearchInput), m(InfoBox)],
		),
};

export default TopBar;
