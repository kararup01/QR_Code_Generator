let qrText = document.querySelector('#qr-text');
let sizes = document.querySelector('#sizes');
let qrContainer = document.querySelector('.qr-body');
let generateBtn = document.querySelector('#generate');
let downloadBtn = document.querySelector('#download');

let size = sizes.value;
// console.log(size);

generateBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  isEmptyInput ();
});

sizes.addEventListener('change', (e)=>{
  size = e.target.value;
  isEmptyInput ();
});

downloadBtn.addEventListener('click', ()=>{
  let img = document.querySelector('.qr-body img');

  if(img !== null){
    let imgAtrr = img.getAttribute('src');    
    downloadBtn.setAttribute('href', imgAtrr);
  } else{
    downloadBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`);
  }
});

function isEmptyInput (){
  if(qrText.value.length > 0){
    generateQRCode(); 
  } else {
    alert("Enter the text or URL to generate your QR code");
  }
};

function generateQRCode (){
  // console.log("Arup"); 
  qrContainer.innerHTML ="";

  new QRCode(qrContainer, {
    text: qrText.value,
    width: size,
    height: size,
    colorDark : "#000000",
    colorLight : "#ffffff",
}); 
}