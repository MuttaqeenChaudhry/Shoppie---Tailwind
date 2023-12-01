import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowsLeftRight,
  faClose,
  faGlobe,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

export default function NavMenu(props) {
  useEffect(()=>{
    console.log("NavMenu")
  },[])
  return (
    <>
      <div
        style={{ display: props.NvMnDisp, zIndex: "4" }}
        className="absolute top-0 w-full h-fit overflow-hidden bg-transparent"
      >
        <div
          id="HbrgerClose"
          className="fixed left-96 top-4 cursor-pointer animate-fadeIn"
          onClick={props.HandleNavMenu}
        >
          <FontAwesomeIcon icon={faClose} size={"2xl"} color="white" />
        </div>
        <div className="flex border border-red-700">
          <div className=" w-24 h-screen animate-ltr bg-white">
            <div
              style={{ height: "6.5%" }}
              className="h-1/6 w-full bg-violet-950"
            >
              <a href="" className="">
                <div className="text-white flex h-full items-center pl-7">
                  <div>
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                  </div>
                  <div className="pl-2 text-lg">
                    <b>Hello, Sign In </b>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative border border-yellow-400 flex w-full h-full">
              <div
                style={{ height: "93.5%" }}
                className="absolute overflow-y-scroll overflow-x-scroll w-full"
              >
                <ul>
                  <li className="pl-8 pt-4 text-lg">
                    <b>Digital Content and Devices</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 pl-6 hover:bg-gray-200 hover:text-black">
                      <a href="" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Shoppie Music</div>
                        <div className="pr-3 hover:text-black">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-gray-400"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2">
                        <div className="pl-0">Mindle E-readers & Books</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-gray-400 hover:text-black"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Shoppie Appstore</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-gray-400 hover:text-black"
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <li className="pl-8 pt-4 text-lg">
                    <b>Shop By Department</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Electronics</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-gray-400 hover:text-black"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2">
                        <div className="pl-0">Computers</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-gray-400 hover:text-black"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Smart Home</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-gray-400 hover:text-black"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 pb-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Arts & Crafts</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-gray-400 hover:text-black"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 pb-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-0">See All</div>
                        <div className="pl-2">
                          <FontAwesomeIcon
                            icon={faArrowDown}
                            className="text-gray-400 hover:text-black"
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <li className="pl-8 pt-4 text-lg">
                    <b>Programs & Features</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Gift Cards</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-gray-400 hover:text-black"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2">
                        <div className="pl-0">Shop By Interest</div>
                        <div className="pr-3"></div>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Shoppie Live</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-gray-400 hover:text-black"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 pb-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">International Shoppie</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-gray-400 hover:text-black"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 pb-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-0">See All</div>
                        <div className="pl-2">
                          <FontAwesomeIcon
                            icon={faArrowDown}
                            className="text-gray-400 hover:text-black"
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <li className="pl-8 pt-4 text-lg">
                    <b>Help & Settings</b>
                  </li>
                  <ul className="text-sm pb-10">
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Your Account</div>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2">
                        <div className="pl-0">
                          <FontAwesomeIcon icon={faGlobe} />
                        </div>
                        <div className="pl-2">English</div>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Customer Service</div>
                      </a>
                    </li>
                    <li className="pt-1 pb-1 pl-6 hover:bg-gray-200">
                      <a href="" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Sign In</div>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                style={{ height: "93.5%" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="" className="flex p-2 ">
                      <div className="pl-6">
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          className="text-gray-400 hover:text-black"
                        />
                      </div>
                      <div className="pl-2">
                        <b>Main Menu</b>
                      </div>
                    </a>
                  </li>
                </ul>
                <hr />
                <ul>
                  <li className="pl-8 pt-4 text-lg">
                    <b>Stream Music</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Shoppie Music Unlimited</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Free Streaming Music</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Podcasts</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Open Web Player</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Download the app</div>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
