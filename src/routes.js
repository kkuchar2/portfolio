import {Button} from "kuchkr-react-component-library";
import React from "react";
import {lazyImport} from "util/util.js";
import {withSuspense} from "util/withSuspense.js";

const MainPage = lazyImport(() => import (/* webpackChunkName: "home" */ "pages/MainPage/MainPage.jsx"));

export const routes = [
    {
        path: "/",
        component: withSuspense(MainPage),
        icon: '',
        title: "",
        enabled: true,
        navbar: false,
        alignment: 'left',
        exact: true
    }
];

const getCurrentRoute = () => routes.filter(v => v.path === window.location.pathname)[0];

export const isOnAuthenticatedPage = () => {
    const route = getCurrentRoute();

    if (route) {
        return route.authRequired;
    }
    return false;
};

export const isOnAccountConfirmPage = () => (/^\/verify-email\/(.*)$/).test(window.location.pathname);