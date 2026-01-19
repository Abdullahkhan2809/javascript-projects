const button= document.querySelectorAll('.button');
const body=document.querySelector('body')

button.forEach(function(buttons){
    console.log(buttons)
    buttons.addEventListener('click',function(colorchange){
        console.log(colorchange.target);
        if(colorchange.target.id==='grey'){
            body.style.background=colorchange.target.id;
        }
        if(colorchange.target.id==='white'){
            body.style.background=colorchange.target.id;
        }
        if(colorchange.target.id==='blue'){
            body.style.background=colorchange.target.id;
        }
        if(colorchange.target.id==='yellow'){
            body.style.background=colorchange.target.id;
        }
        if(colorchange.target.id==='green'){
            body.style.background=colorchange.target.id;
        }
    });
});