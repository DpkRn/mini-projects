const circle=document.querySelector('.circle');
const btn=document.querySelector('button');
function delay(ms){
    return new Promise(res=>setTimeout(res,ms));
}
document.addEventListener('DOMContentLoaded',async()=>{


    while(true){
        circle.classList.add('anim');
        await delay(1000)
        circle.classList.remove('anim');
        await delay(1000);
    }

 
})

