let a = 5;
a = a * 2;
try {
  document.querySelector('.test').innerHTML = a;
}
catch (someExample) {
  console.log(1);
}
finally {
  console.log('Прога працює при будь-якій ситуації')
}
console.log(a);
t1();

function t1() {
  console.log('Hello!')
}

let json = '{"age": 30}';
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError('Incomplete data: no name');
  }
  console.log(user.name);
} catch (e) {
  console.log('JSON Error: ' + e.name);
  // console.log('JSON Error: ' + e.message);
  // console.log('JSON Error: ' + e);
}

let url = 'http://jsonplaceholder.typicode.com/users';

async function getResponse(url) {
  try {
    let response = await fetch(url)
    let result = response.json()
    console.log(result);
  } catch (example) {
    createBlock();
  }
  
  say()
}

function createBlock() {
  let divElement = document.createElement('div');
  body.appendChild(divElement);
  divElement.style.width = '50%';
  divElement.style.padding = '20px';
  divElement.style.marginBottom = '20px';
  divElement.style.border = '2px';
  divElement.style.borderRadius = '10px'
  divElement.style.backgroundColor = '#dff0f2';
  divElement.style.color = 'white';
  divElement.classList.add('box');
  divElement.textContent = 'Good work!';
}

function say() {
  console.log('How are you?')
}

getResponse(url)