const commission_types = {
    MONEY: "Money",
    DISCORD_NITRO: "Nitro",
    DISCORD_COLLECTIBLES: "Discord Shop Items",
    STEAM_GIFTS: "Steam Gifts",
    KOFI: "Ko-fi Donations",
};

const users = [
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
    }
];

function findUser(id) {
    const user = users[users.findIndex(u => u.id === id)];
    return {
        id: user.id,
        name: user.name,
        commissions: commissions(user.commissions)
    };
};

function commissions(data) {
    const readableTypes = data
    .map(entry => commission_types[entry.type])
    .filter(Boolean);

    if (readableTypes.length === 0) return null;

    if (readableTypes.length === 1) {
        return `They accept ${readableTypes[0]} as payment.`;
    }

    const last = readableTypes.pop();
    return `They accept ${readableTypes.join(", ")} or ${last} as payment.`;
};

const categories =
[
    {
        "name": "Fate Trigger",
        "banner": "images/fatetrigger-banner.png",
        "artist_info": `Join the Fate Trigger Discord at <strong><a href="https://discord.gg/fatetrigger" target="_blank" rel="noopener" class="commission-link">this link</a></strong>.`,
        "decorations": [
            {
                "name": "Xiva",
                "artist": findUser('334062444718587905'),
                "asset": "images/Xiva.png"
            },
            {
                "name": "Camille Healing",
                "artist": findUser('334062444718587905'),
                "asset": "images/camille healing.png"
            },
            {
                "name": "Huxleys Myst",
                "artist": findUser('334062444718587905'),
                "asset": "images/Huxleys Myst.png"
            }
        ]
    },
    {
        "name": "Pokemart",
        "banner": "images/pokemart-banner.png",
        "artist_info": null,
        "decorations": [
            {
                "name": "Poké Ball",
                "artist": findUser('1147940825330876538'),
                "asset": "images/poke ball.png"
            },
            {
                "name": "Great Ball",
                "artist": findUser('1147940825330876538'),
                "asset": "images/great ball.png"
            },
            {
                "name": "Ultra Ball",
                "artist": findUser('1147940825330876538'),
                "asset": "images/ultra ball.png"
            }
        ]
    }
];

const container = document.getElementById('categories-container');

container.innerHTML = ``;

for (const category of categories) {
    const cdiv = document.createElement('section');
    cdiv.classList.add('category');

    cdiv.innerHTML = `
        <div class="category-banner">
            <img src="${category.banner}" alt="Banner #2" oncontextmenu="return false;"/>
        </div>
        <p class="artist-info"></p>
        <div class="decorations-grid"></div>
    `;
    const artistInfo = cdiv.querySelector('.artist-info');
    if (category.artist_info) artistInfo.innerHTML = category.artist_info;
    else artistInfo.remove();

    const decoGrid = cdiv.querySelector('.decorations-grid');

    for (const deco of category.decorations) {
        const ddiv = document.createElement('div');
        ddiv.classList.add('decoration-wrap');

        ddiv.innerHTML = `
            <div class="decoration-cell" data-image="${deco.asset}" data-artist="${deco.artist.name}">
                <img class="decoration-img" src="${deco.asset}" alt="${deco.name}"/>
                <div class="commission-message" style="display: none;">
                    <p>&nbsp;</p>
                    <p>This artist is accepting commissions.</p>
                    <p>${deco.artist.commissions}</p>
                    <p>Contact them on Discord <a href="https://discord.com/users/${deco.artist.id}">here</a>.</p>
                    <p>&nbsp;</p>
                </div> 
                <img class="default-avatar" src="images/default-avatar.png" alt="Discord Logo"/>
            </div>
            <div class="download-info">Click to view</div>
        `;

        const commissionMessage = ddiv.querySelector('.commission-message');
        if (!deco.artist.commissions) commissionMessage.remove();

        decoGrid.appendChild(ddiv)
    }

    container.appendChild(cdiv);
}