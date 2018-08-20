var OUTLOOKBAR_DEFINITION = {
	format:{
		target:'main',
		blankImage:'images/b.gif',
		rollback:true,
		animationSteps:3,
		animationDelay:20,
		templates:{
			panel:{
				common:'<table width="100%" height="37" border="0" cellspacing="0" cellpadding="0" background="images/panel_middle_{state}.gif"><tr><td><img src="images/panel_left_{state}.gif" width="10" height="37" /></td><td align="center"><div style="font: bold 11pt trebuchet ms, arial;">{text}</div></td><td align="right"><img src="images/panel_right_{state}.gif" width="10" height="37" /></td></tr></table>',
				normal:{state:'n'},
				rollovered:{state:'r'},
				clicked:{state:'c'}
			},
			item:{
				common:'<table border="0" width="100%"><tr><td><table width="100%" bgcolor="{borderColor}" border="0" cellspacing="1" cellpadding="0"><tr><td><table width="100%" border="0" bgcolor="{backgroundColor}" cellspacing="0" cellpadding="5"><tr align="center"><td><img src="images/icon_{icon}_{state}.gif" width="48" height="48" /></td></tr><tr align="center"><td><span style="font: 9pt verdana;">{text}</span></td></tr></table></td></tr></table></td></tr></table>',
				normal:{borderColor:'#D0D0D0', backgroundColor:'#D0D0D0', state:'n'},
				rollovered:{borderColor:'#0A246A', backgroundColor:'#B6BDD2', state:'r'}
			},
			upArrow:{
				common:'<img src="images/btn_up_{state}.gif" width="24" height="24" />',
				normal:{state:'n'},
				rollovered:{state:'r'},
				clicked:{state:'c'}
			},
			downArrow:{
				common:'<img src="images/btn_down_{state}.gif" width="24" height="24" />',
				normal:{state:'n'},
				rollovered:{state:'r'},
				clicked:{state:'c'}
			}
		}
	},
	panels:[
		{text:"Browsers", url:'dummy.html?id=1',
			items:[
				{text:"Firefox", icon:'01', url:'dummy.html?id=2'},
				{text:"Internet Explorer", icon:'02', url:'dummy.html?id=3'},
				{text:"Konqueror", icon:'03', url:'dummy.html?id=4'},
				{text:"Mozilla", icon:'04', url:'dummy.html?id=5'},
				{text:"MyIE", icon:'05', url:'dummy.html?id=6'},
				{text:"Opera", icon:'06', url:'dummy.html?id=7'}
			]
		},
		{text:"Platforms", url:'dummy.html?id=8',
			items:[
				{text:"Windows XP", icon:'07', url:'dummy.html?id=9'},
				{text:"FreeBSD", icon:'08', url:'dummy.html?id=10'},
				{text:"SCO", icon:'09', url:'dummy.html?id=11'},
				{text:"Mandrake Linux", icon:'10', url:'dummy.html?id=12'},
				{text:"MacOS", icon:'11', url:'dummy.html?id=13'}
			]
		}
	]
};
