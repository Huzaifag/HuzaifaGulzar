"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    text: "Years of Experience",
  },
  {
    num: 26,
    text: "Project Completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code Commits",
  },
];

export default function Stats() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap mx-auto gap-6 max-w-[80-vw] xl:max-w-none">
          {stats.map((item, index) => (
            <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`leading-snug text-white/80 ${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}` }
>
  {item.text}
</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
