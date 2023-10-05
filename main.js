function discord() {
    const name = "trvnj";
    navigator.clipboard.writeText(name);
    document.getElementById("success").innerText = "Name copied to clipboard.";
}

function github() {
    window.location.href = "https://github.com/turvenuija1";
}

function steam() {
    window.location.href = "https://steamcommunity.com/id/trvnj/";
}
