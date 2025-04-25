let menuItems = [
    {
        title: "Home",
        href: "index.html",
        icon: "home"
    },
    {
        title: "Checked Items",
        href: "check-outs.html",
        icon: "list"
    },
    {
        title: "Late Fees",
        href: "late-fees.html",
        icon: "attach_money"
    },
    {
        title: "Books",
        href: "books.html",
        icon: "book"
    },
    {
        title: "Movies",
        href: "movies.html",
        icon: "movie_creation"
    },
    {
        title: "Games",
        href: "games.html",
        icon: "videogame_asset"
    },
    {
        title: "Reservations",
        href: "reservations.html",
        icon: "https"
    },
    {
        title: "Saved Items",
        href: "saved-items.html",
        icon: "bookmark"
    }
];
const src =
    document.getElementById("nav-template").innerHTML;
const template = Handlebars.compile(src);
function updateMenuList() {
    const html = template({ menuItems });
    document
        .getElementById("nav-container").innerHTML = html;
}
updateMenuList();