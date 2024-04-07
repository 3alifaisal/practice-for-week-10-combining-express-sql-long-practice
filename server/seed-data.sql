-- BASIC PHASE 1A - DROP and CREATE table
DROP TABLE IF EXISTS trees;

CREATE TABLE trees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tree VARCHAR(32),
    location VARCHAR(64),
    height_ft NUMERIC,
    ground_circumference_ft NUMERIC
);
-- Your code here

-- BASIC PHASE 1B - INSERT seed data
-- Your code here
INSERT INTO trees (tree, location, height_ft, ground_circumference_ft) VALUES 
('General Sherman', 'Sequoia National Park', 274.9, 102.6),
('General Grant*', 'Kings Canyon National Park', 268.1, 107.5),
('President*', 'Sequoia National Park', 240.9, 93),
('Lincoln', 'Sequoia National Park', 255.8, 98.3),
('Stagg', 'Alder Creek', 243, 109),
('Boole', 'Converse Basin', 268.8, 113),
('Genesis', 'Mountain Home State Forest', 253, 85.3),
('Franklin', 'Sequoia National Park', 223.8, 94.8),
('King Arthur', 'Sequoia National Park', 270.3, 104.2),
('Monroe', 'Sequoia National Park', 247.8, 91.3),
('Robert E. Lee', 'Kings Canyon National Park', 254.7, 88.3),
('unnamed', 'Garfield Grove', 273.1, 99.5),
('Adams', 'Sequoia National Park', 250.6, 83.3),
('Ishi Giant', 'Giant Sequoia National Monument', 255, 105.1),
('Column', 'Sequoia National Park', 243.8, 93),
('Summit Road', 'Mountain Home State Forest', 244, 82.2),
('Euclid', 'Mountain Home State Forest', 272.7, 83.4),
('Washington', 'Yosemite National Park', 236, 95.7),
('Pershing', 'Sequoia National Park', 246, 91.2),
('Diamond', 'Sequoia National Park', 286, 95.3),
('Adams', 'Mountain Home State Forest', 247.4, 94.2),
('Roosevelt/False Heart', 'Kings Canyon National Park', 260, 80),
('Nelder', 'Sierra National Forest', 266.2, 90),
('AD', 'Sequoia National Park', 242.4, 99),
('Hart', 'Kings Canyon National Park', 277.9, 75.3),
('Grizzly Giant', 'Yosemite National Park', 209, 92.5),
('Chief Sequoyah', 'Sequoia National Park', 228.2, 90.4),
('Methuselah', 'Mountain Home State Forest', 207.8, 95.8),
('Great Goshawk', 'Giant Sequoia National Monument', 255.2, 90.2),
('Hamilton', 'Sequoia National Park', 238.5, 82.6);
