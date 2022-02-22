\c cta_dev;

-- INSERT INTO test (name) VALUES
-- ('Monday'),
-- ('Tuesday'),
-- ('Wednesday'),
-- ('Thursday'),
-- ('Friday'),
-- ('Saturday'),
-- ('Sunday');

INSERT INTO books (name, image, author, description, price, rating, featured) VALUES
('Life Force', 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982121709/life-force-9781982121709_lg.jpg', 'Tony Robbins', 'Transform your life or the life of someone you love with Life Force—the newest breakthroughs in health technology to help maximize your energy and strength, prevent disease, and extend your health span', 20.11, 5, TRUE),
('The Whole Body Reset', 'https://images-na.ssl-images-amazon.com/images/I/41SUyl11bpL._SX329_BO1,204,203,200_.jpg', 'Stephen Perrine', 'Stop—and even reverse!—age-related weight gain and muscle loss with the first-ever weight-loss plan specifically designed to shrink your belly, extend your life, and create your healthiest self at mid-life and beyond.', 26.99, 4, TRUE),
('Harry Potter and the Order of the Phoenix', 'https://images-na.ssl-images-amazon.com/images/I/51T1MGQHi8L._SX422_BO1,204,203,200_.jpg', 'J. K. Rowling', 'The fifth book in the beloved, bestselling Harry Potter series, now illustrated in brilliant full color.', 43.99, 4, TRUE),
('M Is for Mama', 'https://images-na.ssl-images-amazon.com/images/I/51WSztTeqHL._SX373_BO1,204,203,200_.jpg', 'Abbie Halberstadt', 'Mama of ten Abbie Halberstadt helps women humbly and gracefully rise to the high calling of motherhood without settling for mediocrity or losing their minds in the process. ', 17.99, 4, TRUE),
('Enough Already', 'https://images-na.ssl-images-amazon.com/images/I/41A+2VWGZwS._SX331_BO1,204,203,200_.jpg', 'Valerie Bertinelli', 'Beloved actress, Food Network personality, and New York Times bestselling author Valerie Bertinelli reflects on life at sixty and beyond.', 16.29, 4, TRUE),
('Renegades', 'https://images-na.ssl-images-amazon.com/images/I/41phfZlrGkL._SX496_BO1,204,203,200_.jpg', 'Barack Obama', 'NEW YORK TIMES BESTSELLER • Two longtime friends share an intimate and urgent conversation about life, music, and their enduring love of America, with all its challenges and contradictions, in this stunningly produced expansion of their groundbreaking Higher Ground podcast, featuring more than 350 photographs, exclusive bonus content, and never-before-seen archival material.', 24.00, 4, TRUE),
('Quicksilver', 'https://images-na.ssl-images-amazon.com/images/I/51fUIVSAn1L._SX331_BO1,204,203,200_.jpg', 'Dean Koontz', '#1 New York Times bestselling master of suspense Dean Koontz takes a surprising and exhilarating road trip with a man in pursuit of his strange past―mile by frightening mile.', 18.99, 5, TRUE),
('Minimalista', 'https://images-na.ssl-images-amazon.com/images/I/41DAG6GffHL._SX389_BO1,204,203,200_.jpg', 'Shira Gill', 'Elevate your personal style, trim your belongings, and transform your life, one room at a time, with this visionarylifestyle andhome organization book from professional organizing expert, Shira Gill.', 21.12, 5,TRUE),
('The Watch Book Rolex', 'https://images-na.ssl-images-amazon.com/images/I/51wFuV1oZyS._SX391_BO1,204,203,200_.jpg', 'Gisbert L. Brunner', 'The best-selling photo book now in a new, expanded edition, including the latest Rolex models from 2020 and 2021', 69.03, 4, TRUE);


INSERT INTO reviews (book_id, reviewer, title, content, rating )
VALUES
('1', 'Dani Johnson', 'Incredible tips and tools', 'I''ve been waiting for this book to come out for months, and I''m SO excited to finally have my copy!!!', 5),
('1', 'Dr.Simran MD', 'A book every person needs in their library!', 'What can I do doc? I''ll do anything. I''m not ready to die', 5),
('3', 'Nathan Schwinnen', 'One of the best of this amazing series', 'All of the Harry Potter books are 5-star. They are so good that they make it difficult to review other books. It''s almost impossible to give any other book 5 stars when compared to this series.', 5),
('3', 'Warrior Mom', 'Amazing', 'I started reading this series to my 9-year-old son to see if I could interest him in chapter books.', 5),
('4', 'Jennifer Flanders', 'Must Read for Mamas of All Ages and Stages', 'I devoured this book. As a mother of 12 myself, I deeply appreciated the fly-on-the-wall view of life in a large, loving family the author gives her readers.', 5),
('5', 'Michelle', 'Just what I needed', 'Luv this book - agree Enough Already!', 5),
('5', 'Krystne Morrow', 'It wasn’t signed', 'I followed link on Valerie’s website to pre-order and get a signed copy and it wasn’t', 1),
('6', 'minimee', 'Two of my favorite men!', 'This book is incredible. I can''t put it down.', 5),
('6', 'C Poole', 'An awesome and generous collaboration for the ages!', 'Obama and Springsteen delivered and did not disappoint! Sit back with your favorite beverage and a box of tissues when experiencing this epic piece of literature. Bravo!', 5),
('7', 'belizabeth4', 'Hope there''s a follow-on.....', 'If you liked Odd Thomas and By the Light of the moon, chances are you''ll like these characters.', 5),
('8', 'Andrew Piper', 'Even the maximalistas love Minimalista!', 'This book is for EVERYONE!', 5);
