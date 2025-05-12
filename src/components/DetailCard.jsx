export default function DetailCard({ title, desc }) {
  return (
    <div className="relative max-w-[400px] overflow-hidden mt-12 cursor-pointer">
      <div className="h-[500px]">
        <img
          src="https://framerusercontent.com/images/7IKyhgRDZPO1UJciT7DCqhB6lo.jpg"
          alt="Sony WH-CH720N Wireless Headphones"
          className="h-full object-cover transition-transform duration-500 rounded-2xl"
        />
      </div>
      <div className="mt-4 text-xl md:text-2xl">{title}</div>
      <p className="text-gray-600 text-base md:text-lg">{desc}</p>
    </div>
  );
}
