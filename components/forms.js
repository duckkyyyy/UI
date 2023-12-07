const button = document.querySelector('[name="submit"]');
const result = document.getElementById('result');

const show = document.getElementById('show');

show.addEventListener('click', function(event){
    event.preventDefault();

    const password = document.querySelector('[name="password"]');
    if (password.type === 'password') {
        password.type = 'text';
    } 
    else{
        password.type = 'password';
    }
})


function getResults(){
    const name = document.querySelector('[name="name"]');
    const age = document.querySelector('[name="age"]');
    const date = document.querySelector('[name="birthdate"]');
    const email = document.querySelector('[name="email"]');
    const tel = document.querySelector('[name="phone"]');
    const radio = document.querySelectorAll('[name="woman"]');
    const password = document.querySelector('[name="password"]');
    const range = document.querySelector('[name="range"]');
    const checkbox = document.querySelector('[name="checkbox"]');
    const file = document.querySelector('[name="meme"]');
    
    // Найти выбранный элемент
    let selectedRadioButton = "";
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            selectedRadioButton = radio[i];
            break;
        }
    }
    // Получить значение выбранного элемента
    const selectedValue = selectedRadioButton.value;

    let isChecked = "";
    if (checkbox.checked) {
        isChecked = true;
    }
    else {
        isChecked = false;
    }
    
    const formData = {
        name: name.value,
        age: age.value,
        date: date.value,
        email: email.value,
        tel: tel.value,
        radio: selectedValue,
        password: password.value,
        range: range.value,
        checkbox: isChecked,
        file: file.value
    }

    result.innerHTML = JSON.stringify(formData);
}


function showImage(){
    const file = document.querySelector('[name="meme"]');
    const photo = document.getElementById('photo');
    file.addEventListener('change', function(){
        const image = URL.createObjectURL(blob);
        photo.innerHTML = image;
    }) 
}

    button.addEventListener('click', function(){
        getResults();
        showImage();
    })

