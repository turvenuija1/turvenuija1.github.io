function discord() {
    const name = "trvnj";
    navigator.clipboard.writeText(name);
    document.getElementById("success").innerText = "Name copied to clipboard.";
}

function steam() {
    window.location.href = "https://steamcommunity.com/id/trvnj/";
}
