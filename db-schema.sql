CREATE TABLE `persona` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `dni` varchar(8) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `nombres` varchar(30) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `peso` double NOT NULL,
  `altura` double NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
