import React from "react";

export default function StuffOne(props) {
  return (
    <>
      <div className=" bg-transparent">
        <div className="flex flex-col h-96 bg-white w-11/12 m-auto">
          <div
            style={{ height: "15%" }}
            className="flex items-center w-11/12 m-auto bg-white"
          >
            <h3 className="font-semibold text-lg">{props.title}</h3>
          </div>
          <div
            style={{ height: "70%" }}
            className="border w-11/12 m-auto bg-white"
          >
            <img src={props.img} alt="Img Error" style={{width:'100%', height:'100%'}}/>
          </div>
          <div
            style={{ height: "15%" }}
            className="w-11/12 m-auto bg-white flex items-center"
          >
            <a href={props.hrLink}  className="text-cyan-700 hover:text-orange-400">{props.hrTitle}</a>
          </div>
        </div>
      </div>
    </>
  );
}
