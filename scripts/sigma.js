// Config for if the artist accepts commissions
const commission_types = {
    MONEY: "Money",
    DISCORD_NITRO: "Nitro",
    DISCORD_COLLECTIBLES: "Discord Shop Items",
    STEAM_GIFTS: "Steam Gifts",
    KOFI: "Ko-fi Donations",
    NEGOTIABLE: "Payment is negotiable.",
};

// List of artists
const users = [
    {
        "name": "Unknown",
        "id": "1",
        "commissions": []
    },
    {
        "name": "Beep.Boop.The.Bot",
        "id": "2",
        "commissions": []
    },
    {
        "name": "The Crushing One",
        "id": "3",
        "commissions": []
    },
    {
        "name": "prince_purelight",
        "id": "4",
        "commissions": []
    },
    {
        "name": "lvnders_",
        "id": "5",
        "commissions": []
    },
    {
        "name": "doger",
        "id": "6",
        "commissions": []
    },
    {
        "name": "randomphineaszem",
        "id": "7",
        "commissions": []
    },
    {
        "name": "GFNAF",
        "id": "8",
        "commissions": []
    },
    {
        "name": "Rainydaysout",
        "id": "9",
        "commissions": []
    },
    {
        "name": "not_kasane.teto",
        "id": "10",
        "commissions": []
    },
    {
        "name": "glassconsumer69",
        "id": "11",
        "commissions": []
    },
    {
        "name": "dio._.brando.",
        "id": "12",
        "commissions": []
    },
    {
        "name": "Jenku",
        "id": "13",
        "commissions": []
    },
    {
        "name": "Png",
        "id": "14",
        "commissions": []
    },
    {
        "name": "Palco",
        "id": "15",
        "commissions": []
    },
    {
        "name": "Nexell",
        "id": "16",
        "commissions": []
    },
    {
        "name": "(Niko)",
        "id": "17",
        "commissions": []
    },
    {
        "name": "Katsu",
        "id": "18",
        "commissions": []
    },
    {
        "name": "x.zii",
        "id": "19",
        "commissions": []
    },
    {
        "name": "Wahoo",
        "id": "20",
        "commissions": []
    },
    {
        "name": "Sharsame",
        "id": "21",
        "commissions": []
    },
    {
        "name": "bpdlais",
        "id": "22",
        "commissions": []
    },
    {
        "name": "Seele",
        "id": "334062444718587905",
        "commissions": [
            {
                "type": "MONEY",
                "link": null
            },
            {
                "type": "DISCORD_NITRO",
                "link": null
            }
        ]
    },
    {
        "name": "Jelly",
        "id": "1147940825330876538",
        "commissions": []
    },
    {
        "name": "Ca-Cawthon",
        "id": "995651435519815772",
        "commissions": [
            {
                "type": "DISCORD_NITRO",
                "link": null
            }
        ]
    },
    {
        "name": "T8dyi",
        "id": "808325271949934652",
        "commissions": [
            {
                "type": "DISCORD_COLLECTIBLES",
                "link": null
            },
            {
                "type": "STEAM_GIFTS",
                "link": null
            }
        ]
    },
    {
        "name": "callievd",
        "id": "811114235966521364",
        "commissions": [
            {
                "type": "KOFI",
                "link": "https://ko-fi.com/c/6d9b88bc51"
            }
        ]
    },
    {
        "name": "BunBwon",
        "id": "845613407818088498",
        "commissions": [
            {
                "type": "NEGOTIABLE",
                "link": null
            }
        ]
    },
    {
        "name": "Nuki",
        "id": "1143994313034960967",
        "commissions": [
            {
                "type": "DISCORD_NITRO",
                "link": null
            },
            {
                "type": "DISCORD_COLLECTIBLES",
                "link": null
            }
        ]
    },
    {
        "name": "Zin",
        "id": "452679089929846784",
        "commissions": [
            {
                "type": "NEGOTIABLE",
                "link": null
            }
        ]
    },
    {
        "name": "vinhwaiker",
        "id": "1088105926030000178",
        "commissions": [
            {
                "type": "DISCORD_NITRO",
                "link": null
            },
            {
                "type": "DISCORD_COLLECTIBLES",
                "link": null
            }
        ]
    },
    {
        "name": "Alide",
        "id": "1096831760089763860",
        "commissions": [
            {
                "type": "DISCORD_NITRO",
                "link": null
            },
            {
                "type": "DISCORD_COLLECTIBLES",
                "link": null
            }
        ]
    }
];

// Gets the user info from their id (if they're in the "users" list)
function findUser(id) {
    const user = users[users.findIndex(u => u.id === id)];
    if (user) {
        return {
            id: user.id,
            name: user.name,
            commissions: commissions(user.commissions)
        };
    } else return null
};

// Cleanly renders the users commissions from config
function commissions(data) {
    const readableTypes = data
        .map(entry => {
            const label = commission_types[entry.type];
            if (!label) return null;

            if (entry.link) {
                return `<a href="${entry.link}" target="_blank" rel="noopener noreferrer">${label}</a>`;
            }

            return label;
        })
        .filter(Boolean);

    if (readableTypes.length === 0) return null;

    if (data[0].type === "NEGOTIABLE") {
        return commission_types.NEGOTIABLE;
    }

    if (readableTypes.length === 1) {
        return `They accept ${readableTypes[0]} as payment.`;
    }

    const last = readableTypes.pop();
    return `They accept ${readableTypes.join(", ")} or ${last} as payment.`;
};

// List of categories and decors

