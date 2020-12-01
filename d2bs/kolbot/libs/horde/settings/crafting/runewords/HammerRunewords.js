/**
*	@filename	HammerRunewords.js
*	@author		Adpist M
*	@desc		Hammer runewords
*	@credits	Adpist, JeanMax / SiC-666 / Dark-f, Alogwe, Imba, Kolton, Larryw, Noah, QQValpen, Sam, YGM
*/

var RunewordProfile = {
	runes: {
		stock: true, //pre stock runes before finding base
		stockAllRecipes: true //pre stock runes for each runeword recipe
	},
	
	character : { //Character Runewords

		"armor" : {
			"normal_stealth" : {
				runeword: Runeword.Stealth,
				sockets: 2,
				bases: ["Breast Plate", "Light Plate"],
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[fcr] == 25",
				tier: 250,
				skipIf: ""
			},
			"nm_stealth" : {
				runeword: Runeword.Stealth,
				sockets: 2,
				bases: ["Ghost Armor", "Serpentskin Armor", "Demonhide Armor", "Cuirass", "Mage Plate"],
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[fcr] == 25",
				tier: 350,
				skipIf: ""
			},
			"hell_stealth" : {
				runeword: Runeword.Stealth,
				sockets: 2,
				bases: ["Dusk Shroud", "Wyrmhide", "Scarab Husk", "Wire Fleece", "Great Hauberk", "Boneweave", "Balrog Skin", "Archon Plate"],
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[fcr] == 25",
				tier: 450,
				skipIf: ""
			},
			"nm_smoke" : {
				runeword: Runeword.Smoke,
				sockets: 2,
				bases: ["Ghost Armor", "Serpentskin Armor", "Demonhide Armor", "Cuirass", "Mage Plate"],
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[FireResist] == 50 && [LightResist] == 50",
				tier: 1000,
				skipIf: ""
			},
			"hell_smoke" : {
				runeword: Runeword.Smoke,
				sockets: 2,
				bases: ["Dusk Shroud", "Wyrmhide", "Scarab Husk", "Wire Fleece", "Great Hauberk", "Boneweave", "Balrog Skin", "Archon Plate"],
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[FireResist] == 50 && [LightResist] == 50",
				tier: 2000,
				skipIf: ""
			}
		},
		"shield" : {
			"normal_ancients_pledge" : {
				runeword: Runeword.AncientsPledge,
				sockets: 3,
				bases: ["Kite Shield", "Large Shield", "Bone Shield", "Monarch"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[FireResist] >= 40 && [LightResist] >= 40",
				tier: 5000,
				skipIf: ""
			},
			"spirit" : {
				runeword: Runeword.Spirit,
				sockets: 4,
				bases: ["Monarch"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[fcr] >= 25",
				tier: 10000,
				skipIf: ""
			}
		},
		"auricshields" : {
			"pala_ancients_pledge" : {
				runeword: Runeword.AncientsPledge,
				sockets: 3,
				bases: ["Targe", "Rondache", "Aerin Shield", "Crown Shield","Royal Shield","Heraldic Shield","Aerin Shield", "Akaran Targe", "Akaran Rondache", "Protector Shield", "Gilded Shield", "Royal Shield","Sacred Targe", "Sacred Rondache", "Kurast Shield", "Zakarum Shield","Vortex Shield"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[FireResist] >= 40 && [LightResist] >= 40",
				tier: 5500,
				skipIf: ""
			},
			"pala_spirit" : {
				runeword: Runeword.Spirit,
				sockets: 4,
				bases: ["Targe", "Rondache", "Aerin Shield", "Crown Shield","Royal Shield","Heraldic Shield","Aerin Shield", "Akaran Targe", "Akaran Rondache", "Protector Shield", "Gilded Shield", "Royal Shield"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[fcr] >= 25",
				tier: 11000,
				skipIf: ""
			},
			"pala_elite_spirit" : {
				runeword: Runeword.Spirit,
				sockets: 4,
				bases: ["Sacred Targe", "Sacred Rondache", "Kurast Shield", "Zakarum Shield","Vortex Shield"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[fcr] >= 25",
				tier: 12000,
				skipIf: ""
			},
			
			"pala_endgame_spirit" : {
				runeword: Runeword.Spirit,
				sockets: 4,
				bases: ["Sacred Targe"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: true,
				recipeType: Recipe.Socket.Shield,
				roll: Roll.NonEth,
				baseCondition: "[fireresist] >= 40",
				qualityCondition: "[quality] <= superior",
				statCondition: "[fcr] >= 30",
				tier: 15000,
				skipIf: ""
			},
			
			"pala_final_spirit" : {
				runeword: Runeword.Spirit,
				sockets: 4,
				bases: ["Sacred Targe"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: true,
				recipeType: Recipe.Socket.Shield,
				roll: Roll.NonEth,
				baseCondition: "[fireresist] >= 45",
				qualityCondition: "[quality] <= superior",
				statCondition: "[fcr] >= 35",
				tier: 20000,
				skipIf: ""
			},
		},

		"sword" : {
			"spirit" : {
				runeword: Runeword.Spirit,
				sockets: 4,
				bases: ["Broad Sword", "Crystal Sword"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[itemallskills] == 2",
				tier: 10000,
				skipIf: ""
			}
		},

		"helm" : {
			"Lore" : {
				runeword: Runeword.Lore,
				sockets: 2,
				bases: ["Crown", "Mask","Bone Helm"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[LightResist] >= 25",
				tier: 75,
				skipIf: ""
			},
			"higher_Lore" : {
				runeword: Runeword.Lore,
				sockets: 2,
				bases: ["War Hat", "Grim Helm","Grand Crown", "Demonhead", "Bone Visage"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[LightResist] >= 25",
				tier: 120,
				skipIf: ""
			}
		}
	},

	merc: { //Merc runewords
		"polearm" : {
			"normal_insight" : {
				runeword: Runeword.Insight,
				sockets: 4,
				bases: ["Poleaxe", "Halberd"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[Meditationaura] <= 17",
				tier: 50000000,
				skipIf: ""
			},

			"nm_insight" : {
				runeword: Runeword.Insight,
				sockets: 4,
				bases: ["Bill", "Battle Scythe", "Partizan", "Bec De Corbin"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[Meditationaura] <= 17",
				tier: 100000000,
				skipIf: ""
			},

			"hell_insight" : {
				runeword: Runeword.Insight,
				sockets: 4,
				bases: ["Thresher", "Cryptic Axe", "Great Poleaxe", "Giant Thresher"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[Meditationaura] <= 17",
				tier: 150000000,
				skipIf: ""
			},

			"hell_insight_endgame" : {
				runeword: Runeword.Insight,
				sockets: 4,
				bases: ["Thresher", "Cryptic Axe", "Great Poleaxe", "Giant Thresher"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: true,
				recipeType: Recipe.Socket.Weapon,
				roll: Roll.Eth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[Meditationaura] == 17",
				tier: 200000000,
				skipIf: ""
			}
		},
		
		"armor" : {
			"treachery_noneth" : {
				runeword: Runeword.Treachery,
				sockets: 4,
				bases: ["Dusk Shroud", "Wyrmhide", "Scarab Husk", "Wire Fleece", "Great Hauberk", "Boneweave", "Archon Plate"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[ias] == 45",
				tier: 50000000, //non eth threachery
				skipIf: ""
			},
			
			"treachery_eth" : {
				runeword: Runeword.Treachery,
				sockets: 4,
				bases: ["Dusk Shroud", "Wyrmhide", "Scarab Husk", "Wire Fleece", "Great Hauberk", "Boneweave", "Archon Plate"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.Eth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[ias] == 45",
				tier: 100000000, //eth threachery
				skipIf: ""
			}
		}
	}
};