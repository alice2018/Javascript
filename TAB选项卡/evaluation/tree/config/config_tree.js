var tree;

function onNodeClick()
{
	var node = tree.getSelectedNode();
	parent.document.getElementById("main").src = node.action;
}

function configTree()
{
	var red = "rgb(176,8,95)";
	var highlight = "black";
	//var web       = "/pintabdevaspnet/";
	// opera
	//var web       = "../../";
	var web       = "";
	var newString = " (<font color=red>New</font>)";
	
	if(is.opera)
		web = "../../";

	tree                 = new Tree();
	tree.backcolor       = "#ECE9D8"
	tree.selectfontcolor = red; //"rgb(176,8,95)";
	tree.highlight       = true;
	tree.font            = "Verdana, Arial, Helvetica, sans-serif"
	tree.fontsize        = "11px";
	tree.folderIcon      = "images/closed.gif";
	tree.openFolderIcon  = "images/opened.gif";
	tree.isFolderOpenedWhenTextClicked = true;
	tree.setIconsBlank();
	tree.onNodeClick         = "onNodeClick()";


	var node0 = new Node("New - pinTab 2.0");
	node0.fontbold = true;
	node0.fontcolor = red;
	node0.expanded = true;
	tree.add(node0);

	var node100 = new Node("New Features in 2.0",web + "evaluation/doc/newfeatures.html")
	node100.fontbold = true;
	node0.add(node100);

	var node100 = new Node("pinTab Datasheet",web + "evaluation/doc/pinTabDataSheet.pdf")
	node100.fontbold = true;
	node0.add(node100);

	var node3 = new Node("pinTab Samples");
	node3.fontbold = true;
	node3.fontcolor = highlight;
	node3.expanded = true;
	node0.add(node3);

	// Basics
	var node31 = new Node("Basics");
	node31.fontbold = true;
	node31.fontcolor = highlight;
	node31.expanded = true;
	node3.add(node31);

	node31.add(new Node("URL based",web + "evaluation/samples/urlbased/urlbased.html"));
	node31.add(new Node("Simple",web + "evaluation/samples/simple/simple.html"));
	node31.add(new Node("Multiple tab rows" + newString,web + "evaluation/samples/tabmode/multiplerow.html"));
	node31.add(new Node("Scrollable tab row" + newString,web + "evaluation/samples/tabmode/scrolling.html"));
	node31.add(new Node("Caching pages",web + "evaluation/samples/cache/cache.html"));

	// design
	var node31 = new Node("Design");
	node31.fontbold = true;
	node31.fontcolor = highlight;
	node31.expanded = true;
	node3.add(node31);
	node31.add(new Node("Design",web + "evaluation/samples/design/design.html"));

	// Using .Net features
	var node31 = new Node("Using .Net features");
	node31.fontbold = true;
	node31.fontcolor = highlight;
	node31.expanded = true;
	node3.add(node31);
	node31.add(new Node("Initiate postback",web + "evaluation/samples/netonly.html"));
	node31.add(new Node("Use .Net validation/postback I" + newString,web + "evaluation/samples/netonly.html"));
	node31.add(new Node("Use .Net validation/postback II" + newString,web + "evaluation/samples/netonly.html"));
	node31.add(new Node("Activate a tab after postback " + newString,web + "evaluation/samples/netonly.html"));

	// special
	var node31 = new Node("Special features");
	node31.fontbold = true;
	node31.fontcolor = highlight;
	node31.expanded = true;
	node3.add(node31);
	node31.add(new Node("Separators",web + "evaluation/samples/separator/separator.html"));
	node31.add(new Node("Multiple tabs" + newString,web + "evaluation/samples/more/more.html"));
	node31.add(new Node("Resize",web + "evaluation/samples/resize/resize.html"));
	node31.add(new Node("Cascade",web + "evaluation/samples/multiple/multiple.html"));
	node31.add(new Node("Dialog" + newString,web + "evaluation/samples/dialog/open.html"));

	// client
	var node31 = new Node("Client features");
	node31.fontbold = true;
	node31.fontcolor = highlight;
	node31.expanded = true;
	node3.add(node31);
	node31.add(new Node("Call a tab item page function",web + "evaluation/samples/call/call.html"));
	node31.add(new Node("Events" + newString,web + "evaluation/samples/events/events.html"));
	node31.add(new Node("API" + newString,web + "evaluation/samples/api/api.html"));
	node31.add(new Node("Add tab dynamicly" + newString,web + "evaluation/samples/runtime/addtab.html"));

	var node8 = new Node("pinTab Docs");
	node8.fontbold = true;
	node8.fontcolor = highlight;
	node0.add(node8);

	node8.add(new Node("pinTab Data Sheet",web + "evaluation/doc/pinTabDataSheet.pdf"));
	node8.add(new Node("pinTab Manual",web + "evaluation/doc/pinTabManual.pdf"));

	var node15 = new Node("Download pinTab");
	node15.fontbold = true;
	node15.fontcolor = "blue";
	node15.expanded = true;
	tree.add(node15);

	node15.add(new Node("pinTab Evaluation","http://www.pintexx.com/application/products/development/pinTab/download_files.html"));

	var node16 = new Node("Purchase pinTab");
	node16.fontbold = true;
	node16.fontcolor = "blue";
	node16.expanded = true;
	tree.add(node16);

	node16.add(new Node("Licencing","http://www.pintexx.com/application/products/development/pinTab/preise.html"));
	node16.add(new Node("Purchase","http://www.pintexx.com/application/products/order.html"));

	tree.draw();

}