let container = document.getElementById("container");

function makeSquares(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        $(".grid-item").on('mouseover', function() {
            $(this).addClass('active');
        });
    };
};

makeSquares(16, 16);

function reloadGrid() {
    container.innerHTML = '';
    let currentValue = prompt('How many squares per side do you want?', '1');
    makeSquares(currentValue, currentValue);
}

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener('click', reloadGrid);