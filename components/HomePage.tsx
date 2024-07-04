import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const HomePage = () => {
  return (
    <div>
      <div className="h-[500px] bg-black z-[-1] absolute top-[-200px]  left-0 right-0  [transform:skewY(-10deg)]"></div>{" "}
      {/* bg */}
      <div className="flex flex-col items-center mt-14 ">
        <div className="text-xl mb-5">
          <h1 className="text-[#86794c]">PASTA DE ROMA</h1>
        </div>
        <div className="mb-5">
          <Link href={"/menu"}>
            <Button className="bg-white text-[#86794c] px-5">
              SKIP TO MENU
            </Button>
          </Link>
        </div>
        <div>
          <Image
            src={
              "https://qrcgcustomers.s3-eu-west-1.amazonaws.com/account9820877/42799524_1.png?0.39937057245297813"
            }
            width={350}
            height={350}
            alt=""
            className="rounded-md"
          />
        </div>
        <div className="text-center my-10 mx-auto max-w-[350px]">
          <p className="text-[#616568] opacity-80 text-[14px] leading-none">
            سماش واقيو برجر غرام135 لحم واقيو - جبن مونتيري جالك - جبن شيدر -
            شرائح خيار مخلل - شرائح بصل - صوص واقيو 135 gm wagyu beef -cheedar
            cheese - Montry Jack cheese - onion Slice- Pickles - Wagyu Sauce
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
