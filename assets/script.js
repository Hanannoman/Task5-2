const inputLength=document.querySelector('.inpt');
const firstUnite=document.querySelector('.from');
const secondUnite=document.querySelector('.to');
const buttonChange=document.querySelector('.change');
const answer=document.querySelector('.resulte');

function operate(){
    let resulte=0;
    if(firstUnite.value=="cm"){
        switch(secondUnite.value){
            case"m":
           resulte= Number(inputLength.value)/100;
           break;
           case"km":
           resulte= Number(inputLength.value)/100000;
           break;
           default:
            console.log(others);
            break;

        }
    }
    else if( firstUnite.value=="m"){
        switch(secondUnite.value){
            case"cm":
           resulte= Number(inputLength.value)*100;
           break;
           case"km":
           resulte= Number(inputLength.value)/1000;
           break;
           default:
            console.log(others);
            break;

        }

    }
    else{
        switch(secondUnite.value){
            case"cm":
           resulte= Number(inputLength.value)*100000;
           break;
           case"m":
           resulte= Number(inputLength.value)*1000;
           break;
           default:
            console.log(other);
            break;

        }

    }
    answer.innerHTML=resulte;
}




buttonChange.addEventListener('click',operate);
