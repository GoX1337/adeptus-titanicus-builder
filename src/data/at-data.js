const weapons = {
    warlord: {
        arm: [
            {
                name: "Arioch Titan Power Claw",
                type: "Arm",
                cost: 25
            },
            {
                name: "Belicosa Volcano Cannon",
                type: "Arm",
                cost: 55
            },
            {
                name: "Macro-gatling Blaster",
                type: "Arm",
                cost: 30
            },
            {
                name: "Mori Quake Cannon",
                type: "Arm",
                cost: 20
            },
            {
                name: "Sunfury Plasma Annihilator",
                type: "Arm",
                cost: 45
            }
        ],
        carapace: [
            {
                name: "Apocalypse Missile Launchers",
                type: "Carapace",
                cost: 15
            },
            {
                name: "Paired Gatling Blasters",
                type: "Carapace",
                cost: 30
            },
            {
                name: "Paired Laser Blasters",
                type: "Carapace",
                cost: 50
            },
            {
                name: "Paired Turbo Laser Destructors",
                type: "Carapace",
                cost: 35
            },
            {
                name: "Vulcan Mega-bolter Array",
                type: "Carapace",
                cost: 20
            }
        ]   
    },
    warlord_nemesis: {
        arm: [
            {
                name: "Gatling Blaster",
                type: "Arm",
                cost: 15
            },
            {
                name: "Laser Blaster",
                type: "Arm",
                cost: 25
            },
            {
                name: "Melta Cannon",
                type: "Arm",
                cost: 35
            },
            {
                name: "Volcano Cannon",
                type: "Arm",
                cost: 25
            }
        ],
        carapace: [
            {
                name: "Bellicosa Volcano Cannon",
                type: "Carapace",
                cost: 55
            },
            {
                name: "Mori Quake Cannon",
                type: "Carapace",
                cost: 20
            }
        ]   
    },
    warlord_sinister: {
        arm: [
            {
                name: "Arioch Titan Power Claw",
                type: "Arm",
                cost: 25
            },
            {
                name: "Belicosa Volcano Cannon",
                type: "Arm",
                cost: 55
            },
            {
                name: "Macro-gatling Blaster",
                type: "Arm",
                cost: 30
            },
            {
                name: "Mori Quake Cannon",
                type: "Arm",
                cost: 20
            },
            {
                name: "Sunfury Plasma Annihilator",
                type: "Arm",
                cost: 45
            }
        ],
        carapace: [
            {
                name: "Apocalypse Missile Launchers",
                type: "Carapace",
                cost: 15
            },
            {
                name: "Paired Gatling Blasters",
                type: "Carapace",
                cost: 30
            },
            {
                name: "Paired Laser Blasters",
                type: "Carapace",
                cost: 50
            },
            {
                name: "Paired Turbo Laser Destructors",
                type: "Carapace",
                cost: 35
            },
            {
                name: "Vulcan Mega-bolter Array",
                type: "Carapace",
                cost: 20
            }
        ]   
    },
    reaver: {
        arm: [
            {
                name: "Volcano Cannon",
                type: "Arm",
                cost: 25
            },
            {
                name: "Melta Cannon",
                type: "Arm",
                cost: 35
            },
            {
                name: "Reaver Titan Power Fist",
                type: "Arm",
                cost: 20
            },
            {
                name: "Laser Blaster",
                type: "Arm",
                cost: 25
            },
            {
                name: "Reaver Titan Chainfist",
                type: "Arm",
                cost: 20
            },
            {
                name: "Gatling Blaster",
                type: "Arm",
                cost: 15
            }
        ],
        carapace: [
            {
                name: "Turbo Laser Destructor",
                type: "Carapace",
                cost: 20
            },
            {
                name: "Apocalypse Missile Launcher",
                type: "Carapace",
                cost: 10
            },
            {
                name: "Vulcain Mega-bolter",
                type: "Carapace",
                cost: 10
            },
            {
                name: "Warp Missible Support Rack",
                type: "Carapace",
                cost: 10
            }
        ]
    },
    warhound: {
        arm: [
            {
                name: "Turbo Laser Destructor",
                type: "Arm",
                cost: 20
            },
            {
                name: "Inferno Gun",
                type: "Arm",
                cost: 20
            },
            {
                name: "Vulcain Mega-bolter",
                type: "Arm",
                cost: 10
            },
            {
                name: "Natrix Shock Lance",
                type: "Arm",
                cost: 20
            },
            {
                name: "Plasma Blast Gun",
                type: "Arm",
                cost: 30
            },
            {
                name: "Ursaw Claw",
                type: "Arm",
                cost: 10
            }
        ]
    }
};

