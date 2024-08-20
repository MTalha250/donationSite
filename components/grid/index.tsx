import React from "react";
import Card from "@/components/card";
import { Fundraiser } from "@/types";

const Grid = ({
  title,
  fundraisers,
}: {
  title: string;
  fundraisers: Fundraiser[];
}) => {
  return (
    <div className="px-8 md:px-16 lg:px-24 xl:px-32 py-20">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {fundraisers.map((fundraiser) => (
          <Card
            key={fundraiser._id}
            image={fundraiser.image}
            title={fundraiser.title}
            donations={fundraiser.donations.length}
            totalAmount={fundraiser.totalAmount}
            amountRaised={fundraiser.amountRaised}
            href={`/categories/${fundraiser.category}/${fundraiser._id}`}
            status={fundraiser.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
