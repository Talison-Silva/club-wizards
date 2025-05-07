"use client";
import {
  MapIcon,
  HomeIcon,
  PlusIcon,
  Square2StackIcon,
} from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
//import { useRouter } from "next/router";
import { Riple } from "react-loading-indicators";
import { signOut } from "next-auth/react";
import Loading from "../../components/loading";
//import { uploadFile } from "../../lib/manager0file";
import { Player } from "../../entities/player";

const HubPage = () => {
  const { data: user } = useSession();
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
      MenuRef.current.style.borderRadius = "24px";
      MenuRef.current.style.transform = "scale(0.72)";
    } else {
      MenuRef.current.style.borderRadius = "0px";
      MenuRef.current.style.transform = "scale(1)";
    }

    sMenu((v) => !v);
  };

  const toogleServers = () => {
    if (!server) {
      ServersRef.current.style.right = "-44vw";
      ClosetRef.current.style.transform = "translateY(0px)";
    } else {
      ServersRef.current.style.right = "0px";
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

      <div className="z-30 absolute top-[16px] right-[32px] min-w-min min-h-min flex gap-[24px] items-center">
        {!server && (
          <button className="w-[40px] h-[40px] rounded-[16px] bg-[#4242ff] flex justify-center items-center">
            <PlusIcon className="w-7 h-7 text-white" />
          </button>
        )}

        <button
          className="w-[40px] h-[40px] rounded-[16px] bg-[#4242ff] flex justify-center items-center"
          onClick={() => signOut()}
        >
          <p>LogOut</p>
        </button>

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
          <button
            className="w-[40px] h-[40px] rounded-full bg-[#4242ff]"
            style={{
              background: `url(${user?.user?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <h1 className="text-[16px] leading-[1.25rem] ">
            {user?.user?.name}
            <br />
            <span className="text-[10px] font-[950] text-emerald-500">
              {user?.user?.email}
            </span>
          </h1>
        </div>
      </div>

      <section
        ref={MenuRef}
        className="z-20 relative w-full h-screen overflow-hidden bg-[#101010] transition-transform duration-300"
      >
        <Player className="absolute left-[100px] top-[400px]" scale={10} />

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
          className="absolute z-10 right-[-44vw] top-0 w-[44vw] h-screen transition-all duration-300 bg-[#171717]"
        >
          <h1 className="px-[36px] py-[12px] text-[32px] text-white font-[900] uppercase">
            servers
          </h1>
        </div>
      </section>

      <ul className="absolute left-0 bottom-0 w-full h-[72px] bg-[#141414] flex justify-center items-center gap-[14px]">
        <li className="w-[56px] h-[56px] rounded-[14px] bg-[#242424] "></li>
        <li className="w-[56px] h-[56px] rounded-[14px] bg-[#242424] "></li>
        <li className="w-[56px] h-[56px] rounded-[14px] bg-[#4242ff] flex justify-center items-center">
          <PlusIcon className="w-6 h-6 text-white" />
        </li>
      </ul>
    </div>
  );
};

export default () => {
  const { data: session } = useSession();
  //const router = useRouter();

  if (!session?.user) {
    return <Loading />;
  } else {
    return <HubPage />;
  }
};
