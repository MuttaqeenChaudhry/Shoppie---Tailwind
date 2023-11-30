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
    const PrevButton = document.getElementById("PrevButton");
    const NxtButton = document.getElementById("NxtButton");
    let InitIndex = 0;
    const DispImg = (index) => {
      Imgs.forEach((Img, i) => {
        i === index
          ? (Img.style.display = "block")
          : (Img.style.display = "none");
      });
    };
    DispImg(InitIndex);
    const handleNxt = () => {
      InitIndex = (InitIndex + 1) % Imgs.length;
      Imgs[InitIndex].classList.add("fadeOu");
      DispImg(InitIndex);
    };
    NxtButton.addEventListener("click", handleNxt);
    PrevButton.addEventListener("click", () => {});

    return () => {
      NxtButton.removeEventListener("click", handleNxt);
    };
  }, []);
  return (
    <>
      <div id="RootContent">
        <div className="h-fit">
          <div
            style={{ width: "99%" }}
            className="relative m-auto h-fit outline-none"
          >
            <div id="CrosulContainer" className="overflow-hidden">
              <img className="CarslImg" src={C_Img_1} alt="" />
              <img className="CarslImg" src={C_Img_2} alt="" />
              <img className="CarslImg" src={C_Img_3} alt="" />
              <img className="CarslImg" src={C_Img_4} alt="" />
              <img className="CarslImg" src={C_Img_5} alt="" />
            </div>

            <div className="absolute top-1/4 flex w-full justify-between">
              <button className="ml-2" id="PrevButton">
                <FontAwesomeIcon icon={faArrowLeft} size="2xl" color="white" />
              </button>
              <button className="mr-2" id="NxtButton">
                <FontAwesomeIcon icon={faArrowRight} size="2xl" color="white" />
              </button>
            </div>
            <div
              style={{ boxShadow: "1px 1px 120px 155px #E3E6E6" }}
              className="absolute w-full"
            />
            <StuffHub />
          </div>
        </div>
      </div>
    </>
  );
}
