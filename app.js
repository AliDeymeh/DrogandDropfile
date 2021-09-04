const drogArea = document.querySelector('.drag-area'),
drogText=drogArea.querySelector('header'),
button=drogArea.querySelector('button'),
input=drogArea.querySelector('input');

let file;

button.onclick=()=>{
    input.click();
}
input.addEventListener('change',function(){
    file=this.files[0];
    showFile();
    drogArea.classList.add('active');
    
})

drogArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    drogArea.classList.add('active');
    drogText.textContent="عکسو ولش کن";
})


drogArea.addEventListener("dragleave", () => {
    drogArea.classList.remove('active');
    drogText.textContent="عکس ولش کن";
})
drogArea.addEventListener("drop", (event) => {
    event.preventDefault();
    
    file=event.dataTransfer.files[0];
  
 showFile();
})
function showFile(){
    let filetype=file.type;
    let validExtsion=["image/jpeg","image/jpg","image/png"];
    if(validExtsion.includes(filetype)){
        let fileReader=new FileReader();
        fileReader.onload=()=>{
            let fileUrl=fileReader.result;
            let imgTag=`<img src="${fileUrl}" alt="">`;
            drogArea.innerHTML=imgTag;
        }
     fileReader.readAsDataURL(file);   
    }else{
        alert("فایلت هرچی هست عکس نیست عزیز من :) ");
        drogArea.classList.remove('active');
        
    }
}