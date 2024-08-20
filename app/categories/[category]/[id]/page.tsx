"use client";
import Main from "@/components/productDetails/main";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Fundraiser } from "@/types";
import axios from "axios";

const Category = () => {
  const { id } = useParams();
  const [fundraiser, setFundraiser] = useState<Fundraiser>();
  const fetchFundraiser = async () => {
    try {
      const response = await axios.get(`/api/fundraiser/${id}`);
      setFundraiser(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFundraiser();
  }, [id]);

  return (
    <div>
      <Main fundraiser={fundraiser as Fundraiser} />
    </div>
  );
};

export default Category;
