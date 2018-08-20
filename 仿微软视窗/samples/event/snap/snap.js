
function snap_moving(win)
{
	// storing the actual window variables
	winheight=win.Height;
	winwidth=win.Width;
	count=0;
	while (count<snapareas) // check all snap areas
	{
		count++;
		// checking mouse (window) position, whether she is near the left top snappoint
		if ((WinLIKE_x > snappoint_x1[count]-snapspace && WinLIKE_x < snappoint_x1[count]+snapspace) &&
		    (WinLIKE_y > snappoint_y1[count]-snapspace && WinLIKE_y < snappoint_y1[count]+snapspace))
		{
			// snap in
			win.Left=snappoint_x1[count];
			win.Top=snappoint_y1[count];
			if (win.snapinto) // if the window should be resized while snapping in
			{
				win.Height=snappoint_y2[count]-snappoint_y1[count];
				win.Width= snappoint_x2[count]-snappoint_x1[count];
				win.ovlsize(); // overload the windowsize
				// reset the original (not snapped) values, but at this time not visible
				win.Height=winheight;
				win.Width=winwidth;
				win.snappedinto=count; // snapped into area number "count"
			}
			// overload the position of the window to the actual snappoint
			win.ovlpos();
			win.snapped=count;
			return false; // cancel standard WinLIKE window drawing
		}
		else // no snappoint
		{
			if (win.snapinto && win.snappedinto) // if window was resized while snapping in
			{
				// restore original size of the window
				win.ovlsize(); // overload the window size
				win.snappedinto=false;
			}
			win.snapped=false;
		}
	}
}	

function snap_rightnow(win,area)
{
	if (win.snap)
	{
		var originalW=win.Width;
		var originalH=win.Height;
		// redraw the window at the snappoint 3
		win.Left=snappoint_x1[area];
		win.Top=snappoint_y1[area];
		if (win.snapinto)
		{
			win.Width=snappoint_x2[area]-snappoint_x1[area];
			win.Height=snappoint_y2[area]-snappoint_y1[area];
		}
		win.draw();
		// save the original size (but it is not drawed)
		win.Width=originalW;
		win.Height=originalH;
	}
}

function snap_resizingstart(win)
{
	if (win.snappedinto) // window is resized while snapping in
	{
		// set window like the snaparea
		win.Height=snappoint_y2[win.snappedinto]-snappoint_y1[win.snappedinto];
		win.Width =snappoint_x2[win.snappedinto]-snappoint_x1[win.snappedinto];
	}
}

function snap_resizing(win)
{
	// resizing within snappoint area
	if ((WinLIKE_y>snappoint_y2[win.snapped]-snappoint_y1[win.snapped]-snapspace && WinLIKE_y<snappoint_y2[win.snapped]-snappoint_y1[win.snapped]+snapspace) &&
	    (WinLIKE_x>snappoint_x2[win.snapped]-snappoint_x1[win.snapped]-snapspace && WinLIKE_x<snappoint_x2[win.snapped]-snappoint_x1[win.snapped]+snapspace))
	{
		// draw only snappoint lines
		WinLIKE_y=snappoint_y2[win.snapped]-snappoint_y1[win.snapped];
		WinLIKE_x=snappoint_x2[win.snapped]-snappoint_x1[win.snapped];
		return true; // now go on WinLIKE and use the new values
	}
}

function snap_resizingend(win)
{
	if ((WinLIKE_y>snappoint_y2[win.snapped]-snappoint_y1[win.snapped]-snapspace && WinLIKE_y<snappoint_y2[win.snapped]-snappoint_y1[win.snapped]+snapspace) &&
	    (WinLIKE_x>snappoint_x2[win.snapped]-snappoint_x1[win.snapped]-snapspace && WinLIKE_x<snappoint_x2[win.snapped]-snappoint_x1[win.snapped]+snapspace))
	{
		// set window into the the snaparea
		win.Height=snappoint_y2[win.snapped]-snappoint_y1[win.snapped];
		win.Width =snappoint_x2[win.snapped]-snappoint_x1[win.snapped];
		win.ovlsize(); // overload size
		return false;
	}
	else
		win.snappedinto=false;
}

function snap_visual()
{
	// this function is only for visualization of the snap areas
	corner1=5;
	corner2=20;
	
	for (var count=1; count<snapareas; count++)
	{
		elem=document.createElement('div');
		document.getElementsByTagName('body')[0].appendChild(elem);
		elem.style.position='absolute';
		elem.style.top=snappoint_y1[count]-corner1;
		elem.style.left=snappoint_x1[count]-corner1;
		elem.style.height=corner2;
		elem.style.width=corner2;
		elem.style.backgroundColor='red';
	
		elem=document.createElement('div');
		document.getElementsByTagName('body')[0].appendChild(elem);
		elem.style.position='absolute';
		elem.style.top=snappoint_y2[count]-corner2+corner1;
		elem.style.left=snappoint_x1[count]-corner1;
		elem.style.height=corner2;
		elem.style.width=corner2;
		elem.style.backgroundColor='#AAAAAA';
	
		elem=document.createElement('div');
		document.getElementsByTagName('body')[0].appendChild(elem);
		elem.style.position='absolute';
		elem.style.top=snappoint_y1[count]-corner1;
		elem.style.left=snappoint_x2[count]-corner2+corner1;
		elem.style.height=corner2;
		elem.style.width=corner2;
		elem.style.backgroundColor='#AAAAAA';
	
		elem=document.createElement('div');
		document.getElementsByTagName('body')[0].appendChild(elem);
		elem.style.position='absolute';
		elem.style.top=snappoint_y2[count]-corner2+corner1;
		elem.style.left=snappoint_x2[count]-corner2+corner1;
		elem.style.height=corner2;
		elem.style.width=corner2;
		elem.style.backgroundColor='#AAAAAA';
	
		elem=document.createElement('div');
		document.getElementsByTagName('body')[0].appendChild(elem);
		elem.style.position='absolute';
		elem.style.top=snappoint_y1[count];
		elem.style.left=snappoint_x1[count];
		elem.style.height=snappoint_y2[count]-snappoint_y1[count];
		elem.style.width=snappoint_x2[count]-snappoint_x1[count];
		elem.style.backgroundColor='#CCCCCC';
	}
}
