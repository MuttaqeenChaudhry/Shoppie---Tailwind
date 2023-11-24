import React from "react";
import S_Logo from "../assets/Images/s-w.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function NavBar(props) {
  return (
    <>
      <div className="h-12  w-full m-auto overflow-hidden bg-violet-500">
        <div className="flex flex-row w-full h-full items-center">
          <div>
            <img className="w-16" src={S_Logo} alt="Logo" />
          </div>
          <div className="flex flex-row w-fit m-auto">
            <div className="pr-4">
              <h1 className="font-serif text-3xl text-white">Shoppie</h1>
            </div>
            <div className="h-1/1 w-fit border-l-violet-950 border-r-0 border-x-2" />
            <div className="flex items-center pl-4">
              <p className="font-sans text-white">My Shopping Buddy</p>
            </div>
          </div>
          <div>
            <div className="pr-4"><FontAwesomeIcon icon={faBars} onClick={props.handleMenu}/></div>
          </div>
        </div>
      </div>
    </>
  );
}
