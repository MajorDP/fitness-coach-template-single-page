import Image from "next/image";
import Link from "next/link";
import LeadMagnet from "./LeadMagnet";

function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 xl:grid-cols-2 gap-8 px-4 py-40 md:px-20 relative"
    >
      <Image
        src="/bgImage.jpg"
        alt="Fitness coach helping clients lose weight"
        fill
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute left-0 top-0 bg-black/60 w-full h-full" />
      <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-8 z-1">
        <h1
          className="text-3xl md:text-5xl max-w-xl font-bold tracking-wide mt-auto text-text-secondary"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Professional Fitness Coach for{" "}
          <span className="bg-gradient-to-br from-accent to-accent bg-clip-text text-transparent">
            Weight Loss & Strength Training
          </span>
        </h1>
        <p className="text-text-muted max-w-xl">
          I help busy professionals and casual enthusiasts lose weight, build
          muscle, and stay in shape with customized, evidence-based fitness,
          nutrition programs and personal coaching.
        </p>

        <div className="flex flex-col items-center xl:items-start gap-4 mt-auto">
          <div className="flex flex-col items-center xl:items-start md:flex-row gap-8">
            <Link
              href="#contact"
              className="w-fit text-center px-8 py-4 bg-gradient-to-br from-accent hover:to-accent to-accent-hover text-text-secondary text-lg transition font-semibold"
            >
              Book A Meeting
            </Link>
            <Link
              href="#about"
              className="w-fit text-center px-8 py-4 bg-bg-primary hover:bg-bg-secondary border border-border text-lg transition"
            >
              About Me
            </Link>
          </div>
          <p className="text-sm text-text-muted font-semibold">
            20+ Happy clients like you trusted my advice
          </p>
        </div>
      </div>
      <div className="z-1 text-text-secondary h-fit m-auto">
        <h2
          className="text-center font-bold md:text-2xl px-8 py-4 bg-accent rounded-t-lg tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Get My FREE 7-DAY WORKOUT
        </h2>
        <LeadMagnet />
      </div>
    </section>
  );
}

export default Hero;
