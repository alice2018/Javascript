// configure path to "navbar.js".  It can be relative or absolute.  We set it
// as relative here so that the demo works on file:// protocol.
_NavBar_url = "navbar";

// this function constructs a label based on variable _NavBar_pageID which
// should be defined in the HTML file.
function L(label) {
	if (_NavBar_pageID.toLowerCase() == label.toLowerCase())
		label = "!" + label;
	return label;
}

// pass ID-s of some DIV-s as parameters:
//  - "content" is the DIV where the menu will be displayed
//  - "beforemenu" is a DIV that will appear in the nav. bar, before sections (optional)
//  - "aftermenu" is a DIV that will appear in the nav. bar but after the sections (optional)
var menu = new NavBar("content", "beforemenu", "aftermenu");

// adds top control buttons
menu.openMenu(true);


// DEFINITION OF MENU SECTIONS.

// first section
new NavSection(menu, // parent menubar
	       "Quick start", // section title

	       [ // array of menu items

		       // Item starting with "!" is the current one.
		       // It will gain an additional CSS class (item-disabled).
		       // It's best to only have _one_ item like this for the whole menu.

		       // order:
		       //    1: menu item label
		       //    2: url for this menu item
		       //    3: the "title" attribute (tooltip)
		       //    4: path to an icon for the menu item (null or "" for no icon)

		       // 1                        2                 3                                      4
		       // label                    url               tooltip                                icon
		       [  L("License and index"),  "index.html",     "Index page",                          "images/bullet.png" ],
		       [  L("Installation notes"), "install.html",   "How to install NavBar on your site",  "images/bullet.png" ],
		       [  L("Customization"),      "customize.html", "How to customize NavBar",             "images/bullet.png" ],
		       [  L("Technical support"),  "support.html",   "Contact us for free tech support",    "images/bullet.png" ]
		       ]
	);

new NavSection(menu, "User guide", [
		       [ L("NavBar files"), "doc-files.html", "NavBar files" ],
		       [ L("Create the NavBar"), "doc-create.html", "Parameters passed to new NavBar" ],
		       [ L("Changing prefs"), "doc-prefs.html", "How and when to change preferences" ],
		       null, // this introduces a separator
		       [ L("Custom control icons"), "doc-icons.html", "Using custom control icons" ],
		       [ L("Changing the look"), "doc-skins.html", "What does that CSS mean?" ],
		       [ L("Animation speed"), "doc-animation.html", "Is animation too slow/fast?" ]
		       ]);

new NavSection(menu, "Samples", [
		       [ "Custom icons", "samples/icons.html", "Custom icons", null, "_blank" ],
		       [ "Advanced navbar", "samples/advanced.html", "An advanced demo", null, "_blank" ],
		       [ "WinXP style", "samples/winxp.html", "Windows XP Explorer-style menus", null, "_blank" ],
		       null,
		       [ "Can you click it?", "samples/show.html", "A bizarre demo", null, "_blank" ]
		       ]);

new NavSection(menu, "HTML inside", "html-section"); // look in the HTML code for a DIV with ID="html-section"

// second section
new NavSection
(menu, "Other links",
 [
	 [ "Dynarch.com",   "http://www.dynarch.com/",                "Applied Web Standards!", null ],
	 [ "Mishoo",        "http://www.bazon.com/mishoo/",           "Mishoo's homepage",      null ],
	 [ "DynarchMenu",   "http://www.dynarch.com/products/hmenu/", "The BEST JavaScript menu system", null ],
	 [ "HTMLArea",      "http://dynarch.com/htmlarea/",           "Cross-browser, online HTML editor",     null ],
	 null, // separator
	 [ "Zeldman",       "http://www.zeldman.com",                 "Jeffrey Zeldman",        null, "_blank" ],
	 [ "Glish.com",     "http://www.glish.com/css",               "CSS layout techniques",  null, "_blank" ],
	 [ "ALA",           "http://www.alistapart.com",              "A List Apart",           null, "_blank" ],
	 [ "W3 Consortium", "http://www.w3.org",                      "Web Standards",          null, "_blank" ]]);
// note, the last 4 links above open in a window with the name "_blank"--that is, a new window ;-)

//  label            url                                       tooltip                     icon

// call generate to create the menubar
menu.generate(true);
menu.sync(true);

// set current values in preferences panel

function comboSelectValue(c, val) {
	var ops = c.getElementsByTagName("option");
	for (var i = 0; i < ops.length; ++i) {
		var op = ops[i];
		op.selected = (op.value == val);
	}
};

document.getElementById("autohide").checked = menu.prefs["auto-hide"];
document.getElementById("monosection").checked = menu.prefs["mono-section"];
document.getElementById("tooltips").checked = menu.prefs["tooltips"];
comboSelectValue(document.getElementById("animation"), menu.prefs["animation"]);
