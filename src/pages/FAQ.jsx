import { useState, useEffect } from "react";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const faqContent = [
    {
      category: "Shopping Information",
      questions: [
        {
          question: "How can I track my order?",
          answer:
            "Once your order has been processed and shipped, you'll receive a confirmation email containing a tracking number and a link to track your package. Simply click on the provided link or enter the tracking number on our website's order tracking page to monitor the status and location of your shipment in real-time.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods to ensure a convenient shopping experience for our customers. These include major credit and debit cards such as Visa, Mastercard, American Express, as well as digital payment options like PayPal, Apple Pay, Google Pay, and more. Rest assured, all transactions are securely processed to safeguard your financial information.",
        },
        {
          question: "Can I modify or cancel my order after it's been placed?",
          answer:
            "We understand that circumstances may change after placing an order. While we strive to process orders quickly, you may still have a window of opportunity to modify or cancel your order. To do so, please contact our customer support team as soon as possible with your order details. We'll do our best to accommodate your request, but please note that once an order has been processed for shipping, modifications or cancellations may no longer be possible.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, we offer international shipping to select countries worldwide. During the checkout process, you'll have the option to select your preferred shipping method and view estimated delivery times and costs for international orders. Please note that additional customs duties or taxes may apply depending on your country's import regulations, which are the responsibility of the recipient. For more information on international shipping, please refer to our Shipping & Delivery page.",
        },
        {
          question: "How do I contact customer support?",
          answer:
            "We're here to assist you every step of the way. If you have any questions, concerns, or need assistance with your order, our dedicated customer support team is readily available to help. You can reach us via email at support@example.com or through our website's live chat feature during business hours. We strive to respond promptly to ensure a seamless shopping experience for our valued customers.",
        },
      ],
    },
    {
      category: "Payment Information",
      questions: [
        {
          question:
            "Is it safe to enter my credit card information on your website?",
          answer:
            "Absolutely. We take the security of your personal and financial information seriously. Our website is equipped with advanced encryption technology and security protocols to ensure that your data is protected against unauthorized access or interception. When you enter your credit card information during checkout, it is encrypted and transmitted securely to prevent any potential breaches. You can shop with confidence knowing that your information is safe with us.",
        },
        {
          question: "When will my credit card be charged for my order?",
          answer:
            "Your credit card will be charged at the time your order is placed. Once you complete the checkout process and submit your order, the payment will be processed immediately. You'll receive a confirmation email once the transaction is successful, and your order will be processed for shipping according to our standard processing times.",
        },
      ],
    },
    {
      category: "Order & Returns",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy. Eligible items can be returned within 30 days of delivery for a refund or exchange. Simply initiate the return process through our website's Returns & Exchanges page, and follow the provided instructions. Please ensure that the item is in its original condition with all tags and packaging intact.",
        },
        {
          question: "How can I track my order?",
          answer:
            "Once your order has been processed and shipped, you will receive a confirmation email containing a tracking number and instructions on how to track your package. Simply click on the provided tracking link or enter the tracking number on our website's order tracking page to monitor the status and location of your shipment in real-time.",
        },
      ],
    },
  ];

  const toggleQuestion = (sectionIndex, questionIndex) => {
    setOpenQuestion((prev) => ({
      ...prev,
      [sectionIndex]:
        prev[sectionIndex] === questionIndex ? null : questionIndex,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <h1 className="text-4xl md:text-6xl font-medium mb-6 md:mb-8">FAQ</h1>
      <p className="text-lg md:text-xl max-w-[520px]">
        Shop our curated selection of premium products, designed to elevate your
        everyday experiences
      </p>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Help Section - Sticky on desktop only */}
        <div
          className={`md:w-1/3 lg:w-2/5 ${
            !isMobile ? "md:sticky md:top-8 md:h-fit" : ""
          }`}
        >
          <div className="py-6 rounded-3xl max-w-[500px]">
            <h2 className="text-3xl md:text-4xl mb-4">Need Help?</h2>
            <p className="text-lg md:text-xl">
              If you have an issue or question that requires immediate
              assistance, you can click the button below to contact with a
              Customer Service representative.
            </p>
            <p className="my-4 text-lg md:text-xl">
              Please allow 06 - 12 business days from the time your package
              arrives back to us for a refund to be issued.
            </p>
            <button className="border-1 px-6 py-3 md:px-8 md:py-3.5 rounded-4xl text-base md:text-lg cursor-pointer w-full">
              Contact us
            </button>
          </div>
        </div>

        {/* FAQ Content Section */}
        <div className="md:w-2/3 lg:w-3/5 space-y-8 md:space-y-12">
          {faqContent.map((section, sectionIndex) => (
            <section
              key={section.category}
              className="scroll-mt-20"
              id={section.category.replace(/\s+/g, "-")}
            >
              <h2 className="text-3xl md:text-4xl mt-5 mb-6">
                {section.category}
              </h2>
              <div className="space-y-4 cursor-pointer">
                {section.questions.map((item, questionIndex) => (
                  <div
                    key={item.question}
                    className="bg-[#F7F7F7] hover:bg-[#EFEFEF] rounded-xl p-4 transition-all duration-300"
                  >
                    <button
                      onClick={() =>
                        toggleQuestion(sectionIndex, questionIndex)
                      }
                      className="w-full flex justify-between items-center text-left group"
                    >
                      <span className="text-base md:text-lg group-hover:text-black transition-colors">
                        {item.question}
                      </span>
                      <span
                        className={`text-xl md:text-2xl ml-4 transform transition-transform ${
                          openQuestion[sectionIndex] === questionIndex
                            ? "rotate-45"
                            : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openQuestion[sectionIndex] === questionIndex
                          ? "max-h-96 pt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
