import { useForm } from "react-hook-form";
import Button from "../../UI/Button";

export default function VisaCardForm({ onSubmit }) {
      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm();

      return (
            <form className="space-y-8 py-10" onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-8">
                        {/* Name input */}
                        <div className="space-y-2">
                              <label className="text-[#5B5B5B] font-semibold" htmlFor="name">
                                    Card Name
                              </label>
                              <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your name"
                                    className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                                    {...register("name", { required: true })}
                              />
                              {errors.name && (
                                    <span className="text-red-600">This field is required</span>
                              )}
                        </div>

                        {/* Email input */}
                        <div className="space-y-2">
                              <label className="text-[#5B5B5B] font-semibold" htmlFor="email">
                                    Card Number
                              </label>
                              <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                                    {...register("email", { required: true })}
                              />
                              {errors.email && (
                                    <span className="text-red-600">This field is required</span>
                              )}
                        </div>


                        {/* Photo URL Input */}
                        <div className="flex flex-col lg:flex-row xl:flex-row justify-between gap-10">
                              <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
                                    <label className="text-[#5B5B5B] font-semibold" htmlFor="photoUrl">
                                          Expiration Date ( MM/YY )
                                    </label>
                                    <input
                                          type="url"
                                          name="photoUrl"
                                          id="photoUrl"
                                          placeholder="Your Profile Photo URL"
                                          className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                                          {...register("photoUrl", { required: true })}
                                    />
                                    {errors.photoUrl && (
                                          <span className="text-red-600">This field is required</span>
                                    )}
                              </div>

                              {/* Password input */}
                              <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
                                    <label className="text-[#5B5B5B] font-semibold" htmlFor="password">
                                          CVC
                                    </label>
                                    <input
                                          type="text"
                                          name="password"
                                          id="password"
                                          placeholder="Password"
                                          className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                                          {...register("password", { required: true })}
                                    />
                                    {errors.password && (
                                          <span className="text-red-600">This field is required</span>
                                    )}
                              </div>
                        </div>
                  </div>

                  <div className="w-full">
                        {/* <input
                              className="bg-[#49BBBD] px-12 py-4 rounded-xl text-white cursor-pointer w-full"
                              type="submit"
                              value="Pay"
                        /> */}
                        <Button btnStyle="w-full" primary>Pay</Button>
                  </div>
            </form>
      );
}
