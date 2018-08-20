<?
	session_start();
	$_SESSION['test'] = $HTTP_POST_VARS["test"];;
?>

<FONT FACE="Verdana, Arial, Helvetica" SIZE=2>

	<?
		echo "<B>set session var to:</B> ".$_SESSION['test'];
	?>

	<BR><BR>
	<A HREF=file3.php TARGET=win2>test session var</A> (HTML link)
	<BR><BR>
	<A HREF=javascript:parent.WinLIKE.openaddress('samples/phpsess/file3.php',null,'win2')>test session var</A> (JavaScript link)

	<BR><BR>
	<BR><BR>
	<A HREF=javascript:document.location=document.location>delete var</A> (simply reloads the page)
