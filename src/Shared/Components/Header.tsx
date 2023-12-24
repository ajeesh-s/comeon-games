import React, { useContext } from "react";
import { Avatar } from "primereact/avatar";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

import { PATH_NAMES } from "../../Framework/Routes/AppRoutes";
import { AppContext } from "../../Framework/Context/Context";
import { logoutSuccess } from "../../Framework/Context/Actions";
import { logout } from "../../Services/LoginService";
import { IUser } from "../../Types/LoginTypes";

const Header: React.FC = () => {

  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await logout(state.user as IUser);
      if (response.status === "success") {
        dispatch(logoutSuccess());
        navigate(PATH_NAMES.login);
      }
    } catch (error: any) {
      console.error("Error:", error);
    }
  };

  return (
    <header className="p-4">
      <div className="flex justify-content-between flex-wrap">
        <Image
          src="/images/logo.svg"
          alt="Image"
          className="w-20rem fadein animation-duration-1000 align-items-center"
        />

        <div className="flex flex-row pr-4">
          <div className="flex flex-row pr-4">
            <div className="flex flex-column align-items-end p-2 ">
              <div className="font-semibold text-white text-base text-right fadein animation-duration-1000">
                {state.user?.name}
              </div>
              <div className="text-white text-xs text-right fadein animation-duration-1000">
                {state.user?.event}
              </div>
            </div>
            <Avatar
              image={state.user?.avatar}
              shape="circle"
              size="large"
              className="p-mr-2 fadein animation-duration-1000"
            />
          </div>
          <Button
            icon="pi pi-power-off"
            onClick={handleLogout}
            className="p-button-rounded cursor-pointer fadein animation-duration-1000"
            tooltip="Logout"
            tooltipOptions={{
              position: "bottom",
              mouseTrack: true,
              mouseTrackTop: 15,
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
