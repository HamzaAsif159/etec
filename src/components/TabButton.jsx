import { useNavigate } from "react-router-dom";

export default function TabButton({ title, link, blackBgBtn = false }) {
  const navigate = useNavigate();

  return (
    <button
      className={`border-1 px-6 py-3 rounded-4xl text-base cursor-pointer transition-colors ${
        blackBgBtn
          ? "bg-black text-white hover:bg-gray-800"
          : "hover:bg-gray-100"
      }`}
      onClick={() => navigate(link)}
    >
      {title}
    </button>
  );
}
