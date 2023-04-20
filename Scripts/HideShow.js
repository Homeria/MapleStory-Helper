function HideShowNav() {
    let notViewNav = document.getElementById("notViewNav");
    let nav = document.getElementById("nav");
    let display = nav.style.display;
    if(display === "none") {
        nav.style.display = "block";
        notViewNav.style.display = "none";
    } else {
        nav.style.display = "none";
        notViewNav.style.display = "block";
    }
}