// change theme mode and save to cookie
function changeMode() {
    // detect body data-theme attribute
    let theme = document.body.getAttribute("data-theme");

    // toggle theme
    theme = theme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", theme);

    // save theme preference to cookie for 1 year and set SameSite to all pages
    document.cookie = `theme=${theme}; max-age=31536000; SameSite=Lax; path=/`;
}

// add event load to check cookie for theme preference and set the theme
window.addEventListener("DOMContentLoaded", () => {
    // check if user has a preference in cookie
    const theme = getCookie("theme");
    if (theme) {
        document.body.setAttribute("data-theme", theme);
    }

    // add event listener to mode button
    document.getElementById("mode").addEventListener("click", changeMode);

    // add event listener to auto change mode
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", autoChangeMode);
});

// auto change theme based data-theme attribute
function autoChangeMode(e) {
    const theme = e.matches ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
}

// get cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}
