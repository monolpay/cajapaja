let opened = false

function menu() { 
    if(opened == false) {
        document.getElementById("menubar").style="animation: menuOut 1s both"
        opened = true
        switchZIndex()
    }
    else if(opened){
        document.getElementById("menubar").style="animation: menuIn 1s both"
        opened = false
        setTimeout(switchZIndex, 1000)
    }
    
}

function switchZIndex(){
    if(opened == false) {
        document.getElementById("objednavka").style="z-index: 25;"
    }
    else if(opened){
        document.getElementById("objednavka").style="z-index: -1;"
    }
}

