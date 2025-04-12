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
    },
    {
        title: "Genres",
        href: "genres.html",
        icon: "library_music"
    },
    {
        title: "Publishers",
        href: "publishers.html",
        icon: "group"
    },
    {
        title: "Authors",
        href: "authors.html",
        icon: "people_outline"
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