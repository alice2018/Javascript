
<!-- WinLIKE (c) 1998-2005 by CEITON technologies GmbH - www.winlike.net -->

<!-- Change this source for older browsers! --><SCRIPT>WinLIKEerrorpage='winlike/winman/hlp-error.html';</SCRIPT>
<SCRIPT SRC="winlike/winman/wininit.js"></SCRIPT><SCRIPT SRC="winlike/winman/winman.js"></SCRIPT>
<!-- Delete this line, if the editor should not be used anymore. --><SCRIPT SRC="winlike/winedit/winedit.js"></SCRIPT>

<SCRIPT>
	WinLIKE.definewindows=mydefs;
	function mydefs() {
		// load window definitions from file, if a querystring is recieved
		<%
		filename = Request("winlike_loadname")
		' for the script kiddies
		filename = replace(filename,".","")
		filename = replace(filename,"/","")
		filename = replace(filename,"\","")
		filename = replace(filename,"'","")
		filename = replace(filename,"""","")

		if filename<>"" then
			' generate the physical filepath
			path_1 = Request.ServerVariables ("APPL_PHYSICAL_PATH") ' f.e. "E:\www\virtualDir\"
			path = Request.ServerVariables("PATH_INFO") ' f.e. "/virtual_dir/winlike/sample.asp"
			path_array = Split(path, "/")
			path_array(1) = "" ' f.e. cut the "virtual_dir"
			path_array(UBound(path_array,1)) = "" ' f.e. cut the "sample.asp"
			path_2 = Join(path_array, "/")
			folder=path_1+path_2 ' f.e. "E:\www\virtualDir\//winlike/"
			
			' read file
			Set fs=Server.CreateObject("Scripting.FileSystemObject")
			Set f=fs.GetFile(folder+"samples/store/files/"+filename+".txt")
			Set ts=f.OpenAsTextStream(1)
			Response.Write(ts.ReadAll)
		else
		%>
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
		<%
		end if
		%>

	}

</SCRIPT>

<BODY onResize=WinLIKE.resizewindows() onload=WinLIKE.init() onDragStart="self.event.returnValue=false;">
	<IMG id=ig_ src="winlike/winman/load.gif" style="position:absolute;left:35%;top:40%;z-index:4000">
	<IMG ID=ih_ SRC="skins/trans.gif" style="zIndex:20;position:absolute;left:0;top:0;width:100%;height:100%">
	
	
	<DIV STYLE="position:absolute;left:110;top:15">
		<FONT FACE="Verdana, Arial, Helvetica" SIZE=2>
			These sample shows how to save and load window definitions to and from files.
			<BR>
			Run these samples over http on a ASP server! (for the virtual dir you need scripting, writing
			rights and in WinXP/2003 "parent paths" (in properties-maindir-configuration-options) must be enabled)
			<BR><BR>
			Expand the script to save the windows user based! To save the windows in user cookies, see samples #28 and #29.
			<BR><BR>
			<A HREF="72_sample_store_windows.asp">Reset</A> to load standard window definition.

			<!-- change WIDTH and HEIGHT to 200 to see save errors -->
			<IFRAME NAME=tunnel_frame WIDTH=0 HEIGHT=0></IFRAME>
			<FORM>
				filename: <input type=input name=winlike_loadname value=test>
				<input type=submit value=Load>
			</FORM>
			<FORM action="samples/store/save.asp" TARGET=tunnel_frame onSubmit="document.getElementsByName('winlike_data')[0].value=WinLIKE.currentstates(true,true);">
				filename: <input type=input name=winlike_savename value=myfile> <!-- filename field -->
				<input type=submit value=Save> <!-- Button -->
				<input type=hidden name=winlike_data> <!-- window definition -->
			</FORM>
		</FONT>
	</DIV>
	 
