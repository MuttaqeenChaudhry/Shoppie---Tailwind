import React, { useRef, useState } from "react";
import S_Logo from "../assets/Images/s-w.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBars,
  faCartArrowDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import DeptmntsList from "./DeptmntsList";
import NavFlyOuts from "./NavFlyOuts";

export default function NavBar(props) {
  const NFOref = useRef(null);
  const [items, setItems] = useState(0);

  const Flags = [
    {
      id: 0,
      name: "EN",
      url: "https://www.worldometers.info/img/flags/bc-flag.gif",
    },
    {
      id: 1,
      name: "Brazil",
      url: "https://www.worldometers.info/img/flags/br-flag.gif",
    },
    {
      id: 2,
      name: "Brunei",
      url: "https://www.worldometers.info/img/flags/bx-flag.gif",
    },
  ];
  const handleFlyOuts = (num) => {
    setTimeout(() => {
      props.BodyShadow(1);
      const SignInFo = NFOref.current.querySelector("#NavFlyOut3");
      SignInFo.style.display = "none";
      const NavFlyOut = NFOref.current.querySelector(`#NavFlyOut${num}`);
      NavFlyOut.style.display = "block";
    }, 220);
  };
  const removeFlyOuts = (num) => {
    setTimeout(() => {
      props.BodyShadow(0);
      const NavFlyOut = NFOref.current.querySelector(`#NavFlyOut${num}`);
      NavFlyOut.style.display = "none";
    }, 220);
  };

  return (
    <>
      <header>
        <div className="h-15 w-full">
          <div className="flex flex-row justify-between w-full h-full items-center bg-violet-700">
            <div className="flex flex-row items-center w-fit ml-3">
              <div className="pr-4">
                <h1 className="font-serif text-3xl text-white">Shoppie</h1>
              </div>
              <div className="h-5 w-2 border-l-violet-950 border-r-0 border-x-2"></div>
              <div className="flex items-center pl-3">
                <img className="w-16" src={S_Logo} alt="Logo" />
              </div>
            </div>
            <div className="w-7/12 h-10 overflow-hidden  ml-5 rounded-lg hover:shadow-lg ">
              <form action="" className="flex h-full">
                <div className="h-full overflow-hidden rounded-l-lg">
                  <select
                    className="h-full w-11 outline-none bg-slate-200 text-xs text-gray-600 font-bold"
                    placeholder="as"
                    name=""
                    id=""
                  >
                    <DeptmntsList />
                  </select>
                </div>
                <div className="w-full h-full">
                  <input
                    className="w-full h-full outline-none pl-2"
                    type="text"
                    name=""
                    id=""
                    placeholder="Seach Shoppie"
                  />
                </div>
                <div>
                  <button
                    className="w-11 flex h-full items-center justify-center bg-amber-100 hover:bg-amber-300 "
                    type="submit"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </form>
            </div>

            <div className="flex w-fit">
              <a
                className="flex items-center ml-1 bg-transparent p-1 pr-2 border-[1px] border-transparent hover:border-white  text-white cursor-pointer"
                onMouseOver={() => handleFlyOuts(1)}
                onMouseOut={() => removeFlyOuts(1)}
              >
                <span className="flex flex-col flex-nowrap">
                  <span className="pr-2 text-xs"></span>
                  <span className="text-sm font-bold">EN</span>
                </span>
              </a>

              <a
                className="flex items-center ml-3 bg-transparent p-1 pr-2 border-[1px] border-transparent hover:border-white  text-white cursor-pointer"
                onMouseOver={() => handleFlyOuts(2)}
                onMouseOut={() => removeFlyOuts(2)}
              >
                <span className="flex flex-col flex-nowrap">
                  <span className="pr-2 text-xs">Hello, sign in</span>
                  <span className="text-sm font-bold">
                    Accounts & Lists{" "}
                    <span>
                      <FontAwesomeIcon icon={faArrowDown} />
                    </span>
                  </span>
                </span>
              </a>

              <a className="flex items-center ml-3 bg-transparent p-1 pr-2 border-[1px] border-transparent hover:border-white  text-white cursor-pointer">
                <span className="flex flex-col flex-nowrap">
                  <span className="pr-2 text-xs">Returns</span>
                  <span className="text-sm font-bold">& Orders</span>
                </span>
              </a>

              <a className="flex items-center mr-3 bg-transparent p-1 pr-2 border-[1px] border-transparent hover:border-white  text-white cursor-pointer">
                <span className="flex flex-col flex-nowrap">
                  <span className="pr-2 font-bold text-sm text-orange-300">
                    &nbsp; {items}
                  </span>
                  <span className="text-sm text-white font-bold">
                    <span>
                      <FontAwesomeIcon icon={faCartArrowDown} size="xl" />
                    </span>{" "}
                    Cart
                  </span>
                </span>
              </a>
            </div>
          </div>
          <NavFlyOuts ref={NFOref} BodyShadow={props.BodyShadow} />
          <div className="h-10 w-full bg-violet-500">
            <div className="flex justify-between h-full">
              <div className="flex text-white">
                <a
                  href="javascript:void(0)"
                  onClick={props.HandleNavMenu}
                  className="flex items-center h-full ml-2 border border-transparent pl-1 pr-2 hover:border-white"
                >
                  <span className="">
                    <FontAwesomeIcon icon={faBars} /> All
                  </span>
                </a>
                <a
                  className="h-full border border-transparent pl-1 pr-2 hover:border-white "
                  href=""
                >
                  <span className="flex items-center w-full h-full hover:translate-y-0.5">
                    Today's Deals
                  </span>
                </a>
                <a
                  className="h-full border border-transparent pl-1 pr-2 hover:border-white "
                  href=""
                >
                  <span className="flex items-center w-full h-full hover:translate-y-0.5">
                    Registry
                  </span>
                </a>
                <a
                  className="h-full border border-transparent pl-1 pr-2 hover:border-white "
                  href=""
                >
                  <span className="flex items-center w-full h-full hover:translate-y-0.5">
                    Customer Service
                  </span>
                </a>
                <a
                  className="h-full border border-transparent pl-1 pr-2 hover:border-white "
                  href=""
                >
                  <span className="flex items-center w-full h-full hover:translate-y-0.5">
                    Gift Cards
                  </span>
                </a>
                <a
                  className="h-full border border-transparent pl-1 pr-2 hover:border-white "
                  href=""
                >
                  <span className="flex items-center w-full h-full hover:translate-y-0.5">
                    Sell
                  </span>
                </a>
              </div>
              <div className="flex items-center text-white">
                <a
                  className="flex items-center h-fit mr-2 p-1 border border-transparent pl-1 pr-2 hover:border-white "
                  href=""
                >
                  Shop Cyber Monday Deals
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
