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
      <div className="h-[500px] bg-[url(https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1657715983_7yju44/restaurants/-_a.toulanwagyu.sa_16623608132985244.jpg)] bg-contain z-[3] absolute top-[-200px]  left-0 right-0  "></div>{" "}
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
          <Link href={"https://www.instagram.com/pastaderome28"}>
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
                    className="rounded-full"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kyleecooks.com%2Fwp-content%2Fuploads%2F2021%2F01%2FChicken-Quesadillas-14.jpg&f=1&nofb=1&ipt=8fd3e1a5f75fa535e0f1bd3713fe1b7376b3952fff946a8bb7707c3849e2a166&ipo=images"
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
                    className="rounded-full"
                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Firepo.primecp.com%2F2019%2F02%2F402087%2FDynamite-Shrimp-_ExtraLarge1000_ID-3102085.jpg%3Fv%3D3102085&f=1&nofb=1&ipt=91ccbaae721cb9f0fb129e657fa207e171654801b2b07e7f7f82c9175d9be971&ipo=images"
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
                    className="rounded-full"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FZ6IWF7c9zywuU9maSIimGLbHoI4%3D%2F3000x2000%2Ffilters%3Afill(auto%2C1)%2Fclassic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg&f=1&nofb=1&ipt=ab224fa85fa60a5a3cf146c308554a7f04fe367cf25c80001e7789b9c131e18a&ipo=images"
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
                    className="rounded-full"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.deliveryhero.io%2Fimage%2Ffoodpanda%2Frecipes%2Fmushroom-soup-recipe-1.jpg&f=1&nofb=1&ipt=651ae7460aacf3fbcab8b2b664a5b5245bb3b9f0674bdab4a488c9158ce7bc46&ipo=images"
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
                    className="rounded-full"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flestta.com%2Fwp-content%2Fuploads%2F2021%2F03%2FPasta-2048x1366.jpg&f=1&nofb=1&ipt=db470ccc6cfe7e90f538389522c3b2f3173be9d24da7a21a8b1f7074354b046e&ipo=images"
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
                    className="rounded-full"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.biggerbolderbaking.com%2Fwp-content%2Fuploads%2F2021%2F02%2FNew-York-Style-Pizza-Thumbnail1-scaled.jpg&f=1&nofb=1&ipt=62f50d7d79be7e7af34b8f835579c9683915eb0c08bcf9aeee3dc053c5aeff3c&ipo=images"
                    alt=""
                    width={300}
                    height={300}
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
