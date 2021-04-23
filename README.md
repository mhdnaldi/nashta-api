<h1 align="center">ExpressJS - Trinika Teknologi Mandiri API</h1>

Technoker is a job seeker website and we built this backend with Node JS and Express JS.
[More about Express](https://en.wikipedia.org/wiki/Express.js)

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v13.5.0-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create database schema
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000/)
8. You can see all the end point [here](#end-point)

## Set up .env file

Open .env file on your code editor, and copy paste this code below :

```
DB_HOST = localhost // Database host
DB_USER = your_user
DB_PASS = your_password
DB_NAME = your_database
PORT = this_project_port //example: 3000

```

## End Point

**1. GET**

- `http://localhost:3001/events` (Get all Events)

- `http://localhost:3001/events-pagination?search=&page=1` (Get events with condition)

  - `{ "search": "TITLE_NAME", "page": "1" }`

**2. POST**

- `http://localhost:3001/events` (Add event)

  - `{ "title": "text", "location": "text", "participant": "text", "date": "text", "note": "text", "images": "file"}`

...
