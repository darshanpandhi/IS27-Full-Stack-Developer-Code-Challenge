-- Create the db
CREATE DATABASE homeless_data;

-- Move into the db
\c homeless_data

-- Create health_authority table
CREATE TABLE health_authority(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Create community_served table
CREATE TABLE community_served(
    community VARCHAR(50) PRIMARY KEY,
    health_authority_id INT REFERENCES health_authority(id)
);

-- Create client table
CREATE TABLE client (
    year INT NOT NULL,
    active CHAR(1) NOT NULL,
    client_id SERIAL PRIMARY KEY,
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    gender VARCHAR(6) NOT NULL,
    date_of_birth Date NOT NULL,
    city VARCHAR(50) NOT NULL,
    indigenous CHAR(1) NOT NULL,
    pwd CHAR(1) NOT NULL,
    vet CHAR(1) NOT NULL,
    emergency_sheltered CHAR(1) NOT NULL,
    bus_pass CHAR(1) NOT NULL,
    clothing_supplement CHAR(1) NOT NULL,
    pet_deposit CHAR(1) NOT NULL,
    pssg CHAR(1) NOT NULL,
    status VARCHAR(10),
    deceased DATE
);
