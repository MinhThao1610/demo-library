-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: book_management
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `category` int NOT NULL,
  `publisher` int NOT NULL,
  `total_amount` int NOT NULL,
  `current_number` int NOT NULL,
  `total_lost` int NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `frk1` (`category`),
  KEY `frk2_idx` (`publisher`),
  CONSTRAINT `frk1` FOREIGN KEY (`category`) REFERENCES `categories` (`id`),
  CONSTRAINT `frk2` FOREIGN KEY (`publisher`) REFERENCES `publishers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (2,'Toán cao cấp 1',1,1,100,100,0,'0000-00-00','2021-11-25'),(11,'Cấu trúc dữ liệu và giải thuật',1,1,20,0,0,'2021-12-02','2021-12-02'),(14,'Mạng máy tính',1,1,50,50,0,'2021-12-02','2021-12-02'),(15,'Triết học Mac - Lê-nin',1,1,75,75,0,'2021-12-02','2021-12-02'),(16,'Pháp luật và đạo đức',1,1,50,50,0,'2021-12-14','2021-12-14');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `borrow_books`
--

DROP TABLE IF EXISTS `borrow_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `borrow_books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MSSV` int NOT NULL,
  `book_id` int NOT NULL,
  `borrow_date` date NOT NULL,
  `pay_date` date NOT NULL,
  `staff` int NOT NULL,
  `note` varchar(50) DEFAULT NULL,
  `createdAt` varchar(45) NOT NULL,
  `updatedAt` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `staff` (`staff`),
  KEY `abc2_idx` (`book_id`),
  KEY `abc_idx` (`MSSV`),
  CONSTRAINT `abc` FOREIGN KEY (`MSSV`) REFERENCES `students` (`MSSV`),
  CONSTRAINT `abc2` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  CONSTRAINT `abc3` FOREIGN KEY (`staff`) REFERENCES `staffs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `borrow_books`
--

LOCK TABLES `borrow_books` WRITE;
/*!40000 ALTER TABLE `borrow_books` DISABLE KEYS */;
INSERT INTO `borrow_books` VALUES (8,20020113,2,'2021-11-19','2022-03-19',13,'Đang mượn','2021-11-19 10:54:16','2021-12-03 00:01:47'),(11,19020777,14,'2021-12-02','2022-01-05',11,'Đang mượn','2021-12-02 16:03:24','2021-12-03 00:00:21'),(14,20020112,15,'2021-12-03','2022-03-03',12,'Đang mượn','2021-12-03 00:04:55','2021-12-03 00:04:55');
/*!40000 ALTER TABLE `borrow_books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(225) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Giáo trình','0000-00-00','0000-00-00'),(2,'Truyện tranh','2021-12-14','2021-12-14'),(3,'Trinh thám','2021-12-14','2021-12-14');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'K64J','0000-00-00','0000-00-00'),(2,'K65J','0000-00-00','0000-00-00'),(6,'K63CB','2021-12-14','2021-12-14');
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculties`
--

DROP TABLE IF EXISTS `faculties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculties` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculties`
--

LOCK TABLES `faculties` WRITE;
/*!40000 ALTER TABLE `faculties` DISABLE KEYS */;
INSERT INTO `faculties` VALUES (1,'CNTT','0000-00-00','0000-00-00'),(2,'Vật lý kỹ thuật','2021-12-14','2021-12-14');
/*!40000 ALTER TABLE `faculties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publishers`
--

DROP TABLE IF EXISTS `publishers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publishers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publishers`
--

LOCK TABLES `publishers` WRITE;
/*!40000 ALTER TABLE `publishers` DISABLE KEYS */;
INSERT INTO `publishers` VALUES (1,'Đại học Quốc Gia Hà Nội','0000-00-00','0000-00-00'),(2,'Đại học Ngoại Thương','0000-00-00','0000-00-00'),(3,'Bộ giáo dục và đào tạo','2021-12-14','2021-12-14');
/*!40000 ALTER TABLE `publishers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staffs`
--

DROP TABLE IF EXISTS `staffs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staffs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(225) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staffs`
--

LOCK TABLES `staffs` WRITE;
/*!40000 ALTER TABLE `staffs` DISABLE KEYS */;
INSERT INTO `staffs` VALUES (11,'Nguyễn Thị Minh Thảo','minhthaoo1610@gmail.com','0966114832','Minh Thảo','$2a$10$aeDacqzsABbibYI8nYQS.uEGqxIukM6wCyBOsdhYvp84daGC5XWYy','2021-11-28','2021-11-28'),(12,'Trần Thị Thu Thủy','tranthuy@gmail.com','0972631113','Thủy Trần','$2a$10$aeDacqzsABbibYI8nYQS.upOlSISLSWZLRWjGJaChQ65DRkZYvNDq','2021-11-28','2021-11-28'),(13,'Nguyễn Xuân Phúc Anh','phucanh@gmail.com','0362551744','Phúc Anh','$2a$10$aeDacqzsABbibYI8nYQS.uzOR4hvZx.HSxNj7o65WytRBs/hk7T1a','2021-11-28','2021-11-28'),(14,'Nguyễn Thị Hồng','nguyenhong@gmail.com','0927364999','NguyenHong','$2a$10$LRvokhCtqZykSWfZ1KGdjOChvlLT7fWLAYoNr1ySwBxEDosu/HWoW','2021-12-02','2021-12-02');
/*!40000 ALTER TABLE `staffs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MSSV` int NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `class` int NOT NULL,
  `faculty` int NOT NULL,
  `address` varchar(50) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `create_date` date NOT NULL,
  `expire_date` date NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`,`MSSV`),
  KEY `MSSV` (`MSSV`),
  KEY `class` (`class`,`faculty`),
  KEY `faculty_idx` (`faculty`),
  CONSTRAINT `class` FOREIGN KEY (`class`) REFERENCES `classes` (`id`),
  CONSTRAINT `faculty` FOREIGN KEY (`faculty`) REFERENCES `faculties` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,20020112,'Nguyễn Văn','Anh',2,1,'Mai dịch, Cầu Giấy, Hà Nội','0372111223','2020-09-01','2024-09-01','2021-11-18','2021-11-25'),(2,20020113,'Nguyễn Thị','Bình',2,1,'Xuân Thủy, Cầu Giấy, Hà Nội','0973641212','2020-09-01','2024-09-01','2021-11-18','2021-12-02'),(4,19020777,'Nguyễn Thị','Hoa',1,1,'Tân yên, Bắc Giang','09273635451','2019-01-09','2023-01-09','2021-11-25','2021-11-25'),(6,19020777,'Lê Thị','Vân',1,1,'Sơn Tây, Hà Nội','0384753753','2019-09-01','2023-09-01','2021-12-02','2021-12-02'),(7,19020777,'Nguyễn Hồng','Nhung',1,1,'Hà Đông, Hà Nội','0384732221','2019-09-01','2023-09-01','2021-12-02','2021-12-02'),(8,19020777,'Nguyễn Hồng','Nhung',1,1,'Hà Đông, Hà Nội','0384732221','2019-09-01','2023-09-01','2021-12-02','2021-12-02'),(9,19020777,'Nguyễn Hồng','Nhung',1,1,'Hà Đông, Hà Nội','0384732221','2019-09-01','2023-09-01','2021-12-02','2021-12-02');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-14  2:24:16
