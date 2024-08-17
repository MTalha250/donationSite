"use client";
import Grid from "@/components/grid";
import { Search } from "@/components/ui/search";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="px-8 md:px-16 lg:px-24 xl:px-32 pt-32">
        <h1 className="text-3xl text-center font-bold">
          Search fundraisers on GoFundMe
        </h1>
        <p className="text-center text-neutral-500 my-5 text-sm">
          Find fundraisers by location, title, keyword or a person’s name
        </p>
        <Search
          placeholders={[
            "Search by location",
            "Search by title",
            "Search by keyword",
            "Search by person's name",
          ]}
          onChange={() => {}}
          onSubmit={() => {}}
        />
      </div>
      <Grid />
    </div>
  );
};

export default page;
