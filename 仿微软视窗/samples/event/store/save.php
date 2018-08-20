<?
	$winlike_data = $_REQUEST["winlike_data"];
	$winlike_data = str_replace("\\", "", $winlike_data); // erease the backslashes

	$filename = $_REQUEST["winlike_savename"];
	// for the script kiddies
	$filename = str_replace(".", "", $filename);
	$filename = str_replace("/", "", $filename);
	$filename = str_replace("\\", "", $filename);
	$filename = str_replace("'", "", $filename);
	$filename = str_replace('"', "", $filename);

	$path = 'files/'; //select the path of the golder the text files are saved in
	$extension = '.txt';     //set the file extension to .txt
	$filename = $path.$filename.$extension;    //generate the full path with saved name
	$fp = fopen($filename, "w");	//open the text file to allow to write over the current data
	fwrite($fp, $winlike_data ); // save settings to the text file
	fclose($fp); //close the text file
?>

<SCRIPT>
	// tell user the file has been saved
	alert("Successfully saved! - Load this name to see this layout again.");
</SCRIPT>
