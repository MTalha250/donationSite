"use client";
import Grid from "@/components/grid";
import Hero from "@/components/category/hero";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { categoryData } from "@/constants";
import { Fundraiser } from "@/types";
import axios from "axios";

const Category = () => {
  const { category } = useParams();
  const { title, image, subHeading } =
    categoryData.find((c) => c.name === category) || {};
  const [fundraisers, setFundraisers] = useState<Fundraiser[]>([]);
  const fetchFundraisers = async () => {
    try {
      const response = await axios.get(`/api/category/${category}`);
      setFundraisers(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchFundraisers();
  }, []);

  return (
    <div>
      <Hero title={title || ""} image={image || ""} />
      <Grid title={subHeading ?? ""} fundraisers={fundraisers} />
    </div>
  );
};

export default Category;
