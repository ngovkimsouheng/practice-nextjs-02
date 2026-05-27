import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(`${process.env.BASE_ISHOP_API_URL}/products`);
  const data = await response.json();
  if (response.ok) {
    return NextResponse.json({
      success: true,
      data: data,
    });
  }
  return NextResponse.json(
    {
      success: false,
      message: "Failed to fetch products",
    },
    { status: response.status },
  );
}
