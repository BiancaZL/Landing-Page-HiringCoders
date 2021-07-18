const form = document.getElementById('form')

form.addEventListener('submit', (e) => { //Isso é uma Arrow Function
    e.preventDefault(); //Parando o comportamento padrão do submit, que é recarregar a página após clicar no botão

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    let data = {
        nome,
        email,
    }
   
   // console.log(nome, email)
                    //Pegando um objeto e convertendo para uma string grande
   let converter = JSON.stringify(data);

   localStorage.setItem('lead',converter)
   /*localStorage.setItem('lead', converter)*/
   
})
