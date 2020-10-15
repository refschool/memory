-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 15 oct. 2020 à 16:37
-- Version du serveur :  5.7.24
-- Version de PHP : 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `memory`
--

-- --------------------------------------------------------

--
-- Structure de la table `scoretable`
--

CREATE TABLE `scoretable` (
  `id` int(11) NOT NULL,
  `temps` int(11) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `scoretable`
--

INSERT INTO `scoretable` (`id`, `temps`, `datetime`) VALUES
(1, 12, '2020-10-14 21:07:45'),
(2, 35, '2020-10-14 21:14:45'),
(3, 45, '2020-10-14 21:14:45'),
(7, 111, '2020-10-15 06:23:17'),
(8, 111, '2020-10-15 06:41:09'),
(9, 34, '2020-10-15 06:42:25');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `scoretable`
--
ALTER TABLE `scoretable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `scoretable`
--
ALTER TABLE `scoretable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
