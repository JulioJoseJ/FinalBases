create table comic(
    id serial primary key ,
    name varchar(250),
    description varchar(500),
    price int,
    category varchar(500)
);

create table character(
    id serial primary key ,
    name varchar(250),
    powers varchar(500),
    weaknesses varchar(500),
    affiliations varchar(500)
);

create table villager(
    id serial primary key,
    name varchar(250),
    description varchar(500),
    availability boolean
);

create table mortalArms(
    id serial primary key ,
    name varchar(250),
    description varchar(500),
    availability boolean
);

create table customer(
    id serial primary key ,
    name varchar(250),
    Birthday DATE,
    email varchar(250)
);

create table transaction(
  id serial primary key ,
  customer_id serial references customer(id),
  comic_id serial references comic(id),
  purchase_date date not null default current_date,
  amount int /*total price*/
);


create table comics_character(
    id serial primary key,
    character_id serial references character(id),
    comic_id serial references comic(id)
);

create table comic_villager(
    id serial primary key,
    villager_id serial references villager(id),
    comic_id serial references comic(id)
);

create table mortalArm_comic(
    id serial primary key,
    mortalArm_id serial references mortalArms(id),
    comic_id serial references comic(id)
);
create table special_offer(
  id serial primary key,
  customer_name varchar(250) not null,
  customer_birthday date not null
);



create or replace function add_to_special_offer()
returns trigger as $$
    begin
    if (select name from comic where id = new.comic_id) = 'Superman en Calzoncillos
con Batman Asustado' then insert into special_offer(customer_name, customer_birthday) values(
        (select name from customer  where id = new.customer_id),
        (select Birthday from customer where id = new.customer_id)
    );
end if ;
    return new;
    end;
    $$ language plpgsql;

create trigger trigger_special_offer
    after insert on transaction
    for each row execute function add_to_special_offer();

create view popular_comic as
    select comic.name, count(transaction.id) as purchase_count from comic join transaction on comic.id = transaction.comic_id
group by comic.name having count(transaction.comic_id)>=50;
select * from popular_comic;

create materialized view top_customers as
    select customer.id, customer.name, count(transaction.comic_id) as prurchases, sum(transaction.amount) as total_spent from customer
        join transaction on customer.id = transaction.customer_id group by customer.id, customer.name having count(transaction.comic_id)>=10;


/*data*/

