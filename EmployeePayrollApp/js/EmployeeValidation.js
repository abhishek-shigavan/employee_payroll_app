
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary_Output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});
