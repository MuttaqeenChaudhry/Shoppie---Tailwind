import React, { useEffect } from "react";
import C_Img_1 from "../assets/Images/1.jpg";
import C_Img_2 from "../assets/Images/2.jpg";
import C_Img_3 from "../assets/Images/3.jpg";
import C_Img_4 from "../assets/Images/4.jpg";
import C_Img_5 from "../assets/Images/5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import StuffHub from "./StuffHub";

export default function Shoppie() {
  useEffect(() => {
    const CrosulContainer = document.getElementById("CrosulContainer");
    const Imgs = CrosulContainer.querySelectorAll(".CarslImg");
    console.log(Imgs);
    let InitIndex = 0;
    const DispImg = (index) => {
      Imgs.forEach((Img, i) => {
        i === index
          ? (Img.style.display = "block")
          : (Img.style.display = "none");
      });
    };
    DispImg(InitIndex);
    /* const ImgsInterval = setInterval(() => {
      InitIndex = (InitIndex + 1) % Imgs.length;
      DispImg(InitIndex);
    }, 6000);*/
  }, []);
  return (
    <>
      <div id="PageContenet">
        <div className="h-fit">
          <div
            style={{ width: "99%" }}
            id="CrosulContainer"
            className="relative m-auto h-fit outline-none z-0"
          >
            <img className="CarslImg" src={C_Img_1} alt="" />
            <img className="CarslImg" src={C_Img_2} alt="" />
            <img className="CarslImg" src={C_Img_3} alt="" />
            <img className="CarslImg" src={C_Img_4} alt="" />
            <img className="CarslImg" src={C_Img_5} alt="" />
            <div className="absolute top-1/4 flex w-full justify-between">
              <button className="ml-2">
                <FontAwesomeIcon icon={faArrowLeft} size="2xl" color="white" />
              </button>
              <button className="mr-2">
                <FontAwesomeIcon icon={faArrowRight} size="2xl" color="white" />
              </button>
            </div>
            <div style={{boxShadow:'1px 1px 50px 155px #E3E6E6'}} className="absolute w-full"/>
            <StuffHub/>
          </div>
          
       </div>
      </div>
    </>
  );
}
