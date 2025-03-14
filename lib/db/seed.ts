import data from "@/lib/data";
import { connectDatabase } from ".";
import Product from "./models/product.model";
import { cwd } from "process";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(cwd());

const main = async () => {
  try {
    const { products } = data;
    await connectDatabase(process.env.MONGODB_URL);

    await Product.deleteMany();
    const createdProduct = await Product.insertMany(products);

    console.log({ createdProduct, message: "Seeded database Successfully" });

    process.exit(0);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send database");
  }
};


main()