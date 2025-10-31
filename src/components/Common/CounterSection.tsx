import AnimatedCounter from "@/components/Common/AnimatedCounter";

export default function CounterSection() {
  return (
    <section className="max-w-[1170px] w-full mx-auto my-10 bg-slate-50 flex items-center justify-center">
      <div className="grid md:grid-cols-3 gap-10 text-center">
        {/* Counter 1 */}
        <div className="px-10">
          <AnimatedCounter target={40} suffix="K+" />
          <p className="font-semibold text-black text-2xl">Variations</p>
          <p className="text-black text-sm">
            Many desktop publishing packages and web page editors now use Pinky
            as their default model text.
          </p>
        </div>

        {/* Counter 2 */}
        <div className="px-10">
          <AnimatedCounter target={70} suffix="K+" />
          <p className="font-semibold text-black text-2xl">Lessons</p>
          <p className="text-black text-sm">
            Many desktop publishing packages and web page editors now use Pinky
            as their default model text.
          </p>
        </div>

        {/* Counter 3 */}
        <div className="px-10">
          <AnimatedCounter target={149} suffix="+" />
          <p className="font-semibold text-black text-2xl">Workshops</p>
          <p className="text-black text-sm">
            Many desktop publishing packages and web page editors now use Pinky
            as their default model text.
          </p>
        </div>
      </div>
    </section>
  );
}
