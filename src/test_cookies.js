const {
  RequestCookies,
} = require('next/dist/server/web/spec-extension/cookies');

const headers = new Headers();
headers.set('cookie', 'access_token=foo; refresh_token=bar');
const cookies = new RequestCookies(headers);
