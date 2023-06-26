let a = new Promise(resolve => {
    setTimeout(() => {
        resolve("a")
    }, 3000)
});
let b = new Promise(resolve => {
    setTimeout(() => {
        resolve("b")
    }, 2000)
});
let c = new Promise(resolve => {
    setTimeout(() => {
        resolve("c")
    }, 1000)
});
let d = new Promise(resolve => {
    setTimeout(() => {
        resolve("d")
    }, 4000)
});
let e = new Promise(resolve => {
    setTimeout(() => {
        resolve("e")
    }, 5000)
});

window.promises = [a, b, c, d, e];

Promise.any(promises).then(result => {
    const element = document.getElementById("output");
    element.innerText = result;
});