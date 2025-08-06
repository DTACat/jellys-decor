const navBar = document.querySelector('.top-nav');
const primaryContainer = document.querySelector('#content');


const params = new URLSearchParams(window.location.search);

function setParams(params) {
    const url = new URL(window.location);
    url.search = '';
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
    history.replaceState(null, '', url);
}

function addParams(params) {
    const url = new URL(window.location);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
    history.replaceState(null, '', url);
}

function removeParams(params) {
    const url = new URL(window.location);
    if (!Array.isArray(params)) {
        params = [params];
    }
    params.forEach(key => url.searchParams.delete(key));
    history.replaceState(null, '', url);
}

function trimURL(a) {
    return a.replace("/", "");
}


// Pages

// will default to the first page if no page is set in the url

// url: The name of the page in the url
// name: The name of the tab in the nav bar
// hidden: If it's set to true, it will be hiddden on the nav bar
// content: The html the content container gets set to when the button is clicked
const pages = [
    {
        url: "/home",
        name: "Home",
        hidden: false,
        content: `
            home page
        `
    },
    {
        url: "/decors",
        name: "Decors",
        hidden: false,
        content: `
            decors page
        `
    },
    {
        url: "/guide",
        name: "Guide",
        hidden: false,
        content: `
            guide page
        `
    }
];

window.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const match = pages.find(page => page.url === currentPath);
    if (match) {
        setPage(match.url);
    } else {
        setPage('/home');
    }
});

// Adds each page from "pages" to the nav bar
pages.forEach(page => {
    if (page.hidden === false) {
        const tab = document.createElement('p');
        tab.textContent = page.name;
        tab.id = `${trimURL(page.url)}-tab`;
        navBar.appendChild(tab);
        tab.addEventListener("click", () => {
            setPage(page.url);
        });
    }
});

// Selects the page button on the nav bar and sets the page content
function setPage(id) {
    try {
        const page = pages.find(p => p.url === id);
        const tabs = navBar.querySelectorAll('p');
        tabs.forEach((el) => {
            el.classList.remove("selected");
        });
        navBar.querySelector('#'+trimURL(page.url)+'-tab').classList.add("selected");
        history.pushState(null, '', page.url);
        primaryContainer.innerHTML = page.content;
    } catch(err) {
        console.error("Error loading page: "+err)
    }
}