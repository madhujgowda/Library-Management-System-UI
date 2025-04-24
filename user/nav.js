let menuItems = [
    {
        title: "Home",
        href: "index.html",
        icon: "home"
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