insert into comic values('000','Superman en Calzoncillos
con Batman Asustado','Las grandes aventuras del grandioso calzoncillo de superman y el con batman',20,'hero defeats villain');

-- Comics table sample data
INSERT INTO comic (name, description, price, category) VALUES
('Superman: Origins', 'The story of Superman’s rise to heroism.', 15, 'Action'),
('Batman: The Dark Knight Returns', 'Batman’s battle against crime in Gotham.', 18, 'Action'),
('The Flash: Speeding Through Time', 'A story about time travel and speed.', 10, 'Sci-Fi'),
('Avengers Assemble', 'The first Avengers team-up to save the world.', 25, 'Superhero'),
('Wonder Woman: Themyscira', 'The adventures of Wonder Woman from Themyscira.', 12, 'Action'),
('Guardians of the Galaxy', 'Space adventure with the Guardians.', 22, 'Sci-Fi');


-- Characters table sample data
INSERT INTO character (name, powers, weaknesses, affiliations) VALUES
('Superman', 'Super strength, flight, heat vision', 'Kryptonite', 'Justice League'),
('Batman', 'Martial arts, detective skills', 'Lack of superpowers', 'Justice League'),
('Wonder Woman', 'Super strength, flight, combat skills', 'Vulnerability to bullets', 'Justice League'),
('The Flash', 'Super speed, time travel', 'Vulnerability to cold', 'Justice League'),
('Joker', 'Intelligence, unpredictability', 'Psychosis', 'Villains'),
('Lex Luthor', 'Genius-level intellect', 'Ego', 'Villains'),
('Thanos', 'Super strength, cosmic powers', 'Arrogance', 'Villains'),
('Ultron', 'Super intelligence, metal body', 'Weakness to magnetism', 'Villains');

-- Villagers table sample data
INSERT INTO villager (name, description, availability) VALUES
('Gotham Guard', 'A guard in Gotham city', true),
('Krypton Explorer', 'An explorer from the planet Krypton', true),
('Themysciran Soldier', 'A soldier from Themyscira', false);

-- Mortal Arms table sample data
INSERT INTO mortalArms (name, description, availability) VALUES
('Gauntlets of Strength', 'Gauntlets that enhance strength.', true),
('Blade of Justice', 'A blade used to restore justice.', false),
('Infinity Gauntlet', 'A powerful gauntlet with cosmic powers.', true);

-- Customers table sample data
INSERT INTO customer (name, Birthday, email) VALUES
('John Doe', '1990-03-15', 'john.doe@example.com'),
('Jane Smith', '1985-06-21', 'jane.smith@example.com'),
('Peter Parker', '1995-07-15', 'peter.parker@example.com'),
('Bruce Wayne', '1980-02-19', 'bruce.wayne@example.com');


-- Transactions table sample data
INSERT INTO transaction (customer_id, comic_id, amount) VALUES
(1, 1, 15),
(1, 2, 18),
(1, 5, 12),
(2, 3, 10),
(2, 4, 25),
(3, 6, 22),
(3, 1, 15),
(3, 2, 18),
(4, 5, 12);


-- Comics-Character Relationship
INSERT INTO comics_character (character_id, comic_id) VALUES
(1, 1),  -- Superman in Superman: Origins
(2, 2),  -- Batman in Batman: The Dark Knight Returns
(3, 5),  -- Wonder Woman in Wonder Woman: Themyscira
(4, 3),  -- The Flash in The Flash: Speeding Through Time
(5, 4),  -- Joker in Avengers Assemble
(6, 4),  -- Lex Luthor in Avengers Assemble
(7, 4),  -- Thanos in Avengers Assemble
(8, 6);  -- Ultron in Guardians of the Galaxy

-- Comics-Villager Relationship
INSERT INTO comic_villager (villager_id, comic_id) VALUES
(1, 1),  -- Gotham Guard in Superman: Origins
(2, 5);  -- Themysciran Soldier in Wonder Woman: Themyscira


-- Mortal Arm-Comics Relationship
INSERT INTO mortalArm_comic (mortalArm_id, comic_id) VALUES
(1, 1),  -- Gauntlets of Strength in Superman: Origins
(3, 4);  -- Infinity Gauntlet in Avengers Assemble

-- Populate comic table
INSERT INTO comic (name, description, price, category)
VALUES
('Comic A', 'Description of Comic A', 15, 'Action'),
('Comic B', 'Description of Comic B', 25, 'Adventure'),
('Comic C', 'Description of Comic C', 10, 'Fantasy'),
('Comic D', 'Description of Comic D', 30, 'Sci-Fi'),
('Comic E', 'Description of Comic E', 18, 'Fantasy');

-- Populate character table
INSERT INTO character (name, powers, weaknesses, affiliations)
VALUES
('Hero A', 'flight', 'fire', 'Justice League'),
('Hero B', 'strength', 'water', 'Avengers'),
('Hero C', 'flight', 'darkness', 'X-Men'),
('Hero D', 'speed', 'light', 'Justice League'),
('Hero E', 'invisibility', 'fire', 'Avengers');

-- Populate villager table
INSERT INTO villager (name, description, availability)
VALUES
('Villager A', 'Description of Villager A', TRUE),
('Villager B', 'Description of Villager B', FALSE),
('Villager C', 'Description of Villager C', TRUE),
('Villager D', 'Description of Villager D', FALSE),
('Villager E', 'Description of Villager E', TRUE);

-- Populate mortalArms table
INSERT INTO mortalArms (name, description, availability)
VALUES
('Weapon A', 'Description of Weapon A', TRUE),
('Weapon B', 'Description of Weapon B', FALSE),
('Weapon C', 'Description of Weapon C', TRUE),
('Weapon D', 'Description of Weapon D', FALSE),
('Weapon E', 'Description of Weapon E', TRUE);

-- Populate customer table
INSERT INTO customer (name, Birthday, email)
VALUES
('Customer A', '1990-01-01', 'customerA@example.com'),
('Customer B', '1985-05-15', 'customerB@example.com'),
('Customer C', '1992-07-20', 'customerC@example.com'),
('Customer D', '1980-09-10', 'customerD@example.com'),
('Customer E', '1995-11-25', 'customerE@example.com');

-- Populate transaction table
INSERT INTO transaction (customer_id, comic_id, purchase_date, amount)
VALUES
(1, 1, '2024-10-01', 15),
(2, 2, '2024-10-02', 25),
(3, 3, '2024-10-03', 10),
(4, 4, '2024-10-04', 30),
(5, 1, '2024-10-05', 15),
(1, 3, '2024-10-06', 10),
(3, 1, '2024-10-07', 15);

-- Populate comics_character table
INSERT INTO comics_character (character_id, comic_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 1);

-- Populate comic_villager table
INSERT INTO comic_villager (villager_id, comic_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Populate mortalArm_comic table
INSERT INTO mortalArm_comic (mortalArm_id, comic_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Populate special_offer table
INSERT INTO special_offer (customer_name, customer_birthday)
VALUES
('Customer A', '1990-01-01'),
('Customer B', '1985-05-15'),
('Customer C', '1992-07-20'),
('Customer D', '1980-09-10'),
('Customer E', '1995-11-25');


/*queries*/

select name,price from comic where price<20 order by name;

select name, powers from character where powers ilike '%flight%' order by name;

SELECT v.name AS villain_name, COUNT(cc.character_id) AS defeat_count
FROM villager v
JOIN comic_villager cv ON v.id = cv.villager_id
JOIN comics_character cc ON cv.comic_id = cc.comic_id
JOIN character ch ON cc.character_id = ch.id
WHERE ch.powers ILIKE '%flight%'
GROUP BY v.name
HAVING COUNT(cc.character_id) > 3;



select c.name as customer_name, count(t.comic_id) as comics_purchased, sum(t.amount) as total_spent from customer c
 join transaction t on c.id =t.customer_id group by c.id, c.name having count(t.comic_id)>5;

SELECT c.category, COUNT(t.id) AS purchases
FROM comic c
JOIN transaction t ON c.id = t.comic_id
GROUP BY c.category
ORDER BY purchases DESC
LIMIT 1;

select name from character where affiliations ilike '%Justice League%' and affiliations ilike '%Avengers%';

SELECT DISTINCT c.name AS comic_name
FROM comic c
JOIN mortalArm_comic ma ON c.id = ma.comic_id
JOIN comics_character cc ON c.id = cc.comic_id
JOIN comic_villager cv ON c.id = cv.comic_id
WHERE EXISTS (
    SELECT 1
    FROM comics_character cc2
    JOIN comic_villager cv2 ON cc2.comic_id = cv2.comic_id
    WHERE cc2.comic_id = c.id
)
AND ma.mortalArm_id IS NOT NULL;




