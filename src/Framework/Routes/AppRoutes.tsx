import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GamesContainer from "../../Modules/Games/GamesContainer";
import LoginContainer from "../../Modules/Login/LoginContainer";
import { AppContext } from "../Context/Context";

export const PATH_NAMES = {
  login: "/login",
  games: "/games",
};
const routes = [
  {
    path: PATH_NAMES.login,
    element: <LoginContainer />,
  },
  {
    path: PATH_NAMES.games,
    element: <GamesContainer />,
  },
];

const AppRoutes: React.FC = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      {state.user ? (
        <Navigate to={PATH_NAMES.games} />
      ) : (
        <Navigate to={PATH_NAMES.login} />
      )}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default AppRoutes;
