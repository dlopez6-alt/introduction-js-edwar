// Metodos de propiedad

const player = {
    play : function(id){
        console.log("playing song...", id);
    },

    pause : function(id){
        console.log(`Pausing...", ${id}`);
    },

    delate : function(id){
        console.log(`Delecting song..., ${id}`);
    }, 

    crearPlayList : function(id){
        console.log(`Creating playlist... ${id}`);
    }
}


console.log(player);
player.play(217);
player.pause(217);
player.delate(217);
player.crearPlayList(217);


