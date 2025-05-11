import { Link } from "react-router-dom";

export default function BlogCard({ date, title, imgSrc, id }) {
  return (
    <Link to={`/blog/${id}`} className="block">
      <div className="relative max-w-[400px]  overflow-hidden group transition-all duration-300 mt-12 cursor-pointer hover:scale-102">
        <div className="h-[400px]">
          <img
            src={imgSrc}
            alt="Sony WH-CH720N Wireless Headphones"
            className="h-full object-cover transition-transform duration-500 rounded-2xl w-full"
          />
        </div>
        <h2 className="mt-2 text-black text-xl">{title}</h2>
        {date && <div className="mt-2 text-gray-600 text-lg">{date}</div>}
      </div>
    </Link>
  );
}