// If a category has multiple artists, it requires each decor to have the artists credits
const categories =
[
    {
        "name": "Fate Trigger",
        "banner": "images/fatetrigger-banner.png",
        "artist_info": `Join the Fate Trigger Discord at <strong><a href="https://discord.gg/fatetrigger" target="_blank" rel="noopener" class="commission-link">this link</a></strong>.`,
        "artists": [
            findUser('334062444718587905')
        ],
        "decorations": [
            {
                "name": "Xiva",
                "asset": "images/Xiva.png"
            },
            {
                "name": "Camille Healing",
                "asset": "images/camille healing.png"
            },
            {
                "name": "Huxleys Myst",
                "asset": "images/Huxleys Myst.png"
            }
        ]
    },
    {
        "name": "Library of Ruina",
        "banner": "images/ruina-banner.png",
        "artist_info": null,
        "artists": [
            findUser('9')
        ],
        "decorations": [
            {
                "name": "Animated Apocalypse Bird",
                "asset": "images/Animated Apocalypse Bird.png"
            },
            {
                "name": "Apocalypse Bird",
                "asset": "images/Apocalypse Bird.png"
            },
            {
                "name": "Blue Star",
                "asset": "images/Blue Star.png"
            },
            {
                "name": "Burrowing Heaven",
                "asset": "images/Burrowing Heaven.png"
            },
            {
                "name": "The Happy Teddy Bear Decor",
                "asset": "images/The Happy Teddy Bear Decor.png"
            },
            {
                "name": "The Price of Silence Decor",
                "asset": "images/The Price of Silence Decor.png"
            },
            {
                "name": "The Funeral of the Dead Butterflies",
                "asset": "images/The Funeral of the Dead Butterflies.png"
            }
        ]
    },
    {
        "name": "Pokemart",
        "banner": "images/pokemart-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1147940825330876538')
        ],
        "decorations": [
            {
                "name": "Poké Ball",
                "asset": "images/poke ball.png"
            },
            {
                "name": "Great Ball",
                "asset": "images/great ball.png"
            },
            {
                "name": "Ultra Ball",
                "asset": "images/ultra ball.png"
            },
            {
                "name": "Master Ball",
                "asset": "images/master ball.png"
            },
            {
                "name": "Premier Ball",
                "asset": "images/premier ball.png"
            },
            {
                "name": "Strange Ball",
                "asset": "images/strange ball.png"
            },
            {
                "name": "Team Rocket Ball",
                "asset": "images/rocket ball.png"
            },
            {
                "name": "GS Ball",
                "asset": "images/gs ball.png"
            }
        ]
    },
    {
        "name": "Flavor Foley",
        "banner": "images/flavorfoley-banner.png",
        "artist_info": null,
        "artists": [
            findUser('995651435519815772')
        ],
        "decorations": [
            {
                "name": "Cardiac Contrepoint",
                "asset": "images/Cardiac Contrepoint.png"
            },
            {
                "name": "Electric Weekend Zone",
                "asset": "images/Electric Weekend Zone.png"
            },
            {
                "name": "Flavor Foley",
                "asset": "images/Flavor Foley.png"
            },
            {
                "name": "Meatgirl",
                "asset": "images/meatgirl.png"
            },
            {
                "name": "Queen of Venus",
                "asset": "images/Queen of Venus.png"
            },
            {
                "name": "Rawdog",
                "asset": "images/rawdog.png"
            },
            {
                "name": "Water the roses",
                "asset": "images/watertheroses.png"
            },
            {
                "name": "Weathergirl",
                "asset": "images/weathergirl.png"
            },
            {
                "name": "Wei Ward Romance",
                "asset": "images/WeiWardRomance.png"
            },
            {
                "name": "Static's Miku",
                "asset": "images/Static's Miku.png"
            }
        ]
    },
    {
        "name": "Star Wars",
        "banner": "images/starwars-banner.png",
        "artist_info": null,
        "artists": [
            findUser('808325271949934652')
        ],
        "decorations": [
            {
                "name": "Kylo Ren First Order",
                "asset": "images/krfo.png"
            },
            {
                "name": "Kylo Ren Unignited Lightsaber",
                "asset": "images/krunignited.png"
            },
            {
                "name": "Kylo Ren Ignited Lightsaber",
                "asset": "images/krignited.png"
            },
            {
                "name": "Kylo Ren Animated",
                "asset": "images/kr_anim.png"
            },
            {
                "name": "Darth Vader",
                "asset": "images/vader.png"
            },
            {
                "name": "Obi-Wan Kenobi",
                "asset": "images/obk.png"
            },
            {
                "name": "Kylo Ren Dark Side",
                "asset": "images/kr_illsytds.png"
            },
            {
                "name": "Yoda May the Force be With You",
                "asset": "images/yoda_mtfbwy.png"
            },
            {
                "name": "Peeking Grogu",
                "asset": "images/Grogu.png"
            },
            {
                "name": "The Armorer",
                "asset": "images/ta.png"
            },
            {
                "name": "Mythosaur",
                "asset": "images/mys.png"
            },
            {
                "name": "Clan Mudhorn",
                "asset": "images/CM.png"
            },
            {
                "name": "Bo-Katan Kryze",
                "asset": "images/bkk.png"
            },
            {
                "name": "Dark Side",
                "asset": "images/ds_logo.png"
            },
            {
                "name": "Luke Skywalker",
                "asset": "images/LS.png"
            },
            {
                "name": "Luke Skywalker (no retraction)",
                "asset": "images/LSnr.png"
            },
            {
                "name": "Ahsoka Tano Lightsabers",
                "asset": "images/ATsaber.png"
            }
        ]
    },
    {
        "name": "Bugs",
        "banner": "images/1bugs-banner.png",
        "artist_info": null,
        "artists": [
            findUser('811114235966521364')
        ],
        "decorations": [
            {
                "name": "Bee",
                "asset": "images/bee.png"
            },
            {
                "name": "Butterfly",
                "asset": "images/butterfly.png"
            },
            {
                "name": "Butterfly Blue Variant",
                "asset": "images/butterfly var.png"
            },
            {
                "name": "Fly",
                "asset": "images/fly.png"
            },
            {
                "name": "Moth",
                "asset": "images/moth.png"
            },
            {
                "name": "Roly Poly",
                "asset": "images/roly poly.png"
            }
        ]
    },
    {
        "name": "Monochrome",
        "banner": "images/monochrome-banner.png",
        "artist_info": null,
        "artists": [
            findUser('2')
        ],
        "decorations": [
            {
                "name": "All Black",
                "asset": "images/All Black.png"
            },
            {
                "name": "All White",
                "asset": "images/All White.png"
            },
            {
                "name": "Monokuma",
                "asset": "images/Monokuma.png"
            },
            {
                "name": "Monodam",
                "asset": "images/Monodam.png"
            },
            {
                "name": "Monokid",
                "asset": "images/Monokid.png"
            },
            {
                "name": "Monomi",
                "asset": "images/Monomi.png"
            },
            {
                "name": "Monophanie",
                "asset": "images/Monophanie.png"
            },
            {
                "name": "Monosuke",
                "asset": "images/Monosuke.png"
            },
            {
                "name": "Monotaro",
                "asset": "images/Monotaro.png"
            },
            {
                "name": "Usami",
                "asset": "images/Usami.png"
            },
            {
                "name": "Shuichis cap",
                "asset": "images/Shuichis cap.png"
            },
            {
                "name": "Kirigiri Ramen",
                "asset": "images/kirigiri ramen.png"
            },
            {
                "name": "Junkos Hair Pins",
                "asset": "images/Junkos hair pins.png"
            }
        ]
    },
    {
        "name": "Doodleys",
        "banner": "images/doodleys-banner.png",
        "artist_info": null,
        "artists": [
            findUser('3')
        ],
        "decorations": [
            {
                "name": "Appel",
                "asset": "images/Appel.png"
            },
            {
                "name": "Burnin'",
                "asset": "images/Burnin'.png"
            },
            {
                "name": "Fedora",
                "asset": "images/Fedora.png"
            },
            {
                "name": "Sleepy",
                "asset": "images/Sleepy.png"
            },
            {
                "name": "Yummers",
                "asset": "images/Yummers.png"
            }
        ]
    },
    {
        "name": "Angel X Devil",
        "banner": "images/angelxdevil-banner.png",
        "artist_info": null,
        "artists": [
            findUser('4')
        ],
        "decorations": [
            {
                "name": "Angel Halo",
                "asset": "images/angel halo.png"
            },
            {
                "name": "Angel Label",
                "asset": "images/angel label.png"
            },
            {
                "name": "Angel Wings",
                "asset": "images/angel wings.png"
            },
            {
                "name": "Devil Horn",
                "asset": "images/devil horn.png"
            },
            {
                "name": "Devil Label",
                "asset": "images/devil label.png"
            },
            {
                "name": "Devil Wings",
                "asset": "images/devil wings.png"
            }
        ]
    },
    {
        "name": "SkyDreams",
        "banner": "images/skydreams-banner.png",
        "artist_info": null,
        "artists": [
            findUser('5')
        ],
        "decorations": [
            {
                "name": "Cloud Platform",
                "asset": "images/CloudPlatform.png"
            },
            {
                "name": "Cloud Platform (Alt)",
                "asset": "images/CloudPlatform(Alt).png"
            },
            {
                "name": "Side Clouds",
                "asset": "images/SideClouds.png"
            },
            {
                "name": "Starry Night",
                "asset": "images/StarryNight.png"
            },
            {
                "name": "Starry Night (Alt)",
                "asset": "images/StarryNight(Alt).png"
            },
            {
                "name": "Sunny Day",
                "asset": "images/SunnyDay.png"
            }
        ]
    },
    {
        "name": "Color Mass",
        "banner": "images/colormass-banner.png",
        "artist_info": null,
        "artists": [
            findUser('845613407818088498')
        ],
        "force_pagebreak": true,
        "decorations": [
            {
                "name": "Black Spike Crimson",
                "asset": "images/Black Spike  Crimson 2.png"
            },
            {
                "name": "Black Spike Cherise",
                "asset": "images/Black Spike Cherise 2.png"
            },
            {
                "name": "Black Spike Barbie Pink",
                "asset": "images/Black Spike Barbie Pink 2.png"
            },
            {
                "name": "Black Spike Phlox",
                "asset": "images/Black Spike Phlox 2.png"
            },
            {
                "name": "Black Spike Veronica",
                "asset": "images/Black Spike Veronica 2.png"
            },
            {
                "name": "Black Spike Bluebonnet",
                "asset": "images/Black Spike Bluebonnet 2.png"
            },
            {
                "name": "Black Spike Azure",
                "asset": "images/Black Spike Azure 2.png"
            },
            {
                "name": "Black Spike Capri",
                "asset": "images/Black Spike Capri 2.png"
            },
            {
                "name": "Black Spike Fluorescent Blue",
                "asset": "images/Black Spike Fluorescent Blue 2.png"
            },
            {
                "name": "Black Spike Munsell 5G",
                "asset": "images/Black Spike Munsell 5G 2.png"
            },
            {
                "name": "Black Spike Erin",
                "asset": "images/Black Spike Erin 2.png"
            },
            {
                "name": "Black Spike Harlequin",
                "asset": "images/Black Spike Harlequin 2.png"
            },
            {
                "name": "Black Spike Acid Green",
                "asset": "images/Black Spike Acid Green 2.png"
            },
            {
                "name": "Black Spike Chartreuse",
                "asset": "images/Black Spike Chartreuse 2.png"
            },
            {
                "name": "Black Spike Lemon",
                "asset": "images/Black Spike Lemon 2.png"
            },
            {
                "name": "Black Spike Saffron",
                "asset": "images/Black Spike Saffron 2.png"
            },
            {
                "name": "Black Spike Butterscotch",
                "asset": "images/Black Spike Butterscotch 2.png"
            },
            {
                "name": "Black Spike Safety Orange",
                "asset": "images/Black Spike Safety Orange 2.png"
            },
            {
                "name": "Black Spike Tangelo",
                "asset": "images/Black Spike Tangelo 2.png"
            },
            {
                "name": "Black Spike Vermillion",
                "asset": "images/Black Spike Vermillion 2.png"
            },
            {
                "name": "Black Wave Crimson",
                "asset": "images/Black Wave Crimson 2.png"
            },
            {
                "name": "Black Wave Cherise",
                "asset": "images/Black Wave Cherise 2.png"
            },
            {
                "name": "Black Wave Barbie Pink",
                "asset": "images/Black Wave Barbie Pink 2.png"
            },
            {
                "name": "Black Wave Phlox",
                "asset": "images/Black Wave Phlox 2.png"
            },
            {
                "name": "Black Wave Veronica",
                "asset": "images/Black Wave Veronica 2.png"
            },
            {
                "name": "Black Wave Bluebonnet",
                "asset": "images/Black Wave Bluebonnet 2.png"
            },
            {
                "name": "Black Wave Azure",
                "asset": "images/Black Wave Azure 2.png"
            },
            {
                "name": "Black Wave Capri",
                "asset": "images/Black Wave Capri 2.png"
            },
            {
                "name": "Black Wave Fluorescent Blue",
                "asset": "images/Black Wave Fluorescent Blue 2.png"
            },
            {
                "name": "Black Wave Munsell 5G",
                "asset": "images/Black Wave Munsell 5G 2.png"
            },
            {
                "name": "Black Wave Erin",
                "asset": "images/Black Wave Erin 2.png"
            },
            {
                "name": "Black Wave Harlequin",
                "asset": "images/Black Wave Harlequin 2.png"
            },
            {
                "name": "Black Wave Acid Green",
                "asset": "images/Black Wave Acid Green 2.png"
            },
            {
                "name": "Black Wave Chartreuse",
                "asset": "images/Black Wave Chartreuse 2.png"
            },
            {
                "name": "Black Wave Lemon",
                "asset": "images/Black Wave Lemon 2.png"
            },
            {
                "name": "Black Wave Saffron",
                "asset": "images/Black Wave Saffron 2.png"
            },
            {
                "name": "Black Wave Butterscotch",
                "asset": "images/Black Wave Butterscotch 2.png"
            },
            {
                "name": "Black Wave Safety Orange",
                "asset": "images/Black Wave Safety Orange 2.png"
            },
            {
                "name": "Black Wave Tangelo",
                "asset": "images/Black Wave Tangelo 2.png"
            },
            {
                "name": "Black Wave Vermillion",
                "asset": "images/Black Wave Vermillion 2.png"
            },
            {
                "name": "White Spike Bubblegum",
                "asset": "images/White Spike Bubblegum 2.png"
            },
            {
                "name": "White Spike Rose Pompadour",
                "asset": "images/White Spike Rose Pompadour 2.png"
            },
            {
                "name": "White Spike Rose Pink",
                "asset": "images/White Spike Rose Pink 2.png"
            },
            {
                "name": "White Spike Ultra Pink",
                "asset": "images/White Spike Ultra Pink 2.png"
            },
            {
                "name": "White Spike Lavender",
                "asset": "images/White Spike Lavender 2.png"
            },
            {
                "name": "White Spike Cornflower",
                "asset": "images/White Spike Cornflower 2.png"
            },
            {
                "name": "White Spike Maya Blue",
                "asset": "images/White Spike Maya Blue 2.png"
            },
            {
                "name": "White Spike Sky Blue",
                "asset": "images/White Spike Sky Blue 2.png"
            },
            {
                "name": "White Spike Celeste",
                "asset": "images/White Spike Celeste 2.png"
            },
            {
                "name": "White Spike Celadon",
                "asset": "images/White Spike Celadon 2.png"
            },
            {
                "name": "White Spike Pale Green",
                "asset": "images/White Spike Pale Green 2.png"
            },
            {
                "name": "White Spike Mantis",
                "asset": "images/White Spike Mantis 2.png"
            },
            {
                "name": "White Spike Green Tea",
                "asset": "images/White Spike Green Tea 2.png"
            },
            {
                "name": "White Spike Calamansi",
                "asset": "images/White Spike Calamansi 2.png"
            },
            {
                "name": "White Spike Mellow Yellow 2",
                "asset": "images/White Spike Mellow Yellow 2.png"
            },
            {
                "name": "White Spike Moccasin",
                "asset": "images/White Spike Moccasin 2.png"
            },
            {
                "name": "White Spike Apricot",
                "asset": "images/White Spike Apricot 2.png"
            },
            {
                "name": "White Spike Coral",
                "asset": "images/White Spike Coral 2.png"
            },
            {
                "name": "White Spike Atomic Tangerine",
                "asset": "images/White Spike Atomic Tangerine 2.png"
            },
            {
                "name": "White Spike Tango",
                "asset": "images/White Spike Tango 2.png"
            },
            {
                "name": "White Wave Bubblegum",
                "asset": "images/White Wave Bubblegum 2.png"
            },
            {
                "name": "White Wave Rose Pompadour",
                "asset": "images/White Wave Rose Pompadour 2.png"
            },
            {
                "name": "White Wave Rose Pink",
                "asset": "images/White Wave Rose Pink 2.png"
            },
            {
                "name": "White Wave Ultra Pink",
                "asset": "images/White Wave Ultra Pink 2.png"
            },
            {
                "name": "White Wave Lavender",
                "asset": "images/White Wave Lavender 2.png"
            },
            {
                "name": "White Wave Cornflower",
                "asset": "images/White Wave Cornflower 2.png"
            },
            {
                "name": "White Wave Maya Blue",
                "asset": "images/White Wave Maya Blue 2.png"
            },
            {
                "name": "White Wave Sky Blue",
                "asset": "images/White Wave Sky Blue 2.png"
            },
            {
                "name": "White Wave Celeste",
                "asset": "images/White Wave Celeste 2.png"
            },
            {
                "name": "White Wave Celadon",
                "asset": "images/White Wave Celadon 2.png"
            },
            {
                "name": "White Wave Pale Green",
                "asset": "images/White Wave Pale Green 2.png"
            },
            {
                "name": "White Wave Mantis",
                "asset": "images/White Wave Mantis 2.png"
            },
            {
                "name": "White Wave Green Tea",
                "asset": "images/White Wave Green Tea 2.png"
            },
            {
                "name": "White Wave Calamansi",
                "asset": "images/White Wave Calamansi 2.png"
            },
            {
                "name": "White Wave Mellow Yellow",
                "asset": "images/White Wave Mellow Yellow 2.png"
            },
            {
                "name": "White Wave Moccasin",
                "asset": "images/White Wave Moccasin 2.png"
            },
            {
                "name": "White Wave Apricot",
                "asset": "images/White Wave Apricot 2.png"
            },
            {
                "name": "White Wave Coral",
                "asset": "images/White Wave Coral 2.png"
            },
            {
                "name": "White Wave Atomic Tangerine",
                "asset": "images/White Wave Atomic Tangerine 2.png"
            },
            {
                "name": "White Wave Tango",
                "asset": "images/White Wave Tango 2.png"
            },
            {
                "name": "Black Wave Crimson (No Status)",
                "asset": "images/Black Wave Crimson.png"
            },
            {
                "name": "Black Wave Cherise (No Status)",
                "asset": "images/Black Wave Cherise.png"
            },
            {
                "name": "Black Wave Barbie Pink (No Status)",
                "asset": "images/Black Wave Barbie Pink.png"
            },
            {
                "name": "Black Wave Phlox (No Status)",
                "asset": "images/Black Wave Phlox.png"
            },
            {
                "name": "Black Wave Veronica (No Status)",
                "asset": "images/Black Wave Veronica.png"
            },
            {
                "name": "Black Wave Bluebonnet (No Status)",
                "asset": "images/Black Wave Bluebonnet.png"
            },
            {
                "name": "Black Wave Azure (No Status)",
                "asset": "images/Black Wave Azure.png"
            },
            {
                "name": "Black Wave Capri (No Status)",
                "asset": "images/Black Wave Capri.png"
            },
            {
                "name": "Black Wave Fluerescent Blue (No Status)",
                "asset": "images/Black Wave Fluerescent Blue.png"
            },
            {
                "name": "Black Wave Munsell 5G (No Status)",
                "asset": "images/Black Wave Munsell 5G.png"
            },
            {
                "name": "Black Wave Erin (No Status)",
                "asset": "images/Black Wave Erin.png"
            },
            {
                "name": "Black Wave Harlequin (No Status)",
                "asset": "images/Black Wave Harlequin.png"
            },
            {
                "name": "Black Wave Acid Green (No Status)",
                "asset": "images/Black Wave Acid Green.png"
            },
            {
                "name": "Black Wave Chartreuse (No Status)",
                "asset": "images/Black Wave Chartreuse.png"
            },
            {
                "name": "Black Wave Lemon (No Status)",
                "asset": "images/Black Wave Lemon.png"
            },
            {
                "name": "Black Wave Saffron (No Status)",
                "asset": "images/Black Wave Saffron.png"
            },
            {
                "name": "Black Wave Butterscotch (No Status)",
                "asset": "images/Black Wave Butterscotch.png"
            },
            {
                "name": "Black Wave Safety Orange (No Status)",
                "asset": "images/Black Wave Safety Orange.png"
            },
            {
                "name": "Black Wave Tangelo (No Status)",
                "asset": "images/Black Wave Tangelo.png"
            },
            {
                "name": "Black Wave Vermillion (No Status)",
                "asset": "images/Black Wave Vermillion.png"
            },
            {
                "name": "Black Spike Crimson (No Status)",
                "asset": "images/Black Spike Crimson.png"
            },
            {
                "name": "Black Spike Cherise (No Status)",
                "asset": "images/Black Spike Cherise.png"
            },
            {
                "name": "Black Spike Barbie Pink (No Status)",
                "asset": "images/Black Spike Barbie Pink.png"
            },
            {
                "name": "Black Spike Phlox (No Status)",
                "asset": "images/Black Spike Phlox.png"
            },
            {
                "name": "Black Spike Veronica (No Status)",
                "asset": "images/Black Spike Veronica.png"
            },
            {
                "name": "Black Spike Bluebonnet (No Status)",
                "asset": "images/Black Spike Bluebonnet.png"
            },
            {
                "name": "Black Spike Azure (No Status)",
                "asset": "images/Black Spike Azure.png"
            },
            {
                "name": "Black Spike Capri (No Status)",
                "asset": "images/Black Spike Capri.png"
            },
            {
                "name": "Black Spike Fluorescent Blue (No Status)",
                "asset": "images/Black Spike Fluorescent Blue.png"
            },
            {
                "name": "Black Spike Munsell 5G (No Status)",
                "asset": "images/Black Spike Munsell 5G.png"
            },
            {
                "name": "Black Spike Erin (No Status)",
                "asset": "images/Black Spike Erin.png"
            },
            {
                "name": "Black Spike Harlequin (No Status)",
                "asset": "images/Black Spike Harlequin.png"
            },
            {
                "name": "Black Spike Acid Green (No Status)",
                "asset": "images/Black Spike Acid Green.png"
            },
            {
                "name": "Black Spike Chartreuse (No Status)",
                "asset": "images/Black Spike Chartreuse.png"
            },
            {
                "name": "Black Spike Lemon (No Status)",
                "asset": "images/Black Spike Lemon.png"
            },
            {
                "name": "Black Spike Saffron (No Status)",
                "asset": "images/Black Spike Saffron.png"
            },
            {
                "name": "Black Spike Butterscotch (No Status)",
                "asset": "images/Black Spike Butterscotch.png"
            },
            {
                "name": "Black Spike Safety Orange (No Status)",
                "asset": "images/Black Spike Safety Orange.png"
            },
            {
                "name": "Black Spike Tangelo (No Status)",
                "asset": "images/Black Spike Tangelo.png"
            },
            {
                "name": "Black Spike Vermillion (No Status)",
                "asset": "images/Black Spike Vermillion.png"
            },
            {
                "name": "White Wave Bubblegum (No Status)",
                "asset": "images/White Wave Bubblegum.png"
            },
            {
                "name": "White Wave Rose Pompadour (No Status)",
                "asset": "images/White Wave Rose Pompadour.png"
            },
            {
                "name": "White Wave Rose Pink (No Status)",
                "asset": "images/White Wave Rose Pink.png"
            },
            {
                "name": "White Wave Ultra Pink (No Status)",
                "asset": "images/White Wave Ultra Pink.png"
            },
            {
                "name": "White Wave Lavender (No Status)",
                "asset": "images/White Wave Lavender.png"
            },
            {
                "name": "White Wave Cornflower (No Status)",
                "asset": "images/White Wave Cornflower.png"
            },
            {
                "name": "White Wave Maya Blue (No Status)",
                "asset": "images/White Wave Maya Blue.png"
            },
            {
                "name": "White Wave Sky Blue (No Status)",
                "asset": "images/White Wave Sky Blue.png"
            },
            {
                "name": "White Wave Celeste (No Status)",
                "asset": "images/White Wave Celeste.png"
            },
            {
                "name": "White Wave Celadon (No Status)",
                "asset": "images/White Wave Celadon.png"
            },
            {
                "name": "White Wave Pale Green (No Status)",
                "asset": "images/White Wave Pale Green.png"
            },
            {
                "name": "White Wave Mantis (No Status)",
                "asset": "images/White Wave Mantis.png"
            },
            {
                "name": "White Wave Green Tea (No Status)",
                "asset": "images/White Wave Green Tea.png"
            },
            {
                "name": "White Wave Calamansi (No Status)",
                "asset": "images/White Wave Calamansi.png"
            },
            {
                "name": "White Wave Mellow Yellow (No Status)",
                "asset": "images/White Wave Mellow Yellow.png"
            },
            {
                "name": "White Wave Moccasin (No Status)",
                "asset": "images/White Wave Moccasin.png"
            },
            {
                "name": "White Wave Apricot (No Status)",
                "asset": "images/White Wave Apricot.png"
            },
            {
                "name": "White Wave Coral (No Status)",
                "asset": "images/White Wave Coral.png"
            },
            {
                "name": "White Wave Atomic Tangerine (No Status)",
                "asset": "images/White Wave Atomic Tangerine.png"
            },
            {
                "name": "White Wave Tango (No Status)",
                "asset": "images/White Wave Tango.png"
            },
            {
                "name": "White Spike Bubblegum (No Status)",
                "asset": "images/White Spike Bubblegum.png"
            },
            {
                "name": "White Spike Rose Pompadour (No Status)",
                "asset": "images/White Spike Rose Pompadour.png"
            },
            {
                "name": "White Spike Rose Pink (No Status)",
                "asset": "images/White Spike Rose Pink.png"
            },
            {
                "name": "White Spike Ultra Pink (No Status)",
                "asset": "images/White Spike Ultra Pink.png"
            },
            {
                "name": "White Spike Lavender (No Status)",
                "asset": "images/White Spike Lavender.png"
            },
            {
                "name": "White Spike Cornflower (No Status)",
                "asset": "images/White Spike Cornflower.png"
            },
            {
                "name": "White Spike Maya Blue (No Status)",
                "asset": "images/White Spike Maya Blue.png"
            },
            {
                "name": "White Spike Sky Blue (No Status)",
                "asset": "images/White Spike Sky Blue.png"
            },
            {
                "name": "White Spike Celeste (No Status)",
                "asset": "images/White Spike Celeste.png"
            },
            {
                "name": "White Spike Celadon (No Status)",
                "asset": "images/White Spike Celadon.png"
            },
            {
                "name": "White Spike Pale Green (No Status)",
                "asset": "images/White Spike Pale Green.png"
            },
            {
                "name": "White Spike Mantis (No Status)",
                "asset": "images/White Spike Mantis.png"
            },
            {
                "name": "White Spike Green Tea (No Status)",
                "asset": "images/White Spike Green Tea.png"
            },
            {
                "name": "White Spike Calamansi (No Status)",
                "asset": "images/White Spike Calamansi.png"
            },
            {
                "name": "White Spike Mellow Yellow (No Status)",
                "asset": "images/White Spike Mellow Yellow.png"
            },
            {
                "name": "White Spike Moccasin (Status)",
                "asset": "images/White Spike Moccasin.png"
            },
            {
                "name": "White Spike Apricot (No Status)",
                "asset": "images/White Spike Apricot.png"
            },
            {
                "name": "White Spike Atomic Tangerine (No Status)",
                "asset": "images/White Spike Atomic Tangerine.png"
            },
            {
                "name": "White Spike Coral (No Status)",
                "asset": "images/White Spike Coral.png"
            },
            {
                "name": "White Spike Tango (No Status)",
                "asset": "images/White Spike Tango.png"
            },
            {
                "name": "Black Spike (No Status)",
                "asset": "images/Black Spike.png"
            },
            {
                "name": "Black Wave (No Status)",
                "asset": "images/Black Wave.png"
            },
            {
                "name": "White Spike (No Status)",
                "asset": "images/White Spike.png"
            },
            {
                "name": "White Wave (No Status)",
                "asset": "images/White Wave.png"
            },
            {
                "name": "Black Spike",
                "asset": "images/Black Spike 2.png"
            },
            {
                "name": "Black Wave",
                "asset": "images/Black Wave 2.png"
            },
            {
                "name": "White Spike",
                "asset": "images/White Spike 2.png"
            },
            {
                "name": "White Wave",
                "asset": "images/White Wave 2.png"
            },
            {
                "name": "Black Spike On White (No Status)",
                "asset": "images/Black Spike On White.png"
            },
            {
                "name": "Black Wave On White (No Status)",
                "asset": "images/Black Wave On White.png"
            },
            {
                "name": "White Spike On Black (No Status)",
                "asset": "images/White Spike On Black.png"
            },
            {
                "name": "White Wave On Black (No Status)",
                "asset": "images/White Wave On Black.png"
            },
            {
                "name": "Black Spike On White",
                "asset": "images/Black Spike On White 2.png"
            },
            {
                "name": "Black Wave On White",
                "asset": "images/Black Wave On White 2.png"
            },
            {
                "name": "White Spike On Black",
                "asset": "images/White Spike On Black 2.png"
            },
            {
                "name": "White Wave On Black",
                "asset": "images/White Wave On Black 2.png"
            },
            {
                "name": "Black Spike Rainbow (No Status)",
                "asset": "images/Black Spike Rainbow.png"
            },
            {
                "name": "Black Wave Rainbow (No Status)",
                "asset": "images/Black Wave Rainbow.png"
            },
            {
                "name": "White Spike Rainbow (No Status)",
                "asset": "images/White Spike Rainbow.png"
            },
            {
                "name": "White Wave Rainbow (No Status)",
                "asset": "images/White Wave Rainbow.png"
            },
            {
                "name": "Black Spike Rainbow",
                "asset": "images/Black Spike Rainbow 2.png"
            },
            {
                "name": "Black Wave Rainbow",
                "asset": "images/Black Wave Rainbow 2.png"
            },
            {
                "name": "White Spike Rainbow",
                "asset": "images/White Spike Rainbow 2.png"
            },
            {
                "name": "White Wave Rainbow",
                "asset": "images/White Wave Rainbow 2.png"
            }
        ]
    },
    {
        "name": "Formula 1",
        "banner": "images/1formula1-banner.png",
        "artist_info": null,
        "artists": [
            findUser('811114235966521364')
        ],
        "decorations": [
            {
                "name": "Tsunoda",
                "asset": "images/tsunoda.png"
            },
            {
                "name": "Verstappen",
                "asset": "images/verstappen.png"
            },
            {
                "name": "Hadjar",
                "asset": "images/hadjar.png"
            },
            {
                "name": "Lawson",
                "asset": "images/lawson.png"
            },
            {
                "name": "Bearman",
                "asset": "images/bearman.png"
            },
            {
                "name": "Ocon",
                "asset": "images/ocon.png"
            },
            {
                "name": "Bortoleto",
                "asset": "images/bortoleto.png"
            },
            {
                "name": "Hulkenberg",
                "asset": "images/hulkenberg.png"
            },
            {
                "name": "Alonso",
                "asset": "images/alonso.png"
            },
            {
                "name": "Stroll",
                "asset": "images/stroll.png"
            },
            {
                "name": "Piastri",
                "asset": "images/piastri.png"
            },
            {
                "name": "Norris",
                "asset": "images/norris.png"
            },
            {
                "name": "Hamilton",
                "asset": "images/hamilton.png"
            },
            {
                "name": "Leclerc",
                "asset": "images/leclerc.png"
            },
            {
                "name": "Albon",
                "asset": "images/albon.png"
            },
            {
                "name": "Sainz",
                "asset": "images/sainz.png"
            },
            {
                "name": "Antonelli",
                "asset": "images/antonelli.png"
            },
            {
                "name": "Russell",
                "asset": "images/russel.png"
            },
            {
                "name": "Colapinto",
                "asset": "images/colapinto.png"
            },
            {
                "name": "Doohan",
                "asset": "images/doohan.png"
            },
            {
                "name": "Gasly",
                "asset": "images/gasly.png"
            },
            {
                "name": "Bianchi",
                "asset": "images/bianchi.png"
            },
            {
                "name": "Perez",
                "asset": "images/perez.png"
            },
            {
                "name": "Raikkonen",
                "asset": "images/raikkonen.png"
            },
            {
                "name": "Ricciardo",
                "asset": "images/ricciardo.png"
            },
            {
                "name": "Rosberg",
                "asset": "images/rosberg.png"
            },
            {
                "name": "Sargeant",
                "asset": "images/sargeant.png"
            },
            {
                "name": "Schumacher",
                "asset": "images/schumacher.png"
            },
            {
                "name": "Senna",
                "asset": "images/senna.png"
            },
            {
                "name": "Vettel",
                "asset": "images/vettel.png"
            },
            {
                "name": "Webber",
                "asset": "images/webber.png"
            },
            {
                "name": "Red Bull",
                "asset": "images/red bull.png"
            },
            {
                "name": "Vcarb",
                "asset": "images/vcarb.png"
            },
            {
                "name": "Haas",
                "asset": "images/haas.png"
            },
            {
                "name": "Sauber",
                "asset": "images/sauber.png"
            },
            {
                "name": "Aston Martin",
                "asset": "images/aston martin.png"
            },
            {
                "name": "McLaren",
                "asset": "images/mclaren.png"
            },
            {
                "name": "Ferrari",
                "asset": "images/ferrari.png"
            },
            {
                "name": "Williams",
                "asset": "images/williams.png"
            },
            {
                "name": "Mercedes",
                "asset": "images/mercedes.png"
            },
            {
                "name": "Alpine",
                "asset": "images/alpine.png"
            }
        ]
    },
    {
        "name": "Beat Saber",
        "banner": "images/beatsaber-banner.png",
        "artist_info": null,
        "artists": [
            findUser('6')
        ],
        "decorations": [
            {
                "name": "Beat Sabers",
                "asset": "images/Beat Sabers.png"
            },
            {
                "name": "Big Slash (Blue)",
                "asset": "images/Big Slash (Blue).png"
            },
            {
                "name": "Big Slash (Red)",
                "asset": "images/Big Slash (Red).png"
            },
            {
                "name": "Bombs",
                "asset": "images/Bombs.png"
            },
            {
                "name": "The Bloq (Blue)",
                "asset": "images/The Bloq (Blue).png"
            },
            {
                "name": "The Bloq (Red)",
                "asset": "images/The Bloq (Red).png"
            },
            {
                "name": "The Walls",
                "asset": "images/The Walls.png"
            }
        ]
    },
    {
        "name": "ANGRY BIRDS",
        "banner": "images/angrybirds-banner.png",
        "artist_info": null,
        "artists": [
            findUser('7')
        ],
        "decorations": [
            {
                "name": "AB Wood Block",
                "asset": "images/AB Wood Block Decor.png"
            },
            {
                "name": "AB Glass Block",
                "asset": "images/AB Glass Block Decor.png"
            },
            {
                "name": "AB Stone Block",
                "asset": "images/AB Stone Block Decor.png"
            },
            {
                "name": "AB Cheetos Logo",
                "asset": "images/AB Cheetos Logo Decor.png"
            },
            {
                "name": "AB Coca Cola Logo",
                "asset": "images/AB Coca Cola Logo Decor.png"
            },
            {
                "name": "AB Seasons Easter Egg Logo",
                "asset": "images/AB Seasons Easter Egg Logo Decor.png"
            },
            {
                "name": "AB Logo",
                "asset": "images/AB Logo Decor.png"
            },
            {
                "name": "AB Space Logo",
                "asset": "images/AB Space Logo Decor.png"
            },
            {
                "name": "AB Space Vuela Tazos Logo",
                "asset": "images/AB Space Vuela Tazos Logo Decor.png"
            },
            {
                "name": "Attack Of Darth Maul",
                "asset": "images/Attack Of Darth Maul Decor.png"
            },
            {
                "name": "Darth Vader",
                "asset": "images/Darth Vader Decor.png"
            },
            {
                "name": "Solar System",
                "asset": "images/Solar System Decor.png"
            },
            {
                "name": "Pork Federation",
                "asset": "images/Pork Federation Decor.png"
            },
            {
                "name": "Bomb Space",
                "asset": "images/Bomb Space Decor.png"
            },
            {
                "name": "Mynock Pigs",
                "asset": "images/Mynock Pigs Decor.png"
            },
            {
                "name": "Electric Bomb",
                "asset": "images/Electric Bomb Decor.png"
            },
            {
                "name": "Red Space",
                "asset": "images/Red Space Decor.png"
            },
            {
                "name": "King Pig",
                "asset": "images/King Pig Decor.png"
            },
            {
                "name": "Stars",
                "asset": "images/Stars Decor.png"
            }
        ]
    },
    {
        "name": "RDR2",
        "banner": "images/rdr2-banner.png",
        "artist_info": null,
        "artists": [
            findUser('8')
        ],
        "decorations": [
            {
                "name": "Arthur",
                "asset": "images/Arthur.png"
            },
            {
                "name": "Dutch",
                "asset": "images/Dutch.png"
            },
            {
                "name": "Hosea",
                "asset": "images/Hosea.png"
            },
            {
                "name": "John",
                "asset": "images/John.png"
            },
            {
                "name": "Sadie",
                "asset": "images/Sadie.png"
            },
            {
                "name": "RDR II",
                "asset": "images/RDR_II.png"
            }
        ]
    },
    {
        "name": "EASTER",
        "banner": "images/easter-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1143994313034960967'),
            findUser('452679089929846784'),
            findUser('811114235966521364'),
            findUser('1088105926030000178'),
            findUser('10')
        ],
        "decorations": [
            {
                "name": "Bunnie",
                "artist": findUser('1143994313034960967'),
                "asset": "images/bunnie by pixie.png"
            },
            {
                "name": "Choco Bunny",
                "artist": findUser('1143994313034960967'),
                "asset": "images/choco bunny by pixie.png"
            },
            {
                "name": "Egg Basket",
                "artist": findUser('1143994313034960967'),
                "asset": "images/egg basket by pixie.png"
            },
            {
                "name": "Community Eggs",
                "artist": findUser('452679089929846784'),
                "asset": "images/fixed community eggs by zin.png"
            },
            {
                "name": "Easter Bunny",
                "artist": findUser('811114235966521364'),
                "asset": "images/easter bunny by cal.png"
            },
            {
                "name": "Easter Egg",
                "artist": findUser('811114235966521364'),
                "asset": "images/easter egg by cal.png"
            },
            {
                "name": "Egg Basket",
                "artist": findUser('811114235966521364'),
                "asset": "images/egg basket by cal.png"
            },
            {
                "name": "Egg Bowl",
                "artist": findUser('811114235966521364'),
                "asset": "images/egg bowl by cal.png"
            },
            {
                "name": "Eggs in Grass",
                "artist": findUser('811114235966521364'),
                "asset": "images/eggs in grass by cal.png"
            },
            {
                "name": "Grass Egg",
                "artist": findUser('1088105926030000178'),
                "asset": "images/grass egg by sharr.png"
            },
            {
                "name": "Pastel Blue Easter Decor",
                "artist": findUser('10'),
                "asset": "images/pastel blue easter decor by teto.png"
            },
            {
                "name": "Pastel Cyan Easter Decor",
                "artist": findUser('10'),
                "asset": "images/pastel cyan easter decor by teto.png"
            },
            {
                "name": "Pastel Green Easter Decor",
                "artist": findUser('10'),
                "asset": "images/pastel green easter decor by teto.png"
            },
            {
                "name": "Pastel Mint Easter Decor",
                "artist": findUser('10'),
                "asset": "images/pastel mint easter decor by teto.png"
            },
            {
                "name": "Pastel Orange Easter Decor",
                "artist": findUser('10'),
                "asset": "images/pastel orange easter decor by teto.png"
            },
            {
                "name": "Pastel Pink Easter Decor",
                "artist": findUser('10'),
                "asset": "images/pastel pink easter decor by teto.png"
            },
            {
                "name": "Pastel Red Easter Decor",
                "artist": findUser('10'),
                "asset": "images/pastel red easter decor by teto.png"
            },
            {
                "name": "Pastel Teal Easter Decor",
                "artist": findUser('10'),
                "asset": "images/pastel teal easter decor by teto.png"
            },
            {
                "name": "Pastel Yellow Easter Decor",
                "artist": findUser('10'),
                "asset": "images/pastel yellow easter decor by teto.png"
            }
        ]
    },
    {
        "name": "BLOONS",
        "banner": "images/bloons-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1088105926030000178')
        ],
        "decorations": [
            {
                "name": "Adora",
                "asset": "images/adora.png"
            },
            {
                "name": "Benjamin",
                "asset": "images/benjamin.png"
            },
            {
                "name": "Brickell",
                "asset": "images/brickell.png"
            },
            {
                "name": "Churchill",
                "asset": "images/churchill.png"
            },
            {
                "name": "Corvus",
                "asset": "images/corvus.png"
            },
            {
                "name": "Etienne",
                "asset": "images/etienne.png"
            },
            {
                "name": "Ezili",
                "asset": "images/ezili.png"
            },
            {
                "name": "Gwendolin",
                "asset": "images/gwendolin.png"
            },
            {
                "name": "Jones",
                "asset": "images/jones.png"
            },
            {
                "name": "Obyn",
                "asset": "images/obyn.png"
            },
            {
                "name": "Pat",
                "asset": "images/pat.png"
            },
            {
                "name": "Psi",
                "asset": "images/psi.png"
            },
            {
                "name": "Quincy",
                "asset": "images/quincy.png"
            },
            {
                "name": "Alchemist",
                "asset": "images/004-Alchemistdecorx.png"
            },
            {
                "name": "Boomerang Monkey",
                "asset": "images/500-BoomerangMonkeyDecorx.png"
            },
            {
                "name": "Sniper Monkey",
                "asset": "images/500-SniperMonkeydecorx.png"
            },
            {
                "name": "Geraldox",
                "asset": "images/geraldox.png"
            },
            {
                "name": "Outclassed by icicle",
                "asset": "images/out-classed-by-icicle-impalex.png"
            },
            {
                "name": "Rosaliax",
                "asset": "images/rosaliax.png"
            },
            {
                "name": "True Sun Godx",
                "asset": "images/truesungodx.png"
            },
            {
                "name": "005-Super Monkey",
                "asset": "images/005-SuperMonkeydecor.png"
            },
            {
                "name": "005-Wizard Monkey",
                "asset": "images/005-WizardMokeydecor.png"
            },
            {
                "name": "050-Druid Monkey",
                "asset": "images/050-DruidMonkeydecor.png"
            },
            {
                "name": "050-Engineer Monkey",
                "asset": "images/050-EngineerMonkeydecor.png"
            },
            {
                "name": "050-Ice Monkey",
                "asset": "images/050-IceMonkeydecor.png"
            },
            {
                "name": "500-Monkey Submarine",
                "asset": "images/500-MonkeySubmarinedecor.png"
            },
            {
                "name": "500-Ninja Monkey",
                "asset": "images/500-NinjaMonkeydecor.png"
            }
        ]
    },
    {
        "name": "BAKERS",
        "banner": "images/nuki-bakery-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1143994313034960967')
        ],
        "decorations": [
            {
                "name": "Pink Boba",
                "asset": "images/pinkboba.png"
            },
            {
                "name": "Cherry On Top",
                "asset": "images/cherryontop.png"
            },
            {
                "name": "Chocolate Roll",
                "asset": "images/choco_roll.png"
            },
            {
                "name": "Strawberry Roll",
                "asset": "images/strawberry_roll.png"
            },
            {
                "name": "Cookie",
                "asset": "images/cookie.png"
            },
            {
                "name": "Croissant",
                "asset": "images/croissant.png"
            },
            {
                "name": "Crumb",
                "asset": "images/crumb.png"
            },
            {
                "name": "Pink Cupcake Circle",
                "asset": "images/pinkcupcake.png"
            },
            {
                "name": "Cupcake Tray",
                "asset": "images/cupcaketray.png"
            },
            {
                "name": "Mixing Bowl",
                "asset": "images/mixingbowl.png"
            },
            {
                "name": "Pie Slice",
                "asset": "images/pieslice.png"
            },
            {
                "name": "Strawberries",
                "asset": "images/strawberries.png"
            },
            {
                "name": "Sundae Bowl",
                "asset": "images/sundaebowl.png"
            }
        ]
    },
    {
        "name": "STARCRAFT",
        "banner": "images/starcraft-banner.png",
        "artist_info": null,
        "artists": [
            findUser('11')
        ],
        "decorations": [
            {
                "name": "Protoss",
                "asset": "images/protoss.png"
            },
            {
                "name": "Protoss Green",
                "asset": "images/Protoss_green.png"
            },
            {
                "name": "Protoss Purple",
                "asset": "images/Protoss_purp.png"
            },
            {
                "name": "Terran",
                "asset": "images/terran.png"
            },
            {
                "name": "Terran Green",
                "asset": "images/terran_green.png"
            },
            {
                "name": "Terran Red",
                "asset": "images/terran_red.png"
            },
            {
                "name": "Zerg",
                "asset": "images/zerg.png"
            },
            {
                "name": "Zerg Green",
                "asset": "images/Zerg_green.png"
            },
            {
                "name": "Zerg Pink",
                "asset": "images/Zerg_pink.png"
            },
            {
                "name": "Zerg Purple",
                "asset": "images/Zerg_purp.png"
            }
        ]
    },
    {
        "name": "limbus",
        "banner": "images/limbus-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1096831760089763860')
        ],
        "decorations": [
            {
                "name": "don_quixote",
                "asset": "images/don_quixote.png"
            },
            {
                "name": "Heathcliff",
                "asset": "images/heathcliff.png"
            },
            {
                "name": "Hong Lu",
                "asset": "images/hong_lu.png"
            },
            {
                "name": "Ishmael",
                "asset": "images/ishmael.png"
            },
            {
                "name": "Meursault",
                "asset": "images/meursault.png"
            },
            {
                "name": "Middle Brother",
                "asset": "images/middle_brother.png"
            },
            {
                "name": "Ryoshu",
                "asset": "images/ryoshu.png"
            }
        ]
    },
    {
        "name": "JOJO",
        "banner": "images/jojo-banner.png",
        "artist_info": null,
        "artists": [
            findUser('12')
        ],
        "decorations": [
            {
                "name": "Aerosmith",
                "asset": "images/Aerosmith.png"
            },
            {
                "name": "bitesthedustunderrr",
                "asset": "images/bitesthedustunderrr.png"
            },
            {
                "name": "Echoes Act 1",
                "asset": "images/echoes_act_1.png"
            },
            {
                "name": "Echoes Act 2",
                "asset": "images/echoes_act_2.png"
            },
            {
                "name": "Hermit",
                "asset": "images/hermit.png"
            },
            {
                "name": "Killer Queen",
                "asset": "images/killer_queen.png"
            },
            {
                "name": "Six Pistols",
                "asset": "images/SixPistols.png"
            }
        ]
    },
    {
        "name": "DORITOS",
        "banner": "images/doritos-banner.png",
        "artist_info": null,
        "artists": [
            findUser('7')
        ],
        "decorations": [
            {
                "name": "American Doritos",
                "asset": "images/Ameican_Doritos_Decor.png"
            },
            {
                "name": "Cheese Doritos",
                "asset": "images/Cheese_Doritos_Decor.png"
            },
            {
                "name": "Flaming Hot Doritos",
                "asset": "images/Flaming_Hot_Doritos_Decor.png"
            },
            {
                "name": "Mountain Dew Doritos",
                "asset": "images/Mountain_Dew_Doritos_Decor.png"
            },
            {
                "name": "Rainbow Doritos",
                "asset": "images/Raimbow_Doritos_Decor.png"
            },
            {
                "name": "Sweet Chilli Pepper Doritos",
                "asset": "images/Sweet_Chilli_Pepper_Doritos_Decor.png"
            },
            {
                "name": "Whopper Doritos",
                "asset": "images/Whopper_Doritos_Decor.png"
            },
            {
                "name": "Sweet Paprika Doritos Bits",
                "asset": "images/Sweet_Paprika_Doritos_Bits_Decor.png"
            },
            {
                "name": "Honey BBQ Doritos Bits",
                "asset": "images/Honey_BBQ_Doritos_Bts_Decor.png"
            },
            {
                "name": "Mountain Dew Drink Doritos",
                "asset": "images/Montain_Dew_Drink_Doritos_Decor.png"
            },
            {
                "name": "Flaming Hot Chicken Fries",
                "asset": "images/Flaming_Hot_Chicken_Fries_Doritos.png"
            },
            {
                "name": "Chilli Heatwave Chicken Fries",
                "asset": "images/Chilli_Heatwave_Chicken_Fries_Doritos.png"
            },
            {
                "name": "Cheese Chicken Fries",
                "asset": "images/Cheese_Chicken_Fries_Doritos.png"
            }
        ]
    },
    {
        "name": "OM NOMS",
        "banner": "images/omnom-banner.png",
        "artist_info": null,
        "artists": [
            findUser('10')
        ],
        "decorations": [
            {
                "name": "Granny Smith Apple",
                "asset": "images/apple (granny smith).png"
            },
            {
                "name": "Apple",
                "asset": "images/apple.png"
            },
            {
                "name": "Banana",
                "asset": "images/banana.png"
            },
            {
                "name": "Beans",
                "asset": "images/beans.png"
            },
            {
                "name": "Broccoli",
                "asset": "images/broccoli.png"
            },
            {
                "name": "Burger",
                "asset": "images/burger.png"
            },
            {
                "name": "Burrito",
                "asset": "images/burito.png"
            },
            {
                "name": "Cabbage",
                "asset": "images/cabbage.png"
            },
            {
                "name": "Carrot",
                "asset": "images/carrot.png"
            },
            {
                "name": "Cheese",
                "asset": "images/cheese.png"
            },
            {
                "name": "Chips",
                "asset": "images/chips.png"
            },
            {
                "name": "Chocolate",
                "asset": "images/chocolate.png"
            },
            {
                "name": "Real Cookie",
                "asset": "images/realcookie.png"
            },
            {
                "name": "Corns",
                "asset": "images/corns.png"
            },
            {
                "name": "Cotton Candy",
                "asset": "images/cotton candy.png"
            },
            {
                "name": "Real Cupcake",
                "asset": "images/realcupcake.png"
            },
            {
                "name": "Dragon Fruit",
                "asset": "images/dragon fruit.png"
            },
            {
                "name": "Fries",
                "asset": "images/fries.png"
            },
            {
                "name": "Grape",
                "asset": "images/grape.png"
            },
            {
                "name": "Hot Dog",
                "asset": "images/hot dog.png"
            },
            {
                "name": "Strawberry Ice Cream",
                "asset": "images/ice cream (strawberry).png"
            },
            {
                "name": "Jelly Beans",
                "asset": "images/jelly beans.png"
            },
            {
                "name": "Mandarin",
                "asset": "images/mandarin.png"
            },
            {
                "name": "Mango",
                "asset": "images/mango.png"
            },
            {
                "name": "Pancake",
                "asset": "images/pancake.png"
            },
            {
                "name": "Pie",
                "asset": "images/pie.png"
            },
            {
                "name": "Pizza",
                "asset": "images/pizza.png"
            },
            {
                "name": "Popcorn",
                "asset": "images/popcorns.png"
            },
            {
                "name": "Pudding",
                "asset": "images/pudding.png"
            },
            {
                "name": "Red Mushroom",
                "asset": "images/red mushroom (srry i only make 1 mushroom decor cuz i have mycophobia).png"
            },
            {
                "name": "Rice",
                "asset": "images/rice.png"
            },
            {
                "name": "Salad",
                "asset": "images/salad.png"
            },
            {
                "name": "Salmon",
                "asset": "images/salmon.png"
            },
            {
                "name": "Strawberry",
                "asset": "images/strawberry.png"
            },
            {
                "name": "Taco",
                "asset": "images/taco.png"
            },
            {
                "name": "Watermelon",
                "asset": "images/watermelon.png"
            },
            {
                "name": "The Forbidden Cheese",
                "asset": "images/the forbidden cheese (sulfur).png"
            },
            {
                "name": "Uranium",
                "asset": "images/Uranium (special).png"
            }
        ]
    },
    {
        "name": "cat person",
        "banner": "images/cat-banner.png",
        "artist_info": null,
        "artists": [
            findUser('10')
        ],
        "force_pagebreak": true,
        "decorations": [
            {
                "name": "Black Collar Black Cat Ears",
                "asset": "images/black collar black cat ears.png"
            },
            {
                "name": "Black Collar Blue Cat Ears",
                "asset": "images/black collar blue cat ears.png"
            },
            {
                "name": "Black Collar Calico Cat Ears",
                "asset": "images/black collar calico cat ears.png"
            },
            {
                "name": "Black Collar Dark Orange Cat Ears",
                "asset": "images/black collar dark orange cat ears.png"
            },
            {
                "name": "Black Collar Green Cat Ears",
                "asset": "images/black collar green cat ears.png"
            },
            {
                "name": "Black Collar Light Gray Cat Ears",
                "asset": "images/black collar light gray cat ears.png"
            },
            {
                "name": "Black Collar Light Orange Cat Ears",
                "asset": "images/black collar light orange cat ears.png"
            },
            {
                "name": "Black Collar Light Yellow Cat Ears",
                "asset": "images/black collar light yellow cat ears.png"
            },
            {
                "name": "Black Collar Purple Cat Ears",
                "asset": "images/black collar purple cat ears.png"
            },
            {
                "name": "Black Collar Red Cat Ears",
                "asset": "images/black collar red cat ears.png"
            },
            {
                "name": "Black Collar White Cat Ears",
                "asset": "images/black collar white cat ears.png"
            },
            {
                "name": "Blue Collar Black Cat Ears",
                "asset": "images/blue collar black cat ears.png"
            },
            {
                "name": "Blue Collar Blue Cat Ears",
                "asset": "images/blue collar blue cat ears.png"
            },
            {
                "name": "Blue Collar Calico Cat Ears",
                "asset": "images/blue collar calico cat ears.png"
            },
            {
                "name": "Blue Collar Dark Orange Cat Ears",
                "asset": "images/blue collar dark orange cat ears.png"
            },
            {
                "name": "Blue Collar Gray Cat Ears",
                "asset": "images/blue collar gray cat ears.png"
            },
            {
                "name": "Blue Collar Green Cat Ears",
                "asset": "images/blue collar green cat ears.png"
            },
            {
                "name": "Blue Collar Light Orange Cat Ears",
                "asset": "images/blue collar light orange cat ears.png"
            },
            {
                "name": "Blue Collar Purple Cat Ears",
                "asset": "images/blue collar purple cat ears.png"
            },
            {
                "name": "Blue Collar Red Cat Ears",
                "asset": "images/blue collar red cat ears.png"
            },
            {
                "name": "Blue Collar White Cat Ears",
                "asset": "images/blue collar white cat ears.png"
            },
            {
                "name": "Cyan Collar Black Cat Ears",
                "asset": "images/cyan collar black cat ears.png"
            },
            {
                "name": "Cyan Collar Blue Cat Ears",
                "asset": "images/cyan collar blue cat ears.png"
            },
            {
                "name": "Cyan Collar Calico Cat Ears",
                "asset": "images/cyan collar calico cat ears.png"
            },
            {
                "name": "Cyan Collar Dark Orange Cat Ears",
                "asset": "images/cyan collar dark orange cat ears.png"
            },
            {
                "name": "Cyan Collar Green Cat Ears",
                "asset": "images/cyan collar green cat ears.png"
            },
            {
                "name": "Cyan Collar Light Gray Cat Ears",
                "asset": "images/cyan collar light gray cat ears.png"
            },
            {
                "name": "Cyan Collar Light Orange Cat Ears",
                "asset": "images/cyan collar light orange cat ears.png"
            },
            {
                "name": "Cyan Collar Light Yellow Cat Ears",
                "asset": "images/cyan collar light yellow cat ears.png"
            },
            {
                "name": "Cyan Collar Red Cat Ears",
                "asset": "images/cyan collar red cat ears.png"
            },
            {
                "name": "Cyan Collar White Cat Ears",
                "asset": "images/cyan collar white cat ears.png"
            },
            {
                "name": "Green Collar Black Cat Ears",
                "asset": "images/green collar black cat ears.png"
            },
            {
                "name": "Green Collar Blue Cat Ears",
                "asset": "images/green collar blue cat ears.png"
            },
            {
                "name": "Green Collar Calico Cat Ears",
                "asset": "images/green collar calico cat ears.png"
            },
            {
                "name": "Green Collar Dark Orange Cat Ears",
                "asset": "images/green collar dark orange cat ears.png"
            },
            {
                "name": "Green Collar Green Cat Ears",
                "asset": "images/green collar green cat ears.png"
            },
            {
                "name": "Green Collar Light Gray Cat Ears",
                "asset": "images/green collar light gray cat ears.png"
            },
            {
                "name": "Green Collar Light Orange Cat Ears",
                "asset": "images/green collar light orange cat ears.png"
            },
            {
                "name": "Green Collar Light Yellow Cat Ears",
                "asset": "images/green collar light yellow cat ears.png"
            },
            {
                "name": "Green Collar Purple Cat Ears",
                "asset": "images/green collar purple cat ears.png"
            },
            {
                "name": "Green Collar Red Cat Ears",
                "asset": "images/green collar red cat ears.png"
            },
            {
                "name": "Green Collar White Cat Ears",
                "asset": "images/green collar white cat ears.png"
            },
            {
                "name": "Magenta Collar Black Cat Ears",
                "asset": "images/magneta collar black cat ears.png"
            },
            {
                "name": "Magenta Collar Blue Cat Ears",
                "asset": "images/magneta collar blue cat ears.png"
            },
            {
                "name": "Magenta Collar Calico Cat Ears",
                "asset": "images/magneta collar calico cat ears.png"
            },
            {
                "name": "Magenta Collar Dark Orange Cat Ears",
                "asset": "images/magneta collar dark orange cat ears.png"
            },
            {
                "name": "Magenta Collar Green Cat Ears",
                "asset": "images/magneta collar green cat ears.png"
            },
            {
                "name": "Magenta Collar Light Gray Cat Ears",
                "asset": "images/magneta collar light gray cat ears.png"
            },
            {
                "name": "Magenta Collar Light Yellow Cat Ears",
                "asset": "images/magneta collar light yellow cat ears.png"
            },
            {
                "name": "Magenta Collar Purple Cat Ears",
                "asset": "images/magneta collar purple cat ears.png"
            },
            {
                "name": "Magenta Collar Red Cat Ears",
                "asset": "images/magneta red cat ears.png"
            },
            {
                "name": "Magenta Collar White Cat Ears",
                "asset": "images/magneta collar white cat ears.png"
            },
            {
                "name": "Orange Collar Black Cat Ears",
                "asset": "images/orange collar black cat ears.png"
            },
            {
                "name": "Orange Collar Blue Cat Ears",
                "asset": "images/orange collar blue cat ears.png"
            },
            {
                "name": "Orange Collar Calico Cat Ears",
                "asset": "images/orange collar calico cat ears.png"
            },
            {
                "name": "Orange Collar Dark Orange Cat Ears",
                "asset": "images/orange collar dark orange cat ears.png"
            },
            {
                "name": "Orange Collar Green Cat Ears",
                "asset": "images/orange collar green cat ears.png"
            },
            {
                "name": "Orange Collar Light Gray Cat Ears",
                "asset": "images/orange collar light gray cat ears.png"
            },
            {
                "name": "Orange Collar Light Yellow Cat Ears",
                "asset": "images/orange collar light yellow cat ears.png"
            },
            {
                "name": "Orange Collar Orange Cat Ears",
                "asset": "images/orange collar orange cat ears.png"
            },
            {
                "name": "Orange Collar Purple Cat Ears",
                "asset": "images/orange collar purple cat ears.png"
            },
            {
                "name": "Orange Collar Red Cat Ears",
                "asset": "images/orange collar red cat ears.png"
            },
            {
                "name": "Orange Collar White Cat Ears",
                "asset": "images/orange collar white cat ears.png"
            },
            {
                "name": "Red Collar Black Cat Ears",
                "asset": "images/red collar black cat ears.png"
            },
            {
                "name": "Red Collar Blue Cat Ears",
                "asset": "images/red collar blue cat ears.png"
            },
            {
                "name": "Red Collar Calico Cat Ears",
                "asset": "images/red collar calico cat ears.png"
            },
            {
                "name": "Red Collar Dark Orange Cat Ears",
                "asset": "images/red collar dark orange cat ears.png"
            },
            {
                "name": "Red Collar Green Cat Ears",
                "asset": "images/red collar green cat ears.png"
            },
            {
                "name": "Red Collar Light Orange Cat Ears",
                "asset": "images/red collar light orange cat ears.png"
            },
            {
                "name": "Red Collar Light Yellow Cat Ears",
                "asset": "images/red collar light yellow cat ears.png"
            },
            {
                "name": "Red Collar Purple Cat Ears",
                "asset": "images/red collar purple cat ears.png"
            },
            {
                "name": "Red Collar Red Cat Ears",
                "asset": "images/red collar red cat ears.png"
            },
            {
                "name": "Red Collar White Cat Ears",
                "asset": "images/red collar white cat ears.png"
            },
            {
                "name": "White Collar Black Cat Ears",
                "asset": "images/white collar black cat ears.png"
            },
            {
                "name": "White Collar Blue Cat Ears",
                "asset": "images/white collar blue cat ears.png"
            },
            {
                "name": "White Collar Calico Cat Ears",
                "asset": "images/white collar calico cat ears.png"
            },
            {
                "name": "White Collar Dark Orange Cat Ears",
                "asset": "images/white collar dark orange cat ears.png"
            },
            {
                "name": "White Collar Green Cat Ears",
                "asset": "images/white collar green cat ears.png"
            },
            {
                "name": "White Collar Light Gray Cat Ears",
                "asset": "images/white collar light gray cat ears.png"
            },
            {
                "name": "White Collar Light Orange Cat Ears",
                "asset": "images/white collar light orange cat ears.png"
            },
            {
                "name": "White Collar Light Yellow Cat Ears",
                "asset": "images/white collar light yellow cat ears.png"
            },
            {
                "name": "White Collar Purple Cat Ears",
                "asset": "images/white collar purple cat ears.png"
            },
            {
                "name": "White Collar Red Cat Ears",
                "asset": "images/white collar red cat ears.png"
            },
            {
                "name": "White Collar White Cat Ears",
                "asset": "images/white collar white cat ears.png"
            },
            {
                "name": "Blue Cat Ears",
                "asset": "images/blue cat ears.png"
            },
            {
                "name": "Calico Cat Ears",
                "asset": "images/calico cat ears.png"
            },
            {
                "name": "Cyan Cat Ears",
                "asset": "images/cyan cat ears.png"
            },
            {
                "name": "Dark Orange Cat Ears",
                "asset": "images/dark orange cat ears.png"
            },
            {
                "name": "Green Cat Ears",
                "asset": "images/green cat ears.png"
            },
            {
                "name": "Light Gray Cat Ears",
                "asset": "images/light gray cat ears.png"
            },
            {
                "name": "Light Yellow Cat Ears",
                "asset": "images/light yellow cat ears.png"
            },
            {
                "name": "Purple Cat Ears",
                "asset": "images/purple cat ears.png"
            },
            {
                "name": "Red Cat Ears",
                "asset": "images/red cat ears.png"
            },
            {
                "name": "White Cat Ears",
                "asset": "images/white cat ears.png"
            }
        ]
    },
    {
        "name": "GENSHIN",
        "banner": "images/genshin-banner.png",
        "artist_info": null,
        "artists": [
            findUser('452679089929846784')
        ],
        "decorations": [
            {
                "name": "Kirara Skill",
                "asset": "images/kirara-skill.png"
            },
            {
                "name": "Xiangling Skill",
                "asset": "images/xiangling_skill.png"
            },
            {
                "name": "Charlotte Skill",
                "asset": "images/charlotte_skill.png"
            },
            {
                "name": "Chevreuse Skill",
                "asset": "images/chevreuse_skill.png"
            },
            {
                "name": "Layla Skill",
                "asset": "images/layla_skill.png"
            },
            {
                "name": "Nahida Skill",
                "asset": "images/nahida_skill.png"
            }
        ]
    },
    {
        "name": "POKEMON",
        "banner": "images/pokemon-banner.png",
        "artist_info": null,
        "artists": [
            findUser('13')
        ],
        "decorations": [
            {
                "name": "Cynthia",
                "asset": "images/cynthia.png"
            },
            {
                "name": "Natural Harmonia Gropius",
                "asset": "images/N.png"
            },
            {
                "name": "Giratina",
                "asset": "images/giratina.png"
            },
            {
                "name": "Ceruledge",
                "asset": "images/ceruledge.png"
            },
            {
                "name": "Reshiram",
                "asset": "images/reshiram.png"
            },
            {
                "name": "Mew",
                "asset": "images/mew.png"
            }
        ]
    },
    {
        "name": "BFDI",
        "banner": "images/bfdi-banner.png",
        "artist_info": null,
        "artists": [
            findUser('14')
        ],
        "decorations": [
            {
                "name": "Bomby and Nickel",
                "asset": "images/bomby-and-nickel.png"
            },
            {
                "name": "Dirt Cake",
                "asset": "images/dirt-cake.png"
            },
            {
                "name": "Freesmart",
                "asset": "images/freesmart-alternates.png"
            },
            {
                "name": "Gumdrop Galore",
                "asset": "images/gumdrop-galore.png"
            },
            {
                "name": "Inside Bubble",
                "asset": "images/inside-bubble.png"
            },
            {
                "name": "Inside the donut hole",
                "asset": "images/inside-the-donut-hole.png"
            },
            {
                "name": "Pop that bubble",
                "asset": "images/pop-that-bubble.png"
            },
            {
                "name": "Rocky Barf",
                "asset": "images/rocky-barf.png"
            }
        ]
    },
    {
        "name": "FNF",
        "banner": "images/fnf-banner.png",
        "artist_info": null,
        "artists": [
            findUser('7')
        ],
        "decorations": [
            {
                "name": "Darnell Sticker",
                "asset": "images/DARNELL_Sticker_Decor.png"
            },
            {
                "name": "Face Sticker",
                "asset": "images/FACE_Sticker_Decor.png"
            },
            {
                "name": "Tankman Sticker",
                "asset": "images/TANKMAN_Sticker_Decor.png"
            },
            {
                "name": "GF Sticker",
                "asset": "images/GF_Sticker_Decor.png"
            },
            {
                "name": "Daddy Dearest Sticker",
                "asset": "images/DADDY_DEAREST_Sticker_Decor.png"
            },
            {
                "name": "Mommy Dearest Sticker",
                "asset": "images/MOMMY_DEAREST_Sticker_Decor.png"
            },
            {
                "name": "Sempai Sticker",
                "asset": "images/SEMPAI_Sticker_Decor.png"
            },
            {
                "name": "Ski And Pump Sticker",
                "asset": "images/SKIDANDPUMP_Sticker_Decor.png"
            },
            {
                "name": "Speakers Sticker",
                "asset": "images/SPEAKERS_Sticker_Decor.png"
            },
            {
                "name": "Spirit Sticker",
                "asset": "images/SPIRIT_Sticker_Decor.png"
            },
            {
                "name": "Lemon Demon Sticker",
                "asset": "images/LEMON_DEMON_Sticker_Decor.png"
            },
            {
                "name": "BF Sticker",
                "asset": "images/Bf_Sticker_Decor.png"
            },
            {
                "name": "Pico Sticker",
                "asset": "images/PICO_Sticker_Decor.png"
            },
            {
                "name": "Nene Sticker",
                "asset": "images/NENE_Sticker_Decor.png"
            },
            {
                "name": "BF Fan",
                "asset": "images/Bf_Fan_Decor.png"
            },
            {
                "name": "FNF Player",
                "asset": "images/FNF_Player_Decor.png"
            },
            {
                "name": "GF Sit",
                "asset": "images/GF_Sit_Decor.png"
            }
        ]
    },
    {
        "name": "Pizza",
        "banner": "images/pizza-banner.png",
        "artist_info": null,
        "artists": [
            findUser('15')
        ],
        "decorations": [
            {
                "name": "Chef",
                "asset": "images/chef.png"
            },
            {
                "name": "Chef Hat",
                "asset": "images/chefhat.png"
            },
            {
                "name": "Goo",
                "asset": "images/goo.png"
            },
            {
                "name": "Mouth",
                "asset": "images/mouth.png"
            },
            {
                "name": "Rat Knife",
                "asset": "images/ratknife.png"
            },
            {
                "name": "Brick",
                "asset": "images/brick.png"
            }
        ]
    },
    {
        "name": "Kitsune",
        "banner": "images/kitsune-banner.png",
        "artist_info": null,
        "artists": [
            findUser('5')
        ],
        "decorations": [
            {
                "name": "Black Mask",
                "asset": "images/Blackmask.png"
            },
            {
                "name": "Blue Mask",
                "asset": "images/Bluemask.png"
            },
            {
                "name": "Green Mask",
                "asset": "images/Greenmask.png"
            },
            {
                "name": "Pink Mask",
                "asset": "images/Pinkmask.png"
            },
            {
                "name": "Purple Mask",
                "asset": "images/Purplemask.png"
            },
            {
                "name": "Red Mask",
                "asset": "images/Redmask.png"
            }
        ]
    },
    {
        "name": "NEON",
        "banner": "images/neon-banner.png",
        "artist_info": null,
        "artists": [
            findUser('16')
        ],
        "decorations": [
            {
                "name": "Flamelike",
                "asset": "images/flamelike.png"
            },
            {
                "name": "Prideful",
                "asset": "images/prideful.png"
            },
            {
                "name": "Split Globe",
                "asset": "images/split-globe.png"
            },
            {
                "name": "Glitch",
                "asset": "images/glitch.png"
            },
            {
                "name": "RGB Circle",
                "asset": "images/rgbcircle.png"
            },
            {
                "name": "Purple Glow",
                "asset": "images/purple-glow.png"
            },
            {
                "name": "Geometric",
                "asset": "images/geometric.png"
            },
            {
                "name": "Particle Circle",
                "asset": "images/particle-circle.png"
            },
            {
                "name": "Retro Car",
                "asset": "images/retrocar.png"
            },
            {
                "name": "Runic",
                "asset": "images/runic.png"
            },
            {
                "name": "Wireframe",
                "asset": "images/wireframe.png"
            },
            {
                "name": "Galaxy",
                "asset": "images/Galaxy.png"
            }
        ]
    },
    {
        "name": "Stardew",
        "banner": "images/1stardew-banner.png",
        "artist_info": null,
        "artists": [
            findUser('811114235966521364')
        ],
        "decorations": [
            {
                "name": "Abigail",
                "asset": "images/abigail.png"
            },
            {
                "name": "Alex",
                "asset": "images/alex.png"
            },
            {
                "name": "Elliott",
                "asset": "images/elliott.png"
            },
            {
                "name": "Emily",
                "asset": "images/emily.png"
            },
            {
                "name": "Haley",
                "asset": "images/haley.png"
            },
            {
                "name": "Harvey",
                "asset": "images/harvey.png"
            },
            {
                "name": "Hat Mouse",
                "asset": "images/hatmouse.png"
            },
            {
                "name": "Junimo",
                "asset": "images/junimo.png"
            },
            {
                "name": "Leah",
                "asset": "images/leah.png"
            },
            {
                "name": "Maru",
                "asset": "images/maru.png"
            },
            {
                "name": "Mr Qi",
                "asset": "images/mrqi.png"
            },
            {
                "name": "Pendant",
                "asset": "images/pendant.png"
            },
            {
                "name": "Penny",
                "asset": "images/penny.png"
            },
            {
                "name": "Sam",
                "asset": "images/sam.png"
            },
            {
                "name": "Sebastian",
                "asset": "images/sebastian.png"
            },
            {
                "name": "Shane",
                "asset": "images/shane.png"
            },
            {
                "name": "Portrait",
                "asset": "images/portrait.png"
            }
        ]
    },
    {
        "name": "Squish",
        "banner": "images/1squishmallow-banner.png",
        "artist_info": null,
        "artists": [
            findUser('811114235966521364')
        ],
        "decorations": [
            {
                "name": "Carotene",
                "asset": "images/carotene.png"
            },
            {
                "name": "Davina",
                "asset": "images/davina.png"
            },
            {
                "name": "Mario",
                "asset": "images/mario.png"
            },
            {
                "name": "Rebecca",
                "asset": "images/rebecca.png"
            },
            {
                "name": "Tristan",
                "asset": "images/tristan.png"
            },
            {
                "name": "Omnomnom",
                "asset": "images/omnomnom.png"
            },
            {
                "name": "Sam Sundae",
                "asset": "images/sam sundae.png"
            },
            {
                "name": "Pom Pom Burger",
                "asset": "images/pom pom burger.png"
            },
            {
                "name": "Akilah",
                "asset": "images/akilah.png"
            }
        ]
    },
    {
        "name": "BUTTERFLY",
        "banner": "images/nuki-crystal-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1143994313034960967')
        ],
        "force_pagebreak": true,
        "decorations": [
            {
                "name": "Dandelion Autumn",
                "asset": "images/dandelionautumn.png"
            },
            {
                "name": "Dandelion Blue",
                "asset": "images/dandelionblue.png"
            },
            {
                "name": "Dandelion Cherry",
                "asset": "images/dandelioncherry.png"
            },
            {
                "name": "Dandelion Cyan",
                "asset": "images/dandelioncyan.png"
            },
            {
                "name": "Dandelion Green",
                "asset": "images/dandeliongreen.png"
            },
            {
                "name": "Dandelion Mystical",
                "asset": "images/dandelionmystical.png"
            },
            {
                "name": "Dandelion Pink",
                "asset": "images/dandelionpink.png"
            },
            {
                "name": "Dandelion Purple",
                "asset": "images/dandelionpurple.png"
            },
            {
                "name": "Dandelion Yellow",
                "asset": "images/dandelionyellow.png"
            },
            {
                "name": "Dust Azure",
                "asset": "images/dustazure.png"
            },
            {
                "name": "Dust Cyan",
                "asset": "images/dustcyan.png"
            },
            {
                "name": "Dust Forest",
                "asset": "images/dustforest.png"
            },
            {
                "name": "Dust Green",
                "asset": "images/dustgreen.png"
            },
            {
                "name": "Dust Magical",
                "asset": "images/dustmagical.png"
            },
            {
                "name": "Dust Pink",
                "asset": "images/dustpink.png"
            },
            {
                "name": "Dust Purple",
                "asset": "images/dustpurple.png"
            },
            {
                "name": "Dust Red",
                "asset": "images/dustred.png"
            },
            {
                "name": "Dust Yellow",
                "asset": "images/dustyellow.png"
            },
            {
                "name": "Gemstone Autumn",
                "asset": "images/gemstoneautumn.png"
            },
            {
                "name": "Gemstone Blue",
                "asset": "images/gemstoneblue.png"
            },
            {
                "name": "Gemstone Green",
                "asset": "images/gemstonegreen.png"
            },
            {
                "name": "Gemstone Pastel",
                "asset": "images/gemstonepastel.png"
            },
            {
                "name": "Gemstone Pink",
                "asset": "images/gemstonepink.png"
            },
            {
                "name": "Gemstone Red",
                "asset": "images/gemstonered.png"
            },
            {
                "name": "Gemstone Spring",
                "asset": "images/gemstonespring.png"
            },
            {
                "name": "Gemstone Summer",
                "asset": "images/gemstonesummer.png"
            },
            {
                "name": "Gemstone Yellow",
                "asset": "images/gemstoneyellow.png"
            },
            {
                "name": "Holly Autumn",
                "asset": "images/hollyautumn.png"
            },
            {
                "name": "Holly Blue",
                "asset": "images/hollyblue.png"
            },
            {
                "name": "Holly Brown",
                "asset": "images/hollybrown.png"
            },
            {
                "name": "Holly Cherry",
                "asset": "images/hollycherry.png"
            },
            {
                "name": "Holly Forest",
                "asset": "images/hollyforest.png"
            },
            {
                "name": "Holly Green",
                "asset": "images/hollygreen.png"
            },
            {
                "name": "Holly Mint",
                "asset": "images/hollymint.png"
            },
            {
                "name": "Holly Purple",
                "asset": "images/hollypurple.png"
            },
            {
                "name": "Holly Red",
                "asset": "images/hollyred.png"
            },
            {
                "name": "Lantern Autumn",
                "asset": "images/lanternautumn.png"
            },
            {
                "name": "Lantern Blue",
                "asset": "images/lanternblue.png"
            },
            {
                "name": "Lantern Cherry",
                "asset": "images/lanterncherry.png"
            },
            {
                "name": "Lantern Crystal",
                "asset": "images/lanterncrystal.png"
            },
            {
                "name": "Lantern Green",
                "asset": "images/lanterngreen.png"
            },
            {
                "name": "Lantern Pink",
                "asset": "images/lanternpink.png"
            },
            {
                "name": "Lantern Purple",
                "asset": "images/lanternpurple.png"
            },
            {
                "name": "Lantern Red",
                "asset": "images/lanternred.png"
            },
            {
                "name": "Lantern Yellow",
                "asset": "images/lanternyellow.png"
            },
            {
                "name": "No Lantern Autumn",
                "asset": "images/nolanternautumn.png"
            },
            {
                "name": "No Lantern Blue",
                "asset": "images/nolanternblue.png"
            },
            {
                "name": "No Lantern Cherry",
                "asset": "images/nolanterncherry.png"
            },
            {
                "name": "No Lantern Crystal",
                "asset": "images/nolanterncrystal.png"
            },
            {
                "name": "No Lantern Green",
                "asset": "images/nolanterngreen.png"
            },
            {
                "name": "No Lantern Pink",
                "asset": "images/nolanternpink.png"
            },
            {
                "name": "No Lantern Purple",
                "asset": "images/nolanternpurple.png"
            },
            {
                "name": "No Lantern Red",
                "asset": "images/nolanternred.png"
            },
            {
                "name": "No Lantern Yellow",
                "asset": "images/nolanternyellow.png"
            },
            {
                "name": "Quartz Blue",
                "asset": "images/quartzblue.png"
            },
            {
                "name": "Quartz Cyan",
                "asset": "images/quartzcyan.png"
            },
            {
                "name": "Quartz Green",
                "asset": "images/quartzgreen.png"
            },
            {
                "name": "Quartz Orange",
                "asset": "images/quartzorange.png"
            },
            {
                "name": "Quartz Purple",
                "asset": "images/quartzpurple.png"
            },
            {
                "name": "Quartz Red",
                "asset": "images/quartzred.png"
            },
            {
                "name": "Quartz Rose",
                "asset": "images/quartzrose.png"
            },
            {
                "name": "Quartz Yellow",
                "asset": "images/quartzyellow.png"
            },
            {
                "name": "Quartz Rainbow",
                "asset": "images/quartzrainbow.png"
            },
            {
                "name": "Ribbon Blue",
                "asset": "images/ribbonblue.png"
            },
            {
                "name": "Ribbon Cyan",
                "asset": "images/ribboncyan.png"
            },
            {
                "name": "Ribbon Forest",
                "asset": "images/ribbonforest.png"
            },
            {
                "name": "Ribbon Mint",
                "asset": "images/ribbonmint.png"
            },
            {
                "name": "Ribbon Pink",
                "asset": "images/ribbonpink.png"
            },
            {
                "name": "Ribbon Purple",
                "asset": "images/ribbonpurple.png"
            },
            {
                "name": "Ribbon Red",
                "asset": "images/ribbonred.png"
            },
            {
                "name": "Ribbon Rose",
                "asset": "images/ribbonrose.png"
            },
            {
                "name": "Ribbon Yellow",
                "asset": "images/ribbonyellow.png"
            },
            {
                "name": "Sakura Autumn",
                "asset": "images/sakuraautumn.png"
            },
            {
                "name": "Sakura Dawn",
                "asset": "images/sakuradawn.png"
            },
            {
                "name": "Sakura Cyan",
                "asset": "images/sakuracyan.png"
            },
            {
                "name": "Sakura Emerald",
                "asset": "images/sakuraemerald.png"
            },
            {
                "name": "Sakura Mint",
                "asset": "images/sakuramint.png"
            },
            {
                "name": "Sakura Moonlight",
                "asset": "images/sakuramoonlight.png"
            },
            {
                "name": "Sakura Twilight",
                "asset": "images/sakuratwilight.png"
            },
            {
                "name": "Sakura Pink",
                "asset": "images/sakurapink.png"
            },
            {
                "name": "Sakura Yellow",
                "asset": "images/sakurayellow.png"
            },
            {
                "name": "Leaves Autumn",
                "asset": "images/leavesautumn.png"
            },
            {
                "name": "Leaves Blue",
                "asset": "images/leavesblue.png"
            },
            {
                "name": "Leaves Green",
                "asset": "images/leavesgreen.png"
            },
            {
                "name": "Leaves Magenta",
                "asset": "images/leavesmagenta.png"
            },
            {
                "name": "Leaves Mint",
                "asset": "images/leavesmint.png"
            },
            {
                "name": "Leaves Pink",
                "asset": "images/leavespink.png"
            },
            {
                "name": "Leaves Red",
                "asset": "images/leavesred.png"
            },
            {
                "name": "Leaves Winter",
                "asset": "images/leaveswinter.png"
            },
            {
                "name": "Leaves Yellow",
                "asset": "images/leavesyellow.png"
            }
        ]
    },
    {
        "name": "CORAL REEF",
        "banner": "images/coralbannernew.png",
        "artist_info": "Reminder to add all the artists to this category or you will explode",
        "artists": [
            findUser('1')
        ],
        "decorations": [
            {
                "name": "Pink Jellyfish",
                "asset": "images/pinkjelly.png"
            },
            {
                "name": "Happy Jellyfish",
                "asset": "images/happyjelly.png"
            },
            {
                "name": "Axolotl Blue",
                "asset": "images/axoblue.png"
            },
            {
                "name": "Axolotl Pink",
                "asset": "images/axopink.png"
            },
            {
                "name": "Axolotl Purple",
                "asset": "images/axopurple.png"
            },
            {
                "name": "Axolotl White",
                "asset": "images/axowhite.png"
            },
            {
                "name": "Axolotl Yellow",
                "asset": "images/axoyellow.png"
            },
            {
                "name": "Float Blue",
                "asset": "images/floatblue.png"
            },
            {
                "name": "Float Green",
                "asset": "images/floatgreen.png"
            },
            {
                "name": "Float Pink",
                "asset": "images/floatpink.png"
            },
            {
                "name": "Float Purple",
                "asset": "images/floatpurple.png"
            },
            {
                "name": "Float Yellow",
                "asset": "images/floatyellow.png"
            },
            {
                "name": "Blue Knife",
                "asset": "images/blueknife.png"
            },
            {
                "name": "Green Knife",
                "asset": "images/greenknife.png"
            },
            {
                "name": "Mint Knife",
                "asset": "images/mintknife.png"
            },
            {
                "name": "Pink Knife",
                "asset": "images/pinkknife.png"
            },
            {
                "name": "Purple Knife",
                "asset": "images/purpleknife.png"
            },
            {
                "name": "Red Knife",
                "asset": "images/redknife.png"
            },
            {
                "name": "Yellow Knife",
                "asset": "images/yellowknife.png"
            },
            {
                "name": "White Jelly",
                "asset": "images/a_ white jelly.png"
            },
            {
                "name": "Cyan Jelly",
                "asset": "images/cyan jelly.png"
            },
            {
                "name": "Light Purple Jelly",
                "asset": "images/d_light purple jelly.png"
            },
            {
                "name": "Pink Jelly",
                "asset": "images/d_pink jelly.png"
            },
            {
                "name": "Light Green Jelly",
                "asset": "images/f_light green jelly.png"
            },
            {
                "name": "Dark Green Jelly",
                "asset": "images/g_dark green jelly.png"
            },
            {
                "name": "Light Yellow Jelly",
                "asset": "images/g_light yellow jelly.png"
            },
            {
                "name": "Gold Jelly",
                "asset": "images/g1_gold jelly.png"
            }
        ]
    },
    {
        "name": "Zoo",
        "banner": "images/zoobanner.png",
        "artist_info": null,
        "artists": [
            findUser('5')
        ],
        "decorations": [
            {
                "name": "Bunny Ears",
                "asset": "images/bunnyears.png"
            },
            {
                "name": "Cat Ears",
                "asset": "images/catears.png"
            },
            {
                "name": "Deer Ears",
                "asset": "images/deerears.png"
            },
            {
                "name": "Dog Ears No Tail",
                "asset": "images/dogearsnotail.png"
            },
            {
                "name": "Dog Ears Tail",
                "asset": "images/dogearstail.png"
            },
            {
                "name": "Wing Ears",
                "asset": "images/wingears.png"
            }
        ]
    },
    {
        "name": "Garage",
        "banner": "images/garage-banner.png",
        "artist_info": null,
        "artists": [
            findUser('17')
        ],
        "decorations": [
            {
                "name": "Holly Jolly",
                "asset": "images/hollyjolly.png"
            },
            {
                "name": "Rated M",
                "asset": "images/ratedm.png"
            },
            {
                "name": "Beat",
                "asset": "images/Beat.png"
            },
            {
                "name": "Corn",
                "asset": "images/Corn.png"
            },
            {
                "name": "Gum",
                "asset": "images/Gum.png"
            },
            {
                "name": "Evil Dead",
                "asset": "images/evildead.png"
            },
            {
                "name": "Neon Chainsaw",
                "asset": "images/neonchainsaw.png"
            },
            {
                "name": "Lava Lamp",
                "asset": "images/lavadecor.png"
            }
        ]
    },
    {
        "name": "Showtime",
        "banner": "images/showtime-banner.png",
        "artist_info": null,
        "artists": [
            findUser('10')
        ],
        "decorations": [
            {
                "name": "It's Teto!",
                "asset": "images/another.png"
            },
            {
                "name": "Cat Cap",
                "asset": "images/catcap.png"
            },
            {
                "name": "Emu",
                "asset": "images/Emu.png"
            },
            {
                "name": "Glowy",
                "asset": "images/less_light.png"
            },
            {
                "name": "Nene",
                "asset": "images/Nene.png"
            },
            {
                "name": "Peachy",
                "asset": "images/remake.png"
            },
            {
                "name": "Rui",
                "asset": "images/Rui.png"
            },
            {
                "name": "Teto Pear",
                "asset": "images/teto_frame_ig.png"
            },
            {
                "name": "Teto Bow",
                "asset": "images/tetoo.png"
            },
            {
                "name": "Teto Swirl",
                "asset": "images/tetoswirl.png"
            },
            {
                "name": "More Teto",
                "asset": "images/tetoteto.png"
            },
            {
                "name": "Tsukasa",
                "asset": "images/Tsukasa.png"
            },
            {
                "name": "Wonderhoy",
                "asset": "images/wonderhoy.png"
            }
        ]
    },
    {
        "name": "Pancake Day",
        "banner": "images/nuki-pancake-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1143994313034960967')
        ],
        "decorations": [
            {
                "name": "Fork",
                "asset": "images/fork.png"
            },
            {
                "name": "Munching",
                "asset": "images/munching.png"
            },
            {
                "name": "Syrup",
                "asset": "images/syrup.png"
            },
            {
                "name": "Syrup 2",
                "asset": "images/syrup2.png"
            }
        ]
    },
    {
        "name": "Oxygen",
        "banner": "images/newoxygen-banner.png",
        "artist_info": null,
        "artists": [
            findUser('11')
        ],
        "decorations": [
            {
                "name": "Plumbing",
                "asset": "images/plumbing.png"
            },
            {
                "name": "Power",
                "asset": "images/power.png"
            },
            {
                "name": "Radbolts",
                "asset": "images/radbolts.png"
            },
            {
                "name": "Slickster",
                "asset": "images/slickster.png"
            }
        ]
    },
    {
        "name": "Sanrio",
        "banner": "images/nuki-sanrio-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1143994313034960967')
        ],
        "decorations": [
            {
                "name": "Choco",
                "asset": "images/choco.png"
            },
            {
                "name": "Cinnamoroll",
                "asset": "images/cinnamoroll.png"
            },
            {
                "name": "Hello Kitty",
                "asset": "images/kitty.png"
            },
            {
                "name": "Kuromi",
                "asset": "images/kuromi.png"
            },
            {
                "name": "Melody",
                "asset": "images/melody.png"
            },
            {
                "name": "Purin",
                "asset": "images/purin.png"
            }
        ]
    },
    {
        "name": "Scribble",
        "banner": "images/scribble-banner.png",
        "artist_info": null,
        "artists": [
            findUser('20')
        ],
        "decorations": [
            {
                "name": "Annie's Hair",
                "asset": "images/Annies_Hair.png"
            },
            {
                "name": "Anton's Hair",
                "asset": "images/Antons_Hair.png"
            },
            {
                "name": "Cookie",
                "asset": "images/Cookie_decoration.png"
            },
            {
                "name": "Green Dude",
                "asset": "images/Greendude_decoration.png"
            },
            {
                "name": "Marcie",
                "asset": "images/Marcie_decoration.png"
            },
            {
                "name": "Taunt",
                "asset": "images/Taunt_decor.png"
            }
        ]
    },
    {
        "name": "Horns",
        "banner": "images/horns-banner.png",
        "artist_info": null,
        "artists": [
            findUser('5')
        ],
        "decorations": [
            {
                "name": "Goat Horns",
                "asset": "images/goat horns.png"
            },
            {
                "name": "Devil Horns",
                "asset": "images/devil horns.png"
            },
            {
                "name": "Squishy Horns",
                "asset": "images/squishy horns.png"
            },
            {
                "name": "Over Horns",
                "asset": "images/over horns.png"
            },
            {
                "name": "Stylish Horns",
                "asset": "images/stylish horns.png"
            },
            {
                "name": "Alien Ears",
                "asset": "images/alien ears.png"
            }
        ]
    },
    {
        "name": "TOILET BOUND",
        "banner": "images/toilet-banner.png",
        "artist_info": null,
        "artists": [
            findUser('5')
        ],
        "decorations": [
            {
                "name": "Yashiro Clips",
                "asset": "images/yashiro clips.png"
            },
            {
                "name": "Hanako Ghosts",
                "asset": "images/hanako ghosts.png"
            },
            {
                "name": "Tsukasa Ghosts",
                "asset": "images/tsukasa ghosts.png"
            },
            {
                "name": "Yako Ears",
                "asset": "images/yako ears.png"
            },
            {
                "name": "Yako Ears Alt",
                "asset": "images/yako ears alt.png"
            }
        ]
    },
    {
        "name": "ABSTRACT",
        "banner": "images/abstract-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1147940825330876538')
        ],
        "decorations": [
            {
                "name": "Abstract Purple",
                "asset": "images/abstractpurple.png"
            },
            {
                "name": "Bubble",
                "asset": "images/bubble.png"
            }
        ]
    },
    {
        "name": "VALENTINES",
        "banner": "images/love-banner.png",
        "artist_info": null,
        "artists": [
            findUser('19')
        ],
        "decorations": [
            {
                "name": "Kisses",
                "asset": "images/kisses.png"
            },
            {
                "name": "Envelope",
                "asset": "images/envelope.png"
            },
            {
                "name": "Love Thoughts",
                "asset": "images/lovethoughts.png"
            },
            {
                "name": "Blue Flower",
                "asset": "images/blueflower.png"
            },
            {
                "name": "Pink Flower",
                "asset": "images/pinkflower.png"
            },
            {
                "name": "Blue Candy",
                "asset": "images/blue candy.png"
            },
            {
                "name": "Pink Candy",
                "asset": "images/pink candy.png"
            },
            {
                "name": "Blue Hat",
                "asset": "images/bluehat.png"
            },
            {
                "name": "Pink Hat",
                "asset": "images/pinkhat.png"
            },
            {
                "name": "Valentines Day",
                "asset": "images/valentinesday.png"
            }
        ]
    },
    {
        "name": "Sonic Love",
        "banner": "images/nuki-sonic-banner.png",
        "artist_info": null,
        "artists": [
            findUser('1143994313034960967')
        ],
        "decorations": [
            {
                "name": "Holding Baby",
                "asset": "images/holdingbaby.png"
            },
            {
                "name": "Greetings",
                "asset": "images/greetings.png"
            },
            {
                "name": "Sonic Pal",
                "asset": "images/sonicpal.png"
            },
            {
                "name": "Marry Me",
                "asset": "images/marryme.png"
            },
            {
                "name": "Big Day",
                "asset": "images/bigday.png"
            },
            {
                "name": "Streamer",
                "asset": "images/streamer.png"
            }
        ]
    },
    {
        "name": "BALATRO",
        "banner": "images/balatro-banner.png",
        "artist_info": null,
        "artists": [
            findUser('13')
        ],
        "decorations": [
            {
                "name": "Abstract",
                "asset": "images/abstract.png"
            },
            {
                "name": "Baron",
                "asset": "images/baron.png"
            },
            {
                "name": "Canio",
                "asset": "images/canio.png"
            },
            {
                "name": "Chicot",
                "asset": "images/chicot.png"
            },
            {
                "name": "Jimbo",
                "asset": "images/jimbo.png"
            },
            {
                "name": "Mime",
                "asset": "images/mime.png"
            },
            {
                "name": "Perkeo",
                "asset": "images/perkeo.png"
            },
            {
                "name": "Red Chip",
                "asset": "images/red chip.png"
            },
            {
                "name": "Triboulet",
                "asset": "images/triboulet.png"
            },
            {
                "name": "Wheel of Fortune",
                "asset": "images/wheel of fortune.png"
            },
            {
                "name": "White Chip",
                "asset": "images/white chip.png"
            },
            {
                "name": "Yorick",
                "asset": "images/yorick.png"
            }
        ]
    },
    {
        "name": "DOODLES",
        "banner": "images/doodles-banner.png",
        "artist_info": null,
        "artists": [
            findUser('21')
        ],
        "decorations": [
            {
                "name": "Brown Alien",
                "asset": "images/brownalien.png"
            },
            {
                "name": "Purple Alien",
                "asset": "images/purplealien.png"
            },
            {
                "name": "Sanford",
                "asset": "images/sanford.png"
            },
            {
                "name": "Deimos",
                "asset": "images/deimos.png"
            },
            {
                "name": "Dynamite",
                "asset": "images/dynamite.png"
            },
            {
                "name": "Ganyu",
                "asset": "images/ganyu.png"
            },
            {
                "name": "Shark with a Trident",
                "asset": "images/sharktrident.png"
            }
        ]
    },
    {
        "name": "DELICIOUS DUNGEON",
        "banner": "images/delicious-banner.png",
        "artist_info": null,
        "artists": [
            findUser('22')
        ],
        "decorations": [
            {
                "name": "Senshi",
                "asset": "images/senshi.png"
            },
            {
                "name": "Senshi with mustache",
                "asset": "images/senshi1.png"
            },
            {
                "name": "Laios Touden",
                "asset": "images/laios-touden.png"
            },
            {
                "name": "Marcille Donato",
                "asset": "images/marcille-donato.png"
            },
            {
                "name": "Chilchuck Tims",
                "asset": "images/chilchuck-tims.png"
            },
            {
                "name": "Falin Touden",
                "asset": "images/falin-touden.png"
            },
            {
                "name": "Izutsumi",
                "asset": "images/izutsumi.png"
            },
            {
                "name": "Neck Warmer",
                "asset": "images/neckwarmer.png"
            }
        ]
    },
    {
        "name": "PRIDE",
        "banner": "images/pride-banner.png",
        "artist_info": null,
        "artists": [
            findUser('22')
        ],
        "decorations": [
            {
                "name": "Acespec",
                "asset": "images/acespec.png"
            },
            {
                "name": "Agender",
                "asset": "images/agender.png"
            },
            {
                "name": "Aroace",
                "asset": "images/aroace.png"
            },
            {
                "name": "Aroacespec",
                "asset": "images/aroacespec.png"
            },
            {
                "name": "Aromantic",
                "asset": "images/aromantic.png"
            },
            {
                "name": "Arospec",
                "asset": "images/arospec.png"
            },
            {
                "name": "Asexual",
                "asset": "images/asexual.png"
            },
            {
                "name": "Demiagender",
                "asset": "images/demiagender.png"
            },
            {
                "name": "Demiboy",
                "asset": "images/demiboy.png"
            },
            {
                "name": "Demigender",
                "asset": "images/demigender.png"
            },
            {
                "name": "Demigirl",
                "asset": "images/demigirl.png"
            },
            {
                "name": "Demimix",
                "asset": "images/demimix.png"
            },
            {
                "name": "Gay",
                "asset": "images/gay.png"
            },
            {
                "name": "Genderqueer",
                "asset": "images/genderqueer.png"
            },
            {
                "name": "Lesbian",
                "asset": "images/lesbian.png"
            },
            {
                "name": "Librafem",
                "asset": "images/librafem.png"
            },
            {
                "name": "Libramasc",
                "asset": "images/libramasc.png"
            },
            {
                "name": "Non Binary",
                "asset": "images/nonbinary.png"
            },
            {
                "name": "Transbian",
                "asset": "images/transbian.png"
            },
            {
                "name": "Trans Gay",
                "asset": "images/trans-gay.png"
            },
            {
                "name": "Transgender",
                "asset": "images/transgender.png"
            },
            {
                "name": "Transfem",
                "asset": "images/transfem.png"
            },
            {
                "name": "Transmasc",
                "asset": "images/transmasc.png"
            },
            {
                "name": "Transneutral",
                "asset": "images/transneutral.png"
            },
            {
                "name": "Abrosexual",
                "asset": "images/abrosexual.png"
            },
            {
                "name": "Bisexual",
                "asset": "images/bisexual.png"
            },
            {
                "name": "Omnisexual",
                "asset": "images/omnisexual.png"
            },
            {
                "name": "Pansexual",
                "asset": "images/pansexual.png"
            },
            {
                "name": "Polysexual",
                "asset": "images/polysexual.png"
            }
        ]
    },
    {
        "name": "SPACE",
        "banner": "images/space-banner.png",
        "artist_info": null,
        "artists": [
            findUser('22')
        ],
        "decorations": [
            {
                "name": "Moon",
                "asset": "images/moon.png"
            },
            {
                "name": "Moon & Stars",
                "asset": "images/moonstars.png"
            }
        ]
    },
    {
        "name": "TOTORO",
        "banner": "images/totoro-banner.png",
        "artist_info": null,
        "artists": [
            findUser('19')
        ],
        "decorations": [
            {
                "name": "Chibi Totoro",
                "asset": "images/chibi-totoro1.png"
            },
            {
                "name": "Chibi Totoro Animated",
                "asset": "images/chibi-totoroanimated.png"
            },
            {
                "name": "Chu Totoro",
                "asset": "images/chu-totoro.png"
            },
            {
                "name": "Chu Totoro Animated",
                "asset": "images/chu-totoroanimated.png"
            },
            {
                "name": "Chibi Totoro Green",
                "asset": "images/chibi-totorofixed.png"
            },
            {
                "name": "Totoro",
                "asset": "images/totoro.png"
            }
        ]
    },
    {
        "name": "LAKE",
        "banner": "images/lake-banner.png",
        "artist_info": null,
        "artists": [
            findUser('19')
        ],
        "decorations": [
            {
                "name": "Ladybug",
                "asset": "images/ladybug.png"
            },
            {
                "name": "Ducky",
                "asset": "images/ducky.png"
            },
            {
                "name": "Leaves",
                "asset": "images/leaves.png"
            },
            {
                "name": "Picnic",
                "asset": "images/picnic.png"
            }
        ]
    },
    {
        "name": "DESSERTS",
        "banner": "images/desserts-banner.png",
        "artist_info": null,
        "artists": [
            findUser('19')
        ],
        "decorations": [
            {
                "name": "Boba",
                "asset": "images/boba.png"
            },
            {
                "name": "Cupcake",
                "asset": "images/cupcake.png"
            },
            {
                "name": "Ice Cream",
                "asset": "images/icecream.png"
            },
            {
                "name": "Macarons",
                "asset": "images/macarons.png"
            },
            {
                "name": "Strawberry Cake",
                "asset": "images/strawberry-cake.png"
            }
        ]
    },
    {
        "name": "KATSU",
        "banner": "images/collectors-banner.png",
        "artist_info": null,
        "artists": [
            findUser('18')
        ],
        "decorations": [
            {
                "name": "Mew Card",
                "asset": "images/mewcard.png"
            },
            {
                "name": "Charizard Card",
                "asset": "images/charizardcard.png"
            },
            {
                "name": "Pokéball",
                "asset": "images/pokeball.png"
            },
            {
                "name": "GameBoy",
                "asset": "images/gameboy.png"
            },
            {
                "name": "SNES",
                "asset": "images/snes.png"
            },
            {
                "name": "Nintendo 3DS",
                "asset": "images/3ds.png"
            },
            {
                "name": "Nintendo Wii",
                "asset": "images/wii.png"
            },
            {
                "name": "PlayStation",
                "asset": "images/playstation.png"
            },
            {
                "name": "DreamCast",
                "asset": "images/dreamcast.png"
            },
            {
                "name": "Nintendo Switch",
                "asset": "images/switch.png"
            },
            {
                "name": "Xbox One",
                "asset": "images/xbox1.png"
            },
            {
                "name": "Xbox Series S",
                "asset": "images/xboxs.png"
            },
            {
                "name": "My Hero Academia",
                "asset": "images/mha.png"
            },
            {
                "name": "Sword Art Online",
                "asset": "images/sao.png"
            },
            {
                "name": "Bleach",
                "asset": "images/bleach.png"
            },
            {
                "name": "Majoras Mask",
                "asset": "images/zelda.png"
            },
            {
                "name": "Cat",
                "asset": "images/cat.png"
            },
            {
                "name": "Naruto",
                "asset": "images/naruto.png"
            },
            {
                "name": "My Deer Friend Nokotan",
                "asset": "images/nokotan.png"
            },
            {
                "name": "Antler",
                "asset": "images/antler.png"
            },
            {
                "name": "Hu Tao",
                "asset": "images/hutao.png"
            },
            {
                "name": "Cat Hug",
                "asset": "images/cathug.png"
            },
            {
                "name": "Sword Girl",
                "asset": "images/swordgirl.png"
            },
            {
                "name": "Jujutsu Kaisen 1",
                "asset": "images/juju1.png"
            },
            {
                "name": "Jujutsu Kaisen 2",
                "asset": "images/juju2.png"
            },
            {
                "name": "Girl 1",
                "asset": "images/girl1.png"
            },
            {
                "name": "Girl 2",
                "asset": "images/girl2.png"
            },
            {
                "name": "Girl 3",
                "asset": "images/girl3.png"
            }
        ]
    },
    {
        "name": "UNCATEGORIZED",
        "banner": "images/uncategorized-banner.png",
        "artist_info": "Reminder to add all the artists to this category or you will explode",
        "decorations": [
            {
                "name": "Bamboo",
                "asset": "images/bamboo.png"
            },
            {
                "name": "Kawaii Cat",
                "asset": "images/kawaiicat.png"
            },
            {
                "name": "Spheal",
                "asset": "images/spheal.png"
            },
            {
                "name": "Daggers",
                "asset": "images/daggers.png"
            },
            {
                "name": "Shuriken",
                "asset": "images/shuriken.png"
            },
            {
                "name": "Purple Devil",
                "asset": "images/purpledevil.png"
            },
            {
                "name": "Pink Devil",
                "asset": "images/pinkdevil.png"
            },
            {
                "name": "Green Devil",
                "asset": "images/greendevil.png"
            },
            {
                "name": "Neon Devil",
                "asset": "images/neondevil.png"
            },
            {
                "name": "Rimuru",
                "asset": "images/rimuru.png"
            },
            {
                "name": "Piplup using Bubblebeam",
                "asset": "images/piplup decor.png"
            },
            {
                "name": "Green Radar",
                "asset": "images/green-radar.png"
            },
            {
                "name": "Jellies",
                "asset": "images/jellies.png"
            },
            {
                "name": "Nyan Cat",
                "asset": "images/nyancat.png"
            },
            {
                "name": "Energy Ring",
                "asset": "images/energyring.png"
            },
            {
                "name": "Biblically Accurate Angel",
                "asset": "images/angel no sparkle.png"
            },
            {
                "name": "Biblically Accurate Angel with Sparkles",
                "asset": "images/angel sparkle.png"
            },
            {
                "name": "Pink Ribbon",
                "asset": "images/pinkribbon.png"
            },
            {
                "name": "Interstellar Smoke",
                "asset": "images/0 sec delay.png"
            },
            {
                "name": "Gods Portal",
                "asset": "images/jellys.png"
            }
        ]
    }
];

