const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

class DB {
  async getEventsDB() {
    if (!this.events_pool) {
      console.log(
        "Connecting to Events postgres in Conversations",
        process.env.PGDATABASE
      );
      this.events_pool = new Pool({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
        max: 10,
      });
      this.events_pool.on("error", (err) => {
        // eslint-disable-next-line no-console
        console.error("Unexpected error on idle client", err);
      });
    }

    return this.events_pool;
  }

  async init() {
    await this.getEventsDB();
  }
}

const dbInstance = new DB();
dbInstance.init();

module.exports = dbInstance;
