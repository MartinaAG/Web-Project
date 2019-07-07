<?php

class Database {
	private $pdo;

	public function __construct() {
		$this->pdo = new PDO('mysql:host=localhost;dbname=WebProject;charset=utf8', 'root', '');
	}

	public function getPDO() {
		return $this->pdo;
	}
}

?>