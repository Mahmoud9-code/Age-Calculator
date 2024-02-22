const inputs = document.querySelectorAll('.card__input');

const button = document.querySelector('.card__button');

const result = document.querySelector('.card__resultValue');


const validateDay = (day) => {
    if (day && day > 0 && day <= 31) {
        return true;
    }else {
        return false;
    }
}
const validateMonth = (month) => {
    if (month && month > 0 && month <= 12) {
        return true;
    }else {
        return false;
    }
}

const validateyear = (year) => {
    const currentYear = new Date().getFullYear();
    if (year && year > 1920 && year <= currentYear) {
        return true;
    }else {
        return false;
    }
}

const isDateValid = (dayInput, monthInput, yearInput) => {
    let isValid =[false, false, false];

    if (!validateDay(dayInput.value)) {
        dayInput.classList.add("card__input--error");
    }else {
        isValid[0] = true;
        dayInput.classList.remove("card__input--error");
    }
    if (!validateMonth(monthInput.value)) {
        monthInput.classList.add("card__input--error");
    }else {
        isValid[1] = true;
        monthInput.classList.remove("card__input--error");
    }
    if (!validateyear(yearInput.value)) {
        yearInput.classList.add('card__input--error')
    }else {
        isValid[2] = true;
        yearInput.classList.remove("card__input--error");
    }
    return isValid.every((ele) => ele===true);
}


const calculatAge = (year, month, day) => {
    const today = new Date();
    const yourBirthDay = new Date(year, month - 1, day);
    let age = today.getFullYear() - yourBirthDay.getFullYear();
    const yourMonth = today.getMonth() - yourBirthDay.getMonth();


    if (yourMonth<0 || (yourMonth === 0 && today.getDate() < yourBirthDay.getDate())) {
        age--;
    }

    return age;
}


const eventClick = () => {
    let dayInput = document.querySelector('.card__input[name="day"]');
    let monthInput = document.querySelector('.card__input[name="month"]');
    let yearInput = document.querySelector('.card__input[name="year"]');
    const result = document.querySelector('.card__resultValue');

    
    if(!isDateValid(dayInput, monthInput, yearInput)) {

        result.textContent = '--';
        return;
    }

    
    result.textContent = calculatAge(yearInput.value, monthInput.value, dayInput.value);

}

inputs.forEach(function(ele) {
    ele.addEventListener('keydown', (event) => {
        event.key === 'Enter' && eventClick();
    });
});


button.addEventListener('click', eventClick)
