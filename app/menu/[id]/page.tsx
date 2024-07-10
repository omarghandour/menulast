import Link from "next/link";
import React from "react";
import CardDetails from "@/components/CardDetails";
type Data = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  calories: string;
  section: string;
};
export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "15" },
    { id: "16" },
    { id: "17" },
  ];
}
const page = () => {
  return (
    <div className="bg-black h-[100svh] flex flex-col gap-5 justify-center">
      <Link href={"/menu"} className="text-white p-5">
        {`<-- Back`}
      </Link>
      <CardDetails />
    </div>
  );
};

export default page;
