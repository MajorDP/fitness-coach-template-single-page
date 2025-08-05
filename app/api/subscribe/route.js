import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";
import fs from "fs";
import path from "path";

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

export async function POST(req) {
  const { email, fullName } = await req.json();

  if (!email || !fullName) {
    return NextResponse.json({ status: 400, error: "Please fill all fields." });
  }

  const filePath = path.join(process.cwd(), "public", "test.txt");
  const fileBuffer = fs.readFileSync(filePath);
  const base64File = fileBuffer.toString("base64");

  try {
    const request = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "majoryeet@abv.bg", //Change to client's email used in MailJet
            Name: "Pavel", //Change to client's name
          },
          To: [
            {
              Email: email,
              Name: fullName,
            },
          ],
          //Change mail to client's needs
          Subject: "Your FREE 7-Day Workout Plan!",
          TextPart: `Hi ${fullName}, thanks for enrolling! You're all set to start your journey. Here's what others said: "Best decision I made this year. I'm seeing results fast." - Sarah M. "Clear, motivating, and actually works." - James R. Talk soon!`,
          HTMLPart: `
  <h3>Hi ${fullName}, thanks for enrolling!</h3>
  <br/><br/>
  <p>You're all set to start your journey. Please make sure to check out my other courses at...
  <br/><br/>
  <strong>Here's what others had to say:</strong></p>
  <br/>
  <blockquote>
    <p><strong>"Best decision I made this year. I'm seeing results fast."</strong> - Marcus M.</p>
  </blockquote>
  <blockquote>
    <p><strong>"Clear, motivating, and actually works."</strong> - David R.</p>
  </blockquote>
  <br/><br/>
  <p>You've got this.</p>
  <p>Coach.</p>
`,
          Attachments: [
            {
              //Change based on file name/type in /public
              ContentType: "text/plain",
              Filename: "test.txt",
              Base64Content: base64File,
            },
          ],
        },
      ],
    });

    return NextResponse.json({ status: 200, error: null });
  } catch (err) {
    return NextResponse.json({ status: 500, error: "Failed to subscribe" });
  }
}
