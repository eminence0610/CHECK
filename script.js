function check(){
    var one=(document.getElementById("first").value)
    var answer=one%2
    if(answer==0){
      result.innerHTML="Even Number"
    }else{
      result.innerHTML="Odd Number"
    }
}