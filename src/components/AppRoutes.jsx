import React from "react";
import { Route, Routes } from "react-router-dom";
import { router } from "../routes";

const AppRoutes = () => {
  return (
    <Routes>
      {router.map((route) => {
        const { Component, path, key, nested } = route;
        if (nested) {
          const Comp = nested.Component;
          const p = nested.path;
          const k = nested.key;
          return (
            <Route key={key} path={path} element={<Component />}>
              <Route path={p} element={<Comp />} key={k} />
            </Route>
          );
        } else {
          return <Route key={key} path={path} element={<Component />} />;
        }
      })}
    </Routes>
  );
};

export default AppRoutes;
