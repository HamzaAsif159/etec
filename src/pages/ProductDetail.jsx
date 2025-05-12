import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../redux/slices/productDetailSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureCard from "../components/FeatureCard";
import ReviewCard from "../components/ReviewCard";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const dispatch = useDispatch();
  const { productId } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useSelector((state) => state.productDetail);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  // Base URL for images
  const baseURL = "https://ndyaggyxnq.us-east-1.awsapprunner.com/";
  const imagesWithBaseURL = product.images.map((image) => `${baseURL}${image}`);

  // Slider settings for mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  const openGallery = (index) => {
    setSelectedImage(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % imagesWithBaseURL.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + imagesWithBaseURL.length) % imagesWithBaseURL.length
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Product Detail Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Product Images - Mobile Slider */}
        <div className="lg:hidden">
          <Slider {...sliderSettings}>
            {imagesWithBaseURL.map((image, index) => (
              <div key={index} className="px-2">
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-md">
                  <img
                    src={image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    onClick={() => openGallery(index)}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Product Images - Desktop View (unchanged) */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4 order-2 lg:order-1">
            {imagesWithBaseURL.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="w-48 max-h-[180px] cursor-pointer rounded-xl overflow-hidden bg-[#F7F7F7]"
                onClick={() => openGallery(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full max-h-[180px] object-cover"
                />
              </div>
            ))}
          </div>
          <div
            className="flex-1 aspect-square max-h-[570px] relative cursor-pointer order-1 lg:order-2 bg-gray-100 rounded-xl overflow-hidden shadow-md"
            onClick={() => openGallery(0)}
          >
            <img
              src={imagesWithBaseURL[0]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl tracking-tight">{product.name}</h1>
          <p className="mt-6 text-gray-700 text-normal leading-relaxed">
            {product.description}
          </p>

          <div className="my-6">
            <span className="text-4xl">USD {product.price.toFixed(2)}</span>
          </div>

          <button className="bg-black text-white px-10 py-4 w-full rounded-full text-lg font-medium">
            Buy now
          </button>

          <div className="pt-6 text-center">
            <p className="text-gray-600 text-sm">
              Estimate delivery times: 3-6 days (International)
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Return within 45 days of purchase. Duties & taxes are
              non-refundable.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-6 text-center">
            {[
              {
                title: "Warranty",
                icon: <i className="fas fa-shield-alt mb-3"></i>,
                arrowIcon: <i className="fa fa-arrow-right"></i>,
              },
              {
                title: "Shipping & delivery",
                icon: <i className="fas fa-truck mb-3"></i>,
                arrowIcon: <i className="fa fa-arrow-right"></i>,
              },
              {
                title: "Support",
                icon: <i className="fas fa-headset mb-3"></i>,
                arrowIcon: <i className="fa fa-arrow-right"></i>,
              },
            ].map((item, index) => (
              <div
                className="flex justify-between w-full items-center px-4"
                key={index}
              >
                <div className="p-4 flex gap-2">
                  <div className="inline-block">{item.icon}</div>
                  <div className="text-gray-700">{item.title}</div>
                </div>
                <div className="text-gray-700">{item.arrowIcon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeGallery}
          >
            ✕
          </button>

          <div className="relative w-full max-w-5xl">
            <div className="relative aspect-square w-full">
              <img
                src={imagesWithBaseURL[selectedImage]}
                alt={`${product.name} gallery view`}
                className="w-full h-full object-contain"
              />
            </div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-3 rounded-full"
              onClick={prevImage}
            >
              ❮
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-3 rounded-full"
              onClick={nextImage}
            >
              ❯
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {imagesWithBaseURL.map((image, index) => (
                <div
                  key={index}
                  className={`w-14 h-14 border-2 rounded overflow-hidden cursor-pointer ${
                    selectedImage === index
                      ? "border-white"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#F7F7F7] rounded-3xl py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center text-center gap-5 justify-center">
              <div className="bg-gray-100 rounded-full p-4">
                <i className="fas fa-truck text-2xl text-gray-800"></i>
              </div>
              <div>
                <h3 className="text-lg">Free Shipping</h3>
                <p>$24+ orders ship free</p>
              </div>
            </div>
            <div className="flex items-center text-center gap-5 justify-center">
              <div className="bg-gray-100 rounded-full p-4">
                <i className="fas fa-lock text-2xl text-gray-800"></i>
              </div>
              <div>
                <h3 className="text-lg">Secure Payments</h3>
                <p>Trusted payment options</p>
              </div>
            </div>
            <div className="flex items-center text-center gap-5 justify-center">
              <div className="bg-gray-100 rounded-full p-4">
                <i className="fas fa-undo-alt text-2xl text-gray-800"></i>
              </div>
              <div>
                <h3 className="text-lg">45 Days Free Return</h3>
                <p>Easy, risk-free returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://framerusercontent.com/images/hvO6FS5AyzdfvLMhR53gjJaQpE.png"
            alt="feature-image"
            className="w-full max-w-7xl h-auto max-h-[700px] my-4 rounded-3xl object-contain"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 py-8 md:py-12">
          {product.features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.name}
              desc={feature.content}
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 items-start mt-8">
          <h1 className="text-4xl font-medium">
            What customers <br />
            <span className="inline-block mt-2 text-gray-400">are saying</span>
          </h1>

          <div>
            <p className="max-w-[420px]">
              Experience the convenience and satisfaction shared by our thriving
              community of shoppers who trust our ecommerce store for their
              every purchase.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {product.reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              review={review.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
