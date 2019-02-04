const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code');
const peanutRangeNode = document.getElementById('peanuts');
const allergicNumberNode = document.getElementById('allergic-number');
const yesNode = document.getElementById('yes');
const noNode = document.getElementById('no');

let allergyAnswer = '';

peanutRangeNode.addEventListener('change', function() {
    allergicNumberNode.textContent = peanutRangeNode.value;
});

yesNode.addEventListener('change', function() {
    console.log(yesNode.checked);
    if(yesNode.checked) {
        peanutRangeNode.value = 1;
        allergyAnswer = yesNode.checked;
        allergicNumberNode.textContent = '1';
    }
});

noNode.addEventListener('change', function() {
    console.log(noNode.checked);
    allergyAnswer = noNode.checked;

    if(noNode.checked) {
        peanutRangeNode.value = 0;
        allergicNumberNode.textContent = '0';
        allergicNumberNode.textContent = peanutRangeNode.value;
    }
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const applicant = {
        name: nameNode.value,
        zipCode: zipCodeNode.value,
        allergy: allergyAnswer,
        allergyNumber: peanutRangeNode.value
    };
    
    console.log(applicant);

});