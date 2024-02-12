const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

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
app.get("/clients", async (req, res) => {
  try {
    const allClients = await pool.query("SELECT * FROM client");

    res.json(allClients.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a Client
app.get("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.query(
      "SELECT * FROM client WHERE client_id = $1",
      [id]
    );
    res.json(client.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a Client
app.put("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;
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

    const updatedClient = await pool.query(
      "UPDATE client SET year = $1, active = $2, first_name = $3, last_name = $4, gender = $5, date_of_birth = $6, city = $7, indigenous = $8, pwd = $9, vet = $10, emergency_sheltered = $11, bus_pass = $12, clothing_supplement = $13, pet_deposit = $14, pssg = $15, status = $16, deceased = $17 WHERE client_id = $18 RETURNING *",
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
        id,
      ]
    );

    res.json(updatedClient.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a Client
app.delete("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedClient = await pool.query(
      "DELETE FROM client WHERE client_id = $1 RETURNING *",
      [id]
    );

    res.json(deletedClient.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(4000, () => {
  console.log("Server successfully started on Port 4000");
});
