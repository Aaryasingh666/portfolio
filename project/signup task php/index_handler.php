<?php

	include 'dbcon.php';

	if(isset($_POST['submit'])){
		$fullname = mysqli_real_escape_string($con, $_POST['FullName']);
		$email = mysqli_real_escape_string($con, $_POST['E-mail']);
		$username = mysqli_real_escape_string($con, $_POST['UserName']);
		$password = mysqli_real_escape_string($con, $_POST['Password']);

		$pass = password_hash($password, PASSWORD_BCRYPT);	// password will be encripted here

		$emailquery = "select * from registration where email= '$email' ";

		$emailquery = mysqli_query($con, $emailquery);

		$emailcount = mysqli_num_rows($emailquery);

		if($emailcount > 0){	//E-Mail validation 
			?>
			<script>
				alert('E-Mail already exsist');
			</script>
			<?php
		}
		else{
			$insertquery = "insert into registration(fullname, email, username, password) values('$fullname', '$email',
			'$username', '$pass') ";


			// if you wanna show normal password so uncommit this line & commit above line.
			
			/*$insertquery = "insert into registration(fullname, email, username, password) values('$fullname', '$email',
			'$username', '$password') ";*/

			$iquery = mysqli_query($con, $insertquery);

			if($iquery){
				?>
				<script>
					alert('1 row affected in database');
				</script>
				<?php
			}
			else{
				?>
				<script>
					alert("Database is not affected");
				</script>
				<?php
			}
		}
	}

	?>