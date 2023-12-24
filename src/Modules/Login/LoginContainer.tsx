import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {isAxiosError} from "axios";
import { AppContext } from "../../Framework/Context/Context";
import { loginSuccess } from "../../Framework/Context/Actions";

import { Toast } from "primereact/toast";
import Login from "./Login";

import { login } from "../../Services/LoginService";
import { ILogin, LoginResponse } from "../../Types/LoginTypes";

import { PATH_NAMES } from "../../Framework/Routes/AppRoutes";

const LoginContainer: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

  const loginAction = async (data: ILogin) => {
    try {
      const response: LoginResponse = await login(data);
      if (response.status === "success") {
        dispatch(loginSuccess({ ...response.player, username: data.username }));
        navigate(PATH_NAMES.games);
      }
    } catch (error: any) {
      console.error("Error:", error);
      if (isAxiosError(error)) {
        if (error.response?.status === 400) {
          toast.current &&
            toast.current.show({
              severity: "error",
              summary: "Error",
              detail: error.response?.data.error,
            });
        }
      }
    }
  };

  return (
    <>
      <Toast ref={toast} appendTo={null} position="bottom-right" />
      <Login onLogin={loginAction} />
    </>
  );
};

export default LoginContainer;
