// Gets the header elements.
const getHeader = (() => {
    /**
     * Gets the menu button
     * @returns element that represents the menu button
     */
    function getMenuButton() {
        // create elemet to reprsent the menu button
        const menuButton = document.createElement("span");
        // Add class name
        menuButton.classList.add("menu-button");
        // Add hamburger-menu icon
        menuButton.innerHTML = `<i class="fa-sharp fa-solid fa-bars"></i>`;
        return menuButton;
    }

    /**
     * Get the site name
     * @returns the element which represents the site name
     */
    function getSiteName() {
        // Create element to reprsent the site name
        const siteName = document.createElement("span");
        // Add class name
        siteName.classList.add("site-name");
        siteName.innerHTML = `TODO List`;
        return siteName;
    }

    return { getMenuButton, getSiteName };
})();


function loadHeader() {
    // Selecter header element
    const header = document.querySelector("header");
    // Add children
    header.append(document.createElement("span"), getHeader.getSiteName(), getHeader.getMenuButton());
}

export default loadHeader;