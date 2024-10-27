const categories = ["Cats", "Dogs", "Rabbits", "Fishes"];

const subCategories = ["Foods", "Accessories", "Medicines"];

export default function FilterOption({ setCategory, setSubCategory }) {
  return (
    <div className="p-6 flex flex-col gap-6 justify-center items-start">
      {/* select categories */}
      <div className="w-full flex flex-col gap-2 justify-center items-start">
        <label className="text-[#5B5B5B] font-semibold">
          Choose Categories
        </label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          name="categories"
          className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
        >
          <option value="" disabled selected>
            Select categories
          </option>
          {categories?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* select sub-categories */}
      <div className="w-full flex flex-col gap-2 justify-center items-start">
        <label className="text-[#5B5B5B] font-semibold">
          Choose Categories
        </label>
        <select
          onChange={(e) => setSubCategory(e.target.value)}
          name="categories"
          className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
        >
          <option value="" disabled selected>
            Select categories
          </option>
          {subCategories?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
