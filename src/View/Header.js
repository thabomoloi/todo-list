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
                if (sidebar) {
                    menuButton.addEventListener("click", event => {
                        if (menuButton.classList.contains("open-menu")) {
                            sidebar.style.display = "block";
                            menuButton.classList.remove("open-menu");
                            menuButton.classList.add("close-menu");
                        } else {
                            sidebar.style.display = "none";
                            menuButton.classList.remove("close-menu");
                            menuButton.classList.add("open-menu");
                            sidebar.removeAttribute("style");
                        }
                    });
                }
            }
        }
    }
}

export default Header;