var OUTLOOKBAR_DEFINITION = {
	format:{
		target:'main',
		blankImage:'images/b.gif',
		rollback:true,
		animationSteps:7,
		animationDelay:20,
		templates:{
			panel:{
				normal:'<table width="100%" height="27" border="0" cellspacing="0" cellpadding="0" background="images/panel_middle.gif"><tr><td><img src="images/panel_left.gif" width="4" height="27" /></td><td align="center"><img src="{src}" width="{width}" height="27" /></td><td align="right"><img src="images/panel_right.gif" width="4" height="27" /></td></tr></table>'
			},
			item:{
				normal:'<table width="110" border="0" cellpadding="0" cellspacing="0"><tr><td colspan="5"><img src="images/img_01.gif" width="110" height="10"></td></tr><tr><td colspan="2"><img src="images/img_02.gif" width="32" height="46"></td><td><img src="{icon}" width="46" height="46"></td><td colspan="2"><img src="images/img_04.gif" width="32" height="46"></td></tr><tr><td colspan="5"><img src="images/img_05.gif" width="110" height="7"></td></tr><tr><td><img src="images/img_06.gif" width="4" height="24"></td><td colspan="3" width="102" height="24" style="background-color: #DFDFDF; text-align: center; font: 8pt tahoma;">{text}</td><td><img src="images/img_08.gif" width="4" height="24"></td></tr><tr><td colspan="5"><img src="images/img_09.gif" width="110" height="5"></td></tr><tr><td><img src="images/b.gif" width="4" height="1"></td><td><img src="images/b.gif" width="28" height="1"></td><td><img src="images/b.gif" width="46" height="1"></td><td><img src="images/b.gif" width="28" height="1"></td><td><img src="images/b.gif" width="4" height="1"></td></tr></table>',
				rollovered:'<table width="110" border="0" cellpadding="0" cellspacing="0"><tr><td colspan="5"><img src="images/img_o_01.gif" width="110" height="10"></td></tr><tr><td colspan="2"><img src="images/img_o_02.gif" width="32" height="46"></td><td><img src="{icon}" width="46" height="46"></td><td colspan="2"><img src="images/img_o_04.gif" width="32" height="46"></td></tr><tr><td colspan="5"><img src="images/img_o_05.gif" width="110" height="7"></td></tr><tr><td><img src="images/img_o_06.gif" width="4" height="24"></td><td colspan="3" width="102" height="24" style="background-color: #ADDAF0; text-align: center; font: 8pt tahoma;">{text}</td><td><img src="images/img_o_08.gif" width="4" height="24"></td></tr><tr><td colspan="5"><img src="images/img_o_09.gif" width="110" height="5"></td></tr><tr><td><img src="images/b.gif" width="4" height="1"></td><td><img src="images/b.gif" width="28" height="1"></td><td><img src="images/b.gif" width="46" height="1"></td><td><img src="images/b.gif" width="28" height="1"></td><td><img src="images/b.gif" width="4" height="1"></td></tr></table>'
			},
			upArrow:{
				normal:'<img src="images/upArrow.gif" width="27" height="27" />'
			},
			downArrow:{
				normal:'<img src="images/downArrow.gif" width="27" height="27" />'
			}
		}
	},
	panels:[
		{src:'images/panel_ttl_1.gif', width:90, url:'dummy.html?id=1',
			items:[
				{text:"AutoCAD", icon:'images/ico6.gif', url:'dummy.html?id=2'},
				{text:"Assist", icon:'images/ico7.gif', url:'dummy.html?id=3'},
				{text:"Plotter Wizard", icon:'images/ico1.gif', url:'dummy.html?id=4'}
			]
		},
		{src:'images/panel_ttl_2.gif', width:64, url:'dummy.html?id=5',
			items:[
				{text:"Reference Manager", icon:'images/ico4.gif', url:'dummy.html?id=6'},
				{text:"Sign Apply", icon:'images/ico3.gif', url:'dummy.html?id=7'},
				{text:"BatchLoader", icon:'images/ico5.gif', url:'dummy.html?id=8'}
			]
		},
		{src:'images/panel_ttl_3.gif', width:58, url:'dummy.html?id=9',
			items:[
				{text:"Harcopy Plotter", icon:'images/ico8.gif', url:'dummy.html?id=10'},
				{text:"BatchPlot Utility", icon:'images/ico2.gif', url:'dummy.html?id=11'},
				{text:"Harcopy Styler", icon:'images/ico9.gif', url:'dummy.html?id=12'}
			]
		}
	]
}
