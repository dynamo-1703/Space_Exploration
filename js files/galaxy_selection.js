function show(n) {
    const galaxyInfoDiv = document.getElementById("galaxy-info");
    const galaxySelector = document.getElementById("galaxy-selector")
    for (let i in galaxyInfoDiv.children) {
        galaxyInfoDiv.children.item(i).classList.remove("show");
        galaxySelector.children.item(i).classList.remove("bdr");
    }
    galaxyInfoDiv.children.item(n).classList.add("show")
    galaxySelector.children.item(n).classList.add("bdr")
}