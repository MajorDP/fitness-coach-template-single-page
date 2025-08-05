import Image from "next/image";
import Link from "next/link";
import About from "./_components/About";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";

//TODO: REPLACE TO FIT
export async function generateMetadata() {
  const baseUrl = "https://yourdomain.com"; // to REPLACE with ACTUAL DOMAIN NAME

  return {
    title: "Get Fit with James Smith - Free 7-Day Workout Plan",
    description:
      "Transform your body with James Smith's free 7-day workout plan. Personalized coaching, modern fitness tips, and weekly updates delivered to your inbox.",
    openGraph: {
      title: "Get Fit with James Smith - Free 7-Day Workout Plan",
      description:
        "Transform your body with James Smith's free 7-day workout plan.",
      url: baseUrl,
      images: [
        {
          url: `${baseUrl}/bgImage.jpg`, //to REPLACE with ACTUAL OPENGRAPH LINK IMAGE
          width: 1200,
          height: 630,
        },
      ],
      siteName: "James Smith Fitness",
      type: "website",
    },
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}
