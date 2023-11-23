/*Elminio la base de datos*/

DROP DATABASE IF EXISTS egresados_graduados;
/*Creo la base de datos*/
CREATE DATABASE egresados_graduados;
/*Selecciono la base datos*/
USE egresados_graduados;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
--
-- Database: `egresados_graduados`
--
-- --------------------------------------------------------
--
-- Table structure for table `students`
--
CREATE TABLE
  students (
    id int (11)  PRIMARY KEY AUTO_INCREMENT,
    ci varchar (11) DEFAULT NULL,
    first_name varchar(50) DEFAULT NULL,
    second_name varchar(50) DEFAULT NULL,
    first_last_name varchar(50) DEFAULT NULL,
    second_last_name varchar(50) DEFAULT NULL,
    gender varchar(5) DEFAULT NULL,
    blood_type varchar(10) DEFAULT NULL,
    civil_status varchar(50) DEFAULT NULL,
    nationality varchar(50) DEFAULT NULL,
    place_birth varchar(50) DEFAULT NULL,
    place_residence varchar(100) DEFAULT NULL,
    direction TEXT DEFAULT NULL,
    home_phone varchar(20) DEFAULT NULL,
    cell_phone varchar(20) DEFAULT NULL,
    personal_email varchar(60) DEFAULT NULL,
    institutional_email varchar(60) DEFAULT NULL,
    imagen TEXT DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE
  users (
    id_user int (11) PRIMARY KEY AUTO_INCREMENT,
    email varchar(30) NOT NULL,
    user_password varchar(100) NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

  INSERT INTO users (email,user_password) VALUES
('admin', '$2b$10$p49gCto6b2liCqoQoSMDyu8/EmT1t3cwJe6HALeZNgXxZHx7rJMRu');