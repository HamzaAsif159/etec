import React from "react";

export default function ReviewCard({ name, review }) {
  return (
    <div className="bg-[#F7F7F7] p-6 rounded-3xl shadow-md text-left">
      <p className="text-gray-700 mb-8">{review}</p>
      <p className="text-gray-900 font-medium">{name}</p>
    </div>
  );
}
