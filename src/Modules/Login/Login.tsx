import React, { useState } from "react";
import { useFormik } from "formik";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

import { ILogin } from "../../Types/LoginTypes";
import { TEXT_LABELS } from "../../Utilities/TextLabels";

interface LoginProps {
  onLogin: (data: ILogin) => Promise<void>;
}
const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (data) => {
      let errors: ILogin = {} as ILogin;

      if (!data.username) {
        errors.username = TEXT_LABELS.loginModule.required.userName;
      }

      if (!data.password) {
        errors.password = TEXT_LABELS.loginModule.required.password;
      }
      return errors;
    },
    onSubmit: (data: ILogin) => {
      onLogin(data);
    },
  });

  const isFormFieldValid = (name: keyof ILogin): boolean =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name: keyof ILogin): JSX.Element | null => {
    return isFormFieldValid(name) ? (
      <small className="p-error flex align-items-center">
        {formik.errors[name]}
      </small>
    ) : null;
  };

  return (
    <div className="flex align-items-center justify-content-center fadein animation-duration-500">
      <div className="p-4 shadow-2 border-round w-30rem bg-black-alpha-40">
        <form onSubmit={formik.handleSubmit} className="p-fluid">
          <h5 className="text-center m-0 fadein animation-duration-500">
            <img src="/images/logo.svg" alt="come-on" />
          </h5>
          <Divider />
          <div className="field py-3">
            <span className="p-float-label p-input-icon-right">
              <i className="pi pi-user" />
              <InputText
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                className={classNames({
                  "p-invalid": isFormFieldValid("username"),
                })}
              />
              <label
                htmlFor="username"
                className={classNames({
                  "p-error": isFormFieldValid("username"),
                })}
              >
                {TEXT_LABELS.loginModule.userName}
              </label>
            </span>
            {getFormErrorMessage("username")}
          </div>
          <div className="field pb-3">
            <span className="p-float-label p-input-icon-right">
              <i
                className={classNames("pi", {
                  "pi-eye": !showPassword,
                  "pi-eye-slash": showPassword,
                })}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              />
              <InputText
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                className={classNames({
                  "p-invalid": isFormFieldValid("password"),
                })}
              />
              <label
                htmlFor="password"
                className={classNames({
                  "p-error": isFormFieldValid("password"),
                })}
              >
                {TEXT_LABELS.loginModule.password}
              </label>
            </span>
            {getFormErrorMessage("password")}
          </div>
          <Button
            type="submit"
            label={TEXT_LABELS.loginModule.login}
            className="mt-2 fadein animation-duration-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
