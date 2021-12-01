function verificar(){
  var data = new Date
  var ano = data.getFullYear()
  var fano = document.getElementById("txtn")
  var res =  document.getElementById("res") 
    if (fano.value.length == 0 || fano.value > ano){
      alert('Verifique se os campos foram digitados corretamente')
    }else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ""
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
        
      if (fsex[0].checked){
        genero = 'homem'
         
      if(idade >= 0 && idade <=10){
          img.setAttribute('src', 'imagens/homemcriança.png')
        }else if (idade <= 21){
          img.setAttribute('src', 'imagens/homemjovem.png' )
        }else if(idade < 55){
           img.setAttribute('src', 'imagens/homemadulto.png')
        }else {
          img.setAttribute('src', 'imagens/homemidoso.png')
         }
        
        }else{
        genero = 'mulher'
        
      if(idade >= 0 && idade <=14){
         img.setAttribute('src', 'imagens/mulhercriança.png')
        }else if (idade <= 21){
          img.setAttribute('src', 'imagens/mulherjovem.png')
        }else if(idade < 55){
          img.setAttribute('src', 'imagens/mulheradulta.png')
        }else {
          img.setAttribute('src', 'imagens/mulheridosa.png')
          
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      res.appendChild(img)
      img.style.padding = "10px"

    }

}
verificar()