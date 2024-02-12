-- Seed health_authority table
INSERT INTO health_authority(name) VALUES ('Northern Health');
INSERT INTO health_authority(name) VALUES ('Interior Health');
INSERT INTO health_authority(name) VALUES ('Island Health');
INSERT INTO health_authority(name) VALUES ('Fraser Health');
INSERT INTO health_authority(name) VALUES ('Vancouver Coastal Health');


-- Seed communities served by Northern Health
COPY community_served(community)
FROM '/Users/darshanpandhi/Library/CloudStorage/OneDrive-Personal/Documents/Career/Darshan/Job Oppurtunities+Applications/BC Public Service/Full Stack Developer/Coding Challenge/IS27-Full-Stack-Developer-Code-Challenge/Data/NorthernHealth.csv' -- replace with your file path
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
FROM '/Users/darshanpandhi/Library/CloudStorage/OneDrive-Personal/Documents/Career/Darshan/Job Oppurtunities+Applications/BC Public Service/Full Stack Developer/Coding Challenge/IS27-Full-Stack-Developer-Code-Challenge/Data/InteriorHealth.csv'
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
FROM '/Users/darshanpandhi/Library/CloudStorage/OneDrive-Personal/Documents/Career/Darshan/Job Oppurtunities+Applications/BC Public Service/Full Stack Developer/Coding Challenge/IS27-Full-Stack-Developer-Code-Challenge/Data/IslandHealth.csv'
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
FROM '/Users/darshanpandhi/Library/CloudStorage/OneDrive-Personal/Documents/Career/Darshan/Job Oppurtunities+Applications/BC Public Service/Full Stack Developer/Coding Challenge/IS27-Full-Stack-Developer-Code-Challenge/Data/FraserHealth.csv'
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
FROM '/Users/darshanpandhi/Library/CloudStorage/OneDrive-Personal/Documents/Career/Darshan/Job Oppurtunities+Applications/BC Public Service/Full Stack Developer/Coding Challenge/IS27-Full-Stack-Developer-Code-Challenge/Data/VancouverCoastalHealth.csv'
DELIMITER ','
CSV;

UPDATE community_served
SET health_authority_id = (
    SELECT id
    FROM health_authority
    WHERE name = 'Vancouver Coastal Health'
)
WHERE health_authority_id IS NULL;

