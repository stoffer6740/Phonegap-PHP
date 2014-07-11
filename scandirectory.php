<style type="text/css">
	.image {
		width: 200px;
		padding: 10px;
	}
</style>

<?php

	$dir = '/Content/images/';
	/* Remove the ".." and "." from the array, by using array_dif() function */
	$files = array_diff(scandir($dir), array('..', '.'));
	print_r($files);
	echo "</br>";

	foreach ($files as $file) {
		echo "<img class='image' src='" . $dir . $file . "'></img></br>";
	}
?>