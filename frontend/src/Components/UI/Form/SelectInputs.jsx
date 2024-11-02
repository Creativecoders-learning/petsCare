export default function SelectInputs({labelName, options, optionName, selectOption, setSelectOption}) {

    // handle input
    const handleSelectOption = (value) => {
        setSelectOption(value);
    }

  return (
    <div className="space-y-2 w-full">
      <label htmlFor="name">{labelName}</label>
      <select
        name="country"
        value={selectOption}
        className="w-full px-6 py-3 border focus:outline-none text-[#000] focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
        onChange={(e) => handleSelectOption(e)}
      >
        {/* Placeholder option */}
        <option value="" disabled>
          {`Select ${optionName}`}
        </option>
        {options?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
