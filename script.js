function message(){
    var customername=document.getElementById("cname").value;
    var collectionshift=document.getElementById("shift").value;
    var milkquantity=document.getElementById("milk").value;
    var Fatunit=document.getElementById("fat").value;
    //alert (customername+', '+collectionshift+', '+milkquantity+', '+Fatunit );
    //alert (collectionshift);
    //alert (milkquantity);
    //alert (Fatunit);

    const Success = document.getElementById("success");
    const Danger = document.getElementById("danger");
    if (customername.value ==='' || collectionshift.value ==='' || milkquantity.value ==='' || Fatunit.value ===''){
        //document.getElementById("danger").style.display= 'block';
        Danger.style.display ='block';
    }
    else{
        setTimeout(() => {
            customername.value = '';
            collectionshift.value = '';
            milkquantity.value = '';
            Fatunit.value = '';
        }, 20000); 

        Success.style.display='block';
        //document.getElementById("success").style.display= 'block';
    }
}

