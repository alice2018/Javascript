
<!-- WinLIKE (c) 1998-2005 by CEITON technologies GmbH - www.winlike.net -->

<!-- Change this source for older browsers! --><SCRIPT>WinLIKEerrorpage='winlike/winman/hlp-error.html';</SCRIPT>
<SCRIPT SRC="winlike/winman/wininit.js"></SCRIPT><SCRIPT SRC="winlike/winman/winman.js"></SCRIPT>
<!-- Delete this line, if the editor should not be used anymore. --><SCRIPT SRC="winlike/winedit/winedit.js"></SCRIPT>

<SCRIPT>
	WinLIKE.definewindows=mydefs;
	function mydefs() {
		// load window definitions from file, if a querystring is recieved
		<?
		$filename = $_REQUEST['winlike_loadname'];
		// for the script kiddies
		$filename = str_replace(".", "", $filename);
		$filename = str_replace("/", "", $filename);
		$filename = str_replace("\\", "", $filename);
		$filename = str_replace("'", "", $filename);
		$filename = str_replace('"', "", $filename);

		if ($filename != "") {
			$filename = "samples/store/files/".$filename.".txt";
			$fr = fopen($filename, "r");
			$content = fread( $fr, filesize( $filename ) );
			echo "$content";
			fclose($fr);
		}
		else
		{
		?>
			// use normal window defintion, if no querystring is recieved
			var j=new WinLIKE.window('Start',300,254,300,300,10);
			j.Adr='samples/test.html';
			j.LD=false;
			WinLIKE.addwindow(j);
		
			var j=new WinLIKE.window('',365,240,300,300,11);
			j.Vis=false;
			j.Nam='mywin';
			j.Ski='light';
			WinLIKE.addwindow(j);
		<?
		}
		?>
		// do not remove this comment line, otherwise the following line will uncommented by the end of the WinLIKE string--just the HTML code in the Browser
	}
</SCRIPT>


<BODY onResize=WinLIKE.resizewindows() onload=WinLIKE.init() onDragStart="self.event.returnValue=false;">
	<IMG id=ig_ src="winlike/winman/load.gif" style="position:absolute;left:35%;top:40%;z-index:4000">
	<IMG ID=ih_ SRC="skins/trans.gif" style="zIndex:20;position:absolute;left:0;top:0;width:100%;height:100%">


	<DIV STYLE="position:absolute;left:110;top:15">
		<FONT FACE="Verdana, Arial, Helvetica" SIZE=2>
			These sample shows how to save and load window definitions to and from files.
			<BR>
			Run these samples over http on a PHP server! (for the samples/store/files/ subdir you need writing
			rights)
			<BR><BR>
			Expand the script to save the windows user based! To save the windows in user cookies, see samples #28 and #29.
			<BR><BR>
			<A HREF="72_sample_store_windows.php">Reset</A> to load standard window definition.

			<!-- change WIDTH and HEIGHT to 200 to see save errors -->
			<IFRAME NAME=tunnel_frame WIDTH=0 HEIGHT=0></IFRAME>
			<FORM>
				filename: <input type=input name=winlike_loadname value=test>
				<input type=submit value=Load>
			</FORM>
			<FORM action="samples/store/save.php" TARGET=tunnel_frame onSubmit="document.getElementsByName('winlike_data')[0].value=WinLIKE.currentstates(true,true);">
				filename: <input type=input name=winlike_savename value=myfile> <!-- filename field -->
				<input type=submit value=Save> <!-- Button -->
				<input type=hidden name=winlike_data> <!-- window definition -->
			</FORM>
