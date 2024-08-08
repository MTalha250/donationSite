import Card from "@/components/card";
import React from "react";

const Discover = () => {
  return (
    <div className="mt-[80vh] h-screen rounded-t-[2rem] bg-white -translate-y-10 px-8 md:px-16 lg:px-24 xl:px-32 py-20">
      <h1 className="font-semibold text-2xl">
        Discover fundraisers inspired by what you care about
      </h1>
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
