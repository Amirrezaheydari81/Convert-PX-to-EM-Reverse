let inputPx = document.getElementById("px-in");
let inputEm = document.getElementById("em-in");
// 
let inputPx2 = document.getElementById("px-in2");
let inputEm2 = document.getElementById("em-in2");
// console.log(inputPx.value);
// console.log(inputEm.value);
inputPx.addEventListener('input', () => {
    result = parseFloat(inputPx.value / 16).toFixed(2);
    inputEm.value = result;
    // console.log(result);
});
// inputPx.addEventListener('change', () => {
// });
inputPx.value = 16;
inputEm.value = 1;
inputPx.addEventListener('click', () => {
    inputPx.value = null;
    inputEm.value = null;
})
// 
inputPx2.addEventListener('input', () => {
    result = parseFloat(inputPx2.value / 16).toFixed(2);
    inputEm2.value = result;
    // console.log(result);
});
// inputPx.addEventListener('change', () => {
// });
inputPx2.value = 16;
inputEm2.value = 1;
inputEm2.addEventListener('click', () => {
    inputPx2.value = null;
    inputEm2.value = null;
});