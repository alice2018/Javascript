<%
	filename = Request("winlike_savename")
	' for the script kiddies
	filename = replace(filename,".","")
	filename = replace(filename,"/","")
	filename = replace(filename,"\","")
	filename = replace(filename,"'","")
	filename = replace(filename,"""","")
	' generate the physical filepath
	path_1 = Request.ServerVariables ("APPL_PHYSICAL_PATH") ' f.e. "E:\www\virtualDir\"
	path = Request.ServerVariables("PATH_INFO") ' f.e. "/virtual_dir/winlike/samples/store/load.asp"
	path_array = Split(path, "/")
	if UBound(path_array)>3 then
		path_array(1) = "" ' f.e. cut the "virtual_dir"
	end if	
	path_array(UBound(path_array,1)) = "" ' f.e. cut the "load.asp"
	path_2 = Join(path_array, "/")
	folder=path_1+path_2+"files/" ' f.e. "E:\www\virtualDir\//winlike/samples/store/"
	' save file
	Set fs=Server.CreateObject("Scripting.FileSystemObject")
	Set tf=fs.OpenTextFile(folder+filename+".txt",2,True)
	tf.Write(Request("winlike_data"))
%>

<SCRIPT>
	alert("Successfully saved! - Load this name to see this layout again.");
</SCRIPT>
