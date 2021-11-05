# Create API that serves data from MySQL database

Install MySQL on Windows, Ubuntu or Mac along with appropriate database management software, and create an API that serves data from teh MySQL database.

## Install MySQL server on your operating system

- use the following howtos to instructions your installation:
    - [Install MySQL on Ubuntu and create Node/Express API](https://onespace.netlify.app/howtos?id=422)
    - [Install MySQL on Windows and create Node/Express API](https://onespace.netlify.app/howtos?id=423)
- create a user called `webuser` which have readonly writes on the database (can only execute `SELECT` statements)

## Import the Northwind database into your MySQL server

- you can use [this version of Northwind database](https://github.com/dalers/mywind) which imports well into MySQL
- execute the two scripts to create the database and import the data
   - `northwind.sql`
   - `northwind-data.sql`

## Install SQL Management software

- for Ubuntu, install **DBeaver**
- for Windows, install **MySQL Workbench**
- connect management software to your database by logging in as the `webuser` that you created above
- test to make sure you can execute SQL queries on your database
- also test that the `webuser` cannot execute any other SQL commands other than `SELECT` (e.g. it should get an error when attemptint to issue INSERT or DELETE commands)

## Create a Node/Express API that connects to the Northwind database and serves its data on endpoints

- use the basic structure of the Node/Express/SQLite API that you build in [exercise 509](https://github.com/FbW-D01/Exercise-509-BE-DAT-createAPIForNorthwindDatabase)
- replace the SQLite code with code to connect to and retrieve data from the MySQL database
- 
## Create and fetch the data from the following routes and display them on the page

- for each, display **title** and an **HTML table** showing the records
- if specific fields are not specified, choose appropriate and useful fields to display

**Employee list with first and last name alphabetized by last name:** (`/employee-list`)

| Nnnnnn        | Nnn           | Nnnn  |
| ------------- |:-------------:| -----:|
| ........      | .....         | ....  |
| ........      | .....         | ....  |

**Invitation list for all employees and customers showing first and last names alphabetized by last name:** (`/invitation-list`)

(Hint: you need to use `UNION`)

| Nnnnnn        | Nnn           | Nnnn  |
| ------------- |:-------------:| -----:|
| ........      | .....         | ....  |
| ........      | .....         | ....  |


## :medal_sports: SECURITY BONUS: Move the password from code to an ENV variable

- make sure that the ENV file does not get checked into your GitHub repository

## :muscle: CLEAN CODE CHALLENGE: Create MySqlManager class 

- create a class to encapsulate the logic for gettings records from the MySQL database with an SQL command
- call it `MySqlManager`
- create a method called `getRecordsWithSql(sql)`
- you will access it with the following example code:

```
const msm = new MySqlManager();
const records = msm.getRecordsWithSql('SELECT first_name, last_name FROM employees ORDER BY last_name');
```

## :muscle: CRUD CHALLENGE: Create an endpoint that enables you to change employee data

- create a new user in the MySQL server called `webeditor` which has both `SELECT` and `UPDATE` priveleges
- use this user to create an endpoint that accepts an object with the following through fields

```
{
    employed_id: 11,
    first_name: "Nigel",
    last_name: "Waterson"
}
```

- the endpoint will then update the employee with ID 11 with the new names, and will return one of two objects in the response:

`Response Code: 200`
```
{
    message: "Employee with ID 11 was updated."
}
```

`Response Code: 404`
```
{
    message: "Employee with ID 999 does not exist."
}
```

- Hint: the endpoint should use the `PATCH` method
- test with API client (Postman, Insomnia or Rest Client Plugin)
