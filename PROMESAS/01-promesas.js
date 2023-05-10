console.log("Eso tilin");

function sumar1(num,callback){
    if (num >= 7) {
        callback("Numero muy grande")
        return;
    }
    setTimeout(()=>{
        callback(null,num+1);
    },2000)
}

//console.log(sumar1(5))

sumar1(6,(error,nuevoValor)=>{
    if (error) {
        console.log(error);
        return;
    }
    console.log(nuevoValor);
    sumar1(nuevoValor,(error,nuevoValor2)=>{
        if (error) {
            console.log(error);
            return;
        }
        console.log(nuevoValor2);
    })
})

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => console.log(data));

fetch('flores.jpg').then(function(response) {
    if(response.ok) {
      response.blob().then(function(miBlob) {
        var objectURL = URL.createObjectURL(miBlob);
        miImagen.src = objectURL;
      });
    } else {
      console.log('Respuesta de red OK pero respuesta HTTP no OK');
    }
  })
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
});
  