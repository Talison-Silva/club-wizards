import { Riple } from "react-loading-indicators";

export default () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <Riple
        color="#4242ff"
        speedPlus={-2}
        size="medium"
        text=""
        textColor=""
      />
    </section>
  );
};