const titans = [
    {
        name: "Warlord-Sinister",
        type: "warlord_sinister",
        cost: 685,
        rightArm: null,
        leftArm: null,
        carapace: null
    },
    {
        name: "Warlord",
        type: "warlord",
        cost: 385,
        rightArm: null,
        leftArm: null,
        carapace: null
    },
    {
        name: "Warlord Nemesis",
        type: "warlord_nemesis",
        cost: 325,
        rightArm: null,
        leftArm: null,
        carapace: null
    },
    {
        name: "Reaver",
        type: "reaver",
        cost: 250,
        rightArm: null,
        leftArm: null,
        carapace: null
    },
    {
        name: "Warhound",
        type: "warhound",
        cost: 180,
        rightArm: null,
        leftArm: null
    }
];

const banners = [
    {
        name: "Acastus Knight Banner",
        cost: 150,
        type: "banner",
        composition : [
            {
                name: "Acastus Knight Lord Scion",
                cost: 150,
                type: "knight"
            }
        ]
    },
    {
        name: "Cerastus Knight Banner",
        cost: 130,
        type: "banner",
        composition : [
            {
                name: "Cerastus Knight Lord Scion",
                cost: 70,
                type: "knight"
            },
            {
                name: "Cerastus Knight Scion Martial",
                cost: 60,
                type: "knight"
            }
        ]
    },
    {
        name: "Questoris Knight Banner",
        cost: 120,
        type: "banner",
        composition : [
            {
                name: "Questoris Knight Lord Scion",
                cost: 50,
                type: "knight"
            },
            {
                name: "Questoris Knight Scion Martial",
                cost: 35,
                type: "knight"
            },
            {
                name: "Questoris Knight Scion Martial",
                cost: 35,
                type: "knight"
            }
        ]
    }
];

const maniples = [
    {
        name: "Audax Canis Light",
        cost: 540,
        type: "maniple",
        composition: [
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            }
        ]
    },
    {
        name: "Arcus Battlenine",
        cost: 685,
        type: "maniple",
        composition: [
            {
                name: "Warlord Nemesis",
                type: "warlord_nemesis",
                cost: 325,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            }
        ]
    },
    {
        name: "Axiom Battleline",
        cost: 815,
        type: "maniple",
        composition: [
            {
                name: "Warlord",
                type: "warlord",
                cost: 385,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            }
        ]
    },
    {
        name: "Corsair Battleline",
        cost: 750,
        type: "maniple",
        composition: [
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            }
        ]
    },
    {
        name: "Dominus Battleforce",
        cost: 885,
        type: "maniple",
        composition: [
            {
                name: "Warlord",
                type: "warlord",
                cost: 385,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            }
        ]
    },
    {
        name: "Ferrox Light",
        cost: 610,
        type: "maniple",
        composition: [
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            }
        ]
    },
    {
        name: "Fortis Battle",
        cost: 885,
        type: "maniple",
        composition: [
            {
                name: "Warlord",
                type: "warlord",
                cost: 385,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            }
        ]
    },
    {
        name: "Janissary Battleline",
        cost: 610,
        type: "maniple",
        composition: [
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            }
        ]
    },
    {
        name: "Lupercal Light",
        cost: 540,
        type: "maniple",
        composition: [
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            }
        ]
    },
    {
        name: "Mandatum Battleline",
        cost: 745,
        type: "maniple",
        composition: [
            {
                name: "Warlord",
                type: "warlord",
                cost: 385,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            }
        ]
    },
    {
        name: "Myrmidon Battleline",
        cost: 1020,
        type: "maniple",
        composition: [
            {
                name: "Warlord",
                type: "warlord",
                cost: 385,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Warlord",
                type: "warlord",
                cost: 385,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            }
        ]
    },
    {
        name: "Regia Battleline",
        cost: 950,
        type: "maniple",
        composition: [
            {
                name: "Warlord",
                type: "warlord",
                cost: 385,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Warlord",
                type: "warlord",
                cost: 385,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            }
        ]
    },
    {
        name: "Ruptura Battleline",
        cost: 900,
        type: "maniple",
        composition: [
            {
                name: "Warlord Nemesis",
                type: "warlord_nemesis",
                cost: 325,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Warlord Nemesis",
                type: "warlord_nemesis",
                cost: 325,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            }
        ]
    },
    {
        name: "Veneator Light",
        cost: 610,
        type: "maniple",
        composition: [
            {
                name: "Reaver",
                type: "reaver",
                cost: 250,
                rightArm: null,
                leftArm: null,
                carapace: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            },
            {
                name: "Warhound",
                type: "warhound",
                cost: 180,
                rightArm: null,
                leftArm: null
            }
        ]
    }
];

export default {
    weapons,
    titans,
    banners,
    maniples
}