const shapes = {
    circle: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="44" stroke="black"/>
    </svg>`,
    square: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
        <rect width="80" height="80" x="10" y="10" stroke="black"/>
    </svg>`,
    triangle: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
        <polygon points="50,12 89,89 10,89" stroke="black"/>
    </svg>`
};

var page_format = 'a4';
var outline = true;

function getRandomSize() {
    return Math.floor(Math.random() * 100) + 50; // Adjust the range of sizes as needed
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomRotation() {
    return Math.floor(Math.random() * 360);
}

function getRandomShape() {
    const shapeNames = Object.keys(shapes);
    const randomShapeName = shapeNames[Math.floor(Math.random() * shapeNames.length)];
    return shapes[randomShapeName];
}

function generateRandomShapes() {
    const shapesContainer = document.getElementById("shapes-container");
    shapesContainer.innerHTML = "";

    const numShapes = 20;
    const strokeWidth = 10;
    const shapeSize = 250;
    const shapeMargin = 0;

    for (let i = 0; i < numShapes; i++) {
        const shapeSVG = getRandomShape();
        const shape = document.createElement("div");

        // shape.style.width = shapeSize + "px";
        // shape.style.height = shapeSize + "px";
        shape.style.strokeWidth = strokeWidth + "px";
        shape.style.stroke = "black"
        shape.style.margin = shapeMargin + "px";
        shape.classList.add("item")

        shape.innerHTML = shapeSVG;


        // Apply other random properties if needed
        // shape.style.width = getRandomSize() + "px";
        // shape.style.height = getRandomSize() + "px";

        shape.style.fill = !outline ? "black" : "transparent";
        // shape.style.backgroundColor = getRandomColor();
        // shape.style.transform = `rotate(${getRandomRotation()}deg)`;

        // Append the shape to the container
        shapesContainer.appendChild(shape);
    }
}

function PrintElem(elem) {
    var mywindow = window.open('', 'PRINT', 'height=3508,width=2480');

    mywindow.document.write('<html><head><title>' + document.title + '</title>');
    mywindow.document.write('<link rel="stylesheet" href="style.css" media="print" onload="window.print();window.close();">');
    mywindow.document.write('<style>@page { margin: 0; }</style>'); // Set margin to zero
    mywindow.document.write('</head><body>');

    let printDiv = document.body.cloneNode(true);
    printDiv.querySelector('#shapes-container').style.border='none';
    // Remove the 'header' element from the cloned content
    let headerElement = printDiv.querySelector('.header');
    
    if (headerElement) {
        headerElement.parentNode.removeChild(headerElement);
    }

    mywindow.document.write(printDiv.innerHTML);

    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus();

    return true;
}


function ChangePageFormat() {
    document.getElementById('shapes-container').classList.toggle('a4-page-size');
    page_format = page_format === 'a4' ? 'responsive' : 'a4';

    Ui_updatePageFormat();
}

function ChangeFillType() {
    outline = !outline;

    Ui_updateShapeFillType();
}

function Ui_updatePageFormat() {
    if (page_format == "a4") {
        document.getElementById('a4').style.display = 'unset';
        document.getElementById('responsive').style.display = 'none';
    } else {
        document.getElementById('responsive').style.display = 'unset';
        document.getElementById('a4').style.display = 'none';
    }
}

function Ui_updateShapeFillType() {
    if (outline) {
        document.getElementById('outline').style.display = 'unset';
        document.getElementById('solid').style.display = 'none';
    } else {
        document.getElementById('solid').style.display = 'unset';
        document.getElementById('outline').style.display = 'none';
    }
}

function Init() {
    Ui_updatePageFormat();
    Ui_updateShapeFillType();
}

Init()