export default function FeatureCard({ title, desc }) {
  return (
    <div className="relative max-w-[500px] overflow-hidden mt-6 cursor-pointer">
      <div className="h-[350px]">
        <img
          src="https://framerusercontent.com/images/7IKyhgRDZPO1UJciT7DCqhB6lo.jpg"
          alt="Sony WH-CH720N Wireless Headphones"
          className="h-full object-cover transition-transform duration-500 rounded-2xl"
        />
      </div>
      <div className="mt-4 text-xl md:text-2xl">{title}</div>
      <p className="text-gray-600 text-base md:text-lg max-w-[350px]">{desc}</p>
    </div>
  );
}
