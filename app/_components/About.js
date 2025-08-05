import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <section id="about" className="flex flex-col gap-8 px-4 py-20 md:px-16">
      <div className="justify-center flex flex-col items-center gap-8">
        <h1
          className="text-3xl md:text-5xl max-w-2xl mx-auto text-center font-bold tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          I Help People Build a{" "}
          <span className="bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent">
            Stronger Body & Healthier Lifestyle
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row gap-8">
        <Link
          href="#contact"
          className="w-fit text-center px-8 py-4 bg-gradient-to-br from-accent hover:to-accent to-accent-hover text-text-secondary text-lg transition font-semibold"
        >
          Book A Meeting
        </Link>
        <Link
          href="#testimonials"
          className="w-fit text-center px-8 py-4 bg-bg-primary hover:bg-bg-secondary border border-border text-lg transition"
        >
          Success Stories
        </Link>
      </div>
      <div className="relative rounded-lg overflow-hidden aspect-square md:aspect-video w-full md:w-2/3 mx-auto">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Lc2Av1X2O3c?loop=1&playlist=Lc2Av1X2O3c&rel=0"
          title="Fitness coach introduction video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </section>
  );
}

export default About;
