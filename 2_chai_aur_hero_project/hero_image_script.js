const changeThemeBtn = document.querySelector(".change-theme-btn");
console.log(changeThemeBtn);

changeThemeBtn.addEventListener("click", function () {
    if (document.body.style.backgroundColor == "" || document.body.style.backgroundColor == "#ffffff") {
        document.body.style.backgroundColor = "#0f1626";
        document.body.style.color = "#ffffff";
    } else {
        // document.body.style.backgroundColor = "#ffffff";
        document.body.style.backgroundColor = "";     //here empty means default color white
        document.body.style.color = "#000000";
    }
});