import { register } from "./register";
import Form from "next/form";

export default () => {
  return (
    <section className="relative w-full h-screen flex">
      <div className="w-full h-full flex justify-center items-center">
        <Form action={register} className="flex flex-col gap-[24px]">
          <input type="text" name="username" className="text-black" />
          <input type="email" name="email" className="text-black" />
          <input type="password" name="password" className="text-black" />
          <button type="submit">submit</button>
        </Form>
      </div>
    </section>
  );
};
