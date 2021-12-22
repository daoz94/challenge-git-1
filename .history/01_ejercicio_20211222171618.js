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

    let tamaño = nombres.length
    let i = 0;

    
    console.log("map\n");

    nombres.map((x,i) =>{
        console.log(i+1,".nombre:",x.nombre)
    })

    console.log("\nwhile\n");

    while(i != tamaño){

        console.log(i+1,".nombre:",nombres[i].nombre)
        i+=1;

    }

    console.log("\nfor\n");


}



console.log("\nEjercicio 3\n")
mostrar3();
