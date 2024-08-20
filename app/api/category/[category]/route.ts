import Fundraiser from "@/models/fundraiser";
import dbConnect from "@/lib/database/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { category: string } }
): Promise<NextResponse> => {
  await dbConnect();
  const { category } = params;
  try {
    const fundraisers = await Fundraiser.find({
      category,
      status: { $in: ["Active", "Completed"] },
    })
      .populate("user donations")
      .sort({ createdAt: -1 });
    return NextResponse.json(
      {
        success: true,
        message: "Fundraisers fetched successfully",
        result: fundraisers,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
};
