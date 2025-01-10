"use client";
import {
  MapIcon,
  HomeIcon,
  PlusIcon,
  Square2StackIcon,
} from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";

export default () => {
  const [server, sServer] = useState(false);
  const [menu, sMenu] = useState(false);

  const MenuRef = useRef(null);
  const ServersRef = useRef(null);
  const ClosetRef = useRef(null);

  const handle = () => {
    sServer((v) => !v);
  };

  const tooglePuppets = () => {
    if (!menu) {
      MenuRef.current.style.transform = "scale(0.72)";
    } else {
      MenuRef.current.style.transform = "scale(1)";
    }

    sMenu((v) => !v);
  };

  const toogleServers = () => {
    if (!server) {
      ServersRef.current.style.transform = "translateX(44vw)";
      ClosetRef.current.style.transform = "translateY(0px)";
    } else {
      ServersRef.current.style.transform = "translateX(0px)";
      ClosetRef.current.style.transform = "translateY(256px)";
    }
  };

  useEffect(() => {
    toogleServers();
  }, [server]);

  return (
    <div className="z-10 relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <button
        className="z-30 absolute hover:bg-[#5959ff] active:scale-75 top-[16px] left-[32px] w-[40px] h-[40px] rounded-full bg-[#4242ff] flex justify-center items-center transition-transform duration-75"
        onClick={tooglePuppets}
      >
        <img src="/person-arms-up.svg" className="w-5 h-5 z-0" />
      </button>

      <section
        ref={MenuRef}
        className="z-20 relative w-full h-screen overflow-hidden bg-[#101010] transition-transform duration-300"
      >
        <div className="z-30 absolute top-[16px] right-[32px] min-w-min min-h-min flex gap-[24px] items-center">
          {!server && (
            <button className="w-[40px] h-[40px] rounded-[16px] bg-[#4242ff] flex justify-center items-center">
              <PlusIcon className="w-7 h-7 text-white" />
            </button>
          )}

          <input
            id="mode"
            type="checkbox"
            className="button-toogle"
            onClick={handle}
          />
          <label htmlFor="mode" className="button-toogle-label">
            <img src="/compass-fill.svg" className="w-6 h-6 z-0" />
            <MapIcon className="w-6 h-6 text-[#4242ff] z-0" />
          </label>

          <div className="flex items-center gap-[12px] select-none">
            <button className="w-[40px] h-[40px] rounded-full bg-[#4242ff] " />
            <h1 className="text-[16px] leading-[1.25rem] ">
              talison
              <br />
              <span className="text-[12px] font-[950] text-emerald-500">
                online
              </span>
            </h1>
          </div>
        </div>

        <div
          ref={ClosetRef}
          className="z-10 absolute left-0 bottom-0 w-screen h-[136px] transition-transform duration-300 flex justify-center items-center"
        >
          <ul className="min-w-min min-h-min flex gap-[32px] ">
            <li className="hover:scale-125 min-w-[124px] h-[124px] bg-[#141414] rounded-[16px] transition-all duration-300"></li>
            <li className="hover:scale-125 min-w-[124px] h-[124px] bg-[#141414] rounded-[16px] transition-all duration-300"></li>
            <li className="hover:scale-125 min-w-[124px] h-[124px] bg-[#141414] rounded-[16px] transition-all duration-300"></li>
            <li className="hover:scale-125 min-w-[124px] h-[124px] bg-[#141414] rounded-[16px] transition-all duration-300"></li>
            <li className="hover:scale-125 min-w-[124px] h-[124px] bg-[#141414] rounded-[16px] transition-all duration-300"></li>
          </ul>
        </div>

        <div
          ref={ServersRef}
          className="absolute z-10 right-0 top-0 w-[44vw] h-screen transition-transform duration-300 bg-[#171717]"
        >
          <h1 className="px-[36px] py-[12px] text-[32px] text-white font-[900] uppercase">
            servers
          </h1>
        </div>
      </section>

      <ul className="absolute left-0 bottom-0 w-full h-[96px] bg-[#141414] flex justify-center items-center gap-[24px] ">
        <li className="w-[64px] h-[64px] rounded-[14px] bg-[#242424] "></li>
        <li className="w-[64px] h-[64px] rounded-[14px] bg-[#242424] "></li>
        <li className="w-[64px] h-[64px] rounded-[14px] bg-[#4242ff] flex justify-center items-center">
          <PlusIcon className="w-6 h-6 text-white" />
        </li>
      </ul>
    </div>
  );
};
