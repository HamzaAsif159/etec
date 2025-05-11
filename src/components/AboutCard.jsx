export default function AboutCard() {
  return (
    <div className="relative max-w-[400px] overflow-hidden mt-12 cursor-pointer">
      <div className="h-[500px]">
        <img
          src="https://framerusercontent.com/images/7IKyhgRDZPO1UJciT7DCqhB6lo.jpg"
          alt="Sony WH-CH720N Wireless Headphones"
          className="h-full object-cover transition-transform duration-500 rounded-2xl"
        />
      </div>
      <div className="mt-4 text-2xl">Enduring Innovation</div>
      <p className="text-gray-600 text-lg">
        Shop with confidence knowing that our products are sourced from
        reputable factories worldwide, adhering to stringent compliance
        standards
      </p>
    </div>
  );
}
