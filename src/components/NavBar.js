import React, { useState } from "react";
import S_Logo from "../assets/Images/s-w.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBars, faCartArrowDown, faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import DeptmntsList from "./DeptmntsList";
export default function NavBar(props) {
  const[items, setItems] = useState(0);
  const Flags = [
   { 
      id : 0,
      name : 'Botswana',
      url : 'https://www.worldometers.info/img/flags/bc-flag.gif'
    },
    { 
      id : 1,
      name : 'Brazil',
      url : 'https://www.worldometers.info/img/flags/br-flag.gif'
    },
   { 
      id : 2,
      name : 'Brunei',
      url : 'https://www.worldometers.info/img/flags/bx-flag.gif'
    }
  ]
  
  return (
    <>
      <header>
      <div className="h-15  w-full m-auto overflow-hidden bg-violet-700">
        <div className="flex flex-row w-full h-full items-center">
          <div className="flex flex-row items-center w-fit">
            <div className="pr-4 pl-2">
              <h1 className="font-serif text-3xl text-white">Shoppie</h1>
            </div>
            <div className="h-5 w-2 border-l-violet-950 border-r-0 border-x-2"></div>
            <div className="flex items-center pl-3">
              <img className="w-16" src={S_Logo} alt="Logo" />
            </div>
          </div>
          <div className="w-7/12 h-10 overflow-hidden  ml-5 rounded-lg hover:shadow-lg ">
              <form action="" className="flex h-full" >
              <div className="relative h-full overflow-hidden rounded-l-lg">
                <select className="h-full w-11 outline-none bg-slate-200 text-xs text-gray-600 font-bold" placeholder="as" name="" id="">
                  <DeptmntsList/>
                </select>
                </div>
              <div className="w-full h-full">
                <input className='w-full h-full outline-none pl-2' type="text" name="" id="" placeholder="Seach Shoppie" />
                </div>
              <div>
                <button className="w-11 flex h-full items-center justify-center bg-amber-100 hover:bg-amber-300 " type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                </div>
              </form>
          </div>

          <div className="ml-5 w-fit bg-transparent  text-white">
           <select className='bg-transparent outline-none' name="" id="">
            {
              Flags.map((Flag)=>(
                <option key={Flag.id} value={Flag.name}>{Flag.name}<img src={Flag.url}/></option>
                ))
            }
           </select>
          </div>

          <div className="ml-5">
            <div>
              <div>Hello</div>
              <div>Accounts and Lists</div>
            </div>
          </div>

          <div className="ml-5">
            <div><span>Returns<br/>& Orders
              </span></div>
          </div>

          <div className="flex relative items-end h-12 ml-5">
            <div>
            <FontAwesomeIcon icon={faCartArrowDown} size="xl" color="white"/>
            </div>
            <div className="text-white font-bold pl-1">Cart</div>
            <div className="absolute top-0 left-3 text-yellow-300"><i>{items}</i></div>

          </div>
        </div>
      </div>
      </header>
    </>
  );
}
