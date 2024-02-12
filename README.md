# Technologies Used

- React
- HTML
- CSS
- Bootstrap
- Node
- Express
- PostgreSQL
- Git

# Project / Repository Structure

- client (React)
- server (Node, Express)
- Data (inital data files + schema and seed files)

# Server

To run the server simply execute `nodemon index` from within the server directory. It will be hosted on port 4000.

# Web App

To run the client web app simply execute `npm start` from within the client directory. It uses the pre-defined script in 'package.json' file.

The web-app will be hosted on port 3000.

# Database

Postgres will be hosted on port 5432.

## Web App Supports:

- Viewing existing clients and their associated data
- Searching a client through `client_id`
- Modifying client data (except `client_id`)
- Deleting a client

Also, additional components and routes have been defined for future extension of this project. So, even though, the app in its current state does not need additional features right now due to limited scope, these files/code have been included in the repo.

## How to use the Web-App

Once the server, web-app and postgres (including table creation through the schema file and table seeding through the seed file) is complete and running,

- Enter the client-id of the client in the search bar and press search
- This will populate all the fields below with the client data
- Feel free to edit any fields (except client_id). After satisfaction, hit save changes to persist data in DB
- Alternatively, you can press delete to remove the client permanently
