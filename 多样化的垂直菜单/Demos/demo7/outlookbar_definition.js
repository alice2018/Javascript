var OUTLOOKBAR_DEFINITION = {
	format:{
		target:'main',
		blankImage:'images/b.gif',
		rollback:true,
		animationSteps:3,
		animationDelay:20,
		templates:{
			panel:{
				normal:'<div style="background: left top no-repeat url(images/panel_left.gif); text-align: center;"><div style="margin-left: 18px; padding-right: 18px; background: right top url(images/panel_right.gif); height: 37px;"><img src="images/{image}" width="{width}" height="37" /></div></div>'
			},
			item:{
				normal:'<div style="padding: 14px 0 0 0; background: url(images/item.gif); text-align: center; font: 9pt tahoma; color: white; height: 96px;"><div style="padding-left: 5px;"><img src="images/icon{iconIndex}.gif" width="44" height="45" /></div><br />{text}</div>',
				rollovered:'<div style="padding: 14px 0 0 0; background: url(images/item_r.gif); text-align: center; font: 9pt tahoma; color: white; height: 96px;"><div style="padding-left: 5px;"><img src="images/icon{iconIndex}_r.gif" width="44" height="45" /></div><br />{text}</div>'
			},
			upArrow:{
				normal:'<img src="images/up.gif" width="30" height="30" />'
			},
			downArrow:{
				normal:'<img src="images/down.gif" width="30" height="30" />'
			}
		}
	},
	panels:[
		{image:"panel1.gif", width:75, url:'dummy.html?id=1',
			items:[
				{text:"Pisces", iconIndex:'12', url:'dummy.html?id=2'},
				{text:"Aries", iconIndex:'1', url:'dummy.html?id=3'},
				{text:"Taurus", iconIndex:'2', url:'dummy.html?id=4'}
			]
		},
		{image:"panel2.gif", width:72, url:'dummy.html?id=5',
			items:[
				{text:"Gemini", iconIndex:'3', url:'dummy.html?id=6'},
				{text:"Cancer", iconIndex:'4', url:'dummy.html?id=7'},
				{text:"Leo", iconIndex:'5', url:'dummy.html?id=8'}
			]
		},
		{image:"panel3.gif", width:70, url:'dummy.html?id=9',
			items:[
				{text:"Virgo", iconIndex:'6', url:'dummy.html?id=10'},
				{text:"Libra", iconIndex:'7', url:'dummy.html?id=11'},
				{text:"Scorpio", iconIndex:'8', url:'dummy.html?id=12'}
			]
		},
		{image:"panel4.gif", width:66, url:'dummy.html?id=13',
			items:[
				{text:"Saggitarius", iconIndex:'9', url:'dummy.html?id=14'},
				{text:"Capricorn", iconIndex:'10', url:'dummy.html?id=15'},
				{text:"Aquarius", iconIndex:'11', url:'dummy.html?id=16'}
			]
		}
	]
}
