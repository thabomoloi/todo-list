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
        siteName.innerHTML = `
            <svg style="width:48px;height:48px" viewBox="0 0 48 48">
                <path fill="currentColor" d="M14.3 21.7C13.6 21.9 12.8 22 12 22C6.5 22 2 17.5 2 12S6.5 2 12 2C13.3 2 14.6 2.3 15.8 2.7L14.2 4.3C13.5 4.1 12.8 4 12 4C7.6 4 4 7.6 4 12S7.6 20 12 20C12.4 20 12.9 20 13.3 19.9C13.5 20.6 13.9 21.2 14.3 21.7M7.9 10.1L6.5 11.5L11 16L21 6L19.6 4.6L11 13.2L7.9 10.1M18 14V17H15V19H18V22H20V19H23V17H20V14H18Z" />
            </svg> ToDo List
        `;
        return siteName;
    }

    return {getMenuButton, getSiteName};
})();


function loadHeader() {
    // Selecter header element
    const header = document.querySelector("header");
    // Add children
    header.append(getHeader.getSiteName(), getHeader.getMenuButton());
}

export default loadHeader;