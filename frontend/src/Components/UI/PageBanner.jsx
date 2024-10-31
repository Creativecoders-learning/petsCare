import Container from "./Container";

export default function PageBanner({ title, pageName }) {
  return (
    <div className="relative">
      <img
        className="w-full h-full"
        src="https://kutto.netlify.app/img/bg/breadcrumb_bg.jpg"
        alt=""
      />
      <div className="absolute top-0 w-full h-full flex justify-start items-center">
        <Container>
          <div className="flex flex-col items-start gap-4 text-white px-10">
            <span className="bg-primary px-6 py-4 text-4xl rounded-2xl font-bold">{title}</span>
            <h2 className="text-2xl font-bold text-primary">
              Home{"  "}|{"  "}
              <span className="text-white">{pageName}</span>
            </h2>
          </div>
        </Container>
      </div>
    </div>
  );
}
