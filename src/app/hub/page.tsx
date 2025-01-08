import prisma from "@/lib/prisma";
import { Suspense } from "react";

const fecthServers = async () => {
  var response: any = await prisma.apply("server").get({ filter: {} });

  return response;
};

export default async () => {
  var test = await fecthServers();
  console.log(test);
  return (
    <div>
      <p>test</p>
    </div>
  );
};
