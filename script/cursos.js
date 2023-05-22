document.querySelector('#form-busca').addEventListener('submit', ()=>{
    if(document.querySelector('#q').value == ''){
      alert('Não deixe o campo de busca vazio!')
        event.preventDefault()
    }
  })