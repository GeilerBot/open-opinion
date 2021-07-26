import { HOME, NEW_POST } from "./paths";
import LazyLoader from "@loadable/component";

export default [
	{
		path: HOME,
		component: LazyLoader(() => import("pages/HomePage")),
		exact: true,
	},
	{
		path: NEW_POST,
		component: LazyLoader(() => import("pages/NewPost")),
	},
];
