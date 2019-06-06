function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    // Segue aqui seu código;
    document.getElementById('RQ1').innerHTML = Divisao(x,y);
    function Divisao(x,y) {
    return 'X / Y: ' + x + ' / ' + y + ' ; ' + 'Quociente = ' + Math.floor(x/y)+ " ; " + 'Resto = ' + (x%y) 
    }
}


function Q2() {
    console.log('Q2');
    var x = Number.parseFloat(document.getElementById('b').value);
    var y = Number.parseFloat(document.getElementById('c').value);
    // Segue aqui seu código
    document.getElementById('RQ2').innerHTML = Hipotenusa(x,y);
    function Hipotenusa(x,y)  {
    return 'b e c =' + ' ' + x + ' / ' + y + ' ' + 'Hipotenusa = ' +  Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    }
}    


function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    var generoprof = genero-profissao
    document.getElementById('RQ3').innerHTML = generoprof;
    console.log (generoprof)
    // Segue aqui seu código    
    function genero-profissao {
        if (profissao .endsWith('Musicista')) {
            return (profissao + ' ' + 'substantivo de ambos gêneros')
        } 
        else if (profissao .endsWith('a')) {
            return (profissao + ' ' + 'substantivo feminino');
        } 
        else if (profissao .endsWith('o')) {
            return  (profissao + ' ' + 'substantivo masculino');
        } 
        else if (profissao .endsWith('r')) {
            return (profissao + ' ' + 'substantivo masculino');
        } 
        else if (profissao .endsWith('z')) {
            return (profissao + ' ' + 'substantivo feminino');
        } 
        else if (profissao .endsWith('e')) {
            return ('substantivo de ambos gêneros');
        }    
    }


function Q4() {
    var a_str = document.getElementById('a').value;
    var b_str = document.getElementById('d').value;
    var c_str = document.getElementById('e').value;
    document.getElementById('RQ4').innerHTML = achavalor (a_str,b_str,c_str);    
    // Segue aqui seu código
    function achavalor (a_str,b_str,c_str){
    if ((!a_str) && (!b_str ) && (!c_str)){
        return('digite dois valores ')
    }
    else { 
        if ((!a_str) && (!b_str)) {
            return('digite dois valores')
    }
    else {
        if ((!b_str) && (!c_str)) {
            return('digite dois valores')
    }
    else {
        if ((!a_str) && (!c_str)) {
            return('digite dois valores')
    }
    else {
        if (!a_str) {
            return ('Hipotenusa = ' +  Math.sqrt(Math.pow(b_str,2) + Math.pow(c_str,2)));
    }
    else {
        if (!b_str) {
            return ('cateto oposto = ' +  Math.sqrt(Math.pow(a_str,2) - Math.pow(c_str,2)));
    } 
    else {
        if (!c_str) {
            return ('cateto adjacente = ' +  Math.sqrt(Math.pow(a_str,2) - Math.pow(b_str,2)));
    }}}}}}}
}

    
function Q5() {
    var altura = Number.parseFloat(document.getElementById('altura').value);
    var peso = Number.parseFloat(document.getElementById('peso').value);
    var aux = document.getElementById('generos');
    var genero = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    var xy = peso/Math.pow(altura,2)
    document.getElementById('RQ5').innerHTML = ResultadoIMC (xx);
    function  ResultadoIMC (xy) {
    if ((xy < 18.5) && (genero = "masculino")) {
            return('magro')
    } 
    else if((xy > 18.5) && (genero = "masculino")) {
        return('Sarado')
    }
    else if ((xy < 24.9) && (genero = "masculino")) {
        return('sarado')
    }
    else if ((xy > 25) && (genero = "masculino")) {
        return('rechonchudo(a)')
    }  
    else if ((xy > 30) && (genero = "masculino")) {
        return('rechonchudo(a)')
    } 
    else if ((xy < 30) && (genero = "masculino")) {
        return('obeso(a)')
    }
    else if ((xy < 18.5) && (genero = "feminino")) {
        return('magra')
    } 
    else if((xy > 18.5) && (genero = "feminino")) {
        return('Sarada')
    }
    else if ((xy < 24.9) && (genero = "feminino")) {
        return('sarada')
    }
    else if ((xy > 25) && (genero = "feminino")) {
        return('rechonchuda')
    }  
    else if ((xy > 30) && (genero = "feminino")) {
        return('rechonchuda')
    } 
    else if ((xy < 30) && (genero = "feminino")) {
        return('obesa' + ' ' + 'consulte um médico e cuide da tua alimentação')
    }
}