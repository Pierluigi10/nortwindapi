import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:3047");
      response = await response.json();
      response.customers.map((customer) => {
        delete customer.email_address;
        delete customer.home_phone;
        delete customer.mobile_phone;
        delete customer.web_page;
        delete customer.notes;
        delete customer.attachments;
        return customer;
      });
      setRecords(response.customers);
      // setCustomers(response.customers);
    })();
  }, []);

  return (
    <div>
      {/* <div>
        {records.map((record, index) => (
          <div key={index}>
            <div>
              {Object.values(record).map((f, index) => {
                if (typeof f !== "object") return <p key={index}>{f}</p>;
                return null;
              })}
            </div>
          </div>
        ))}
      </div> */}

      {/* <div>
        {records.map((record, index) => (
          <div key={index}>

            <div>
              {Object.values(record).map((f, index) => {
                if (typeof f !== "object") return <p key={index}>{f}</p>;
                return null;
              })}
            </div>
          </div>
        ))}
      </div> */}

      <table>
        <thead>
          <tr>
            {records.length &&
              Object.keys(records[1]).map((f, index) => {
                if (typeof f !== "object") return <th key={index}>{f}</th>;
                return null;
              })}
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              {Object.values(record).map((f, index) => {
                if (typeof f !== "object") return <td key={index}>{f}</td>;
                return <td>{}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div>
        {records.map((record, index) => (
          <div key={index}>
        
            <div>
              {Object.values(record).map((f, index) => {
                return typeof f !== "object" ? f : null;
              })}
            </div>
          </div>
        ))}
      </div> */}

    </div>
  );
}

export default Home;
