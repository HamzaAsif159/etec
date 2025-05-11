const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-medium mb-4">Contact us</h1>
        <p className="text-lg md:text-xl max-w-[650px]">
          We're here to assist you with any inquiries, feedback, or assistance
          you may need. Whether you have questions about products, orders, or
          general inquiries, our dedicated customer support team is ready to
          help.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-8">
        <div className="space-y-6 w-full max-w-[400px]">
          <div className="bg-[#F7F7F7] px-6 py-6 h-[350px] flex flex-col justify-between rounded-3xl text-lg">
            <div>
              <h2 className="text-2xl font-medium mb-3">Phone number</h2>
              <p className="text-xl text-gray-800 mb-2">+123 456 789</p>
            </div>
            <p className="text-gray-600">
              Call our team directly. We will provide information, answer
              technical questions, or schedule an appointment.
            </p>
          </div>
          <div className="bg-[#F7F7F7] px-6 py-6 h-[350px] flex flex-col justify-between rounded-3xl text-lg">
            <div>
              <h2 className="text-2xl font-medium mb-3">E-mail</h2>
              <p className="text-xl text-gray-800 mb-2">example@gmail.com</p>
            </div>
            <p className="text-gray-600">
              Use email to provide information about the project. We will
              respond as soon as possible, providing comprehensive support.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F7F7] w-full px-6 py-6 rounded-3xl flex flex-col h-full">
          <h2 className="text-2xl font-medium mb-3">Drop us a message</h2>
          <p className="text-gray-600 mb-6">
            We're always here to assist you at Elec. Our customer support team
            is dedicated to addressing your inquiries.
          </p>

          <form className="space-y-4 flex-1 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 bg-white border-none rounded-3xl placeholder-gray-700 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-white border-none rounded-3xl placeholder-gray-700 outline-none"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <textarea
                placeholder="Message"
                className="flex-1 w-full px-4 py-2 bg-white border-none rounded-3xl placeholder-gray-700 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition-colors mt-auto"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
