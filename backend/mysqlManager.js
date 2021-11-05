import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const pass = process.env.PASSWORD;

class MysqlManager {
  getRecordsWithSql(sql) {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: "localhost",
        user: "webuser",
        password: pass,
        database: "northwind",
      });
      connection.connect((err) => {
        if (err) reject(err);
        connection.query(sql, (err, records) => {
          if (err) reject(err);
          resolve(records);
        });
      });
    });
  }
}

export default MysqlManager;
