let video = document.querySelector('.video1')
function inicio(){
    video.play()
}
function pausa(){
    video.pause()
}
imagen1=document.querySelector('#imagen1');
imagen2=document.querySelector('#imagen2');
imagen3=document.querySelector('#imagen3');

soltar1=document.getElementById('cajasoltar');
soltar2=document.getElementById('cajasoltar2');
soltar3=document.getElementById('cajasoltar3');

imagen1.addEventListener('dragstart',(event)=>{
    console.log('arrastre iniciado');
    event.dataTransfer.setData('Text',event.target.id)
})
imagen2.addEventListener('dragstart',(event)=>{
    console.log('arrastre iniciado');
    event.dataTransfer.setData('Text',event.target.id)
})
imagen3.addEventListener('dragstart',(event)=>{
    console.log('arrastre iniciado');
    event.dataTransfer.setData('Text',event.target.id)
})
soltar1.addEventListener('dragover',(event)=>{event.preventDefault()});
soltar2.addEventListener('dragover',(event)=>{event.preventDefault()});
soltar3.addEventListener('dragover',(event)=>{event.preventDefault()});


soltar1.addEventListener('drop',(event)=>{
    let imgsrc=event.dataTransfer.getData('Text');
    event.target.appendChild(document.getElementById(imgsrc))
    document.querySelector('.p1').classList.add('none')
})
soltar2.addEventListener('drop',(event)=>{
    let imgsrc=event.dataTransfer.getData('Text');
    event.target.appendChild(document.getElementById(imgsrc))
    document.querySelector('.p2').classList.add('none')
})
soltar3.addEventListener('drop',(event)=>{
    let imgsrc=event.dataTransfer.getData('Text');
    event.target.appendChild(document.getElementById(imgsrc))
    document.querySelector('.p3').classList.add('none')
})
function reinicio(){
    window.location.reload();
}