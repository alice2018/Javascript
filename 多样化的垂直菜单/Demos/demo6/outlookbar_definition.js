var OUTLOOKBAR_DEFINITION = {
	format:{
		target:'main',
		blankImage:'images/b.gif',
		rollback:true,
		animationSteps:3,
		animationDelay:20,
		templates:{
			panel:{
				normal:'<div style="background: right top url(images/panel_right.gif);"><div style="background: left top no-repeat url(images/panel_left.gif); padding: 10px 13px 0 13px; color: #7E7D7D; font: bold 11pt arial; text-align: center; height: 35px;">{text}</div></div>'
			},
			item:{
				normal:'<div style="background: top right url(images/item_bg_right.gif);"><div style="background: top left no-repeat url(images/item_bg_left.gif); height: 92px; text-align: center; padding-top: 9px;"><img src="images/{icon}.gif" width="32" height="32" /><table align="center" cellspacing="0" cellpading="0" border="0" height="50"><tr><td align="center" valign="middle" style="font: 8pt tahoma;">{text}</td></tr></table></div></div>',
				rollovered:'<div style="background: top right url(images/item_bg_right_r.gif);"><div style="background: top left no-repeat url(images/item_bg_left_r.gif); height: 92px; text-align: center; padding-top: 9px;"><img src="images/{icon}_r.gif" width="32" height="32" /><table align="center" cellspacing="0" cellpading="0" border="0" height="50"><tr><td align="center" valign="middle" style="font: 8pt tahoma;">{text}</td></tr></table></div></div>'
			},
			upArrow:{
				normal:'<img src="images/up.gif" width="27" height="28" />'
			},
			downArrow:{
				normal:'<img src="images/down.gif" width="27" height="28" />'
			}
		}
	},
	panels:[
		{text:"Common", url:'dummy.html?id=1',
			items:[
				{text:"Data, Time, Language, and Regional Options", icon:'icon2', url:'dummy.html?id=2'},
				{text:"Printers and Other Hardware", icon:'icon4', url:'dummy.html?id=3'},
				{text:"Sounds, Speech,<br />and Audio Devices", icon:'icon6', url:'dummy.html?id=4'},
				{text:"Add or Remove Programs", icon:'icon7', url:'dummy.html?id=5'},
				{text:"Appearance and Themes", icon:'icon9', url:'dummy.html?id=6'}
			]
		},
		{text:"Special", url:'dummy.html?id=7',
			items:[
				{text:"Accessibility<br />Options", icon:'icon1', url:'dummy.html?id=8'},
				{text:"User Accounts", icon:'icon3', url:'dummy.html?id=9'},
				{text:"Performance and Maintenance", icon:'icon5', url:'dummy.html?id=10'},
				{text:"Network<br />and Internet Connections", icon:'icon8', url:'dummy.html?id=11'}
			]
		}
	]
}
