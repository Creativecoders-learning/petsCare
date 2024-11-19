import PrimaryTitle from "../../../UI/PrimaryTitle";

const ModalContent = ({ selectedVet }) => {
  return (
    <div className="w-full px-6 pb-6">
      <PrimaryTitle titleStyle="text-dark font-bold text-center">
        Veterinarian Details
      </PrimaryTitle>
      {selectedVet && (
        <div className="space-y-5 text-dark-text-color">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {/* Image and Basic Info */}
            <div className="flex flex-col sm:flex-row items-center sm:space-x-6 ">
              <img
                src={selectedVet?.image}
                alt={selectedVet?.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-sm"
              />
              <div className="text-center sm:text-left mt-3 sm:mt-0">
                <p className="text-lg sm:text-xl font-semibold">
                  {selectedVet?.name}
                </p>
                <p className="text-xs sm:text-sm">
                  <span className="font-medium">Expertise:</span>{" "}
                  {selectedVet?.expertise}
                </p>
                <p className="text-xs sm:text-sm">
                  <span className="font-medium">Experience:</span>{" "}
                  {selectedVet?.experience}
                </p>
              </div>
            </div>

            {/* Institute Information */}
            <div className="hidden lg:block">
              <p className="text-base font-semibold mb-1">Institute</p>
              <p>{selectedVet?.institute}</p>
              <p className="text-xs text-gray-500">
                {selectedVet?.instituteLocation}
              </p>
            </div>
          </div>

          {/* Degrees and Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 border-b border-t border-gray-300 py-4">
            <div>
              <p className="text-base font-semibold mb-2">Degrees</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-3">
                {selectedVet?.degrees.map((degree, index) => (
                  <li key={index}>{degree}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-base font-semibold mb-2">Education</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-3">
                {selectedVet?.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Institute Information */}
          <div className="lg:hidden">
            <p className="text-base font-semibold mb-1">Institute</p>
            <p>{selectedVet?.institute}</p>
            <p className="text-xs text-gray-500">
              {selectedVet?.instituteLocation}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <p className="text-base font-semibold mb-2">Work Experience</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-3">
              {selectedVet?.work_experiences.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>

          {/* Awards */}
          <div>
            <p className="text-base font-semibold mb-2">Awards</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-3">
              {selectedVet?.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="text-base font-semibold mb-2">About</p>
            <p className="leading-relaxed text-gray-700">
              {selectedVet?.about}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalContent;
