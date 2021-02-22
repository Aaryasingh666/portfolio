<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php include 'css/style.css' ?>
	<?php include 'action_handler.php' ?>
</head>
<body>
	<div>
		<table>
			<thead>
				<tr>
					<th class="colspan" colspan="5"> user registration detail</th>
				</tr>
				<tr>
					<th>ID</th>
      				<th>Full Name</th>
      				<th>E-Mail</th>
      				<th>User-Name</th>
      				<th>Password</th>
      			</tr>
      		</thead>
      		<tbody>
      			<?php
      				// display the database data on browser.

      				$selectquery = " select * from registration ";

      				$query = mysqli_query($con, $selectquery);

      				$nums = mysqli_num_rows($query);

      				while($res = mysqli_fetch_array($query)) {

      					?>
      			<tr>
      				<td> <?php echo $res['id']?>  </td>
	      			<td> <?php echo $res['fullname']?>  </td>
	      			<td> <?php echo $res['email']?>  </td>
	      			<td> <?php echo $res['username']?>  </td>
	      			<td> <?php echo $res['password']?>  </td>
	      		</tr>


	      		<?php

      			}

      			?>
      		</tbody>
      	</table>
      </div>
</body>
</html>