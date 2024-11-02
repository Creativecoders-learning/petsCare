import { useForm } from "react-hook-form";
import Button from "../Button";
import PrimaryTitle from "../PrimaryTitle";

export default function CustomForm({ btnTitle, children, title }) {
  const { handleSubmit } = useForm();

  // handle form
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <PrimaryTitle>{title}</PrimaryTitle>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-3">{children}</div>

        <div className="flex justify-center">
          <Button primary btnStyle="w-full">
            {btnTitle}
          </Button>
        </div>
      </form>
    </div>
  );
}
