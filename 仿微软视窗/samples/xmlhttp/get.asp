<%
	Response.ContentType = "text/xml" 

	field = Request("field")
	value = Request("value")
	if not isNumeric(value) then value=0
	
	if field = "zip" Then
		if value < 10 Then
			city = "Leipzig"
			state = "SX"
		else
			city = "Bonn"
			state = "RP"
		end if
	end if
	
	Response.Write "<?xml version=""1.0""?><zip><city>"+city+"</city><state>"+state+"</state></zip>"
%>