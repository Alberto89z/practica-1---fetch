const resp = fetch('https://reqres.in/api/users?page=1')
var html = "";
resp
.then(response =>response.json())
.then((lista)=>{
    lista.data.forEach(el => {
        html += '<div class="card" style="width: 18rem;">';
        html += '<img class="card-img-top" src="'+el.avatar+'" alt="Card image cap">';
        html += '<div class="card-body">';
        html += '<h5 class="card-title">'+el.first_name+'</h5>';
        html += '<button class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"'
        +' onclick="details('+el.id+')" class="btn btn-primary">Detalles</button>';
        html += '</div></div>';
    });
    document.getElementById("body").innerHTML= html;
})


function details(id){
    $('#exampleModalCenter').modal('show'); // abrir
    fetch('https://reqres.in/api/users/'+id)
    .then(response=>response.json())
    .then(data => {
        let user = data.data
        document.getElementById("name").textContent= user.first_name + ' ' + user.last_name;
        document.getElementById("email").textContent= user.email;
        document.getElementById("img").innerHTML = "<img src='"+user.avatar+"' style='height:150px;widt:'height:150px''>";
    })
}