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
            ,
            {
                name: "Vulcain Mega-bolter",
                type: "Carapace",
                cost: 10
            },
            ,
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
        name: "Acastus Knight",
        type: "acastus_knight",
        cost: 150,
        rightArm: null,
        leftArm: null
    },
    {
        name: "Cerastus Knight",
        type: "cerastus_knight",
        cost: 130,
        rightArm: null,
        leftArm: null
    },
    {
        name: "Questoris Knight",
        type: "questoris_knight",
        cost: 120,
        rightArm: null,
        leftArm: null
    }
];

const maniples = [
    {
        name: "Audax Canis Light",
        cost: 540
    },
    {
        name: "Arcus Battlenine",
        cost: 685
    },
    {
        name: "Axiom Battleline",
        cost: 815
    },
    {
        name: "Corsair Battleline",
        cost: 750
    },
    {
        name: "Dominus Battleforce",
        cost: 885
    },
    {
        name: "Ferrox Light",
        cost: 610
    },
    {
        name: "Fortis Battle",
        cost: 885
    },
    {
        name: "Janissary Battleline",
        cost: 610
    },
    {
        name: "Lupercal Light",
        cost: 540
    },
    {
        name: "Mandatum Battleline",
        cost: 745
    },
    {
        name: "Myrmidon Battleline",
        cost: 1020
    },
    {
        name: "Regia Battleline",
        cost: 950
    },
    {
        name: "Ruptura Battleline",
        cost: 900
    },
    {
        name: "Veneator Light",
        cost: 610
    }
];