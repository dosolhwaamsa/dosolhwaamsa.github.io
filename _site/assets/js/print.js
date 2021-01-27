document.getElementById('print-button').addEventListener('click', printContent);
var url = [
    "/isomerpages-basic-1",
    "https://datagovsg.github.io/blueprint-css/blueprint.css"
]

function printContent() {
    window.printJS({
        printable: 'main-content',
        type: 'html',
        css: url,
        scanStyles: false,
        font: 'Source Sans Pro',
    });
}