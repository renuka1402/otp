const otp =()=>
{
    let num1 ='0123456789'
    let store ='';
    for(let i=0; i<4; i++){
        let otp =Math.random()*num1.length;
        let floorotp= Math.floor(otp);
        store+=num1.charAt(floorotp);
        document.getElementById('show').innerHTML =store
    }
}











































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































