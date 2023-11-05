document.addEventListener("DOMContentLoaded", function () {
    const mainMenuItems = document.querySelectorAll(".main-menu > li");
    
    mainMenuItems.forEach(item => {
        const subMenu = item.querySelector(".sub-menu");
        
        item.addEventListener("click", function () {
            if (subMenu.style.display === "block") {
                subMenu.style.display = "none";
            } else {
                subMenu.style.display = "block";
            }
        });
    });
});
