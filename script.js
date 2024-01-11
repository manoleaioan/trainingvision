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
    plus: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
        <rect width="1" height="80" x="49.5" y="10" stroke="black"/>
        <rect width="80" height="1" x="10" y="49.5" stroke="black"/>
    </svg>`,
    // foursquare: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" stroke="black" viewBox="0 0 200 200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path  d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"></path></svg>`,
    // cube: `<svg xmlns="http://www.w3.org/2000/svg" id="SvgjsSvg1130" width="200" height="200" viewBox="0 0 512 512" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="m256.002 242.913 210.412-121.43L256.002 0 45.586 121.483zm-15.053 26.073L30.534 147.557v242.96L240.949 512zm30.107 0V512l210.41-121.483v-242.96z"></path></svg>`,
    // drop: `
    // <svg viewBox="38.656 272.6229 140 195.6021" width="140" height="195.6021" xmlns="http://www.w3.org/2000/svg">
    //   <path d="M 178.656 397.721 C 178.656 436.659 147.316 468.225 108.656 468.225 C 69.996 468.225 38.656 436.659 38.656 397.721 C 38.656 360.864 74.496 316.431 103.769 275.179 C 106.169 271.798 111.194 271.764 113.63 275.119 C 144.007 316.962 178.656 360.816 178.656 397.721 Z" style="fill: rgba(0, 0, 0, 0); stroke: rgb(0, 0, 0);" transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, 0)"/>
    // </svg>`,
    heart: `<svg width="100%" height="100%" viewBox="78 20 200 250" xmlns="http://www.w3.org/2000/svg">
      <path d="M 270.762 66.279 C 259.428 53.986 243.877 47.216 226.968 47.216 C 214.33 47.216 202.755 51.212 192.565 59.091 C 187.424 63.068 182.765 67.935 178.657 73.614 C 174.551 67.936 169.891 63.068 164.748 59.091 C 154.559 51.212 142.985 47.216 130.346 47.216 C 113.438 47.216 97.885 53.986 86.551 66.279 C 75.352 78.428 69.183 95.026 69.183 113.016 C 69.183 131.533 76.084 148.484 90.899 166.36 C 104.152 182.352 123.2 198.585 145.258 217.383 C 152.791 223.802 161.328 231.079 170.193 238.829 C 172.535 240.881 175.544 242.011 178.657 242.01 C 181.769 242.011 184.776 240.882 187.118 238.833 C 195.983 231.08 204.526 223.801 212.061 217.378 C 234.116 198.583 253.164 182.352 266.418 166.359 C 281.233 148.484 288.132 131.533 288.132 113.015 C 288.132 95.026 281.963 78.428 270.762 66.279 Z M 270.762 66.279" style="stroke-width: 24px; stroke: rgb(0, 0, 0);"></path>
    </svg>`,
};

const page_formats = ['a4', 'a4l', 'responsive'];

var page_format = 'responsive';
var outline = true;
var numShapes = 150;
var strokeWidth = 10;
var shapeSize = 140;
var shapeMargin = 20;
var alphaNum = true;

var generatedShapes = "";
var ChangeShapeSizeTimeoutId = 0;
var holdInterval;
var saveTimeout;

function getRandomSize() {
    return Math.floor(Math.random() * 100) + 50;
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

function getRandomAlphaNumericCharacter() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
}


function generateRandomShapes(generateAlphaNumeric = false) {
    alphaNum = generateAlphaNumeric;
    const shapesContainer = document.getElementById("shape-list");
    shapesContainer.innerHTML = "";

    for (let i = 0; i < numShapes; i++) {
        const shape = generateAlphaNumeric ? getRandomAlphaNumericCharacter() : getRandomShape();
        const shapeDiv = document.createElement("div");

        shapeDiv.style.width = shapeSize + "px";
        shapeDiv.style.height = shapeSize + "px";
        shapeDiv.style.fontSize = shapeSize + "px";

        shapeDiv.style.strokeWidth = strokeWidth + "px";
        shapeDiv.style.stroke = "black"
        shapeDiv.style.margin = shapeMargin + "px";
        shapeDiv.style.fill = !outline ? "black" : "transparent";

        shapeDiv.classList.add("item")

        shapeDiv.innerHTML = shape;

        // Apply other random properties if needed
        // shape.style.backgroundColor = getRandomColor();
        // shape.style.transform = `rotate(${getRandomRotation()}deg)`;

        shapesContainer.appendChild(shapeDiv);
    }

    generatedShapes = shapesContainer.innerHTML;

    handleResize();
}


function handleResize() {
    var shapesContainer = document.getElementById("shape-list");

    shapesContainer.innerHTML = generatedShapes;

    let shapes = document.querySelectorAll('.item');

    shapes.forEach(shape => {
        var shapesContainerRect = shapesContainer.getBoundingClientRect();
        var shapeRect = shape.getBoundingClientRect();

        var isColliding = shapeRect.bottom + shapeMargin > shapesContainerRect.bottom;

        // Testing purpose
        // shape.style.opacity = isColliding ? "0.5" : "1";

        if (isColliding && document.querySelectorAll('.item').length > 1) {
            shape.remove();
        }
    });
}


