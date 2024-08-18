import Card from "@/components/card";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Discover = () => {
  return (
    <div className="mt-[80vh] rounded-t-[2rem] bg-white -translate-y-10 px-8 md:px-16 lg:px-24 xl:px-32 pt-20 pb-10">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">
          Discover fundraisers inspired by what you care about
        </h1>
        <Link href="" className="text-neutral-500 flex items-center">
          Explore more
          <FaArrowRightLong className="inline-block ml-2 animate-bounce-horizontal" />
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-3 first:col-span-2 first:row-span-2">
        <Card
          image="https://images.gofundme.com/nCkCx97MTCtsCayMUVLoLJa0PXI=/720x405/https://d2g8igdw686xgo.cloudfront.net/81865453_1722894387648104_r.jpeg"
          title="Help repair the damage from Hurricane Ida"
          donations={100}
          totalAmount={100000}
          amountRaised={60000}
          first
        />
        <Card
          image="https://images.gofundme.com/nCkCx97MTCtsCayMUVLoLJa0PXI=/720x405/https://d2g8igdw686xgo.cloudfront.net/81865453_1722894387648104_r.jpeg"
          title="Help repair the"
          donations={100}
          totalAmount={100000}
          amountRaised={10000}
        />
        <Card
          image="https://images.gofundme.com/nCkCx97MTCtsCayMUVLoLJa0PXI=/720x405/https://d2g8igdw686xgo.cloudfront.net/81865453_1722894387648104_r.jpeg"
          title="Help repair the damage from Hurricane Ida"
          donations={100}
          totalAmount={100000}
          amountRaised={40000}
        />
        <Card
          image="https://images.gofundme.com/nCkCx97MTCtsCayMUVLoLJa0PXI=/720x405/https://d2g8igdw686xgo.cloudfront.net/81865453_1722894387648104_r.jpeg"
          title="Help repair the damage from Hurricane Ida"
          donations={100}
          totalAmount={100000}
          amountRaised={50000}
        />
      </div>
    </div>
  );
};

export default Discover;
