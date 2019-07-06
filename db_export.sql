-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2019 at 11:01 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webproject`
--
CREATE DATABASE IF NOT EXISTS `webproject` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `webproject`;

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

DROP TABLE IF EXISTS `feedbacks`;
CREATE TABLE IF NOT EXISTS `feedbacks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stars` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `templates`
--

DROP TABLE IF EXISTS `templates`;
CREATE TABLE IF NOT EXISTS `templates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `script` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `templates`
--

INSERT INTO `templates` (`id`, `number`, `script`) VALUES
(1, 1, 'addSection(\'one\', 1, \'docMain\');\r\n		addSection(\'two\', 2, \'docMain\');\r\n		document.getElementById(\"docHeader\").style.backgroundColor = \'rgb(152, 206, 90)\';\r\n		document.getElementById(\"docFooter\").style.backgroundColor = \'rgb(152, 206, 90)\';'),
(2, 2, 'addSection(\'three\', 3, \'docMain\');\r\n			addSection(\'three\', 3, \'docMain\');\r\n			addSection(\'three\', 3, \'docMain\');\r\n			document.getElementById(\"docHeader\").style.backgroundColor = \'rgb(106, 99, 241)\';\r\n			document.getElementById(\"docMain\").style.backgroundColor = \'rgb(255, 215, 235)\';\r\n			document.getElementById(\"docFooter\").style.backgroundColor = \'rgb(106, 99, 241)\';'),
(3, 3, 'addSection(\'three-two-row\', 3, \'docMain\');\r\n			addSection(\'three\', 3, \'docMain\');\r\n\r\n			document.getElementById(\"docHeader\").style.backgroundColor = \'rgb(0, 0, 255)\';\r\n			document.getElementById(\"docMain\").style.backgroundColor = \'rgb(172, 214, 255)\';\r\n			document.getElementById(\"docFooter\").style.backgroundColor = \'rgb(0, 0, 255)\';'),
(4, 4, 'addSection(\'right-three-two-column\', 3, \'docMain\');\r\n		addSection(\'right-three-two-column\', 3, \'docMain\');\r\n		document.getElementById(\"docHeader\").style.backgroundColor = \'rgb(92, 218, 224)\';\r\n		document.getElementById(\"docMain\").style.backgroundColor = \'rgb(219, 255, 255)\';\r\n		document.getElementById(\"docFooter\").style.backgroundColor = \'rgb(92, 218, 224)\';');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
