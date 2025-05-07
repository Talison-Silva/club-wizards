"use server";
import fs from "fs";
import { join } from "path";

export async function generateDefaultSkin() {}

export async function uploadFile(image: String = "") {
  var pwd = process.cwd();

  /*fs.writeFile(
    join(pwd, "public", "static", "skins", `${image + ".jpg"}`),

    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(".hello.");
      }
    },
  );*/
}
