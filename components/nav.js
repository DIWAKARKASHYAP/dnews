import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./logo.png";

const Nav = () => {
  const [quer, setQuer] = useState();
  return (
    <>
      <div className=" bg-gradient-to-r from-sky-600 to-indigo-600 z-10 text-white fixed top-0 left-0 right-0 ">
        <div className="max-w-screen-lg relative left-1/2 -translate-x-1/2">
          <div className="flex  justify-between text-lg">
            <div className="flex h-6 translate-y-1 sm:translate-y-4 translate-x-2">
              {/* <div className="  bg-green-400  "> */}

              <Image
                className=""
                src={logo}
                layout="fixed"
                // object-position: 250px 125px;

                alt="Picture of the author"
                width={80}
                height={32}
              />
              {/* </div> */}
            </div>
            <ul className="flex justify-center items-center   ">
              <Link href={`/search?q=job&searchIn=title`}>
                <li className=" mr-10 sm:mr-14 cursor-pointer hover:text-yellow-400 ">
                  Job
                </li>
              </Link>
              <Link href={`/`}>
                <li className=" mr-10 sm:mr-14 cursor-pointer hover:text-green-500">
                  Home
                </li>
              </Link>
              <Link href={`/contact`}>
                <li className=" mr-10 sm:mr-10 cursor-pointer hover:text-red-500">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className=" flex items-center justify-center mt-4 sm:mt-2    text-gray-200 ">
            <input
              className="border w-1/2 sm:w-1/3 text-black pl-4 pr-3  pb-1 mb-2 rounded-2xl  border-sky-500  z-10 "
              type=" text"
              onChange={(e) => setQuer(e.target.value.replace(/\s/g, "-"))}
            />
            <div className=" border rounded-2xl mb-2 pl-7 pr-2 pb-1 -translate-x-1/4 bg-black  border-sky-500">
              <Link href={`/search?q=${quer}`}>🔍Search</Link>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Nav;
