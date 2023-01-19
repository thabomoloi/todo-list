class Header {

    constructor() {
        const header = document.querySelector("header");
        if (header) {
            header.innerHTML = `
            <span></span>
            <h1 class="site-name">ToDo List</h1>
            <button class="menu-button open-menu"><i class="fa-sharp fa-solid fa-bars"></i></button>
            `;

            const menuButton = document.querySelector("header .menu-button");
            if (menuButton) {
                const sidebar = document.querySelector("#sidemenu");
                const menuIcon = document.querySelector(".menu-button i");
                if (sidebar && menuIcon) {
                    menuButton.addEventListener("click", event => {
                        if (menuButton.classList.contains("open-menu")) {
                            sidebar.style.display = "block";
                            menuButton.classList.remove("open-menu");
                            menuButton.classList.add("close-menu");
                            menuIcon.classList.remove("fa-bars");
                            menuIcon.classList.add("fa-times");

                        } else {
                            sidebar.style.display = "none";
                            menuButton.classList.remove("close-menu");
                            menuButton.classList.add("open-menu");
                            sidebar.removeAttribute("style");
                            menuIcon.classList.add("fa-bars");
                            menuIcon.classList.remove("fa-times");
                        }
                    });
                }
            }
        }
    }
}

export default Header;