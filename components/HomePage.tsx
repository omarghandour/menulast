import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const HomePage = () => {
  return (
    <div>
      <div className="h-[500px] bg-black z-[-1] absolute top-[-200px]  left-0 right-0  [transform:skewY(324deg)]"></div>{" "}
      {/* bg */}
      <div className="flex flex-col items-center mt-14 ">
        <div className="text-xl mb-5">
          <h1 className="text-white">PASTA DE ROMA</h1>
        </div>
        <div>
          <Link href={"/"}>
            <Button className="bg-white text-black px-5">SKIP TO MENU</Button>
          </Link>
        </div>
        <div>
          <Image
            src={
              "https://qrcgcustomers.s3-eu-west-1.amazonaws.com/account9820877/42799524_1.png?0.39937057245297813"
            }
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
