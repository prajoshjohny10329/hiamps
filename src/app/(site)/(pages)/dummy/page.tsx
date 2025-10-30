import AnimatedCounter from "@/components/Common/AnimatedCounter";

export default function CounterSection() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="grid md:grid-cols-3 gap-10 text-center">
        {/* Counter 1 */}
        <div>
          <AnimatedCounter target={40} suffix="K+" />
          <p className="font-semibold text-indigo-500">Variations</p>
          <p className="text-slate-500 text-sm">
            Many desktop publishing packages and web page editors now use Pinky
            as their default model text.
          </p>
        </div>

        {/* Counter 2 */}
        <div>
          <AnimatedCounter target={70} suffix="K+" />
          <p className="font-semibold text-indigo-500">Lessons</p>
          <p className="text-slate-500 text-sm">
            Many desktop publishing packages and web page editors now use Pinky
            as their default model text.
          </p>
        </div>

        {/* Counter 3 */}
        <div>
          <AnimatedCounter target={149} suffix="+" />
          <p className="font-semibold text-indigo-500">Workshops</p>
          <p className="text-slate-500 text-sm">
            Many desktop publishing packages and web page editors now use Pinky
            as their default model text.
          </p>
        </div>
      </div>
    </main>
  );
}
