function sumar1Promesa(num) {
    console.log(num);
    var promesa = new Promise((resolve,reject)=>{
        if (num >= 7) {
            reject("Numero muy grande")
            return;
        }
        setTimeout(()=>{
            resolve(num+1);
        },2000)
    });

    return promesa;
}

sumar1Promesa(5).then((nuevoValor)=>{
    return sumar1Promesa(nuevoValor)
})
.then((nuevoValor)=>sumar1Promesa(nuevoValor))
.then(sumar1Promesa)
.catch((err)=>{
    console.log(err);
})