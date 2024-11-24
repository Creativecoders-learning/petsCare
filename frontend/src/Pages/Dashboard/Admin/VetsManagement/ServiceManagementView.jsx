import PrimaryTitle from "../../../../Components/UI/PrimaryTitle";

const ServiceManagementView = ({ serviceId }) => {
  console.log(serviceId);
  return (
    <div className="w-full px-6 pb-6">
      <PrimaryTitle titleStyle="text-dark font-bold text-center">
        Service Details
      </PrimaryTitle>

      {serviceId && (
        <div className="space-y-5 text-dark-text-color">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {/* Image and Basic Info */}
            <div className="flex flex-col sm:flex-row items-center sm:space-x-6 ">
              <img
                src={serviceId?.image}
                alt={serviceId?.serviceName}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-sm"
              />
              <div className="text-center sm:text-left mt-3 sm:mt-0">
                <p className="text-lg sm:text-xl font-semibold">
                  {serviceId?.serviceName}
                </p>
                <p className="text-xs sm:text-sm">
                  <span className="font-medium">Expertise:</span>{" "}
                  {serviceId?.expertise}
                </p>
                <p className="text-xs sm:text-sm">
                  <span className="font-medium">Experience:</span>{" "}
                  {serviceId?.experience}
                </p>
              </div>
            </div>

            {/* Institute Information */}
          
            <div className="hidden lg:block">
              <p className="text-base font-semibold mb-1">Institute</p>
              <p>{serviceId?.institute}</p>
            </div>
            </div>
         

          {/* Degrees and Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 border-b border-t border-gray-300 py-4">
            <div>
              <p className="text-base font-semibold mb-2">Degrees</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-3">
               <li> {serviceId?.degrees}</li>
              </ul>
            </div>
            <div>
              <p className="text-base font-semibold mb-2">Service Type</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-3">
                {serviceId?.
serviceType}
              </ul>
            </div>
          </div>

          {/* description */}
          <div>
            <p className="text-base font-semibold mb-2">About</p>
            <p className="leading-relaxed text-gray-700">
              {serviceId?.shortDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceManagementView;
