function calcular(tipo, valor) {
    if (tipo === 'acao') {
      if (valor === 'c') {
        document.querySelector('#resultado').value = '';
      }

      else if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.querySelector('#resultado').value += valor
      }
  
      else if(valor === '='){
        let valorCampo = eval(document.querySelector('#resultado').value);
        
        document.querySelector('#resultado').value = valorCampo;
      }
  
    } else if (tipo === 'valor') {
      document.querySelector('#resultado').value += valor;
    }
  }