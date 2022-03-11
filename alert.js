console.log('I am here !');

// alert('Ma is coming');

const maComing = () => {
    alert('Ammu is coming, open the book');
}

const askPicnic = () => {
    const response = confirm('are you going to picnic')
    console.log('response');
    if (response === true) {
        alert('amake 2000 taka bkash kore de')  
    }
    else{
        alert('DGM');
    }
} 

const askName = () => {
   const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
}