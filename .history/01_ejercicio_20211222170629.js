function mostrar1(){
    const a = ["foo", "alfa", "ram"];
    // console.log(a[0][0]);
    conct = "";
    a.forEach( a => {
        conct += a[0]
    })
    console.log(conct)
}

console.log("Ejercicio 1 \n")
mostrar1();

//***************************************************************** */

function mostrar2(){
    const b = ["hola", "mundo", "desde", "vscode"];
    console.log(`${b[0]} - ${b[1]}, ${b[2]} ${b[3]}`)
}

console.log("\nEjercicio 2 \n")
mostrar2();

//***************************************************************** */
function mostrar3(){
    const nombres = [
        {nombre:"foo"},
        {nombre:"bar"},
        {nombre:"qux"},
        {nombre:"ram"}
    ];

    let tamaño = nombre.length
    console.log(tamaño)
    
    // while (tamaño) {
    //     console.log(nombres.nombre)
        
    // }

}



console.log("\nEjercicio 3\n")
mostrar3();
