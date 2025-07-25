/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by vite-plugin-uni-pages

interface NavigateToOptions {
  url: "/pages/index/index" |
       "/pages/about/index" |
       "/pages/ci/index" |
       "/pages/create-uni/index" |
       "/pages/feedback/index" |
       "/pages/icon/index" |
       "/pages/pinia/index" |
       "/pages/request/index" |
       "/pages/router/demo-aftereach" |
       "/pages/router/demo-guard" |
       "/pages/router/demo-object" |
       "/pages/router/demo-params" |
       "/pages/router/demo-protected" |
       "/pages/router/demo-query" |
       "/pages/router/demo-string" |
       "/pages/router/index" |
       "/subPages/styles/index";
}
interface RedirectToOptions extends NavigateToOptions {}

interface SwitchTabOptions {
  url: "/pages/index/index" | "/pages/about/index"
}

type ReLaunchOptions = NavigateToOptions | SwitchTabOptions;

declare interface Uni {
  navigateTo(options: UniNamespace.NavigateToOptions & NavigateToOptions): void;
  redirectTo(options: UniNamespace.RedirectToOptions & RedirectToOptions): void;
  switchTab(options: UniNamespace.SwitchTabOptions & SwitchTabOptions): void;
  reLaunch(options: UniNamespace.ReLaunchOptions & ReLaunchOptions): void;
}
