
const AdoptionButton = ({text,fullWidth}) => {
    return (
        <div>
            <button className={`relative h-14 ${fullWidth  ? 'w-full' : 'w-60'}   origin-bottom transform rounded-lg before:ease-linear  before:absolute before:bottom-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:px-0 hover:before:bg-[#0A453A] hover:before:rounded-md text-white bg-red-600 font-nunito font-extrabold text-xl`}>
                  {text}
              </button>
        </div>
    );
};

export default AdoptionButton;