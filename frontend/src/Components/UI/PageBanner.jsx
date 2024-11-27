import Container from "./Container";

export default function PageBanner({ title, pageName }) {
  return (
    <div className="relative h-full">
      <img
        className="w-full h-full"
        src="../../../public/page-banner.jpg"
        alt=""
      />
      <div className="absolute top-0 w-full h-full flex justify-start items-center">
        <Container>
          <div className="flex flex-col items-start gap-2 lg:gap-4 text-white px-10">
            <span className="hidden sm:block bg-primary px-4 py-3 lg:px-6 lg:py-4 lg:text-3xl md:text-xl sm:text-lg text-sm rounded-2xl font-bold">{title}</span>
            <h2 className="lg:text-xl md:text-lg sm:text-md font-medium text-primary">
              Home{"  "}|{"  "}
              <span className="text-white">{pageName}</span>
            </h2>
          </div>
        </Container>
      </div>
    </div>
  );
}
