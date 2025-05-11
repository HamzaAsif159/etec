import BlogCard from "../components/BlogCard";

const blogData = [
  {
    id: "1",
    date: "Apr 22, 2022",
    title: "The Future of Wearable Tech: Trends and Innovations to Watch",
    imgSrc:
      "https://framerusercontent.com/images/4albnHYE88QncxbZbQd4TAJZ8sY.jpg",
  },
  {
    id: "2",
    date: "Apr 22, 2022",
    title: "The Rise of Smart Home Devices: Transforming the Way We Live",
    imgSrc:
      "https://framerusercontent.com/images/w8U0qeGPnEraHS19zHSqO4o34.jpg",
  },
  {
    id: "3",
    date: "Apr 22, 2022",
    title: "Gaming Gadgets: Revolutionizing Entertainment and Beyond",
    imgSrc:
      "https://framerusercontent.com/images/0qM9Ztm4HZhZHt8vNXGofUBQf2w.jpg",
  },
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4">
      <h1 className="text-4xl md:text-6xl font-medium mt-16 leading-18">
        Blog
      </h1>

      <h2 className="mt-4 text-lg md:text-xl text-gray-700">
        Stay informed with our bite-sized articles.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            date={blog.date}
            title={blog.title}
            imgSrc={blog.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
