let switchMode=document.getElementById("switchMode");

switchMode.onclick=function () {
    let theme=document.getElementById("theme");

    if (theme.getAttribute("href")=="/4khd.github.io/css/light-mode.css") {
       theme.href="/4khd.github.io/css/dark-mode.css";
    } else {
            theme.href="/4khd.github.io/css/light-mode.css";
    }
}
