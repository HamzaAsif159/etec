import { useParams, Link } from "react-router-dom";

const blogData = [
  {
    id: "1",
    date: "Apr 22, 2022",
    title: "The Future of Wearable Tech: Trends and Innovations to Watch",
    imgSrc:
      "https://framerusercontent.com/images/4albnHYE88QncxbZbQd4TAJZ8sY.jpg",
    intro:
      "In recent years, wearable technology has evolved from simple fitness trackers to sophisticated gadgets that seamlessly integrate into our daily lives. From smartwatches to augmented reality glasses, the possibilities seem endless. In this article, we'll explore the latest trends and innovations shaping the future of wearable tech.",
    desc1:
      "One of the most significant trends in wearable tech is its focus on health and wellness monitoring. Today's wearables go beyond simply tracking steps and calories. They can monitor heart rate, sleep patterns, stress levels, and even detect potential health issues like irregular heart rhythms. With advancements in sensors and AI, wearables are becoming invaluable tools for proactive healthcare management.",
    desc2:
      "Another exciting development in wearable tech is the rise of smart clothing. From biometric shirts that monitor vital signs to temperature-regulating fabrics, smart clothing is revolutionizing the way we dress. Imagine garments that adjust to your body temperature or analyze your posture to prevent injuries. The integration of technology into textiles opens up a world of possibilities for both fashion and function.",
    desc3:
      "AR and VR technologies are also making waves in the world of wearables. AR glasses overlay digital information onto the real world, providing immersive experiences for users. VR headsets transport wearers to virtual worlds, offering new forms of entertainment and training. As these technologies become more accessible and affordable, we can expect to see them integrated into everyday wearables, from glasses to helmets.",
    desc4:
      "Personalization is key to the future of wearable tech. Devices that adapt to users' preferences and behaviors will become increasingly common. Whether it's recommending personalized workout routines or delivering tailored notifications, wearables will become more intuitive and user-centric. Machine learning algorithms will play a crucial role in analyzing data and providing personalized insights to users.",
    conclusion:
      "The future of wearable tech is brimming with possibilities. From health and wellness monitoring to immersive augmented reality experiences, wearables are poised to transform how we live, work, and play. As technology continues to advance, we can expect even more innovative solutions that enhance our lives in ways we never thought possible. So, keep an eye on these trends and innovations—they're just the beginning of what's to come in the world of wearable tech.",
  },
  {
    id: "2",
    date: "Apr 22, 2022",
    title: "The Rise of Smart Home Devices: Transforming the Way We Live",
    imgSrc:
      "https://framerusercontent.com/images/w8U0qeGPnEraHS19zHSqO4o34.jpg",
    intro:
      "In the age of digital innovation, our homes are becoming smarter than ever before. From thermostats that adjust to our preferences to voice-activated assistants that control our appliances, smart home devices are revolutionizing the way we live. In this blog post, we'll explore the growing popularity of smart home devices and the ways in which they're transforming our daily lives.",
    desc1:
      "One of the biggest benefits of smart home devices is the convenience they offer. With a few taps on your smartphone or a simple voice command, you can control everything from lighting and temperature to security cameras and entertainment systems. Imagine coming home to a cozy, well-lit space with your favorite music playing—all without lifting a finger.",
    desc2:
      "Smart home devices aren't just convenient—they're also eco-friendly. Many smart thermostats, for example, are equipped with sensors that detect when you're home and adjust the temperature accordingly, helping you save energy and reduce your utility bills. Similarly, smart lighting systems can automatically dim or turn off lights when they're not needed.",
    desc3:
      "One of the most exciting aspects of smart home technology is its ability to seamlessly integrate with other devices and systems. Whether it's syncing your smart thermostat with your smart speaker or connecting your security cameras to your smartphone, smart home devices work together to create a connected ecosystem that enhances your overall living experience.",
    desc4:
      "With smart home devices, you're in control. These devices can be easily customized to suit your preferences and lifestyle. Whether you prefer a bright, energetic atmosphere during the day or a cozy ambiance in the evening or a workout plan tailored to your fitness level, smart speakers and voice assistants can learn your habits and preferences over time, providing personalized recommendations and assistance.",
    conclusion:
      "The rise of smart home devices is reshaping the way we live, offering unparalleled convenience, energy efficiency, security, and connectivity. As technology continues to advance, we can expect even more innovative solutions that make our homes smarter, safer, and more comfortable than ever before. Whether you're looking to simplify your daily routines, reduce your carbon footprint, or enhance your home security, smart home devices have something to offer for everyone. So, embrace the future of home automation and discover the endless possibilities of smart living.",
  },
  {
    id: "3",
    date: "Apr 22, 2022",
    title: "Gaming Gadgets: Revolutionizing Entertainment and Beyond",
    imgSrc:
      "https://framerusercontent.com/images/0qM9Ztm4HZhZHt8vNXGofUBQf2w.jpg",
    intro:
      "Gaming has evolved from a niche hobby to a global phenomenon, and with it, so have the gadgets and technologies that enhance the gaming experience. From high-performance gaming PCs to immersive virtual reality headsets, gaming gadgets are revolutionizing entertainment and pushing boundaries like never before. In this blog post, we'll delve into the world of gaming gadgets and explore how they're transforming not only how we play but also how we interact with technology.",
    desc1:
      "One of the most significant advancements in gaming technology is the rise of virtual reality (VR). VR headsets transport players to immersive virtual worlds, allowing them to interact with their surroundings in ways never thought possible. Whether exploring fantastical realms or battling foes in intense multiplayer games, VR technology provides a level of immersion that traditional gaming simply can't match.",
    desc2:
      "Gaming gadgets wouldn't be complete without high-performance gaming PCs and consoles. These powerful machines deliver stunning graphics, lightning-fast processing speeds, and seamless gameplay experiences. Whether you're a PC enthusiast building your dream gaming rig or a console gamer enjoying the latest titles on the newest generation of consoles, these devices are the backbone of modern gaming.",
    desc3:
      "The way we interact with games has also evolved thanks to innovative input devices and controllers. From motion-sensing controllers to customizable keyboards and mice, gamers have more options than ever to tailor their gaming experience to their preferences. Additionally, advancements in haptic feedback technology provide tactile sensations that further immerse players in the gaming world.",
    desc4:
      "Gaming isn't just about playing—it's also about sharing experiences with others. Streaming platforms and content creation tools have become integral parts of the gaming community, allowing players to broadcast their gameplay, interact with fans, and even earn a living through content creation. From capture cards to streaming software, these gadgets empower gamers to share their passion with the world.",
    conclusion:
      "Gaming gadgets are not only revolutionizing entertainment but also pushing the boundaries of technology and human interaction. From immersive VR experiences to high-performance gaming PCs and innovative input devices, the possibilities for gaming are endless. As technology continues to advance, we can expect even more exciting innovations that will shape the future of gaming and entertainment. So, whether you're a casual gamer or a hardcore enthusiast, embrace the world of gaming gadgets and discover the endless possibilities they offer for entertainment and beyond.",
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return <div className="text-center py-10">Blog not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-center gap-2 sm:gap-4 text-gray-500 mx-auto py-0 text-center text-sm sm:text-base">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        <span>→</span>
        <Link to="/blog" className="hover:underline">
          Blog
        </Link>{" "}
        <span>→</span>
        <span className="truncate max-w-[200px] sm:max-w-[300px] lg:max-w-[400px]">
          {blog.title}
        </span>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] mx-auto my-0 font-medium mt-6 text-center">
        {blog.title}
      </h1>
      <p className="text-gray-500 text-xs sm:text-sm mt-4 text-center">
        {blog.date}
      </p>
      <img
        src={blog.imgSrc}
        alt={blog.title}
        className="w-full h-[400px] sm:h-[600px] lg:h-[800px] object-cover rounded-xl mt-6"
      />
      <div className="bg-[#F7F7F7] rounded-3xl">
        <div className="mt-8 max-w-2xl sm:max-w-3xl lg:max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg">
            {blog.intro}
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-8">
            1.{" "}
            {id === "3"
              ? "Immersive Virtual Reality (VR) Experiences:"
              : "Health and Wellness Monitoring:"}
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg">
            {blog.desc1}
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-8">
            2.{" "}
            {id === "3"
              ? "High-Performance Gaming PCs and Consoles:"
              : "Smart Clothing:"}
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg">
            {blog.desc2}
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-8">
            3.{" "}
            {id === "3"
              ? "Innovative Input Devices and Controllers:"
              : "Augmented Reality (AR) and Virtual Reality (VR):"}
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg">
            {blog.desc3}
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-8">
            4.{" "}
            {id === "3"
              ? "Streaming and Content Creation Tools:"
              : "Personalized Experiences:"}
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg">
            {blog.desc4}
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-8">
            Conclusion:
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg">
            {blog.conclusion}
          </p>
        </div>
      </div>
    </div>
  );
}
