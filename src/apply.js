const formNode = document.getElementById('form-example');

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const applicant = {
        name: formNode.elements.name.value
    };
    
    console.log(applicant.name);

});