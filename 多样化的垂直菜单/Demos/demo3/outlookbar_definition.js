var OUTLOOKBAR_DEFINITION = {
	format:{
		target:'main',
		blankImage:'images/b.gif',
		rollback:true,
		animationSteps:7,
		animationDelay:20,
		templates:{
			panel:{
				normal:'<img src="{image}" width="110" height="35" />'
			},
			item:{
				normal:'<div style="width: 110px; height: 93px; background: url(images/bg_n.gif); text-align: center;"><img src="images/ico_{icon}_n.gif" width="72" height="64" /><table width="110" height="25" cellspacing="0" cellpadding="0" border="0"><tr><td style="font: 8pt tahoma; text-align: center;">{text}</td></tr></table></div>',
				rollovered:'<div style="width: 110px; height: 93px; background: url(images/bg_r.gif); text-align: center;"><img src="images/ico_{icon}_r.gif" width="72" height="64" /><table width="110" height="25" cellspacing="0" cellpadding="0" border="0"><tr><td style="font: 8pt tahoma; text-align: center;">{text}</td></tr></table></div>'
			},
			upArrow:{
				normal:'<img src="images/up.gif" width="29" height="29" />'
			},
			downArrow:{
				normal:'<img src="images/down.gif" width="29" height="29" />'
			}
		}
	},
	panels:[
		{image:'images/panel1.gif', url:'dummy.html?id=1',
			items:[
				{text:"Word", icon:'word', url:'dummy.html?id=2'},
				{text:"Excel", icon:'excel', url:'dummy.html?id=3'},
				{text:"Access", icon:'access', url:'dummy.html?id=4'},
				{text:"Visio", icon:'visio', url:'dummy.html?id=5'},
				{text:"Picture Manager", icon:'picman', url:'dummy.html?id=6'}
			]
		}
	]
}
