// Gets the header elements.
const header = (() => {
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
        menuButton.innerHTML = `
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
        `;
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
        return siteName;
    }

    return {getMenuButton, getSiteName};
})();