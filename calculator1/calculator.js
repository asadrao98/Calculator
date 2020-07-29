const btndel = document.querySelector('.btn-del');
const btnC = document.querySelector('.btn-C');
const btnneg = document.querySelector('btn-neg')
var neg=0;
function insert(num){
         document.text.textveiw.value= document.text.textveiw.value+num;
     }
     function equal(){
         let exp =  document.text.textveiw.value;
         if(exp){
         document.textans.textveiwans.value= eval(exp);
         neg = document.textans.textveiwans.value;
        
        }
     }
function pos_to_neg(){
    if(neg=>0){
        document.textans.textveiwans.value =-neg;
    }
    else{
        document.textans.textveiwans.value =neg;
    }
    console.log(neg);
}

      
btndel.addEventListener('click', (e)=>{
    let exp = document.text.textveiw.value;
    document.text.textveiw.value= exp.substring(0,exp.length-1);
})
btnC.addEventListener('click', (e)=>{
    document.text.textveiw.value= "";
    document.textans.textveiwans.value= "";
})
