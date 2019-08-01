// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    // loop over each row
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        // loop for each cell
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '" onclick="changeColor(this);"></td>';
        }
        grid += '</tr>';
    }
    // add grid into table element
    table.innerHTML = grid;

    // Add click event to grid cells once the table grid has been created
}

// gets values for height and width from form and uses them to call makrGrid()
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}
function changeColor(e){
	    const colorPicker = document.getElementById("colorPicker");
        e.style.backgroundColor = colorPicker.value;

	
}




// on submit of form #sizePicker:
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};

// Build a default 10x10 grid.
makeGrid(10, 10);