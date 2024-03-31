INSERT INTO raffles(name, secret_token, created_on, raffled_on, winner_id)
VALUES
('Cool Prize Raffle', '7ak349', CURRENT_TIMESTAMP, NULL, NULL),
('Hot Summer Raffle', '38rts12', CURRENT_TIMESTAMP, NULL, NULL);

INSERT INTO participants (first_name, last_name, email, phone, raffle_id)
VALUES
('Wisdom', 'Wright', 'wisdom@gmail.com', '555-555-5555', 1),
('Nia', 'Wright', 'nia@gmail.com', '555-555-5556', 2);