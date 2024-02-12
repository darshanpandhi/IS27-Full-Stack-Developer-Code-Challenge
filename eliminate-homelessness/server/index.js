const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes

// Create a Client
app.post("/clients", async (req, res) => {
  try {
    const {
      year,
      active,
      first_name,
      last_name,
      gender,
      date_of_birth,
      city,
      indigenous,
      pwd,
      vet,
      emergency_sheltered,
      bus_pass,
      clothing_supplement,
      pet_deposit,
      pssg,
      status,
      deceased,
    } = req.body;

    const newClient = await pool.query(
      "INSERT INTO client (year, active, first_name, last_name, gender, date_of_birth, city, indigenous, pwd, vet, emergency_sheltered, bus_pass, clothing_supplement, pet_deposit, pssg, status, deceased) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *",
      [
        year,
        active,
        first_name,
        last_name,
        gender,
        date_of_birth,
        city,
        indigenous,
        pwd,
        vet,
        emergency_sheltered,
        bus_pass,
        clothing_supplement,
        pet_deposit,
        pssg,
        status,
        deceased,
      ]
    );

    res.json(newClient.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all Clients

// Get a Client

// Update a Client

// Delete a Client

app.listen(4000, () => {
  console.log("Server successfully started on Port 4000");
});
