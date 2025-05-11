import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedProducts } from "../redux/slices/featuredProductsSlice";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const dispatch = useDispatch();
  const {
    data: featuredProducts,
    loading,
    error,
  } = useSelector((state) => state.featuredProducts);

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

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

  // Slider settings for mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4">
      <h1 className="pr-4 md:pr-0 text-4xl md:text-6xl font-medium mt-16 md:leading-18">
        Elevate your lifestyle <br />
        with premium essentials.
      </h1>
      <div className="md:flex items-center justify-between mt-4">
        <h2 className="mt-4 md:text-xl text-gray-700">
          Elevate your daily routine with our meticulously <br /> selected
          premium goods and curated essentials.
        </h2>
        <Link to="/shop">
          <button className="border-1 mt-4 md:mt-0 px-8 py-3.5 rounded-4xl text-lg cursor-pointer">
            Browse all products
          </button>
        </Link>
      </div>
      <div className="md:hidden mt-8">
        {loading && <p>Loading featured products...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && featuredProducts.length > 0 ? (
          <Slider {...sliderSettings}>
            {featuredProducts.map((product) => (
              <div key={product.id} className="px-2">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  images={product.images}
                  featured={true}
                />
              </div>
            ))}
          </Slider>
        ) : (
          !loading && <p>No featured products found.</p>
        )}
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 mt-8">
        {loading && <p>Loading featured products...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && featuredProducts.length > 0
          ? featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                images={product.images}
                featured={true}
              />
            ))
          : !loading && <p>No featured products found.</p>}
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl font-medium mt-16 leading-18">
          Browse by categories
        </h1>
        <h2 className="mt-3 text-xl text-gray-700">
          Explore our diverse range of categories tailored to <br /> meet your
          specific needs and interests.
        </h2>
      </div>

      <div className="md:flex gap-8 items-center">
        <div className="my-12 max-w-[630px]">
          <div className="relative w-full h-[680px] bg-[#F7F7F7] rounded-lg overflow-hidden">
            <div className="flex flex-col justify-between h-full">
              <div className="px-8">
                <h1 className="text-2xl font-medium mt-16 leading-18">
                  All products
                </h1>
                <h2 className="-mt-1 text-lg text-black">
                  Discover endless possibilities with our All Products category.
                  <br />
                  Shop now for everything you need in one convenient place.
                </h2>
                <Link to="/shop">
                  <button className="border-1 px-8 py-3.5 rounded-4xl text-lg cursor-pointer my-6 bg-white">
                    Browse all products
                  </button>
                </Link>
              </div>
              <img
                src="https://framerusercontent.com/images/yD047Kl5EbewEFW5RyrRcTsrA.png"
                alt="Sony WH-CH720N Wireless Headphones"
                className="h-full w-full object-contain -mt-2"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="my-3 max-w-[630px]">
            <div className="relative w-full md:h-[380px] bg-[#F7F7F7] rounded-lg overflow-hidden">
              <div className="md:flex justify-between h-full">
                <div className="px-8">
                  <h1 className="text-2xl font-medium mt-8 leading-18">
                    Displays
                  </h1>
                  <h2 className="-mt-1 text-lg text-black">
                    Experience crystal-clear clarity and vibrant visuals with
                    our Displays.
                  </h2>
                  <Link to="/shop/displays">
                    <button className="border-1 px-8 py-3.5 rounded-4xl md:text-lg cursor-pointer my-6 bg-white">
                      Check Displays
                    </button>
                  </Link>
                </div>
                <img
                  src="https://framerusercontent.com/images/epvE5hFHNlkcGbnrpB2IayKiHUE.png"
                  alt="Sony WH-CH720N Wireless Headphones"
                  className="h-full w-full object-cover -mt-2 "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-4">
            <div className="relative w-[300px] h-[300px] bg-[#F7F7F7] rounded-lg overflow-hidden group transition-all duration-300">
              <div className="absolute bottom-4 left-20 z-10 bg-white">
                <span className="inline-block text-gray-600 px-3 py-1 rounded-2xl border-1 text-lg">
                  Headphones
                </span>
              </div>
              <Link to="/shop/headphones">
                <div className="h-full p-6 flex justify-center items-center">
                  <img
                    src="https://store.sony.co.nz/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dw53ac9731/images/WHCH720NW/WHCH720NW.png"
                    alt="Sony WH-CH720N Wireless Headphones"
                    className="h-full object-contain"
                  />
                </div>
              </Link>
            </div>
            <div className="relative w-[300px] h-[300px] bg-[#F7F7F7] rounded-lg overflow-hidden group transition-all duration-300">
              <div className="absolute bottom-5 left-28 z-10 bg-white">
                <span className="inline-block text-gray-600 px-3 py-1 rounded-2xl border-1 text-lg">
                  Phones
                </span>
              </div>
              <Link to="/shop/phones">
                <div className="h-full p-6 flex justify-center items-center">
                  <img
                    src="https://framerusercontent.com/images/R3ixekN751tQ9urOSnopl9GZo8.png"
                    alt="Sony WH-CH720N Wireless Headphones"
                    className="h-full object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="md:flex items-center justify-between mt-16">
          <h1 className="text-3xl md:text-4xl font-medium leading-18">
            Our articles and news
          </h1>
          <Link to="/blog">
            <button className="border-1 px-8 py-3.5 rounded-4xl text-lg cursor-pointer">
              Check all
            </button>
          </Link>
        </div>
        <Slider {...sliderSettings} className="mt-8">
          {blogData.map((blog) => (
            <div key={blog.id} className="px-2">
              <BlogCard
                id={blog.id}
                date={blog.date}
                title={blog.title}
                imgSrc={blog.imgSrc}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center justify-between mt-16">
          <h1 className="text-4xl font-medium leading-18">
            Our articles and news
          </h1>
          <Link to="/blog">
            <button className="border-1 px-8 py-3.5 rounded-4xl text-lg cursor-pointer">
              Check all
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 mt-8">
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
    </div>
  );
}
