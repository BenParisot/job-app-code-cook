const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code');
const peanutRangeNode = document.getElementById('allergy-range');
const allergicNumberNode = document.getElementById('allergic-number');
const yesNode = document.getElementById('yes');
const noNode = document.getElementById('no');

console.log(peanutRangeNode);

let allergyAnswer = '';

peanutRangeNode.addEventListener('change', function() {
    allergicNumberNode.textContent = peanutRangeNode.value;
});

yesNode.addEventListener('change', function() {
    console.log(yesNode.checked);
    allergyAnswer = yesNode.checked;
});
noNode.addEventListener('change', function() {
    console.log(noNode.checked);
    allergyAnswer = noNode.checked;
});

console.log(allergyAnswer);


if(yesNode !== true) {
    peanutRangNode.textContent = '';
}

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