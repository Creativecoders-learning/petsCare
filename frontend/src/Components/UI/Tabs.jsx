import { useState } from "react";

const tabs = [
  {
    title: "Details More",
    description:
      "The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dogs nearest living relative. The dog was the first species to be domesticated, by hunter gatherers. These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old. doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dogs nearest These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old. doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dogs nearest include the core vaccines, which aradministered.",
  },
  {
    title: "Information",
    description:
      "The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dogs nearest living relative. The dog was the first species to be domesticated, by hunter gatherers. These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old. doiated dendant of.",
  },
  {
    title: "Reviews",
    description:
      "The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dogs nearest living relative. The dog was the first species to be domesticated",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleSelectedTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      {/* tabs */}
      <div className={`group flex gap-6 border-b border-b-gray-400 pb-3 px-2`}>
        {tabs?.map((item, index) => (
          <span
            onClick={() => handleSelectedTab(index)}
            className={`text-xl font-medium cursor-pointer ${
                activeTab === index ? "text-[#ff4b36] border-b-[2px] border-b-[#ff4b36]" : ""
              }`}
            key={index}
          >
            {item?.title}
          </span>
        ))}
      </div>
      <div className="py-6 px-4">
        {tabs?.map((item, index) =>
          activeTab === index ? (
            <span key={index}>{item?.description}</span>
          ) : null
        )}
      </div>
    </div>
  );
}
