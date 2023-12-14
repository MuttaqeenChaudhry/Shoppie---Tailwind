import React, { forwardRef, useEffect } from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavFlyOuts = forwardRef((props, ref) => {
  useEffect(() => {
    const SignInFlyout = document.getElementById("NavFlyOut3");
    SignInFlyout.style.display = "block";
    SignInFlyout.classList.add("animate-fadeIn");
    SignInFlyout.addEventListener("animationend", () => {
      SignInFlyout.classList.remove("animate-fadeIn");
    });
    setTimeout(() => {
      SignInFlyout.classList.add("animate-fadeOut");
      SignInFlyout.addEventListener("animationend", () => {
        SignInFlyout.classList.remove("animate-fadeOut");
        SignInFlyout.style.display = "none";
      });
    }, 9000);
  }, []);
  const PreserveFlyOut = (num) => {
      props.BodyShadow(1);
      const NavFlyout = document.getElementById(`NavFlyOut${num}`);
      NavFlyout.style.display = "block";      
    
  };

  const DiminishFlyOut = (num) => {
      props.BodyShadow(0);
      const NavFlyout = document.getElementById(`NavFlyOut${num}`);
      NavFlyout.style.display = "none";
  };

  return (
    <>
      <div className="relative w-full h-0" ref={ref}>
        <div className="absolute left-0 h-0" id="FlyOutAcnhor">
          <div
            id="NavFlyOut1"
            style={{ display: "none" }}
            className="absolute h-fit w-fit z-10 -top-2 left-[1155px] border border-gray-300"
            onMouseOverCapture={() => PreserveFlyOut(1)}
            onMouseOutCapture={() => DiminishFlyOut(1)}
          >
            <div className="absolute h-2 w-8 -top-2 left-4 rounded-tl-full rounded-tr-full bg-white border border-b-0 border-t-0 border-gray-300" />
            <div className="w-[240px] p-2 h-fit bg-white">
              <div className="w-[97%] m-auto">
                <span className="text-sm">
                  <span>
                    Change Language{" "}
                    <a
                      className="text-xs text-emerald-700 hover:text-orange-700 hover:underline"
                      href="#"
                    >
                      Learn More
                    </a>
                  </span>
                </span>
                <a
                  href="#"
                  className="block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline"
                >
                  <i className="hover:no-underline">
                    <FontAwesomeIcon icon={faCircle} />{" "}
                  </i>
                  <span className="">
                    <span>English</span> - <span>EN</span>
                  </span>
                </a>
                <div className="border-b-2 mt-2 mb-2" />
                <a
                  href="#"
                  className="block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline"
                >
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>
                  <span>
                    <span> español</span> - <span>ES</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline"
                >
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>
                  <span>
                    <span> العربية</span> - <span>AR</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline"
                >
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>
                  <span>
                    <span> Deutsch</span> - <span>DE</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline"
                >
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>
                  <span>
                    <span> עברית</span> - <span>HE</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline"
                >
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>
                  <span>
                    <span> 한국어</span> - <span>KO</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline"
                >
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>
                  <span>
                    <span> português</span> - <span>PT</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="block text-xs pt-2 pb-2 hover:text-orange-700 hover:underline"
                >
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>
                  <span>
                    <span> 中文 (简体)</span> - <span>ZH</span>
                  </span>
                </a>
                <div className="border-b-2 mt-2 mb-2" />
                <span className="text-sm block">
                  <span>
                    Change currency{" "}
                    <a
                      className="text-xs text-emerald-700 hover:text-orange-700 hover:underline"
                      href="#"
                    >
                      Learn More
                    </a>
                  </span>
                </span>
                <span className="text-sm flex justify-between">
                  <span>$ - USD - US Dollar </span>
                  <a
                    className="text-xs text-emerald-700 hover:text-orange-700 hover:underline"
                    href="#"
                  >
                    Change
                  </a>
                </span>
                <div className="border-b-2 mt-2 mb-2" />
                <span className="text-sm block">
                  [Flag] You are shopping on Amazon.com
                </span>
                <a href="" className="text-xs text-blue-600 hover:underline">
                  <div className="text-center pt-1 pb-1">
                    <b>Change country/region</b>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            id="NavFlyOut2"
            style={{ display: "none" }}
            className="absolute h-fit w-fit z-10 -top-2 left-[975px] border border-gray-300"
            onMouseOverCapture={() => PreserveFlyOut(2)}
            onMouseOutCapture={() => DiminishFlyOut(2)}
          >
            <div className="absolute h-2 w-8 -top-2 right-[101px] rounded-tl-full rounded-tr-full bg-white border border-b-0 border-t-0 border-gray-300" />
            <div className="w-[480px] p-2 h-fit bg-white">
              <div className="w-[97%] m-auto">
                <a
                  className="block  p-2 w-[48%] m-auto text-center bg-violet-800 rounded-md text-xs text-white hover:underline"
                  href="#"
                >
                  Sign in
                </a>
                <div className="text-xs text-center pt-1 pb-1">
                  <span>
                    New customer?{" "}
                    <a
                      className="text-xs text-emerald-700 hover:text-orange-700 hover:underline"
                      href="#"
                    >
                      Start here.
                    </a>
                  </span>
                </div>
                <div className="border-b-2" />
                <div className="flex pt-3  pb-1 justify-between">
                  <div>
                    <b>Your Lists</b>
                    <ul className="text-xs">
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Create a List
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Find a List or Registry
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-2" />
                  <div>
                    <b>Your Account</b>
                    <ul className="text-xs">
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Account
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Orders
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Recommendations
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Browsing History
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Watchlist
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Video Purchases & Rentals
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Mindle Unlimited
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Content & Devices
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Subscribe & Save Items
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Memberships & Subscriptions
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          href="#"
                          className="hover:text-orange-600 hover:underline"
                        >
                          Music Library
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="NavFlyOut3"
            style={{ display: "none" }}
            className="absolute h-fit w-fit z-10 -top-2 left-[1188px] border border-gray-300"
          >
            <div className="absolute h-2 w-8 -top-2 right-16 rounded-tl-full rounded-tr-full bg-white border border-b-0 border-t-0 border-gray-300" />
            <div className="w-[160px] p-2 h-fit bg-white">
              <div className="w-[97%] m-auto">
                <a
                  className="block  p-2 w-[98%] text-center bg-violet-800 rounded-md text-xs text-white hover:underline"
                  href="#"
                >
                  Sign in
                </a>
                <span className="text-xs">
                  <span>
                    New customer?{" "}
                    <a
                      className="text-xs text-emerald-700 hover:text-orange-700 hover:underline"
                      href="#"
                    >
                      Start here.
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default NavFlyOuts;
