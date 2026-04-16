import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies.js";
const reqCookies = new ReadonlyRequestCookies(new Headers({ cookie: "access_token=123; refresh_token=456" }));
console.log("toString:", reqCookies.toString());
