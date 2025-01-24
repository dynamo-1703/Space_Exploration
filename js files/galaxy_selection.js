function show(n) {
    const galaxyInfoDiv = document.getElementById("galaxy-info");
    for (let child of galaxyInfoDiv.children) {
        child.classList.remove("show")
    }
    galaxyInfoDiv.children.item(n).classList.add("show")
}