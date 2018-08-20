var OUTLOOKBAR_DEFINITION = {
	format:{
		target:'main',
		blankImage:'images/b.gif',
		rollback:true,
		animationSteps:3,
		animationDelay:20,
		templates:{
			panel:{
				normal:'<div style="background: left top no-repeat url(images/panel_left.gif); text-align: center;"><div style="margin-left: 15px; padding-right: 15px; background: right top url(images/panel_right.gif); padding-top: 4px; height: 26px; font: bold 10pt trebuchet ms;">{text}</div></div>',
				rollovered:'<div style="background: left top no-repeat url(images/panel_left_r.gif); text-align: center;"><div style="margin-left: 15px; padding-right: 15px; background: right top url(images/panel_right_r.gif); padding-top: 4px; height: 26px; font: bold 10pt trebuchet ms;">{text}</div></div>'
			},
			item:{
				normal:'<table cellspacing="3" cellpadding="0" align="center"><tr><td width="122" height="122" style="background: url(images/i{index}.jpg);" align="right" valign="bottom"><table border="0" width="112" height="35" cellspacing="0" cellpadding="0"><tr><td style="font: 8pt verdana; text-align: center;">{text}</td></tr></table></td></tr></table>',
				rollovered:'<table cellspacing="3" cellpadding="0" align="center"><tr><td width="122" height="122" style="background: url(images/i{index}_r.jpg);" align="right" valign="bottom"><table border="0" width="112" height="35" cellspacing="0" cellpadding="0"><tr><td style="font: 8pt verdana; text-align: center;">{text}</td></tr></table></td></tr></table>'
			},
			upArrow:{
				normal:'<img src="images/up.gif" width="31" height="32" />',
				rollovered:'<img src="images/up_r.gif" width="31" height="32" />'
			},
			downArrow:{
				normal:'<img src="images/down.gif" width="31" height="32" />',
				rollovered:'<img src="images/down_r.gif" width="31" height="32" />'
			}
		}
	},
	panels:[
		{text:"Et tam neque", url:'dummy.html?id=1',
			items:[
				{index:'01', text:'Ut enim ad<br />minim veniam', url:'dummy.html?id=2'},
				{index:'02', text:'Exercitation', url:'dummy.html?id=3'},
				{index:'03', text:'Ullamco laboris', url:'dummy.html?id=4'},
				{index:'04', text:'Duis aute', url:'dummy.html?id=5'},
				{index:'05', text:'Sed quia non', url:'dummy.html?id=6'},
				{index:'06', text:'Ut aliquid<br />ex ea commodi', url:'dummy.html?id=7'}
			]
		},
		{text:"Velit esse", url:'dummy.html?id=8',
			items:[
				{index:'07', text:'Qui ratione voluptate<br />', url:'dummy.html?id=9'},
				{index:'08', text:'Sed quia', url:'dummy.html?id=10'},
				{index:'09', text:'Rem aperiam<br />eaque ipsa', url:'dummy.html?id=11'},
				{index:'10', text:'Aut fugit', url:'dummy.html?id=12'},
				{index:'11', text:'Beatae vitae<br />dicta sunt', url:'dummy.html?id=13'},
				{index:'12', text:'Quae ab illo', url:'dummy.html?id=14'}
			]
		}
	]
}
