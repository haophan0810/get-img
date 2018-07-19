const widthImg = document.getElementById('input-width');
const heightImg = document.getElementById('input-height');
const numberImg = document.getElementById('input-number');
const outputWrap = document.querySelector('.output-wrap');
const clickRandom = document.querySelector('.click-random');
const topicImg =document.getElementById('input-topic');
const containerSrc = document.querySelector('#container-src');

function getLinkImg(width = '250', height = '250', sig = '123',topic='') {
    if(topic==''){
        return `https:\/\/source.unsplash.com\/random\/${width}x${height}\/?sig=${sig}`;

    }else {
        return `https:\/\/source.unsplash.com\/${width}x${height}\/?${topic}\/?sig=${sig}`;
    }
}
// handle when click random button
clickRandom.addEventListener('click',handleChangeInput);
function handleChangeInput(e) {
    let contentHtml ='';    
    let widthInput = parseInt(widthImg.value) || undefined;
    let heightInput = parseInt(heightImg.value) || undefined;
    let numberInput = parseInt(numberImg.value) || 1;
    let topicInput = topicImg.value;
 
 
    for(let i =0; i<numberInput; i++){
    let randomSig = Math.ceil(Math.random() * 1000);
    console.log('randomSig :', randomSig);
    let outputContent = `
    <div class="output__content">        
         <img src='${ getLinkImg(widthInput, heightInput, randomSig, topicInput)}'>
       
        <a 
        href="${ getLinkImg(widthInput, heightInput, randomSig, topicInput)}" 
        class="img__link"
        target='_blank'
        >
            ${ getLinkImg(widthInput, heightInput, randomSig, topicInput)}
        </a>
        <div class="img__copy" >
            <i class="fas fa-copy"></i>
        </div>
    </div>
    `;
       contentHtml+=outputContent;
    }    
    outputWrap.innerHTML ="";
    outputWrap.innerHTML =contentHtml;   
    const copy =document.querySelectorAll('.img__copy');
    console.log('copy :', copy);
    copy.forEach(element => {
    element.addEventListener('click',function(e){
        const prev = document.querySelectorAll('.color-red')
        prev.forEach(element => {
            element.classList.remove('color-red');
        });
        // console.log('e :', e);
        console.log('this :', this.parentElement);
        this.classList.add('color-red');
        this.previousElementSibling.classList.add('color-red');
        let _thisSrc = this.previousElementSibling.textContent;
        // console.log('_thisSrc :', _thisSrc);       
        containerSrc.textContent = _thisSrc;
        containerSrc.select();
        document.execCommand("copy");
    })
});


}
// handle when press enter
document.addEventListener('keydown',function(e){
    if(e.keyCode===13){
        handleChangeInput();
       
    }
})
