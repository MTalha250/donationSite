"use client";
import Grid from "@/components/grid";
import Hero from "@/components/category/hero";
import React from "react";
import { useParams } from "next/navigation";
import { categoryData } from "@/constants";

const Category = () => {
  const { category } = useParams();
  const { title, image } = categoryData.find((c) => c.name === category) || {};
  return (
    <div>
      <Hero title={title || ""} image={image || ""} />
      <Grid />
    </div>
  );
};

export default Category;
