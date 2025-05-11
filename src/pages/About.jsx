import AboutCard from "../components/AboutCard";

const CheckStore = ({ reverse = false }) => {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-6 md:gap-12`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-100 rounded-3xl h-64 sm:h-80 md:h-96 w-full flex items-center justify-center overflow-hidden">
              <img
                src="https://framerusercontent.com/images/vQAxeXQWUx7aC8ULw9roRgdzE.jpg"
                alt="Premium Tech Selection"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-medium">
              Premium Tech Selection
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 md:mb-8">
              Our pursuit of excellence involves extensive exploration of
              top-tier factories globally, ensuring our tech lineup mirrors the
              standards upheld by renowned brands. We forge strong partnerships
              with these facilities, prioritizing factors like sustainability
              and ethical production practices.
            </p>
            <button className="w-full sm:w-54 border-1 px-6 py-3 sm:px-8 sm:py-3.5 rounded-4xl text-base sm:text-lg cursor-pointer self-center md:self-start">
              Check our store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6">
      {/* Hero Section */}
      <div className="mt-8 md:mt-12 lg:mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-normal">
          Accessible excellence:
          <br /> Perfect tech for everyone!
        </h1>
        <div className="mt-4">
          <h2 className="mt-2 md:mt-4 text-base sm:text-lg md:text-xl text-gray-700">
            With over two decades of expertise, we've meticulously crafted
            collections that epitomize{" "}
            <span className="hidden sm:inline">
              <br />
            </span>{" "}
            enduring quality and technological innovation, catering to the
            diverse needs of our clients.
          </h2>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-6 md:mt-8">
        <img
          src="https://framerusercontent.com/images/kd4S5H00asijIiOte7mbOgIxBGA.jpg"
          alt="hero-image"
          className="object-cover h-82 sm:h-64 md:h-80 lg:h-[500px] xl:h-[700px] w-full object-center rounded-3xl md:rounded-4xl"
          loading="lazy"
        />
      </div>

      {/* Features Section */}
      <div className="bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center text-left gap-3 sm:gap-4 md:gap-5 justify-start">
              <div className="bg-gray-100 rounded-full p-3 sm:p-4">
                <i className="fas fa-truck text-xl sm:text-2xl text-gray-800"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg">Free Shipping</h3>
                <p className="text-sm sm:text-base">$24+ orders ship free</p>
              </div>
            </div>
            <div className="flex items-center text-center sm:text-left gap-3 sm:gap-4 md:gap-5 justify-start">
              <div className="bg-gray-100 rounded-full p-3 sm:p-4">
                <i className="fas fa-lock text-xl sm:text-2xl text-gray-800"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg">Secure Payments</h3>
                <p className="text-sm sm:text-base">Trusted payment options</p>
              </div>
            </div>
            <div className="flex items-center text-center sm:text-left gap-3 sm:gap-4 md:gap-5 justify-start">
              <div className="bg-gray-100 rounded-full p-3 sm:p-4">
                <i className="fas fa-undo-alt text-xl sm:text-2xl text-gray-800"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg">45 Days Free Return</h3>
                <p className="text-sm sm:text-base">Easy, risk-free returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-8 md:py-12">
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>

      {/* Check Store Sections */}
      <div className="pb-8 md:pb-16">
        <CheckStore />
        <CheckStore reverse={true} />
      </div>
    </div>
  );
}
