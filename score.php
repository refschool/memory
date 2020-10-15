<?php

class Score {

    private $conn;

    function __construct(){
        $dsn = 'mysql:host=localhost;dbname=memory';
        $user = 'root';
        $pass = 'root';
        $score = 72;
        $this->conn = new \PDO($dsn, $user, $pass);
    }

    function save($score){

        $sql = "insert into scoretable (temps) values (:score)";
        $params = ['score' => $score];
        $stmt = $this->conn->prepare($sql);
        $stmt->execute($params);
    }


    function get($limit=5){

        $sql = "SELECT temps FROM scoretable ORDER BY temps ASC";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_CLASS);

        return $result;
    }
}

