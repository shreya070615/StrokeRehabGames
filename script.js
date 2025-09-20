// Drag & Drop functionality for Motor Rehab (Pick & Place)
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var target = ev.target;
    if (target.classList.contains("dropzone")) {
        target.appendChild(document.getElementById(data));
        alert("Great! Object placed correctly.");
    }
}

// Memory game alerts
function memoryGame(game) {
    switch(game) {
        case "pickPlace":
            alert("Memory Game: Remember the order of items on the counter!");
            break;
        case "matching":
            alert("Memory Game: Find the matching pairs!");
            break;
        case "shopping":
            alert("Memory Game: Pick items from your shopping list!");
            break;
    }
}

// Combined cognitive + motor tasks
function combinedTask(task) {
    switch(task) {
        case "memoryReach":
            alert("Combined Task: Remember items and reach to place them in correct order!");
            break;
        case "cookDecision":
            alert("Combined Task: Choose correct utensils & ingredients and perform cooking task!");
            break;
    }
}
