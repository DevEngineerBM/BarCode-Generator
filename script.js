
// DEFINE HTML ELEMENTS WE'LL NEED
let input = document.getElementById('input')
let generateBtn = document.getElementById('button');

// DECLARE GENERATE FUNCTION
function generateBar() {

JsBarcode('#barcode', input.value, {
    format : 'code128',
    displayValue : true,
     fontSize : 24,
     lineColor: 'black'
})
}

generateBtn.addEventListener('click', generateBar);

