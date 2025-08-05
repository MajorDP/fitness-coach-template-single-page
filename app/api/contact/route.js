import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

export async function POST(req) {
  const { email, fullName, message } = await req.json();

  if (!email || !fullName || !message) {
    return NextResponse.json({ status: 400, error: "Please fill all fields." });
  }

  try {
    const request = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "majoryeet@abv.bg", // Change to client's email
            Name: "Website Contact",
          },
          ReplyTo: {
            Email: email, // Include email of person contacting through website
            Name: fullName, // Include name of person contacting through website
          },
          To: [
            {
              Email: "majoryeet@abv.bg", // Change to client's email
              Name: "Pavel",
            },
          ],
          Subject: `New message from ${fullName} - Contacts From Your Website`,
          TextPart: message,
          HTMLPart: `<h3>New message from ${fullName} coming from your website's contact page:</h3>
          <br/><br/>
          <p>${message}</p>
          <br/><br/>
          ${fullName}'s email: ${email}`,
        },
      ],
    });

    return NextResponse.json({ status: 200, error: null });
  } catch (err) {
    return NextResponse.json({ status: 500, error: "Failed to send message." });
  }
}