const container = document.getElementById('categories-container');

container.innerHTML = ``;

// Renders all the categories on the page before the other scrips take over
for (const category of categories) {
    const cdiv = document.createElement('section');
    cdiv.classList.add('category');
    if (category.force_pagebreak === true) {
        cdiv.setAttribute('data-force-pagebreak', 'true');
    }

    cdiv.innerHTML = `
        <div class="category-banner">
            <img src="${category.banner}" oncontextmenu="return false;"/>
        </div>
        <p class="artist-info"></p>
        <div class="decorations-grid"></div>
    `;
    const artistInfo = cdiv.querySelector('.artist-info');
    if (category.artist_info) artistInfo.innerHTML = category.artist_info;
    else if (category.artists && category.artists.length === 1 && category.artists[0].commissions) artistInfo.innerHTML = `This artist is accepting commissions. ${category.artists[0].commissions} Contact them on Discord <a href="https://discord.com/users/${category.artists[0].id}">here</a>.`;
    else artistInfo.remove();

    const decoGrid = cdiv.querySelector('.decorations-grid');

    for (const deco of category.decorations) {
        const ddiv = document.createElement('div');
        ddiv.classList.add('decoration-wrap');

        let artist = {
            name: "Unknown",
            commissions: null,
            id: "1"
        };
        if (deco.artist) artist = deco.artist;
        else if (category.artists?.length === 1) artist = category.artists[0];

        ddiv.innerHTML = `
            <div class="decoration-cell" data-image="${deco.asset}" data-artist="${artist.name}">
                <img class="decoration-img" src="${deco.asset}" alt="${deco.name}"/>
                <div class="commission-message" style="display: none;">
                    <p>&nbsp;</p>
                    <p>This artist is accepting commissions.</p>
                    <p>${artist.commissions}</p>
                    <p>Contact them on Discord <a href="https://discord.com/users/${artist.id}">here</a>.</p>
                    <p>&nbsp;</p>
                </div> 
                <img class="default-avatar" src="images/default-avatar.png" alt="Discord Logo"/>
            </div>
            <div class="download-info">Click to view</div>
        `;

        const commissionMessage = ddiv.querySelector('.commission-message');
        if (!artist.commissions) commissionMessage.remove();

        decoGrid.appendChild(ddiv)
    }

    container.appendChild(cdiv);
}