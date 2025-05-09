const container=document.querySelector('.container')

document.addEventListener('mousemove',(e)=>{
    // console.log(e.target.offsetLeft)
    const div=document.createElement('div');
    div.className='circle';

    const x=parseInt(e.clientX)-125;
    const y=parseInt(e.clientY)-125;

    div.style.left=`${x}px`;
    div.style.top=`${y}px`
    container.appendChild(div);
    
})