function PrintElem() {
    var mywindow = window.open('', 'PRINT', 'height=3508,width=2480');

    mywindow.document.write('<html><head><title>' + document.title + '</title>');
    mywindow.document.write('<link rel="stylesheet" href="style.css" media="print">');
    mywindow.document.write('<style>@page { margin: 0; }</style>');
    mywindow.document.write('</head><body>');

    let printDiv = document.body.cloneNode(true);
    printDiv.querySelector('#shape-list').style.border = 'none';

    let headerElement = printDiv.querySelector('#header');

    if (headerElement) {
        headerElement.parentNode.removeChild(headerElement);
    }

    mywindow.document.write(printDiv.innerHTML);

    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus();

    setTimeout(function() {
        mywindow.print();
        mywindow.close();
    }, 1000); 

    return true;
}


function ChangePageFormat() {
    const currentPageFormatIndex = page_formats.findIndex(format => format === page_format);
    const nextIndex = (currentPageFormatIndex + 1) % page_formats.length;
    page_format = page_formats[nextIndex]

    page_formats.map((format, index) => {
        if (index === nextIndex) {
            document.getElementById('shape-list').classList = page_format;
        }
    });

    handleResize();

    Ui_updatePageFormat();

    saveLocal();
}

function ChangeFillType() {
    outline = !outline;

    Ui_updateShapeFillType();

    saveLocal();
}

function ChangeShapeSize(increase) {
    shapeSize += (increase ? 10 : -10);
    if (shapeSize < 20) return;

    updateShapes(shapes => {
        shapes.querySelectorAll('.item').forEach(shape => {
            shape.style.width = shapeSize + "px";
            shape.style.height = shapeSize + "px";
            shape.style.fontSize = shapeSize + "px";
            let sizeInfo = document.getElementsByClassName('shape-size-info')[0];
            sizeInfo.innerHTML = `${increase ? '<i class="fa-solid fa-up-right-and-down-left-from-center"></i>'
                : '<i class="fa-solid fa-down-left-and-up-right-to-center"></i>'} ${shapeSize}`;
            sizeInfo.style.display = "block";
            clearTimeout(ChangeShapeSizeTimeoutId);
            ChangeShapeSizeTimeoutId = setTimeout(() => {
                sizeInfo.style.display = "none";
            }, 1000);
        });
    });

    saveLocal();
}

function updateShapes(callback) {
    var dummyDiv = document.createElement("div");
    dummyDiv.innerHTML = generatedShapes;

    callback(dummyDiv);

    generatedShapes = dummyDiv.innerHTML;

    handleResize();
}

function Ui_updatePageFormat() {
    page_formats.forEach(format => {
        if (format === page_format) {
            document.getElementById(format).style.display = 'unset';
        }else{
            document.getElementById(format).style.display = 'none';
        }
    });

    document.getElementById('shape-list').classList = page_format;
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

function startHoldAction(increase = true) {
    holdInterval = setInterval(() => {
        ChangeShapeSize(increase);
    }, 100);
}

function stopHoldAction() {
    clearInterval(holdInterval);
}

function saveLocal(){
    clearTimeout(saveTimeout);

    saveTimeout = setTimeout(() => {
        localStorage.setItem('settings',  JSON.stringify({
            shapeSize,
            page_format,
            outline,
            alphaNum
        }));
    }, 500);
}

function loadLocal(){
    const storedJsonString = JSON.parse(localStorage.getItem('settings'));

    shapeSize = storedJsonString.shapeSize;
    page_format = storedJsonString.page_format;
    outline = storedJsonString.outline;
    alphaNum = storedJsonString.alphaNum;
}

function Init() {
    window.addEventListener('resize', handleResize);

    const IncholdButton = document.getElementById("incsize");
    const DecholdButton = document.getElementById("decsize");

    IncholdButton.addEventListener("mousedown", startHoldAction);
    IncholdButton.addEventListener("mouseup", stopHoldAction);
    IncholdButton.addEventListener("mouseout", stopHoldAction);
    IncholdButton.addEventListener("touchstart", startHoldAction);
    IncholdButton.addEventListener("touchend", stopHoldAction);
    IncholdButton.addEventListener("touchcancel", stopHoldAction);

    DecholdButton.addEventListener("mousedown", () => startHoldAction(false));
    DecholdButton.addEventListener("mouseup", stopHoldAction);
    DecholdButton.addEventListener("mouseout", stopHoldAction);
    DecholdButton.addEventListener("touchstart", () => startHoldAction(false));
    DecholdButton.addEventListener("touchend", stopHoldAction);
    DecholdButton.addEventListener("touchcancel", stopHoldAction);

    loadLocal();

    Ui_updatePageFormat();
    Ui_updateShapeFillType();

    generateRandomShapes(alphaNum);
}

Init()