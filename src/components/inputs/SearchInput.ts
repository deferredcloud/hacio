import type { Signal } from "@preact/signals";
import m, { type Component } from "mithril";

type Attrs = {
	value: Signal<string>;
};

export const SearchInput: Component<Attrs> = {
	view: ({ attrs }) =>
		m("input", {
			oninput: (e: HTMLInputElement) => {
				attrs.value.value = e.value;
			},
			className:
				"flex w-[244px] h-[44px] m-4 bg-[#F9F9FB] text-[#6A6A6A] text-[13px] jetbrains-mono-bold font-bold p-[8px] rounded-xl border border-[#EFEFEF] focus:outline-none",
			placeholder: "Search...",
		}),
};

export default SearchInput;