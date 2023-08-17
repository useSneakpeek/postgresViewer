const db = require("../services/db");

const getEvents = async () => {
  try {
    const pool = await db.getEventsDB();
    const { rows } = await pool.query(
      "SELECT _timestamp, source_ip, doc_host, location_city, location_continent, location_country, location_country_name, location_zip, user_agent FROM events ORDER BY _timestamp DESC LIMIT 50"
    );
    const jsonData = JSON.parse(JSON.stringify(rows));
    return jsonData;
  } catch (err) {
    console.error("error:" + err);
    return {};
  }
};

module.exports = { getEvents };
