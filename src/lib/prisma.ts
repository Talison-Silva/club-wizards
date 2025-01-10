import { PrismaClient } from "@prisma/client";
import { Get, Post } from "@/types/prisma";

class Prisma {
  prisma: any;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async get(model: string, filter: object) {
    let response: any[] = [];

    try {
      response = await this.prisma.user.findMany({
        where: {
          ...filter,
        },
      });

      return response;
    } catch (err) {
      console.error(err);
    }
  }

  async post(model: string, data: object) {
    let response: any = [];

    try {
      response = await this.prisma.user.create({
        data: {
          ...data,
        },
      });
      return response;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.stack);
      }
    }
  }
}

export default new Prisma();
