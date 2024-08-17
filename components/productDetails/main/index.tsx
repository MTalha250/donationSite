"use client";
import React from "react";
import { CiUser } from "react-icons/ci";
import { BsShieldCheck } from "react-icons/bs";
//@ts-ignore
import ProgressBar from "@ramonak/react-progress-bar";
import Link from "next/link";
import Image from "next/image";
const Main = () => {
  return (
    <div className="px-8 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20">
      <h1 className="text-4xl font-semibold mb-5">
        Help my elderly vet friend Donald!
      </h1>
      <div className="flex gap-10">
        <div className="w-3/5">
          <img
            src="https://images.gofundme.com/oqXq_fUbVoOJuZkC6DCOfOq3vmw=/720x405/https://d2g8igdw686xgo.cloudfront.net/81050879_1719513663170911_r.jpeg"
            alt=""
            className="rounded-2xl mb-5"
          />
          <div className="flex items-center gap-3 mb-5">
            <span className="p-2 rounded-full bg-neutral-300">
              <CiUser className="text-2xl" />
            </span>
            <p className="text-sm">
              Jenelle Marie is organising this fundraiser.
            </p>
          </div>
          <div className="py-5 border-y">
            <div className="bg-primary flex items-center w-fit py-2 px-4 rounded-full gap-2 text-white border border-primary-dark">
              <BsShieldCheck className="text-xl text-white" />
              <span className="text-sm">Donation Protected</span>
            </div>
          </div>

          <div className="py-5 border-b">
            <p className="text-justify">
              Hi everyone! I have never made a GoFundMe , but I feel that in
              this circumstance it is appropriate. I have an elderly friend
              named Donald who is 90 years old (91 in August!). He is also a
              disabled veteran (Airforce) who is taking care of his wife who
              just got diagnosed with dementia. They never had kids and they
              don't have any family left. He is the sweetest old man you could
              ever meet and loves his wife dearly. He takes care of her around
              the clock and his landlord is raising their rent and he is falling
              behind terribly with all of his bills. He's deathly afraid he's
              going to be displaced and that they are going to make his wife go
              to a home. I'm currently looking to find him a new place to rent
              that is within his budget, but I was hoping I could fundraise some
              money to lessen his load of financial stress. Any amount would
              help and any resources for a one bedroom first floor apartment or
              house to rent would be much appreciated in the Manchester area. I
              have looked into all sorts of resources, even section 8 housing
              for him and the waitlists are too long. Thanks again!
            </p>
          </div>
        </div>
        <div className="w-2/5 sticky h-fit top-32 shadow-2xl rounded-2xl p-5 flex flex-col">
          <h1 className="text-sm">
            <span className="text-2xl font-light">$402,509</span> USD raised of
            $425,000 target
          </h1>
          <ProgressBar
            completed={95}
            bgColor="#75924B"
            isLabelVisible={false}
            height="0.5rem"
            className="my-5"
          />
          <p className="text-sm mb-5 underline">14.3K donations</p>
          <Link
            href="/"
            className="rounded-lg text-center bg-yellow-500 py-3 w-full font-semibold mb-3"
          >
            Share
          </Link>
          <Link
            href="/"
            className="rounded-lg text-center bg-yellow-500 py-3 w-full font-semibold"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
