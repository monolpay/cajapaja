let opened = false

function menu() { 
    if(opened == false) {
        document.getElementById("menubar").style="animation: menuOut 1s both"
        opened = true
    }
    else if(opened){
        document.getElementById("menubar").style="animation: menuIn 1s both"
        opened = false
    }
    
}