import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_DB);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (err) => {
      console.log("MongoDB error. please make sure");
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong!!");
    console.log(error);
  }
}
