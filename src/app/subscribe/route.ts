import { NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";

const parser = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const data = parser.parse(await request.json());

    await fetch(
      `https://${process.env.MAILCHIMPDC}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMPLISTID}/members`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.MAILCHIMP}` },
        body: JSON.stringify({
          email_address: data.email,
          status: "subscribed",
        }),
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof ZodError) {
      return NextResponse.json({ err: "Invalid INPUT DATA" }, { status: 400 });
    }

    console.log(error);

    return NextResponse.json(
      { err: "Unknown error happened" },
      { status: 500 }
    );
  }
}
