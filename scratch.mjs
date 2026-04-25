import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies/index.js";
const cookies = new RequestCookies(new Headers({ cookie: "access_token=foo; refresh_token=bar" }));

