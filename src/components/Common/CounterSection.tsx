import AnimatedCounter from "@/components/Common/AnimatedCounter";

export default function CounterSection() {
  return (
    <section className="bg-white py-10 rounded-3xl shadow-lg">
      <div className="max-w-[1170px] w-full mx-auto my-10 bg-slate-50 flex items-center justify-center">
      <div className="grid md:grid-cols-3 gap-10 text-center">
        {/* Counter 1 */}
        <div className="px-10">
          <AnimatedCounter target={25} suffix="+" />
          <p className="font-semibold text-black text-2xl">Years of Expertise</p>
          <p className="text-black text-xs">
            Delivering reliable energy solutions and trusted performance across South India for over two decades.
          </p>
        </div>

        {/* Counter 2 */}
        <div className="px-10">
          <AnimatedCounter target={5000} suffix="+" />
          <p className="font-semibold text-black text-2xl">Production Capacity</p>
          <p className="text-black text-xs">
From tubular batteries to inverters, our advanced Bangalore facility ensures consistent quality and supply.
            
          </p>
        </div>

        {/* Counter 3 */}
        <div className="px-10">
          <AnimatedCounter target={50000} suffix="+" />
          <p className="font-semibold text-black text-2xl">Satisfied Customers</p>
          <p className="text-black text-xs">
            Homes, offices, and industries across South India rely on Hi-Amps for uninterrupted power, day and night.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}
