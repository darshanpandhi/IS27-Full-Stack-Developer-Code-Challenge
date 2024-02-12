-- Seed health_authority table
INSERT INTO health_authority(name) VALUES ('Northern Health');
INSERT INTO health_authority(name) VALUES ('Interior Health');
INSERT INTO health_authority(name) VALUES ('Island Health');
INSERT INTO health_authority(name) VALUES ('Fraser Health');
INSERT INTO health_authority(name) VALUES ('Vancouver Coastal Health');


-- Seed communities served by Northern Health
COPY community_served(community)
FROM '/Users/darshanpandhi/Darshan/Software_Engineering/IS27-Full-Stack-Developer-Code-Challenge/eliminate-homelessness/Data/NorthernHealth.csv' -- replace with your file path
DELIMITER ','
CSV;

UPDATE community_served
SET health_authority_id = (
    SELECT id
    FROM health_authority
    WHERE name = 'Northern Health'
)
WHERE health_authority_id IS NULL;

-- Seed communities served by Interior Health
COPY community_served(community)
FROM '/Users/darshanpandhi/Darshan/Software_Engineering/IS27-Full-Stack-Developer-Code-Challenge/eliminate-homelessness/Data/InteriorHealth.csv'
DELIMITER ','
CSV;

UPDATE community_served
SET health_authority_id = (
    SELECT id
    FROM health_authority
    WHERE name = 'Interior Health'
)
WHERE health_authority_id IS NULL;

-- Seed communities served by Island Health
COPY community_served(community)
FROM '/Users/darshanpandhi/Darshan/Software_Engineering/IS27-Full-Stack-Developer-Code-Challenge/eliminate-homelessness/Data/IslandHealth.csv'
DELIMITER ','
CSV;

UPDATE community_served
SET health_authority_id = (
    SELECT id
    FROM health_authority
    WHERE name = 'Island Health'
)
WHERE health_authority_id IS NULL;

-- Seed communities served by Fraser Health
COPY community_served(community)
FROM '/Users/darshanpandhi/Darshan/Software_Engineering/IS27-Full-Stack-Developer-Code-Challenge/eliminate-homelessness/Data/FraserHealth.csv'
DELIMITER ','
CSV;

UPDATE community_served
SET health_authority_id = (
    SELECT id
    FROM health_authority
    WHERE name = 'Fraser Health'
)
WHERE health_authority_id IS NULL;

-- Seed communities served by Vancouver Coastal Health
COPY community_served(community)
FROM 'eliminate-homelessness/Data/VancouverCoastalHealth.csv'
DELIMITER ','
CSV;

UPDATE community_served
SET health_authority_id = (
    SELECT id
    FROM health_authority
    WHERE name = 'Vancouver Coastal Health'
)
WHERE health_authority_id IS NULL;

-- Removing Trailing Spaces
UPDATE community_served
SET community = RTRIM(community);

-- Seed Data.csv
COPY client (year, active, client_id, first_name, last_name, gender, date_of_birth, city, indigenous, pwd, vet, emergency_sheltered, bus_pass, clothing_supplement, pet_deposit, pssg, status, deceased)
FROM '/Users/darshanpandhi/Darshan/Software_Engineering/IS27-Full-Stack-Developer-Code-Challenge/eliminate-homelessness/Data/Data.csv'
DELIMITER ','
CSV HEADER;

-- Removing Periods
UPDATE client
SET city = REPLACE(city, '.', '');

-- Add foreign key constraint to client table
ALTER TABLE client
ADD FOREIGN KEY (city)
REFERENCES community_served(community);
