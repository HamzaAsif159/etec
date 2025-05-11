export default function Newsletter() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-[#F7F7F7] rounded-xl p-6 sm:p-8 md:p-12 border border-gray-200">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Text Content */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-2 sm:mb-3">
                Subscribe to our email <br className="hidden sm:block" />{" "}
                newsletter and get 15% off
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg my-4 sm:my-6">
                Be the first to know about the latest in tech trends, exclusive
                offers, and exciting product launches by subscribing to our
                newsletter.
              </p>
            </div>

            {/* Email Form */}
            <div className="w-full max-w-[450px] sm:max-w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 sm:py-3 w-full sm:w-[350px] md:w-[450px] rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                />
                <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3.5 rounded-4xl text-sm sm:text-lg w-full sm:w-auto mt-2 sm:mt-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
