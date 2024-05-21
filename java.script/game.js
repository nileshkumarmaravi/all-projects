document.onkeydown = function(e){
    console.log("key code id:",e,kayCode)
    if(e.kayCode==38){
        dino = document.querySelector('.dino');
        dino.classlist.add('animateDino');
        setTimeout(() =>{
            dino.classlist.remo('animateDino')

        },700);
    }
}