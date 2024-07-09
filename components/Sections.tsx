import Image from "next/image";
import Link from "next/link";
type card = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  calories: string;
  section: string;
  longDescription: string;
};
const Sections = (data: any) => {
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
                {card.name}
              </h2>
              <div className=" flex gap-3 items-center w-full">
                <h3 className="bg-white text-[0.75rem] font-bold text-black rounded-md px-2">
                  SAR {card.price}
                </h3>
                <span className="text-white">{card.calories} Calorie</span>
              </div>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {card.longDescription}
              </p>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {card.description}
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
                {card.name}
              </h2>
              <div className=" flex gap-3 items-center w-full">
                <h3 className="bg-white text-[0.75rem] font-bold text-black rounded-md px-2">
                  SAR {card.price}
                </h3>
                <span className="text-white">{card.calories} Calorie</span>
              </div>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {card.longDescription}
              </p>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {card.description}
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
                {card.name}
              </h2>
              <div className=" flex gap-3 items-center w-full">
                <h3 className="bg-white text-[0.75rem] font-bold text-black rounded-md px-2">
                  SAR {card.price}
                </h3>
                <span className="text-white">{card.calories} Calorie</span>
              </div>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {card.longDescription}
              </p>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {card.description}
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
                {card.name}
              </h2>
              <div className=" flex gap-3 items-center w-full">
                <h3 className="bg-white text-[0.75rem] font-bold text-black rounded-md px-2">
                  SAR {card.price}
                </h3>
                <span className="text-white">{card.calories} Calorie</span>
              </div>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {card.longDescription}
              </p>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {card.description}
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
                {card.name}
              </h2>
              <div className=" flex gap-3 items-center w-full">
                <h3 className="bg-white text-[0.75rem] font-bold text-black rounded-md px-2">
                  SAR {card.price}
                </h3>
                <span className="text-white">{card.calories} Calorie</span>
              </div>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {card.longDescription}
              </p>{" "}
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {card.description}
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
                {card.name}
              </h2>
              <div className=" flex gap-3 items-center w-full">
                <h3 className="bg-white text-[0.75rem] font-bold text-black rounded-md px-2">
                  SAR {card.price}
                </h3>
                <span className="text-white">{card.calories} Calorie</span>
              </div>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {card.longDescription}
              </p>
              <p className="text-white opacity-80 text-[14px] leading-none w-full">
                {card.description}
              </p>
            </section>
          </Link>
        );
      })}
    </div>
  );
};

export default Sections;
