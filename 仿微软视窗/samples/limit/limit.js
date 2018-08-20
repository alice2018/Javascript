
function limit_moving(win)
{
	if (win.Width == limitpoint_x2[win.limit]-limitpoint_x1[win.limit]) // full limit X
	{
		// here we overwrite the mouse and set our own coordinate to limit X moving
		WinLIKE_x=win.Left; 
		
		// here we limit also Y to the defined area
		if (WinLIKE_y < limitpoint_y1[win.limit]) // stop above
			WinLIKE_y=limitpoint_y1[win.limit];
		else if (!win.Mn && WinLIKE_y+win.Height >  limitpoint_y2[win.limit]) // stop bottom in normal mode
			WinLIKE_y= limitpoint_y2[win.limit]-win.Height;
		else if (win.Mn && WinLIKE_y >  limitpoint_y2[win.limit]-win.skinTitleHeight) // stop bottom if minimized
			WinLIKE_y= limitpoint_y2[win.limit]-win.skinTitleHeight;
	}
	else // full limit Y
	{
		// here we overwrite the mouse and set our own coordinate to limit Y moving
		WinLIKE_y=win.Top;
		
		// here we limit also X to the defined area
		if (WinLIKE_x < limitpoint_x1[win.limit]) // stop left
			WinLIKE_x=limitpoint_x1[win.limit];
		else if (WinLIKE_x+win.Width > limitpoint_x2[win.limit]) // stop right
			WinLIKE_x=limitpoint_x2[win.limit]-win.Width;
	}

	return true; // now go on WinLIKE and use the new values
}

function limit_resizing(win)
{
	if (win.Width == limitpoint_x2[win.limit]-limitpoint_x1[win.limit]) // full limit X resizing
		WinLIKE_x=win.Width; // here we overwrite the mouse and set our own coordinate			
	else // full limit Y resizing
		WinLIKE_y=win.Height; // here we overwrite the mouse and set our own coordinate			

	// here we limit also Y to the defined area
	if (WinLIKE_y+win.Top > limitpoint_y2[win.limit]) // stop bottom
		WinLIKE_y=limitpoint_y2[win.limit]-win.Top;

	// here we limit also X to the defined area
	if (WinLIKE_x+win.Left > limitpoint_x2[win.limit]) // stop right
		WinLIKE_x=limitpoint_x2[win.limit]-win.Left;

	return true; // now go on WinLIKE and use the new values
}

function limit_restore(win)
{
	// reset Top to the area maximum when window is restored from minimize status
	if (win.Top > limitpoint_y2[win.limit]-win.Height) // bottom
			win.Top=limitpoint_y2[win.limit]-win.Height;
	win.draw(); // redraw window in non minimized status
}

function limit_visual()
{
	// this function is only for visualization of the limit areas
	corner1=5;
	corner2=20;

	for (var count=1; count<limitareas; count++)
	{
		elem=document.createElement('div');
		document.getElementsByTagName('body')[0].appendChild(elem);
		elem.style.position='absolute';
		elem.style.top=limitpoint_y1[count]-corner1;
		elem.style.left=limitpoint_x1[count]-corner1;
		elem.style.height=corner2;
		elem.style.width=corner2;
		elem.style.backgroundColor='#AAAAAA';
	
		elem=document.createElement('div');
		document.getElementsByTagName('body')[0].appendChild(elem);
		elem.style.position='absolute';
		elem.style.top=limitpoint_y2[count]-corner2+corner1;
		elem.style.left=limitpoint_x1[count]-corner1;
		elem.style.height=corner2;
		elem.style.width=corner2;
		elem.style.backgroundColor='#AAAAAA';
	
		elem=document.createElement('div');
		document.getElementsByTagName('body')[0].appendChild(elem);
		elem.style.position='absolute';
		elem.style.top=limitpoint_y1[count]-corner1;
		elem.style.left=limitpoint_x2[count]-corner2+corner1;
		elem.style.height=corner2;
		elem.style.width=corner2;
		elem.style.backgroundColor='#AAAAAA';
	
		elem=document.createElement('div');
		document.getElementsByTagName('body')[0].appendChild(elem);
		elem.style.position='absolute';
		elem.style.top=limitpoint_y2[count]-corner2+corner1;
		elem.style.left=limitpoint_x2[count]-corner2+corner1;
		elem.style.height=corner2;
		elem.style.width=corner2;
		elem.style.backgroundColor='#AAAAAA';

		elem=document.createElement('div');
		document.getElementsByTagName('body')[0].appendChild(elem);
		elem.style.position='absolute';
		elem.style.top=limitpoint_y1[count];
		elem.style.left=limitpoint_x1[count];
		elem.style.height=limitpoint_y2[count]-limitpoint_y1[count];
		elem.style.width=limitpoint_x2[count]-limitpoint_x1[count];
		elem.style.backgroundColor='#CCCCCC';
	}
}
