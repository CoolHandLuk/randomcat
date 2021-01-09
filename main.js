const result = document.querySelector('.result');
const btn = document.querySelector('.btn');


btn.addEventListener('click', randomCat )

function randomCat() {
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data =>{
        result.innerHTML = `<img src="${data.file}" />`
    })
}