let screen = document.getElementById('inputBox')
    let numbers = document.querySelectorAll('button')
    let string = '';
    let arr = Array.from(numbers);
    arr.forEach(press => {
        press.addEventListener('click', (e) =>{
            if(e.target.innerHTML == '='){
                string = eval(string);
                screen.value = string
            }
            else if(e.target.innerHTML == 'AC'){
                string = ''
                screen.value = string
            }
            else if(e.target.innerHTML == 'DEL'){
                string = string.substring(0, string.length-1)
                screen.value = string
            }
            else{
                string += e.target.innerHTML;
                screen.value = string;
            }
            
        })
    })