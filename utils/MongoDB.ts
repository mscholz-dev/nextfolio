import { MongoClient } from "mongodb";

export default class MongoDB {
  async clientPromise(): Promise<MongoClient> {
    // choose production or development database
    const client = new MongoClient(
      process.env.MONGODB_URI as string,
      {},
    );

    return client.connect();
  }
}
