import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../page/Layout";
import Home from "../page/Home";
import NotFound from "../page/NotFound";

const RoutesConfig = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route
                path="*"
                element={
                    <Layout>
                        <NotFound />
                    </Layout>
                }
            />
        </Routes>
    </BrowserRouter>
);

export default RoutesConfig;
