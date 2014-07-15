<?php
	class Person {
		protected $db;
		/*
		*	This fires when the Person object is constructed.
		*/
		public function __construct() {
			include $_SERVER['DOCUMENT_ROOT'].'/Model/connect.php';
			try {
				$this->db = new PDO($host, $user, $password);
			} catch (PDOException $e) {
				print "Error!: " . $e->getMessage() . "<br/>";
    			die();
			}
		}

		public function GetAllPersons() {
			$query = $this->db->prepare("SELECT * FROM persons");
			$query->execute();

			return $query;
		}

		public function GetPerson($id) {
			$query = $this->db->prepare("SELECT * FROM persons WHERe id= '" . $id . "'");
			$query->execute();

			return $query;
		}

		public function InsertPerson($firstname, $lastname, $address, $zipcode, $phone) {
			try {
				$query = $this->db->prepare("INSERT INTO persons (firstname, lastname, address, zipcode, phone) VALUES(:firstname, :lastname, :address, :zipcode, :phone)");
				$query -> bindParam(':firstname', $firstname);
				$query -> bindParam(':lastname', $lastname);
				$query -> bindParam(':address', $address);
				$query -> bindParam(':zipcode', $zipcode);
				$query -> bindParam(':phone', $phone);
				$query->execute();
			} catch (PDOException $e) {
				handle_sql_errors($query, $e->getMessage());
			}
		}

		public function DeletePerson($id) {
			$query = $this->db->prepare("DELETE FROM persons WHERE id='" . $id . "'");
			$query->execute();
		}

		public function DeleteAllPersons() {
			$query = $this->db->prepare("DELETE FROM persons");
			$query->execute();
		}

		public function checkLogin($username, $password){
			//$query = $this->db->prepare("SELECT * FROM user WHERE username = '" . $username . "' AND password = '" . $password . "'");
			$query = $this->db->prepare("SELECT * FROM user WHERE username = 'test' AND password = '1234'");
			$query->execute();

			//return $query;

			if (is_object($query) && $query->rowCount() == 1) {
            	$response['success'] = true;
            }
		      else
		      {
		            $response['success'] = false;
		      }
		      echo json_encode($response);
		      echo json_encode($query->rowCount());
		}

		function handle_sql_errors($query, $error_message)
		{
		    echo '<pre>';
		    echo $query;
		    echo '</pre>';
		    echo $error_message;
		    die;
		}

		
	}
?>