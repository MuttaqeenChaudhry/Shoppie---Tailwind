import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faClose,
  faGlobe,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

export default function NavMenu(props) {
  const handleMenu = (menuId) => {
    const MainMenu = document.getElementById('HamBurgMenu');
    const TheMenu = document.getElementById(`Menu${menuId}`);
    TheMenu.style.display = 'block';
    MainMenu.classList.add('animate-rtl');
    setTimeout(()=>{
      MainMenu.classList.add('-left-96');
    },295)
    TheMenu.classList.add('animate-rtl');
    setTimeout(() => {
      TheMenu.classList.remove('left-96');
    }, 295);  
  }
  
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
        <div className="flex">
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
            <div className="relative flex w-full h-full">
              <div
                id='HamBurgMenu'
                style={{ height: "93.5%" }}
                className="absolute overflow-y-scroll overflow-x-scroll w-full"
              >
                <ul>
                  <li className="pl-8 pt-4 text-lg">
                    <b>Digital Content and Devices</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 pl-6 hover:bg-gray-200 hover:text-black">
                      <a href="javascript:void(0)" onClick={() => handleMenu(1)} className="flex flex-row justify-between p-2 cursor-pointer ">
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
                      <a href="javascript:void(0)" onClick={()=> handleMenu(2)} className="flex flex-row justify-between p-2 cursor-pointer">
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
                      <a href="javascript:void(0)" onClick={()=> handleMenu(3)} className="flex flex-row justify-between p-2 ">
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
                      <a href="javascript:void(0)" onClick={()=> handleMenu(4)} className="flex flex-row justify-between p-2 ">
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
                      <a href="javascript:void(0)" onClick={()=> handleMenu(5)} className="flex flex-row justify-between p-2">
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
                      <a href="javascript:void(0)" onClick={()=> handleMenu(6)} className="flex flex-row justify-between p-2 ">
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
                      <a href="javascript:void(0)" onClick={()=> handleMenu(7)} className="flex flex-row justify-between p-2 ">
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
                id="Menu1"
                style={{ display:'none', height: "93.5%" }}
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
              <div
                id="Menu2"
                style={{ display:'none', height: "93.5%" }}
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
                    <b>Mindle E-Readers</b>
                  </li>
                  <ul className="text-sm pb-1">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Kids</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Paperwhite Kids</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Paperwhite</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Oasis</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Scribe</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Accessories</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">See all Mindle E-Readers</div>
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <li className="pl-8 pt-4 text-lg">
                    <b>Mindle Store</b>
                  </li>
                  <ul className="text-sm pb-1">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Books</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Unlimited</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Prime Reading</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Vella</div>
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <li className="pl-8 pt-4 text-lg">
                    <b>Apps & Resources</b>
                  </li>
                  <ul className="text-sm pb-7">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Free Mindle Reading Apps</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle for Web</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Manage Your Content and Devices</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Trade-In</div>
                      </a>
                    </li>
                     </ul>
                </ul>
              </div>
              <div
                id="Menu3"
                style={{ height: "93.5%", display:'none' }}
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
                    <b>Shoppie Appstore</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">All Apps and Games</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Games</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Shoppie Coins</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Download Shoppie Appstore</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Shoppie Apps</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <div className="pl-6">Your Apps and Subscriptions</div>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu4"
                style={{ height: "93.5%", display:'none' }}
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
                <hr/>
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Electronics</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2">
                        <span className="pl-6">Accessories and Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Camera & Photo</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Car & Vehicle Electronics</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Cell Phones & Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Computers & Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">GPS & Navigation</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Headphones</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Home & Audio</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Office Electronics</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Portable Audio & Video</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Security & Surveillance</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Service Plans</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Television & Video</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Video Game Consoles & Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Video Projectors</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Wearable Technology</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">eBook Readers & Accessories</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu5"
                style={{ height: "93.5%", display:'none' }}
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
                <hr/>
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Computers</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2">
                        <span className="pl-6">Computer Accessories & Peripherals</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Computer Components</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Computers & Tablets</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Data Storage</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">External Components</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Laptop Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Monitors</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Networking Products</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Power Stripe & Surge Protectors</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Printers</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Scanners</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Servers</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Tablet Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Tablet Replacement Parts</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Warranties & Services</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu6"
                style={{ height: "93.5%", display:'none' }}
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
                <hr/>
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Smart Home</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2">
                        <span className="pl-6">Shoppie Smart Home</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Works with Shexa Devices</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Smart Home Lighting</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Smart Locks and Entry</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Security Cameras and Systems</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Plugs and Outlets</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">New Smart Devices</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Heating and Cooling</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Detectors and Cooling</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Home Entertainment</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Pet</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Voice Assitants and Hubs</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Kitchen</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Vacuums and Mops</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Lawn and Garden</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">WIFI and Networking</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Other Solutions</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu7"
                style={{ height: "93.5%", display:'none' }}
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
                <hr/>
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Arts & Crafts</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2">
                        <span className="pl-6">Painting, Drawing & Art Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Beading & Jewelry Making</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Crafting</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Fabric</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Fabric Decorating</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Knitting and Crochet</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Needlework</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Oraganization, Storage & Transport</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Printmaking</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Scrapbooking & Stamping</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Sewing</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Party Decorations & Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="" className="flex flex-row p-2 ">
                        <span className="pl-6">Gift Wrapping Supplies</span>
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
