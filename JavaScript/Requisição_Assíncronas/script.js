let botao = document.querySelector('#buscarUsuarios');
let resultado = document.querySelector('#resultado');
let idUsuario = document.querySelector('#idUsuario');

//fecth + catch + then
// botao.addEventListener('click', function(){ 
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(dados => {
//         // console.log(dados);
//         resultado.innerHTML ="";
//         dados.forEach (usuarios=>{
//             resultado.innerHTML += `
//             <p>
//             <strong>${usuarios.name}</strong><br></br>
//             ${usuarios.email}
//             </p>
//             <hr>
//             `
//         })
//     })
//     .catch(error => {
//         console.log("Erro: ", error);
//     });
// });

//async e await
// botao.addEventListener('click', async()=>{
//     try{
//         const resposta = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         const dados = await resposta.json();

//         resultado.inneHTML = "";

//         dados.forEach(usuarios =>{
//             resultado.innerHTML +=`
//             <p>
//             <strong>${usuarios.name}</strong><br>
//             ${usuarios.email}
//             </p>
//             <hr>
//             `;
//         });
//     } catch(erro){
//         resultado.inneHTML ="Erro ao buscar usuários.";
//         console.log(erro)
//     };

    

// });


botao.addEventListener('click', async()=>{
    const id = idUsuario.value;
    
    try{
        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const dados = await resposta.json();

        resultado.inneHTML = "";

            resultado.innerHTML +=`
            <p>
            <strong>${dados.name}</strong><br>
            Email: ${dados.email}<br>
            Cidade: ${dados.address.city}<br>
            Telefone: ${dados.phone}
            </p>
            <hr>
            `;
    } catch(erro){
        resultado.inneHTML ="Erro ao buscar usuários.";
        console.log(erro)
    };

    

});