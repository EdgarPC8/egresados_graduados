-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 23, 2023 at 09:11 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `egresados_graduados`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `ip_address` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `first_name`, `last_name`, `email`, `gender`, `ip_address`) VALUES
(1, 'Conni', 'Kenworthy', 'ckenworthy0@businessweek.com', 'Female', '173.254.143.131'),
(2, 'Abba', 'Stutely', 'astutely1@tinyurl.com', 'Agender', '179.152.81.11'),
(3, 'Mariana', 'Reisen', 'mreisen2@wisc.edu', 'Female', '29.41.177.142'),
(4, 'Charline', 'Brunsden', 'cbrunsden3@cdbaby.com', 'Female', '195.215.130.244'),
(5, 'Cully', 'Carnilian', 'ccarnilian4@studiopress.com', 'Male', '255.155.80.60'),
(6, 'Waite', 'Danzelman', 'wdanzelman5@github.io', 'Male', '130.231.217.5'),
(7, 'Shaylyn', 'Tapley', 'stapley6@telegraph.co.uk', 'Female', '195.84.155.244'),
(8, 'Desiri', 'Athelstan', 'dathelstan7@woothemes.com', 'Female', '112.214.177.227');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
