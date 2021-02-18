
let padre = "navegacion"
let hijos = [
    {
        name: "proceso"
    },
    {
        name: "canvas"
    },
    {
        name: "actors"
    },

]
let data = '';
for (let i = 0; i < hijos.length; i++) {
    const element = hijos[i];
    data = `${data} padre(${padre}, ${element.name}). `
}
console.log(data);