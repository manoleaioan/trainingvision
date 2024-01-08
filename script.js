const shapes = {
    circle: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="44" stroke="black"/>
    </svg>`,
    square: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
        <rect width="80" height="80" x="10" y="10" stroke="black"/>
    </svg>`,
    triangle: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
        <polygon points="50,12 89,89 10,89" stroke="black"/>
    </svg>`,
    hexagon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
        <polygon points="50,6 90,27.32 90,72.68 50,94 10,72.68 10,27.32" stroke="black"/>
    </svg>`,
    // foursquare: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" stroke="black" viewBox="0 0 200 200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path  d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"></path></svg>`,
    // cube: `<svg xmlns="http://www.w3.org/2000/svg" id="SvgjsSvg1130" width="200" height="200" viewBox="0 0 512 512" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="m256.002 242.913 210.412-121.43L256.002 0 45.586 121.483zm-15.053 26.073L30.534 147.557v242.96L240.949 512zm30.107 0V512l210.41-121.483v-242.96z"></path></svg>`,
    // drop: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 200 210" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="M170 129.496C170 168.434 138.66 200 100 200s-70-31.566-70-70.504c0-36.857 35.84-81.29 65.113-122.542 2.4-3.381 7.425-3.415 9.861-.06C135.351 48.737 170 92.591 170 129.496Z"></path></svg>`,
    // heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512 512" width="200" height="200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516a30.03 30.03 0 0 0 19.785-7.43c20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0"></path></svg>`
};


var page_format = 'responsive';
var outline = true;
var numShapes = 100;
var strokeWidth = 10;
var shapeSize = 200;
var shapeMargin = 10;

var generatedShapes = "";

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

    for (let i = 0; i < numShapes; i++) {
        const shapeSVG = getRandomShape();
        const shape = document.createElement("div");

        shape.style.width = shapeSize + "px";
        shape.style.height = shapeSize + "px";
        shape.style.strokeWidth = strokeWidth + "px";
        shape.style.stroke = "black"
        shape.style.margin = shapeMargin + "px";
        shape.classList.add("item")

        shape.innerHTML = shapeSVG;

        // Apply other random properties if needed
        // shape.style.width = getRandomSize() + "px";
        // shape.style.height = getRandomSize() + "px";
        // shape.style.backgroundColor = getRandomColor();
        // shape.style.transform = `rotate(${getRandomRotation()}deg)`;
        shape.style.fill = !outline ? "black" : "transparent";

        shapesContainer.appendChild(shape);
    }

    generatedShapes = shapesContainer.innerHTML;

    handleResize();
}


function handleResize() {
    var shapesContainer = document.getElementById("shapes-container");

    shapesContainer.innerHTML = generatedShapes;

    document.querySelectorAll('.item').forEach(shape => {
        var shapesContainerRect = shapesContainer.getBoundingClientRect();
        var shapeRect = shape.getBoundingClientRect();

        var isColliding = shapeRect.bottom + shapeMargin > shapesContainerRect.bottom;

        shape.style.opacity = isColliding ? "0" : "1";

        if (isColliding) {
            shape.remove();
        }
    });
}


function PrintElem() {
    var mywindow = window.open('', 'PRINT', 'height=3508,width=2480');

    mywindow.document.write('<html><head><title>' + document.title + '</title>');
    mywindow.document.write('<link rel="stylesheet" href="style.css" media="print" onload="window.print();window.close();">');
    mywindow.document.write('<style>@page { margin: 0; }</style>'); // Set margin to zero
    mywindow.document.write('</head><body>');

    let printDiv = document.body.cloneNode(true);
    printDiv.querySelector('#shapes-container').style.border = 'none';
    // Remove the 'header' element from the cloned content
    let headerElement = printDiv.querySelector('#header');

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
    page_format = page_format === 'a4' ? 'responsive' : 'a4';

    if (page_format == 'a4') {
        document.getElementById('shapes-container').classList.add('a4-page-size');
    } else {
        document.getElementById('shapes-container').classList.remove('a4-page-size');
    }

    Ui_updatePageFormat();
}

function ChangeFillType() {
    outline = !outline;

    Ui_updateShapeFillType();
}

function ChangeShapeSize(increase) {
    shapeSize += (increase ? 10 : -10);

    updateShapes(shapes => {
        shapes.querySelectorAll('.item').forEach(shape => {
            shape.style.width = shapeSize + "px";
            shape.style.height = shapeSize + "px";
        });
    });
}

function updateShapes(callback) {
    var dummyDiv = document.createElement("div");
    dummyDiv.innerHTML = generatedShapes;

    callback(dummyDiv);

    generatedShapes = dummyDiv.innerHTML;

    handleResize();
}

function Ui_updatePageFormat() {
    if (page_format === "a4") {
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

    updateShapes(shapes => {
        shapes.querySelectorAll('.item').forEach(shape => {
            shape.style.fill = !outline ? "black" : "transparent";
        });
    });
}


let holdInterval;

function startHoldAction() {
    let counter = 0;
    holdInterval = setInterval(function () {
        counter++;
        ChangeShapeSize(true);
    }, 100);
}

function stopHoldAction() {
    clearInterval(holdInterval);
}



function Init() {
    window.addEventListener('resize', handleResize);

    const holdButton = document.getElementById("incsize");

    holdButton.addEventListener("mousedown", startHoldAction);
    holdButton.addEventListener("mouseup", stopHoldAction);
    holdButton.addEventListener("mouseout", stopHoldAction);
    holdButton.addEventListener("touchstart", function (event) {
        event.preventDefault();
        startHoldAction();
    });

    holdButton.addEventListener("touchend", function (event) {
        event.preventDefault();
        stopHoldAction();
    });

    holdButton.addEventListener("touchcancel", function (event) {
        event.preventDefault();
        stopHoldAction();
    });


    Ui_updatePageFormat();
    Ui_updateShapeFillType();
}

Init()