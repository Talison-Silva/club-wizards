import { PrismaClient } from "@prisma/client";
import { Get, Post } from "@/types/prisma";

class Prisma {
  model: string;
  prisma: any;

  constructor() {
    this.prisma = new PrismaClient();
    this.model = "";
  }

  apply(model: string) {
    this.model = model;
    return {
      get: this.get,
      post: this.post,
    };
  }

  async get() {
    let response: any[] = [];

    try {
      response = await this.prisma[this.model].findMany();
    } catch (err) {
      console.error(err);
    } finally {
      return response;
    }
  }

  async post({ data = {} }: Post) {
    let response: any[] = [];

    try {
      response = await this.prisma[this.model].create({
        ...data,
      });
    } catch (err) {
      console.error(err);
    } finally {
      return response;
    }
  }
}

export default new Prisma();
