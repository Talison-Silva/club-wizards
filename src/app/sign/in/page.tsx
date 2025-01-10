import Form from "next/form";
import { authenticate } from "./auth";

export default () => {
  return (
    <section className="relative w-full h-screen flex">
      <div className="w-full h-full flex justify-center items-center">
        <Form action={authenticate} className="flex flex-col gap-[24px]">
          <input type="text" name="usarname" className="text-black" />
          <input type="email" name="email" className="text-black" />
          <input type="password" name="password" className="text-black" />
          <button type="submit">submit</button>
        </Form>
      </div>
    </section>
  );
};
