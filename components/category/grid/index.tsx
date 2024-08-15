import React from "react";
import Card from "@/components/card";

const Grid = () => {
  return (
    <div className="px-8 md:px-16 lg:px-24 xl:px-32 py-20">
      <h2 className="text-xl font-semibold">Browse Medical Fundraisers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <Card
          image="https://images.gofundme.com/nCkCx97MTCtsCayMUVLoLJa0PXI=/720x405/https://d2g8igdw686xgo.cloudfront.net/81865453_1722894387648104_r.jpeg"
          title="Help repair the damage from Hurricane Ida"
          donations={100}
          totalAmount={100000}
          amountRaised={60000}
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
        <Card
          image="https://images.gofundme.com/nCkCx97MTCtsCayMUVLoLJa0PXI=/720x405/https://d2g8igdw686xgo.cloudfront.net/81865453_1722894387648104_r.jpeg"
          title="Help repair the damage from Hurricane Ida"
          donations={100}
          totalAmount={100000}
          amountRaised={50000}
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

export default Grid;
