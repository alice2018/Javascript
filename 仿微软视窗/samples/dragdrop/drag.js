// free sample by CEITON (www.winlike.net) -- do not remove this comment
IE=parent.WinLIKE.ie;
dragobj = null;
oldZ = 100;
document.onmousedown = start;
document.onmousemove = drag;
document.onmouseup   = end;
function start(e)
{
	var ev = IE ? window.event : e;
	dragobj = search( IE ? ev.srcElement : ev.target );
	if (dragobj)
	{
		dragobj.style.zIndex = oldZ + 1;
		oldZ++;
		offX = IE ? ev.clientX - dragobj.style.pixelLeft : ev.pageX - parseInt(dragobj.style.left);
		offY = IE ? ev.clientY - dragobj.style.pixelTop  : ev.pageY - parseInt(dragobj.style.top );
	}
	else end();
}
function drag(e)
{
	if (dragobj)
	{
		var ev = IE ? window.event : e;
		dragobj.style.left = (IE ? ev.clientX : ev.pageX) - offX;
		dragobj.style.top  = (IE ? ev.clientY : ev.pageY) - offY;
	}
}
function end()
{
	dragobj = null;
}
function search(obj)
{
	if (obj.getAttribute("dragme")!=null)
		return obj;
	else if (obj.parentNode != document)
		return search(obj.parentNode);
}