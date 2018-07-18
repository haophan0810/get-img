const widthImg = document.getElementById('input-width');
const heightImg = document.getElementById('input-height');
const numberImg = document.getElementById('input-number');
const outputWrap = document.querySelector('.output-wrap');
const clickRandom = document.querySelector('.click-random');


function getLinkImg(width = '250', height = '250', sig = '123') {
    return `https:\/\/source.unsplash.com\/random\/${width}x${height}\/?sig=${sig}`;
}

clickRandom.addEventListener('click',handleChangeInput);
function handleChangeInput(e) {
let m ='';
    
    let widthInput = parseInt(widthImg.value) || undefined;
    let heightInput = parseInt(heightImg.value) || undefined;
    let numberInput = parseInt(numberImg.value) || 1;
   
console.log('numberInput :', numberInput);
 
    for(let i =0; i<numberInput; i++){
    let randomSig = Math.ceil(Math.random() * 1000);
    let outputContent = `
    <div class="output__content">    
    <div class="img__link">${ getLinkImg(widthInput, heightInput, randomSig)}</div>
    <div class="img__copy" >
    <i class="fas fa-copy"></i>
    </div>
</div>
    `

       m+=outputContent;

    }
    console.log('m :', m);
    outputWrap.innerHTML ="";

    outputWrap.innerHTML =m;

    console.log(getLinkImg(widthInput, heightInput));
    getLinkImg(widthInput, heightInput);
    const copy =document.querySelectorAll('.img__copy');
console.log('copy :', copy);
copy.forEach(element => {
    element.addEventListener('click',function(e){
        console.log('e :', e);
        console.log('this :', this.previousElementSibling.select());
    })
});


}


