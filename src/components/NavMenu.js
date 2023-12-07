import React, { forwardRef, useEffect, useState } from "react";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faClose,
  faGlobe,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavMenu = forwardRef((props, ref) => {
  const Up = <FontAwesomeIcon
    icon={faArrowUp}
    className="text-inherit"
  />;
  const Down = <FontAwesomeIcon
    icon={faArrowDown}
    className="text-inherit"
  />;
  const Up2 = <FontAwesomeIcon
  icon={faArrowUp}
  className="text-inherit"
/>;
const Down2 = <FontAwesomeIcon
  icon={faArrowDown}
  className="text-inherit"
/>;
  const[AlLs, setAlLs] = useState('All');
  const[AlLs2, setAlLs2] = useState('All');
  const[ArrowState, setArrowState] = useState(Down);
  const[ArrowState2, setArrowState2] = useState(Down2);

  const MaintoSide = (menuId) => {
    const MainMenu = document.getElementById("MainMenu");
    const SideMenu = document.getElementById(`Menu${menuId}`);
    SideMenu.style.display = "block";
    MainMenu.classList.add("animate-rtl384");
    MainMenu.addEventListener('animationend', ()=> MainMenu.classList.remove('animate-rtl384'));
    SideMenu.classList.add("animate-rtl384");
    SideMenu.addEventListener('animationend', ()=> SideMenu.classList.remove('animate-rtl384'));
    setTimeout(() => {
      MainMenu.classList.add("-left-96");
      SideMenu.classList.remove("left-96");
    }, 300);
  };

  const Back2Main = (menuId) => {
    const MainMenu = document.getElementById("MainMenu");
    const SideMenu = document.getElementById(`Menu${menuId}`);
    MainMenu.classList.add('animate-ltr2');
    MainMenu.addEventListener('animationend', () => MainMenu.classList.remove('animate-ltr2'));
    SideMenu.classList.add("animate-ltr2");
    SideMenu.addEventListener('animationend', ()=> SideMenu.classList.remove('animate-ltr2'));
    setTimeout(() => {
      MainMenu.classList.remove("-left-96");
      SideMenu.style.display = 'none';
      SideMenu.classList.add("left-96");
    }, 300);  
  };

  useEffect(()=>{ 
    const ExpandableList = document.getElementById('ExpandableList');
    const ExpandableList2 = document.getElementById('ExpandableList2');
    const ExlToggler = document.getElementById('ExlToggler');
    const ExlToggler2 = document.getElementById('ExlToggler2');
    const HamBurgContainer = document.getElementById('HamBurgContainer');
    const HbrgerClose = document.getElementById('HbrgerClose');
    const HandleList = () => {
      ExpandableList.classList.toggle('max_H_T');
      setAlLs(prev => (prev === 'All' ? 'Less' : 'All')); 
      setArrowState(prev => (prev === Down ? Up : Down));
    };
    const HandleList2 = () => {
      ExpandableList2.classList.toggle('max_H_T2');
      setAlLs2(prev => (prev === 'All' ? 'Less' : 'All')); 
      setArrowState2(prev => (prev === Down2 ? Up2 : Down2));
    };
    HbrgerClose.addEventListener('click', ()=>{
      HamBurgContainer.classList.remove('animate-ltr1');
      HamBurgContainer.classList.add('animate-rtl384');
    })
    ExlToggler.addEventListener('click', HandleList);
    ExlToggler2.addEventListener('click', HandleList2);
    return () => {
      ExlToggler.removeEventListener('click', HandleList);
      ExlToggler2.removeEventListener('click', HandleList2);
    };
  },[])

  return (
    <>
      <div
      ref={ref}
        style={{ display: props.NvMnDisp, zIndex: "4" }}
        className="fixed top-0 w-full h-fit overflow-hidden bg-transparent"
      >
        <div
          id="HbrgerClose"
          className="fixed left-96 top-4 cursor-pointer animate-fadeIn"
          onClick={props.HandleNavMenu}
        >
          <FontAwesomeIcon icon={faClose} size={"2xl"} color="white" />
        </div>
        <div className="flex">
          <div id='HamBurgContainer' className="w-24 h-screen animate-ltr1 bg-white shadow-xl">
            <div
              style={{ height: "6.5%" }}
              className="h-1/6 w-full bg-violet-950"
            >
              <a href="#" className="">
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
            <div className="relative flex w-full h-full overflow-hidden">
              <div
                id="MainMenu"
                style={{ height: "93.5%" }}
                className="absolute overflow-y-scroll overflow-x-scroll w-full"
              >
                <ul>
                  <li className="pl-8 pt-4 text-lg">
                    <b>Digital Content and Devices</b>
                  </li>
                  <ul className="text-sm">
                  <li className="pt-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200 ">
                      <a
                        href="#"
                        onClick={() => MaintoSide(2)}
                        className="flex flex-row justify-between p-2 cursor-pointer"
                      >
                        <span className="pl-0 text-black">Shoppie Music</span>
                        <span className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-inherit"
                            
                          />
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                      <a
                        href="#"
                        onClick={() => MaintoSide(2)}
                        className="flex flex-row justify-between p-2 cursor-pointer"
                      >
                        <span className="pl-0 text-black">Mindle E-readers & Books</span>
                        <span className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-inherit"
                          />
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                      <a
                        href="#"
                        onClick={() => MaintoSide(3)}
                        className="flex flex-row justify-between p-2 "
                      >
                        <span className="pl-0 text-black">Shoppie Appstore</span>
                        <span className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-inherit"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <li className="pl-8 pt-4 text-lg">
                    <b>Shop By Department</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                      <a
                        href="#"
                        onClick={() => MaintoSide(4)}
                        className="flex flex-row justify-between p-2 "
                      >
                        <div className="pl-0 text-black">Electronics</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-inherit"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                      <a
                        href="#"
                        onClick={() => MaintoSide(5)}
                        className="flex flex-row justify-between p-2"
                      >
                        <div className="pl-0 text-black">Computers</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-inherit"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                      <a
                        href="#"
                        onClick={() => MaintoSide(6)}
                        className="flex flex-row justify-between p-2 "
                      >
                        <div className="pl-0 text-black">Smart Home</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-inherit"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                      <a
                        href="#"
                        onClick={() => MaintoSide(7)}
                        className="flex flex-row justify-between p-2 "
                      >
                        <div className="pl-0 text-black">Arts & Crafts</div>
                        <div className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-inherit"
                          />
                        </div>
                      </a>
                    </li>
                    <ul id='ExpandableList' className="flex flex-col max_H_0 overflow-hidden" >
                      <hr />
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(8)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Automotive</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(9)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Baby</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(10)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Beauty and personal care</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(11)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Women's Fashion</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(12)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Men's Fashion</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(13)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Girl's Fashion</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(14)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Boy's Fashion</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(15)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Health and Household</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(16)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Home and Kitchen</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(17)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Industrial and Scientific</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(18)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Luggage</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(19)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Movies & Television</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(20)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Pet supplies</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(21)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Software</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(22)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Sports and Outdoors</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(23)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Tools & Home Improvement</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(24)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Toys and Games</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                        <a href="#" onClick={()=> MaintoSide(25)} className="flex justify-between flex-row p-2 ">
                          <span className="pl-0 text-black">Video Games</span>
                          <span className="pl-2 pr-3">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-inherit"
                            />
                          </span>
                        </a>
                      </li>
                    </ul>
                    <li id="ExlToggler" className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-0 text-black">See {AlLs}</span>
                        <span className="pl-2">
                          {ArrowState}
                        </span>
                      </a>
                    </li>                  
                  </ul>
                  <hr />
                  <li className="pl-8 pt-4 text-lg">
                    <b>Programs & Features</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                      <a href="#" onClick={()=> MaintoSide(26)} className="flex flex-row justify-between p-2 ">
                        <span className="pl-0 text-black">Gift Cards</span>
                        <span className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-inherit"
                          />
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-0">Shop By Interest</span>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                      <a href="#" onClick={()=> MaintoSide(27)} className="flex flex-row justify-between p-2 ">
                        <span className="pl-0 text-black">Shoppie Live</span>
                        <span className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-inherit"
                          />
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                      <a href="#" onClick={()=> MaintoSide(28)} className="flex flex-row justify-between p-2 ">
                        <span className="pl-0 text-black">International Shopping</span>
                        <span className="pr-3">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-inherit"
                          />
                        </span>
                      </a>
                    </li>
                    <ul id='ExpandableList2' className="flex flex-col max_H_0 overflow-hidden" >
                      <hr />
                      <li className="pt-1 pb-1 pl-6 hover:bg-gray-200">
                        <a href="#" className="flex flex-row p-2 ">
                          <div className="pl-0">Shoppie Second Chance</div>
                         
                        </a>
                      </li>
                    </ul>
                    <li id="ExlToggler2" className="pt-1 pb-1 pl-6 text-gray-400 hover:text-black hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-0 text-black">See {AlLs2}</span>
                        <span className="pl-2">
                          {ArrowState2}
                        </span>
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <li className="pl-8 pt-4 text-lg">
                    <b>Help & Settings</b>
                  </li>
                  <ul className="text-sm pb-10">
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="#" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Your Account</div>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <div className="pl-0">
                          <FontAwesomeIcon icon={faGlobe} />
                        </div>
                        <div className="pl-2">English</div>
                      </a>
                    </li>
                    <li className="pt-1 pl-6 hover:bg-gray-200">
                      <a href="#" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Customer Service</div>
                      </a>
                    </li>
                    <li className="pt-1 pb-1 pl-6 hover:bg-gray-200">
                      <a href="#" className="flex flex-row justify-between p-2 ">
                        <div className="pl-0">Sign In</div>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu1"
                style={{ display: "none", height: "93.5%", zIndex:'70'}}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" onClick={()=> Back2Main(1)} className="flex p-2">
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
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Shoppie Music Unlimited</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Free Streaming Music</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Podcasts</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Open Web Player</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Download the app</div>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu2"
                style={{ display: "none", height: "93.5%" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(2)}>
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
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Kids</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Paperwhite Kids</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Paperwhite</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Oasis</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Scribe</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Accessories</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
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
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Books</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle Unlimited</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Prime Reading</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
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
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Free Mindle Reading Apps</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Mindle for Web</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">
                          Manage Your Content and Devices
                        </div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Trade-In</div>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu3"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(3)}>
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
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">All Apps and Games</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Games</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Shoppie Coins</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Download Shoppie Appstore</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Shoppie Apps</div>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <div className="pl-6">Your Apps and Subscriptions</div>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu4"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(4)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Electronics</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Accessories and Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Camera & Photo</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Car & Vehicle Electronics</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Cell Phones & Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Computers & Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">GPS & Navigation</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Headphones</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Home & Audio</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Office Electronics</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Portable Audio & Video</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Security & Surveillance</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Service Plans</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Television & Video</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">
                          Video Game Consoles & Accessories
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Video Projectors</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Wearable Technology</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">
                          eBook Readers & Accessories
                        </span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu5"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(5)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Computers</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">
                          Computer Accessories & Peripherals
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Computer Components</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Computers & Tablets</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Data Storage</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">External Components</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Laptop Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Monitors</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Networking Products</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">
                          Power Stripe & Surge Protectors
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Printers</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Scanners</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Servers</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Tablet Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Tablet Replacement Parts</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Warranties & Services</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu6"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="javascript:void(6)" className="flex p-2 " onClick={()=> Back2Main(6)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Smart Home</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Shoppie Smart Home</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Works with Shexa Devices</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Smart Home Lighting</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Smart Locks and Entry</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">
                          Security Cameras and Systems
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Plugs and Outlets</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">New Smart Devices</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Heating and Cooling</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Detectors and Cooling</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Home Entertainment</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Pet</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Voice Assitants and Hubs</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Kitchen</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Vacuums and Mops</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Lawn and Garden</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">WIFI and Networking</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Other Solutions</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu7"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(7)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Arts & Crafts</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">
                          Painting, Drawing & Art Supplies
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Beading & Jewelry Making</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Crafting</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Fabric</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Fabric Decorating</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Knitting and Crochet</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Needlework</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">
                          Oraganization, Storage & Transport
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Printmaking</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Scrapbooking & Stamping</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Sewing</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">
                          Party Decorations & Supplies
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Gift Wrapping Supplies</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu8"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(8)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Autmotive</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">
                          Car Care
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Car Electronics & Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Exterior Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Interior Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Lights & Lightning Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Motorcycle & Powersports</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Oils & Fluids</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">
                          Paint & Paint Supplies
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Performance Parts & Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Replacement Parts</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">RV Parts & Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">
                          Tires & Wheels
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Tools & Equipment</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Autmotive Enthusiast Merchandise</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Heavy Duty & Commercial Vehicle Equipment</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu9"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(9)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Baby</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Activity & Entertainment</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Apparel & Accesssories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Baby & Toddler Toys</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Baby Care</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Baby Stationery</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Car Seats & Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">
                          Diapering
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Feeding</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Gifts</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Nursery</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">
                          Potty Training
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Pregnancy & Maternity</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Safety</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Strollers & Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Travel Gear</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu10"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(10)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Beauty And Personal Care</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">
                          Makeup
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Skin Care</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Hair Care</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Fragnance</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Foot, Hair & Nail Care</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Tools & Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Shave & Hair Removal</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">
                          Personal Care
                        </span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Oral Care</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu11"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(11)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Women's Fashion</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Clothing</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Shoes</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Jewelry</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Watches</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Handbags</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Men's Fashion</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Girl's Fashion</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Boy's Fashion</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu12"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(12)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Men's Fashion</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Clothing</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Shoes</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Watches</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Women's Fashion</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Girl's Fashion</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Boy's Fashion</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu13"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(13)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Girl's Fashion</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Clothing</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Shoes</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Jewelry</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Watches</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">School Uniforms</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Women's Fashion</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Men's Fashion</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Boy's Fashion</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu14"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(14)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Boy's Fashion</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Clothing</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Shoes</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Jewelry</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Watches</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">School Uniforms</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Women's Fashion</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Men's Fashion</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Girl's Fashion</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu15"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(15)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Health and Household</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Baby & Child Care</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Health Care</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Household Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Medical Supplies & Equipment</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Oral Care</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Personal Care</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Sexual Wellness</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Sport's Nutrition</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Stationery & Gift Wrapping Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Vision Care</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Vitamins & Dietary Supplements</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Wellness & Relaxtion</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu16"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(16)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Home And Kitchen</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Kid's Home Store</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Kitchen & Dining</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Bedding</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Bath</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Furniture</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Home Décor</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Wall Art</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Lighting and Ceiling Fans</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Seasonal Décor</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Event & Party Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Heating, Cooling & Air Quality</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Irons & Steamer</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Vacuums & Floor Care</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Storage & Organization</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Cleaning Supplies</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu17"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(17)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Industrial And Scientific</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Abrasive & Finishin Products</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Additive Manufacturing Products</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Commercial Door Products</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Cutting Tools</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Fasteners</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Filtration</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Food Service Equipment & Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Hydraulics, Pneumatics & Plumbing</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Industrial Electrical</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Industrial Hardware</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Industrial Power & Hand Tools</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Janitorial & Sanitation Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Lab & Scientific Products</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Material Handling Products</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Occupational Health & Safety Products</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Packaging & Shipping Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Power Transmission Products</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Professional Medical Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Raw Materials</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Retail Store Fixtures & Equipment</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Robotics</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Science Education</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Tapes, Adhesices & Selants</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Test, Measure & Inspect</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu18"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(18)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Luggage</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Carry-ons</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Backpacks</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Garment bags</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Travel Totes</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Luggage Sets</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Laptop Bags</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Suitcases</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Kids Luggage</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Massenger Bags</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Umberellas</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Duffles</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Travel Accessories</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu19"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(19)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Movies & Television</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Movies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">TV Shows</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Blu-ray</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">4K Ultra HD</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Best Sellers</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Today's Deals</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">New Releases</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Pre-orders</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Kids & Family</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Prime Video</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu20"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(20)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Pet Supplies</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Dogs</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Cats</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Fish & Aquatic Pets</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Birds</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Horses</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Reptiles & Amphibians</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Small Animals</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu21"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(21)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Software</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Accouting & Finance</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Antivirus & Security</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Business & Office</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Children's</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Design & Illustration</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Digital Software</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Education & Reference</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Games</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Lifestyle & Hobbies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Music</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Networking & Servers</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Operating Systems</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Photography</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Programming & Web Development</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Tax Prepration</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Utilities</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Video</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu22"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(22)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Sports And Outdoors</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Sports and Outdoors</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Outdoor Recreation</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Sports & Fitness</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu23"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(23)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Tools & Home Improvement</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Tools & Home Improvement</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Appliances</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Building Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Electrical</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Hardware</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Kitchen & Bath Fixtures</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Light Bulbs</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Lighting & Ceiling Fans</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Measuring & Layout Tools</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Painting Supplies & Wall Treatments</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Power & Hand Tools</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Rough Plumbing</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Safety & Security</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Storage & Home Organization</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Welding & Soldering</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu24"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(24)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Toys And Games</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Action Figures & Statues</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Arts & Crafts</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Baby & Toddler Toys</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Building Toys</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Dolls & Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Dress Up & Pretend Play</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Kids' Electronics</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Games</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Grown-Up Toys</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Hobbies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Kids' Furniture, Décor & Storage</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Learning & Education</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Novelty & Gag Toys</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Party Supplies</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Puppets</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Puzzles</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Sports & Outdoor Play</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Stuffed Animals & Plush Toys</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Toy Remote Control & Play Vehicles</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Tricycles, Scooters & Wagons</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Video Games</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu25"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(25)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Video Games</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Video Games</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">PlayStation 4</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">PlayStation 3</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Xbox Once</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Xbox 360</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Nintendo Switch</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Wii U</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Wii</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">PC</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Mac</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Nintendo 3DS & 2DS</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Nintendo DS</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">PlayStation Vita</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Sony PSP</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Retro Gaming & Microconsoles</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Accessories</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Digital Games</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Kids & Family</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu26"
                style={{ display: "none", height: "93.5%" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(26)}>
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
                    <b>Give A Gift Card</b>
                  </li>
                  <ul className="text-sm pb-1">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">All gift cards</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">eGift cards</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Gift cards by mail</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Specialty gift cards</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Shoppie Cash</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">For Business</span>
                      </a>
                    </li>
                  </ul>                
                  <hr />
                  <li className="pl-8 pt-4 text-lg">
                    <b>Manage Your Gift Card</b>
                  </li>
                  <ul className="text-sm pb-7">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Redeem a gift card</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">View Your Balance</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Reload Your Balance</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu27"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(27)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>Shoppie Live</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Live</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Recently Live</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div
                id="Menu28"
                style={{ height: "93.5%", display: "none" }}
                className="absolute left-96 overflow-y-scroll overflow-x-scroll w-full bg-white"
              >
                <ul className="text-sm mt-2">
                  <li className="pt-2 pb-1 hover:bg-gray-200">
                    <a href="#" className="flex p-2 " onClick={()=> Back2Main(28)}>
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
                <ul className="pb-8">
                  <li className="pl-8 pt-4 text-lg">
                    <b>International Shopping</b>
                  </li>
                  <ul className="text-sm">
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2">
                        <span className="pl-6">Where we ship</span>
                      </a>
                    </li>
                    <li className="pt-1 hover:bg-gray-200">
                      <a href="#" className="flex flex-row p-2 ">
                        <span className="pl-6">Visit Shoppie Global</span>
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
})

export default NavMenu;
