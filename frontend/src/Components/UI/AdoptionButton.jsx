
const AdoptionButton = ({text,fullWidth,disabled,btnStyle,onclick}) => {
    return (
        <div>
            <button type="submit" onClick={onclick} disabled={disabled} className={`relative h-14 ${fullWidth  ? 'w-full' : `${btnStyle}`}   origin-bottom transform rounded-lg before:ease-linear  before:absolute before:bottom-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:px-0 hover:before:bg-[#0A453A] hover:before:rounded-md hover:before:disabled:bg-slate-300 text-white bg-primary font-nunito font-extrabold text-xl disabled:cursor-not-allowed disabled:bg-gray-400`}>
                  {text}
              </button>
        </div>
    );
};

export default AdoptionButton;