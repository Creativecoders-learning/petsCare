import PrimaryTitle from "../../../UI/PrimaryTitle";

export default function ReviewProductDetails({ reviewItem }) {
  return (
    <div className="w-[90%]">
      <PrimaryTitle>Product Details</PrimaryTitle>
      <div className="w-full mt-5">
        {/* product basic info */}
        <div className="flex gap-10 h-[40vh]">
          <div className="h-full w-[40%] p-4 bg-[#F5F2EB]">
            <img
              className="w-full h-full object-contain"
              src={reviewItem?.image}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium">{reviewItem?.title}</h2>
            <h5 className="text-md font-medium">{reviewItem?.category}</h5>
            <h5 className="text-lg text-gray-600">{reviewItem?.brand || "No Brand"}</h5>
            <span className="text-3xl text-primary font-bold">${reviewItem?.price}</span>
            <span>{reviewItem?.quantity}</span>
          </div>
        </div>
        {/* description */}
        <div className="flex flex-col items-start mt-10 gap-4">
            <h3 className="border-b-2 border-primary pb-2 text-xl">Description</h3>
            <p>{reviewItem?.description}</p>
        </div>
        {/* seller info */}
        <div className="flex flex-col items-start mt-10 gap-4">
            <h3 className="border-b-2 border-primary pb-2 text-xl">Seller Info</h3>
            <p>{"This is seller info"}</p>
        </div>
      </div>
    </div>
  );
}
