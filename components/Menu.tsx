"use client";
import Image from "next/image";
import instagram from "../public/instagram-svgrepo-com.svg";
import tiktok from "../public/tiktok-svgrepo-com.svg";
import location from "../public/location.svg";
import mainlogo from "../public/pdrr.png";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getCookie, setCookie } from "@/app/cookie/setCookie";
import Lang from "./Lang";
const Menu = () => {
  const nav: any = useRef<HTMLDivElement>(null);
  const [navV, setNaV] = useState<any>();
  const [current, setCurrent] = useState("pizza");
  const [English, setEnglish] = useState<string>("arabic");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setNaV(entry.isIntersecting);
    });
    observer.observe(nav.current);
  }, []);
  const coo = (data: string) => {
    setCookie(data);
  };
  const handleCookie = async () => {
    const c: any = await getCookie();
    setEnglish(c);
  };
  useEffect(() => {
    handleCookie();
    console.log(English);
  }, [English, handleCookie]);

  return (
    <div className="h-full  flex justify-center flex-col overflow-x-hidden">
      {/* <div className="z-10 flex gap-5 justify-center"> */}
      {/* <Button
          className={`${English === "arabic" ? "hidden" : ""}`}
          onClick={() => coo("arabic")}
        >
          For Arabic click here
        </Button>
        <Button
          className={`${English === "english" ? "hidden" : ""}`}
          onClick={() => coo("english")}
        >
          For English click here
        </Button> */}
      {/* </div> */}
      <div className="h-[500px] bg-[url(https://github.com/omarghandour/photos/blob/main/menu/photo_5985755204877926916_y.jpg?raw=true)] bg-cover z-[3] absolute top-[-200px]  left-0 right-0  "></div>{" "}
      <div
        className="flex justify-center flex-col pt-64 z-[17] items-center
      "
      >
        <div className="w-full flex justify-start">
          <Lang />
        </div>
        <div className="mb-5 bg-[#86794c] rounded-full p-3">
          <Image
            className=""
            loading="lazy"
            src={mainlogo}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div>
          <h4 className="text-white font-mono font-semibold text-2xl">
            Pasta De Rome
          </h4>
        </div>
        <div className="flex gap-3 mb-5 mt-[10px]">
          <Link
            href={
              "https://www.instagram.com/pastaderoma?igsh=MW16cHljM2owa28zcQ=="
            }
          >
            <Image src={instagram} width={25} height={25} alt="" />
          </Link>
          <Link
            href={"https://www.tiktok.com/@pastaderome28?_t=8nT15UtLrh2&_r=1"}
          >
            <Image src={tiktok} width={25} height={25} alt="" />
          </Link>
          <Link
            href={
              "https://maps.app.goo.gl/Z9M6YszpyVbDxGtv8?g_st=com.google.maps.preview.copy"
            }
          >
            <Image src={location} width={25} height={25} alt="" />
          </Link>
        </div>
      </div>
      <div className="overflow-x-scroll h-24 ">
        <div className={`overflow-x-scroll `} ref={nav}>
          <div
            className={`flex overflow-x-scroll  h-24  text-white text-center ${
              navV
                ? "w-[150%]"
                : "fixed top-0 z-50 left-0 right-0 h-fit outline-none w-[95%] mb-5 mx-auto scr   p-1 bg-black "
            }`}
          >
            <div
              className={`flex justify-around flex-row-reverse ${
                navV
                  ? " overflow-x-scroll h-full  w-full items-center"
                  : "  overflow-x-scroll gap-3 h-fit outline-none"
              }`}
            >
              <div
                className={`h-20 w-20 flex items-center ${
                  current === "chickenQasadiya"
                    ? "border border-[#86794c] border-[solid] rounded-md p-2"
                    : ""
                }`}
              >
                <Link
                  href={"#chickenQasadiya"}
                  onClick={() => setCurrent("chickenQasadiya")}
                >
                  <Image
                    className="rounded-full max-w-[75%] mx-auto"
                    src="https://github.com/omarghandour/photos/blob/main/menu/17.jpg?raw=true"
                    alt=""
                    width={300}
                    height={300}
                  />
                  <span className="text-[12px]">
                    {English === "english" ? "Qasadiya" : "كسادية"}
                  </span>
                </Link>
              </div>
              <div
                className={`h-20 w-20 flex items-center ${
                  current === "appetizer"
                    ? "border border-[#86794c] border-[solid] rounded-md p-2"
                    : ""
                }`}
              >
                <Link
                  href={"#appetizer"}
                  onClick={() => setCurrent("appetizer")}
                >
                  <Image
                    className="rounded-full max-w-[75%] mx-auto"
                    src="https://github.com/omarghandour/photos/blob/main/menu/16.jpg?raw=true"
                    alt=""
                    width={300}
                    height={300}
                  />
                  <span className={`${!navV ? "text-[12px]" : ""}`}>
                    {English === "english" ? "Appetizer" : "مقبلات"}
                  </span>
                </Link>
              </div>
              <div
                className={`h-20 w-20 flex items-center ${
                  current === "salad"
                    ? "border border-[#86794c] border-[solid] rounded-md p-2"
                    : ""
                }`}
              >
                <Link href={"#salad"} onClick={() => setCurrent("salad")}>
                  <Image
                    className="rounded-full max-w-[75%] mx-auto"
                    src="https://github.com/omarghandour/photos/blob/main/menu/14.jpg?raw=true"
                    alt=""
                    width={300}
                    height={300}
                  />
                  <span>{English === "english" ? "Salad" : "سلطات"}</span>
                </Link>
              </div>
              <div
                className={`h-20 w-20 flex items-center ${
                  current === "soup"
                    ? "border border-[#86794c] border-[solid] rounded-md p-2"
                    : ""
                }`}
              >
                <Link href={"#soup"} onClick={() => setCurrent("soup")}>
                  <Image
                    className="rounded-full max-w-[75%] mx-auto"
                    src="https://github.com/omarghandour/photos/blob/main/menu/12.jpg?raw=true"
                    alt=""
                    width={300}
                    height={300}
                  />
                  <span>{English === "english" ? "Soup" : "شوربة"}</span>
                </Link>
              </div>
              <div
                className={`h-20 w-20 flex items-center ${
                  current === "pasta"
                    ? "border border-[#86794c] border-[solid] rounded-md p-2"
                    : ""
                }`}
              >
                <Link href={"#pasta"} onClick={() => setCurrent("pasta")}>
                  <Image
                    className="rounded-full max-w-[75%] mx-auto"
                    src="https://github.com/omarghandour/photos/blob/main/menu/1.jpg?raw=true"
                    alt=""
                    width={300}
                    height={300}
                  />
                  <span>{English === "english" ? "Pasta" : "باستا"}</span>
                </Link>
              </div>
              <div
                className={`h-20 w-20 flex items-center ${
                  current === "pizza"
                    ? "border border-[#86794c] border-[solid] rounded-md p-2"
                    : ""
                }`}
              >
                <Link href={"#pizza"} onClick={() => setCurrent("pizza")}>
                  <Image
                    className="rounded-full max-w-[75%] mx-auto"
                    src="https://github.com/omarghandour/photos/blob/main/menu/11.jpg?raw=true"
                    alt=""
                    width={150}
                    height={150}
                  />
                  <span>{English === "english" ? "Pizza" : "بيتزا"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
