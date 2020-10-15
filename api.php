<?php
include('board.php');
include('score.php');

$score = new Score();


$action = $_GET['action'] ?? false;

	switch($action){
		case 'savescore':
			$json = file_get_contents('php://input');
			$arr = json_decode($json,true);
			$score->save($arr['score']);
		break;
		case 'getscore':
			echo json_encode($score->get());
		break;		
		default:
			$fruits = new Fruits;
			$fruits->send();
		break;
	}

