import { getRecipeById } from "@app/lib/services/api";
import { NextResponse } from "next/server";

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  const res = await getRecipeById(id);

  return NextResponse.json(res);
};
