function addRow(event) {
    event.preventDefault(); 

    let id = document.getElementById("idInput").value; 
    let name = document.getElementById("nameInput").value;
    let description = document.getElementById("descInput").value;
    let table = document.getElementById("infoTable").getElementsByTagName("tbody")[0];

    let newRow = table.insertRow();

    let totalCols = document.getElementById("infoTable").rows[0].cells.length;

    for (let i = 0; i < totalCols; i++) {
        let newCell = newRow.insertCell(i);
        if (i === 0) newCell.innerHTML = id; 
        else if (i === 1) newCell.innerHTML = name; 
        else if (i === 2) newCell.innerHTML = description; 
        else newCell.innerHTML = "—";
    }

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Remover";
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.onclick = function () {
        table.deleteRow(newRow.rowIndex - 1);
    };

    newRow.cells[totalCols - 1].innerHTML = ""; 
    newRow.cells[totalCols - 1].appendChild(deleteButton);

    document.getElementById("idInput").value = "";
    document.getElementById("nameInput").value = "";
    document.getElementById("descInput").value = "";
}
