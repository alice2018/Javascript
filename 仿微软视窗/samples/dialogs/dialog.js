
function openDialog(file,win,func)
{
	var WL=recognizeWinLIKE_(top).WinLIKE; // search for the WinLIKE object
	
	var arr = new Array; // array with information, the dialog window will need to return values
	arr[0]=self; // the return frame or window
	arr[1]=func; // the return function which will retrieve the values

	// here we store the array direct into the myP-property of the dialog window
	WL.windows[WL.searchwindow(win)].myP=arr;

	// now we open the dialog window--maybe a new window will be created but it has the .myP values anyway
	WL.openaddress(file,null,win);
}

function returnVal(val)
{
	try
	{
		var win=recognizeWinLIKE_(top).WinLIKE.windows[getWindowNumber_()]; // this window

		// call the function "myP[1]" in the window "myP[0]" with the value "val"
		win.myP[0].eval(win.myP[1]+"("+val+")");

		win.close(); // now we can close the window
	}
	catch(everything)
	{
		alert("return function not found"); // e.g. if the source window is closed meanwhile
	}
}
