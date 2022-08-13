let submit = document.querySelector('input[type=submit]');

submit.addEventListener('click', function click(event) {
    event.preventDefault();

    let imie = document.querySelector('[name="fname"]').value;
    let nazwisko = document.querySelector('[name="lname"]').value;
    console.log(imie, nazwisko);

    
});