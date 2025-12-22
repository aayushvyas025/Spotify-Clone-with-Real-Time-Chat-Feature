import mongoose from "mongoose";
import { Song } from "../../model/index.js";
import { Constants } from "../../helper/index.js";

const { envVariables, seedingSongs } = Constants;

const { mongodbUri } = envVariables;

const seedSongs = async () => {
  try {
    await mongoose.connect(mongodbUri);

    await Song.deleteMany({});

    await Song.insertMany(seedingSongs); 
    console.log(`Songs Seed Successfully`); 
  } catch (error) {
    console.error(
      `Error while connecting with mongodb database:${error?.message}`
    );
    process.exit(1);
  } finally {
    mongoose.connection.close();
  }
};

seedSongs();
