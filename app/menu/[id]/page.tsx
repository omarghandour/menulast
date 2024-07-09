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
