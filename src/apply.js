const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code');
const peanutRangeNode = document.getElementById('peanuts');
const allergicNumberNode = document.getElementById('allergic-number');
const yesNode = document.getElementById('yes');
const noNode = document.getElementById('no');

peanutRangeNode.addEventListener('change', function() {
    allergicNumberNode.textContent = peanutRangeNode.value;
});

yesNode.addEventListener('change', function() {
    if(yesNode.checked) {
        allergicNumberNode.textContent = '1';
        peanutRangeNode.min = 1;
        peanutRangeNode.value = 1;
        peanutRangeNode.disabled = false;
    }
});

noNode.addEventListener('change', function() {

    if(noNode.checked) {
        allergicNumberNode.textContent = 0;
        peanutRangeNode.min = 0;
        peanutRangeNode.value = 0;
        peanutRangeNode.disabled = true;
    }
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const applicant = {
        name: nameNode.value,
        zipCode: zipCodeNode.value,
        allergyNumber: peanutRangeNode.value
    };
    
    console.log(applicant);

});