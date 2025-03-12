import mongoose from "mongoose";

const cached = (global as any).mongoose || { connect: null, promise: null };

export const connectDatabase = async (
  MONGODB_URL = process.env.MONGODB_URL
) => {
  if (cached.connect) return cached.connect;

  if (!MONGODB_URL) throw new Error("MONGODB is missing");

  cached.promise = cached || mongoose.connect(MONGODB_URL);
  cached.connect = await cached.promise;

  return cached.connect;
};
