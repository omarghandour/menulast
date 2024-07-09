"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/utils/data";
import { useParams } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
type Data = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  calories: string;
  section: string;
  longDescription: string;
};
const CardDetails = () => {
  const param: Params = useParams();
  const Card: Data[] = data.filter((data: any) => data.id === param.id);

  return (
    <div className="flex-col flex items-center h-full  justify-center gap-5">
      {" "}
      <Link
        className="flex flex-col items-center  justify-center w-[85%]"
        key={Card[0].name}
        href={`${Card[0].id}`}
      >
        <section
          id={Card[0].section}
          className="flex flex-col items-center  justify-center w-full gap-2"
        >
          <Image
            className="rounded-md w-full"
            src={Card[0].image}
            alt=""
            width={300}
            height={300}
          />
          <h2 className="text-white font-mono font-semibold text-base text-left pt-1">
            {Card[0].name}
          </h2>
          <div className=" flex gap-3 items-center w-full">
            <h3 className="bg-[#86794c] text-[0.75rem] font-bold text-black rounded-md px-2">
              SAR {Card[0].price}
            </h3>
            <span className="text-white">{Card[0].calories} Calorie</span>
          </div>
          <p className="text-white opacity-80 text-[14px] leading-none w-full">
            {Card[0].longDescription}
          </p>
          <p className="text-white opacity-80 text-[14px] leading-none w-full">
            {Card[0].description}
          </p>
        </section>
      </Link>
    </div>
  );
};

export default CardDetails;
