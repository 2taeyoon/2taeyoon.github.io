import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

const Home = lazy(() => import("./home/Home"));
const Blog = lazy(() => import("./blog/Blog"));

const routes = [
  { index: true, path: "/", element: <Home /> },
  { path: "/blog", element: <Blog /> }
];

const RouteApp = () => {
  return (
    <div className="RouteApp">
      <Suspense fallback={<div>Loading...</div> /* 로딩 이미지*/}>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            );
          })}
					<Route path='*' element={ <NotFound/> }/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default RouteApp;
