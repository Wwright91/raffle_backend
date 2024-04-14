INSERT INTO raffles(name, secret_token, created_on, raffled_on, winner_id)
VALUES
('Christmas Raffle', 'presents', CURRENT_TIMESTAMP, NULL, NULL),
('King of the Hill Raffle', 'propane', CURRENT_TIMESTAMP, NULL, NULL);

INSERT INTO participants (first_name, last_name, email, phone, raffle_id)
VALUES
('Santa', 'Claus', 'santa@gmail.com', '555-555-5555', 1),
('Rudolph', 'Reindeer', 'rudolph@gmail.com', '', 1),
('Mrs.', 'Claus', 'mrssanta@gmail.com', '555-555-5556', 1),
('Dancer', 'Reindeer', 'dancer@gmail.com', '', 1),
('Comet', 'Reindeer', 'comet@gmail.com', '', 1),
('Vixen', 'Reindeer', 'vixen@gmail.com', '', 1),
('Hank', 'Hill', 'hank@gmail.com', '1800-propane', 2),
('Bobby', 'Hill', 'bobby@gmail.com', '', 2),
('Peggy', 'Hill', 'peggy@gmail.com', '', 2),
('Bill', 'Dauterive', 'bill@gmail.com', '1800-army-strong', 2);