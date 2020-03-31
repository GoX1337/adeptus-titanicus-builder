const weapons = {
    warlord: {
        arm: [
            {
                name: "Plasma Blastgun",
                type: "Arm",
                cost: 30
            },
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
            },
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
            }
        ]
    }
};

const titans = [
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
    },
    {
        name: "Cerastus Knight",
        type: "cerastus",
        cost: 130,
        banner: true,
        rightArm: null,
        leftArm: null
    },
    {
        name: "Questoris Knight",
        type: "questoris",
        cost: 120,
        banner: true,
        rightArm: null,
        leftArm: null
    },
    {
        name: "Acastus Knight",
        type: "acastus",
        cost: 80,
        banner: true,
        rightArm: null,
        leftArm: null
    }
];