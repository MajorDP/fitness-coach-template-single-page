import Link from "next/link";

import Image from "next/image";

function Testimonials() {
  const successStories = [
    {
      name: "Marcus - From High Body Fat to Lean Muscle",
      image: "/beforeafterclient2.png",
      stats: [
        "Dropped 10% body fat and gained visible abs and chest",
        "Increased strength across all compound lifts by 30%+",
      ],
    },
    {
      name: "David - Skinny to Fit in Just 14 Weeks",
      image: "/beforeafterclient3.jpg",
      stats: [
        "Transformed from skinny frame to visibly muscular physique",
        "Gained 15 lbs of lean muscle in 10 weeks",
      ],
    },
  ];

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center text-center gap-8 px-4 py-20 lg:px-20 bg-bg-secondary"
    >
      <h1
        className="text-3xl md:text-5xl max-w-xl mx-auto lg:mx-0 text-center font-bold tracking-wide"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Clients I&apos;ve Helped{" "}
        <span className="text-accent">Lose Weight & Get Fit</span>
      </h1>
      <p className="max-w-xl">
        Real stories from clients who&apos;ve lost fat, built strength, and
        transformed their health with personalized coaching and proven
        strategies designed for busy professionals.
      </p>
      <Link
        href="#contact"
        className="w-fit px-8 py-4 bg-gradient-to-br from-accent hover:to-accent to-accent-hover text-text-secondary md:text-lg transition font-semibold"
      >
        Become The Next Success Story
      </Link>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {successStories.map((story, index) => (
          <div className={`flex flex-col gap-12 items-start`} key={story.name}>
            <div className="flex flex-col gap-8 w-full text-center">
              <h2 className="text-xl font-semibold">{story.name}</h2>
              <ul className="mt-auto space-y-4 flex flex-col items-left">
                {story.stats.map((stat) => (
                  <li
                    key={stat}
                    className="flex flex-col md:flex-row items-center text-left gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {stat}
                  </li>
                ))}
              </ul>
            </div>{" "}
            <div className="mt-auto flex flex-col sm:flex-row gap-4 w-full">
              <div className="relative w-full aspect-square md:w-[30rem] md:h-[20rem] mx-auto">
                <Image
                  src={story.image}
                  alt="Before and After pictures from fitness trainer's client"
                  fill
                  className="w-full h-full object-cover object-top border border-border"
                />
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 text-xs md:text-sm font-semibold rounded">
                  Before & After
                </span>
              </div>
            </div>
          </div>
        ))}
      </article>
      <div className="w-full flex flex-col items-center gap-8 py-4 px-8 bg-gradient-to-br from-accent to-accent-hover mt-8">
        <p className="text-center text-text-secondary font-semibold text-2xl max-w-2xl">
          Are You Ready To Become The Next Big Success Story?
        </p>
        <Link
          href="#contact"
          className="w-fit px-8 py-4 bg-bg-primary hover:bg-bg-secondary text-text-primary md:text-lg transition font-semibold"
        >
          Schedule A Meeting
        </Link>
      </div>
    </section>
  );
}

export default Testimonials;
