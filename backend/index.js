import express from "express";
import cors from "cors";
// import mysql from "mysql";
import MysqlManager from "./mysqlManager.js";

const app = express();
const port = process.env.PORT || 3047;

app.use(cors());

app.get("/", async (req, res) => {
  const sqm = new MysqlManager();
  const exampleRecords = await sqm.getRecordsWithSql(`SELECT * FROM customers`);
  res.json({
    customers: exampleRecords,
  });
});

app.get("/employee-list", async (req, res) => {
  const sqm = new MysqlManager();
  const exampleRecords = await sqm.getRecordsWithSql(
    `SELECT last_name, first_name FROM employees ORDER BY last_name`
  );
  console.log(exampleRecords);
  res.json({
    employees: exampleRecords,
  });
});

app.get("/invitation-list", async (req, res) => {
    const sqm = new MysqlManager();
    const exampleRecords = await sqm.getRecordsWithSql(
      `(SELECT  last_name, first_name FROM employees UNION SELECT  last_name, first_name FROM customers) ORDER BY last_name`
    );
    console.log(exampleRecords);
    res.json({
      guests: exampleRecords,
    });
  });

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
