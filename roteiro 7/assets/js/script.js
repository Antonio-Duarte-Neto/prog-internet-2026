//alert('Olá, seja bem-vindo ao nosso site');

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Formulário enviado!");

    nome = document.getElementById("nome").value;
    console.log(nome);


    email = document.getElementById("email").value;
    console.log(email);

    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    if (!email.includes("@")) {
        alert("Email inválido.");
        return;
    }

});

document.getElementById("btnAlerta").addEventListener("click", function () {
    alert("Olá! JavaScript funcionando!");
});

document.getElementById("btnCor").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});

document.getElementById("btnConteudo").addEventListener("click", function () {
    document.getElementById("conteudo").innerHTML = "Conteúdo alterado diretamente!";
});
