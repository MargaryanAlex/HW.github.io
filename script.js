let input = document.querySelector('input');
let btnc = document.querySelector('.btnc');
let fs =document.querySelector('.fs')
btnc.addEventListener('click', function(){
    console.log('asdsfaff')
    let dv =document.createElement('div');
    let text = document.createElement('p')
    let btni= document.createElement('button');
    let btnx= document.createElement('button');

    btni.innerHTML = '!';
    btnx.innerHTML='X';
    text.innerHTML=input.value;
    text.setAttribute('class','st')
    dv.setAttribute('class','in')
    btnx.setAttribute('class', 'btn')
    btni.setAttribute('class', 'btn')

    
    dv.append(text);
    dv.append(btni);
    dv.append(btnx);
    fs.append(dv);
    
    btni.addEventListener('click', function(){
        text.classList.add('important')
    })

})
