import m from "mithril";
import { App } from "./src/App";
import Analytics from "./src/views/Analytics";
import Calendar from "./src/views/Calendar";
import Mail from "./src/views/Mail";
import Settings from "./src/views/Settings";

m.route.prefix = "/";
m.route(document.body, "/", {
	"/": App,
	"/analytics": Analytics,
	"/calendar": Calendar,
	"/mail": Mail,
	"/settings": Settings,
});
