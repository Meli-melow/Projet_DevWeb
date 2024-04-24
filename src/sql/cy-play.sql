-- Step 1: Create the Database
CREATE DATABASE IF NOT EXISTS `cy-play`;
USE `cy-play`;

-- Step 2: Create the `user` Table
CREATE TABLE IF NOT EXISTS `user` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `prenoun` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `passcode` VARCHAR(255) NOT NULL
);

-- Step 3: Create the `product` Table
CREATE TABLE IF NOT EXISTS `product` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `imagelink` VARCHAR(255),
    `stock` INT NOT NULL,
    `review` DECIMAL(3,2),
    `price` DECIMAL(10,2) NOT NULL,
    `nbofachat` INT NOT NULL,
    `categorie` VARCHAR(255) NOT NULL
);

-- Step 4: Create the `refroidisseur` Table
CREATE TABLE IF NOT EXISTS `refroidisseur` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `commande` (
    `user_id` INT NOT NULL,
    `product_id` INT NOT NULL,
    `order_date` DATETIME NOT NULL,
    `quantity` INT NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`user_id`, `product_id`, `order_date`),
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
    FOREIGN KEY (`product_id`) REFERENCES `product`(`id`)
);

INSERT INTO `user` (`name`, `prenoun`, `email`, `passcode`) VALUES
('John Doe', 'John', 'john.doe@example.com', 'password123'),
('Jane Smith', 'Jane', 'jane.smith@example.com', 'password456');



-- Insert CPU ventilators --
INSERT INTO `product` (`name`, `description`, `imagelink`, `stock`, `review`, `price`, `nbofachat`, `categorie`) VALUES
('Fox Spirit Cold Snap XT120 BLACK',
'Ventilateur 120 mm pour processeur pour socket Intel LGA 1700/1200 et AMD AM5/AM4',
'https://example.com/fox_xt120.jpg', 10, 4.5, 69.95, 5, 'CPU'),


('Fox Spirit Cold Snap VT120 A-RGB V2',
'Ventilateur processeur 120 mm ARGB compatible Intel LGA 1700/1200/115x et AMD AM4/AM5',
'https://example.com/fox_vt120.jpg', 15, 4.7, 45.95, 3, 'CPU'),


('Be quiet! Pure Rock Slim 2',
'Ventilateur de processeur pour socket Intel et AMD',
'https://example.com/quiet_slim2.jpg', 8, 4.0, 29.95, 4, 'CPU'),


('Be quiet! Pure Dark Rock Pro 5',
'Ventirad de processeur pour socket Intel et AMD',
'https://example.com/quiet_rock5.jpg', 9, 4.4, 102.95, 4, 'CPU'),


('Aerocool Cylon 4 avec fixations LGA1700',
'Ventilateur processeur ARGB pour pour socket Intel et AMD',
'https://example.com/aerocool_lga1700.jpg', 9, 4.3, 49.94, 4, 'CPU');




-- Insert box ventilators --
INSERT INTO `product` (`name`, `description`, `imagelink`, `stock`, `review`, `price`, `nbofachat`, `categorie`) VALUES
('Aerocool Astro 12',
'Ventilateur de boîtier 120 mm avec LED ARGB',
'https://example.com/aerocool_astro12.jpg', 7, 3.7, 12.95, 5, 'box'),


INSERT INTO `product` (`name`, `description`, `imagelink`, `stock`, `review`, `price`, `nbofachat`, `categorie`) VALUES
('Antec Fusion 120 ARGB Noir',
'Ventilateur de boîtier PWM 120 mm avec LED RGB',
'https://example.com/antec_120.jpg', 13, 3.7, 16.95, 4, 'box'),



INSERT INTO `product` (`name`, `description`, `imagelink`, `stock`, `review`, `price`, `nbofachat`, `categorie`) VALUES
('Arctic P12 PWM PST A-RGB 0dB',
'Ventilateur PWM 120 mm semi-passif avec mode 0dB et éclairage RGB Adressable',
'https://example.com/arctic_p12.jpg', 10, 4.2, 17.95, 5, 'box'),



INSERT INTO `product` (`name`, `description`, `imagelink`, `stock`, `review`, `price`, `nbofachat`, `categorie`) VALUES
('be quiet! Light Wings 120 mm PWM ARGB',
'Ventilateur de boîtier 120 mm thermorégulé avec double éclairage LED ARGB',
'https://example.com/quiet_wings.jpg', 5, 4.8, 30.95, 5, 'box'),



INSERT INTO `product` (`name`, `description`, `imagelink`, `stock`, `review`, `price`, `nbofachat`, `categorie`) VALUES
(' ASUS TUF Gaming TF120 ARGB noir',
'Ventilateur de boîtier 120 mm ARGB',
'https://example.com/asus_tuf.jpg', 7, 4.1, 20.95, 5, 'box');



-- Insert watercoolings --
INSERT INTO `product` (`name`, `description`, `imagelink`, `stock`, `review`, `price`, `nbofachat`, `categorie`) VALUES
('Fox Spirit LightFlow XT240 ARGB',
'Kit de Watercooling 240 mm pour processeur avec éclairage LED ARGB',
'https://example.com/fox_lightflow.jpg', 7, 3.7, 94.96, 5, 'watercooling'),


INSERT INTO `product` (`name`, `description`, `imagelink`, `stock`, `review`, `price`, `nbofachat`, `categorie`) VALUES
('Antec Vortex 240 ARGB',
'Kit de Watercooling pour processeur avec éclairage LED ARGB',
'https://example.com/antec_vortex.jpg', 7, 3.7, 89.95, 5, 'watercooling'),


INSERT INTO `product` (`name`, `description`, `imagelink`, `stock`, `review`, `price`, `nbofachat`, `categorie`) VALUES
('Arctic Liquid Freezer II 280',
'Kit de Watercooling pour processeur avec ventilateurs de 140 mm',
'https://example.com/arctic_freezer.jpg', 7, 3.7, 124.94, 5, 'watercooling'),


INSERT INTO `product` (`name`, `description`, `imagelink`, `stock`, `review`, `price`, `nbofachat`, `categorie`) VALUES
('ASUS ROG Strix LC II 240',
'Kit de Watercooling 240mm pour processeur avec éclairage RGB Aura Sync',
'https://example.com/asus_rog.jpg', 7, 3.7, 189.95, 5, 'watercooling'),


INSERT INTO `product` (`name`, `description`, `imagelink`, `stock`, `review`, `price`, `nbofachat`, `categorie`) VALUES
('ASUS Ryujin III 360',
'Kit de Watercooling 360 mm pour processeur avec écran LED 3.5"',
'https://example.com/asus_ryujin.jpg', 7, 3.7, 379.95, 5, 'watercooling');


-- Insert cooler categories --
INSERT INTO `refroidisseur` (`name`) VALUES
('Ventilateur boîtier.'),
('Ventilateur CPU'),
('Watercooling');

INSERT INTO `commande` (`user_id`, `product_id`, `order_date`, `quantity`, `status`) VALUES
(1, 1, '2024-04-05 10:00:00', 1, 'Pending'),
(1, 2, '2024-04-05 10:15:00', 2, 'Shipped'),
(2, 1, '2024-04-06 09:30:00', 1, 'Delivered');