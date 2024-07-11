"use client";
import { getCookie } from "@/app/cookie/setCookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
type card = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  calories: string;
  section: string;
  longDescription: string;
  nameAr: string;
};
const Sections = (data: any) => {
  const [en, setEn] = useState();

  const cards: card[] = data.data;
  const pizza: card[] = cards.filter((card) => card.section === "pizza");
  const pasta: card[] = cards.filter((card) => card.section === "pasta");
  const soup: card[] = cards.filter((card) => card.section === "soup");
  const salad: card[] = cards.filter((card) => card.section === "salad");
  const appetizer: card[] = cards.filter(
    (card) => card.section === "appetizer"
  );
  const chickenQasadiya: card[] = cards.filter(
    (card) => card.section === "chickenQasadiya"
  );
  const ss = async () => {
    const cc: any = await getCookie();
    setEn(cc);
  };
  useEffect(() => {
    ss();
  });
  return (
    <div className="sections flex-col flex items-center  justify-center gap-5">
      {pizza.map((card: card) => {
        return (
          <Link
            className="flex flex-col items-center  justify-center w-[85%]"
            key={card.name}
            href={`${card.id}`}
          >
            <section
              id={card.section}
              className="flex flex-col items-center  justify-center w-full gap-2"
            >
              <Image
                className="rounded-md w-full"
                src={card.image}
                alt=""
                width={300}
                height={300}
                loading="lazy"
              />
              <h2 className="text-white font-mono font-semibold text-base text-left pt-1">
                {en === "english" ? card.name : card.nameAr}
              </h2>
              <div className=" flex gap-3 items-center w-full">
                <h3 className="bg-[#86794c] text-[0.75rem] font-bold text-black rounded-md px-2">
                  {en === "english" ? "SAR" : "ريال"} {card.price}
                </h3>
                <span className="text-white">
                  {card.calories} {en === "english" ? "Calorie" : "سعرة"}
                </span>
              </div>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {en === "english" ? card.description : card.longDescription}
              </p>
            </section>
          </Link>
        );
      })}
      {pasta.map((card: card) => {
        return (
          <Link
            className="flex flex-col items-center  justify-center w-[85%]"
            key={card.name}
            href={`${card.id}`}
          >
            <section
              id={card.section}
              className="flex flex-col items-center  justify-center w-full gap-2"
            >
              <Image
                className="rounded-md w-full"
                src={card.image}
                alt=""
                width={300}
                height={300}
                loading="lazy"
              />
              <h2 className="text-white font-mono font-semibold text-base text-left pt-1">
                {en === "english" ? card.name : card.nameAr}
              </h2>
              <div className=" flex gap-3 items-center w-full">
                <h3 className="bg-[#86794c] text-[0.75rem] font-bold text-black rounded-md px-2">
                  {en === "english" ? "SAR" : "ريال"} {card.price}
                </h3>
                <span className="text-white">{card.calories} Calorie</span>
              </div>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {en === "english" ? card.description : card.longDescription}
              </p>
            </section>
          </Link>
        );
      })}
      {soup.map((card: card) => {
        return (
          <Link
            className="flex flex-col items-center  justify-center w-[85%]"
            key={card.name}
            href={`${card.id}`}
          >
            <section
              id={card.section}
              className="flex flex-col items-center  justify-center w-full gap-2"
            >
              <Image
                className="rounded-md w-full"
                src={card.image}
                alt=""
                width={300}
                height={300}
                loading="lazy"
              />
              <h2 className="text-white font-mono font-semibold text-base text-left pt-1">
                {en === "english" ? card.name : card.nameAr}
              </h2>
              <div className=" flex gap-3 items-center w-full">
                <h3 className="bg-[#86794c] text-[0.75rem] font-bold text-black rounded-md px-2">
                  {en === "english" ? "SAR" : "ريال"} {card.price}
                </h3>
                <span className="text-white">{card.calories} Calorie</span>
              </div>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {en === "english" ? card.description : card.longDescription}
              </p>
            </section>
          </Link>
        );
      })}
      {salad.map((card: card) => {
        return (
          <Link
            className="flex flex-col items-center  justify-center w-[85%]"
            key={card.name}
            href={`${card.id}`}
          >
            <section
              id={card.section}
              className="flex flex-col items-center  justify-center w-full gap-2"
            >
              <Image
                className="rounded-md w-full"
                src={card.image}
                alt=""
                width={300}
                height={300}
                loading="lazy"
              />
              <h2 className="text-white font-mono font-semibold text-base text-left pt-1">
                {en === "english" ? card.name : card.nameAr}
              </h2>
              <div className=" flex gap-3 items-center w-full">
                <h3 className="bg-[#86794c] text-[0.75rem] font-bold text-black rounded-md px-2">
                  {en === "english" ? "SAR" : "ريال"} {card.price}
                </h3>
                <span className="text-white">{card.calories} Calorie</span>
              </div>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {en === "english" ? card.description : card.longDescription}
              </p>
            </section>
          </Link>
        );
      })}
      {appetizer.map((card: card) => {
        return (
          <Link
            className="flex flex-col items-center  justify-center w-[85%]"
            key={card.name}
            href={`${card.id}`}
          >
            <section
              id={card.section}
              className="flex flex-col items-center  justify-center w-full gap-2"
            >
              <Image
                className="rounded-md w-full"
                src={card.image}
                alt=""
                width={300}
                height={300}
                loading="lazy"
              />
              <h2 className="text-white font-mono font-semibold text-base text-left pt-1">
                {en === "english" ? card.name : card.nameAr}
              </h2>
              <div className=" flex gap-3 items-center w-full">
                <h3 className="bg-[#86794c] text-[0.75rem] font-bold text-black rounded-md px-2">
                  {en === "english" ? "SAR" : "ريال"} {card.price}
                </h3>
                <span className="text-white">{card.calories} Calorie</span>
              </div>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {en === "english" ? card.description : card.longDescription}
              </p>
            </section>
          </Link>
        );
      })}
      {chickenQasadiya.map((card: card) => {
        return (
          <Link
            className="flex flex-col items-center  justify-center w-[85%] mb-3"
            key={card.name}
            href={`${card.id}`}
          >
            <section
              id={card.section}
              className="flex flex-col items-center  justify-center w-full gap-2"
            >
              <Image
                className="rounded-md w-full"
                src={card.image}
                alt=""
                width={300}
                height={300}
                loading="lazy"
              />
              <h2 className="text-white font-mono font-semibold text-base text-left pt-1">
                {en === "english" ? card.name : card.nameAr}
              </h2>
              <div className=" flex gap-3 items-center w-full">
                <h3 className="bg-[#86794c] text-[0.75rem] font-bold text-black rounded-md px-2">
                  {en === "english" ? "SAR" : "ريال"} {card.price}
                </h3>
                <span className="text-white">{card.calories} Calorie</span>
              </div>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {en === "english" ? card.description : card.longDescription}
              </p>
            </section>
          </Link>
        );
      })}
    </div>
  );
};

export default Sections;
