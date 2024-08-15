const monitor = document.getElementById("monitor")
const botoes = document.querySelectorAll("#botoes button")
//querySelectorAll é para mais de um botão

botoes.forEach((botao)=>{
    botao.addEventListener("click",function(){
        const value = this.value
        if (value === "="){
        monitor.innerText = eval(monitor.innerHTML)
        }
        else if (value==="c"){
            monitor.innerText=""
        }
        else{
            if(monitor.innerText==="null"){
                monitor.innerText=""
            }
            else{
                monitor.innerText += value;
            }
        }
    })
})

/*function calcula(value){
    console.log(value)
    alert(value)
}*/