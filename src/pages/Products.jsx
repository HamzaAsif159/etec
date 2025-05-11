import { useParams, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductCard from "../components/ProductCard";
import TabButton from "../components/TabButton";

export default function Products() {
  const { category } = useParams();
  const location = useLocation();
  const currentTab = category || (location.pathname === "/shop" ? "all" : "");
  const dispatch = useDispatch();
  const tabsRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const {
    data: productsData,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
      }
    };

    const tabsElement = tabsRef.current;
    if (tabsElement) {
      tabsElement.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (tabsElement) {
        tabsElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      tabsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading)
    return <div className="text-center py-12">Loading products...</div>;
  if (error)
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;

  const products = productsData?.data || [];

  const allTabs = [
    { title: "All products", link: "/shop", category: "all" },
    { title: "Headphones", link: "/shop/headphones", category: "headphones" },
    { title: "Displays", link: "/shop/displays", category: "displays" },
    { title: "Watches", link: "/shop/watches", category: "watches" },
    { title: "Phones", link: "/shop/phones", category: "phones" },
  ];

  const filteredProducts =
    currentTab === "all" || !currentTab
      ? products
      : products.filter((product) => product.category === currentTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Add Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mt-8 md:mt-12 lg:mt-16">
        Shop
      </h1>
      <h2 className="mt-2 md:mt-3 lg:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
        Check out our full collection of products tailored to your needs
      </h2>

      {/* Tabs Navigation */}
      <div className="relative mt-4 md:mt-6">
        {/* Mobile Arrows */}
        <div className="md:hidden flex justify-between items-center absolute inset-y-0 w-full pointer-events-none">
          {showLeftArrow && (
            <button
              onClick={() => scrollTabs("left")}
              className="pointer-events-auto p-2 bg-white rounded-full shadow-md ml-2 z-10"
            >
              <i className="fas fa-chevron-left text-gray-700"></i>
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scrollTabs("right")}
              className="pointer-events-auto p-2 bg-white rounded-full shadow-md mr-2 z-10"
            >
              <i className="fas fa-chevron-right text-gray-700"></i>
            </button>
          )}
        </div>

        {/* Tabs Container */}
        <div
          ref={tabsRef}
          className="flex space-x-2 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
        >
          {allTabs.map((tab) => (
            <TabButton
              key={tab.category}
              title={tab.title}
              link={tab.link}
              blackBgBtn={currentTab === tab.category}
              className="flex-shrink-0" // Prevent tabs from shrinking
            />
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              images={product.images}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No products found in this category
          </div>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
