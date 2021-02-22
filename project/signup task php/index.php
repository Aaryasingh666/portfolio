<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php include 'css/style.css' ?>
	<?php include 'action_handler.php' ?>
</head>
<body>
	<section>
		<div class='color'></div>
		<div class='color'></div>
		<div class='color'></div>
		<div class='container'>
			<form action="" method="POST">
				<h2>register</h2>
				<p><span>&#42;</span>required fields</p>
				<label for="name">full name</label>
				<input id = 'name' type="text" name="FullName" placeholder="enter full name&#42;" required autocomplete="off" />
				<label for="email">e-mail</label>
				<input id = 'email' type="email" name="E-mail" placeholder="enter e-mail&#42;" required autocomplete="off" />
				<label for="user">user name</label>
				<input id = 'user' type="text" name="UserName" placeholder="enter username&#42;" required autocomplete="off" />
				<label for="pass">password</label>
				<input id = 'pass' type="password" name="Password" placeholder="enter password&#42;" required autocomplete="off" />
				<input type="submit" name="submit" value="submit">
				<a target="_blank" href="show_data.php">users-detail</a>
			</form>
		</div>
	</section>
</body>
</html>