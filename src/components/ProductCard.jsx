import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  price,
  images = [],
  featured = false,
}) {
  const BASE_IMAGE_URL = "http://62.146.177.196:8080/";
  const mainImage = `${BASE_IMAGE_URL}${images[0]}`;

  return (
    <Link to={`/products/${id}`}>
      <div
        className="my-12 transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
        key={id}
      >
        <div className="relative w-full h-[480px] bg-gray-100 rounded-lg overflow-hidden">
          {featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-block text-lg px-3 py-0.5 rounded-2xl border-1">
                Featured
              </span>
            </div>
          )}
          <div className="h-full p-6 flex justify-center items-center">
            <img src={mainImage} alt={name} className="h-full object-cover" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 text-lg">
          <h3 className="text-black font-normal">{name}</h3>
          <h3 className="text-gray-600">USD {price}</h3>
        </div>
      </div>
    </Link>
  );
}
