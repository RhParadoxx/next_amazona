import mongoose from "mongoose";

const cached = (global as any).mongoose || { conn: null, promise: null };

export const connectDatabase = async (
  MONGODB_URL = process.env.MONGODB_URL
) => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("MONGODB is missing");

  cached.promise = cached.promise || mongoose.connect(MONGODB_URL);

  cached.conn = await cached.promise;

  return cached.conn;
};
