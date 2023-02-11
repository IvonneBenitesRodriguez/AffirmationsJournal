const today = new Date();
const day = today.getDay();
const dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const date = today.getFullYear() + ' / ' + (today.getMonth()+1)+ ' / ' + today.getDate();
const time = today.getHours() + ' : ' + today.getMinutes();
const dateTime = date + '<br/>' +  time;

document.getElementById('displayDateTime').innerHTML = dateTime + '<br>' + dayList[day];

//funcionalidad : primera Seccion
const btnCreate = document.querySelector('.btn-main');
const taskList = document.querySelector('.list-container ul');
const listItems = taskList.children;


function attachRemoteButton(li){
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
}

for(let i = 0; i <listItems.length ; i++){
    attachRemoteButton(listItems[i]);
}



btnCreate.addEventListener('click',()=>{

    let ul = document.getElementsByTagName('ul')[0];

    const input = document.querySelector('.input-main');

    let li = document.createElement('li');

    li.textContent = input.value;

    attachRemoteButton(li);

    ul.appendChild(li);

    input.value = ' ';


//   const input = document.querySelector('.input-main');
//   const list = document.querySelector('ul');

//   list.insertAdjacentHTML(
//     'afterbegin',
//     `<li>${input.value}</li>`
//   );
//   input.value = ' ';
   
});

taskList.addEventListener('click', (event)=>{
    if(event.target.tagName === 'BUTTON'){
        const button = event.target;
        const li = button.parentNode;
        li.remove();
    }
})

document.addEventListener('click', (event) =>{
    console.log(event.target);
})

//Funcionalidad Segunda Seccion

const btnCreate1 = document.querySelector('button.btn-main1');
const taskList1 = document.querySelector('.list-container .secondUl');
const listItems1 = taskList1.children;

function attachRemoteButton1(word){
    let remove1 = document.createElement('button');
    remove1.className = 'remove';
    remove1.textContent = 'Remove';
    word.appendChild(remove1);
}

for(let i = 0; i < listItems1.length ; i ++){
    attachRemoteButton1(listItems1[i]);
}


btnCreate1.addEventListener('click', () =>{

    let ul1 = document.querySelector('.secondUl');
    const input1 = document.querySelector('.input-main1');
    let word = document.createElement('li');
    word.textContent = input1.value;
    attachRemoteButton1(word);
    ul1.appendChild(word);
    input1.value = ' '; 

//     const input1 = document.querySelector('.input-main1');
//     const list1 = document.querySelector('.secondUl');

// list1.insertAdjacentHTML(
//     'afterbegin',
//     `<li>${input1.value}</li>`
// );
// input1.value = ' ';
});

taskList1.addEventListener('click',(event)=>{
    if(event.target.tagName === 'BUTTON'){
        const button1 =event.target;
        const li1 = button1.parentNode;
        li1.remove();
    };
});

document.addEventListener('click',(event)=>{
    console.log(event.target);
})

//Funcionalidad 3ra Seccion

const btnCreate2 = document.querySelector('button.btn-main2');
const taskList2 = document.querySelector('.list-container .thirdUl');
const listItems2 = taskList2.children;

function attachRemoteButton2(word1){
    let remove2 = document.createElement('button');
    remove2.className = 'remove';
    remove2.textContent = 'Remove';
    word1.appendChild(remove2);
}

for(let i = 0 ; i < listItems2.length ; i++){
    attachRemoteButton2(listItems2[i]);
}

btnCreate2.addEventListener('click', () =>{

let ul2 = document.querySelector('.thirdUl');
const input2 = document.querySelector('.input-main2');
let word1 = document.createElement('li');
word1.textContent = input2.value;
attachRemoteButton2(word1);
ul2.appendChild(word1);
input2.value = ' ';

    // const input2 = document.querySelector('.input-main2');
    // const list2 = document.querySelector('.thirdUl');

    // list2.insertAdjacentHTML(
    //     'afterbegin',
    //     `<li>${input2.value}</li>`
    // );
    // input2.value = ' ';
});

taskList2.addEventListener('click',(event)=>{
    if(event.target.tagName === 'BUTTON'){
        const button2 = event.target;
        const li2 = button2.parentNode;
        li2.remove();
    };
});

document.addEventListener('click', (event)=>{
    console.log(event.target);
})

//Funcionalidad 4ta Seccion

const btnCreate3 = document.querySelector('button.btn-main3');
const taskList3 = document.querySelector('.list-container .fourthUl');
const listItems3 = taskList3.children;

function attachRemoteButton3(word2){
    let remove3 = document.createElement('button');
    remove3.className = 'remove';
    remove3.textContent = 'Remove';
    word2.appendChild(remove3);
}

for(let i = 0; i < listItems3.length; i ++){
    attachRemoteButton3(listItems3[i]);
}

btnCreate3.addEventListener('click', ()=>{

    let ul3 = document.querySelector('.fourthUl');
    const input3 = document.querySelector('.input-main3');
    let word2 = document.createElement('li');
    word2.textContent = input3.value;
    attachRemoteButton3(word2);
    ul3.appendChild(word2);
    input3.value = ' ';

    // const input3 = document.querySelector('.input-main3');
    // const list3 = document.querySelector('.fourthUl');

    // list3.insertAdjacentHTML(
    //     'afterbegin',
    //     `<li>${input3.value}</li>`
    // );
    // input3.value = ' ';
});

taskList3.addEventListener('click',(event)=>{
if(event.target.tagName === 'BUTTON'){
    const button3 = event.target;
    const li3 = button3.parentNode;
    li3.remove();
}
});

document.addEventListener('click', (event)=>{
    console.log(event.target);
})

// Funcionalidad 5ta seccion:

const btnCreate4 = document.querySelector('button.btn-main4');
const taskList4 = document.querySelector('.list-container .fifthUl');
const listItems4 = taskList4.children;

function attachRemoteButton4(word3){
    let remove4 = document.createElement('button');
    remove4.className = 'remove';
    remove4.textContent = 'Remove';
    word3.appendChild(remove4);
}

for(let i = 0; i < listItems4.length ; i ++){
    attachRemoteButton4(listItems4[i]);
}

btnCreate4.addEventListener('click', ()=>{

    let ul4 = document.querySelector('.fifthUl');
    const input4 = document.querySelector('.input-main4');
    let word3 = document.createElement('li');
    word3.textContent = input4.value;
    attachRemoteButton4(word3);
    ul4.appendChild(word3);
    input4.value = ' ';


    // const input4 = document.querySelector('.input-main4');
    // const list4 =document.querySelector('.fifthUl');

    // list4.insertAdjacentHTML(
    //     'afterbegin',
    //     `<li>${input4.value}</li>`
    // );
    // input4.value = ' ';
});

taskList4.addEventListener('click',(event)=>{
    if(event.target.tagName === 'BUTTON'){
        const button4 = event.target;
        const li4 = button4.parentNode;
        li4.remove();
    };
});

document.addEventListener('click',(event)=>{
    console.log(event.target);
})

//random phrases
let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = [


        '“The world needs strong women. Women who will lift and build others, who will love and be loved, women who live bravely, both tender and fierce, women of indomitable will.” – Amy Tenney',
        '“Each time a woman stands up for herself, she stands up for all women.” –Maya Angelou',
        '“We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women’s voices are heard and heeded, not overlooked and ignored.” – Sheryl Sandberg',
        '“A strong woman is a woman determined to do something others are determined not be done.” – Marge Piercy',
        '“And one day she discovered that she was fierce, and strong, and full of fire, and that not even she could hold herself back because her passion burned brighter than her fears.” – Mark Anthony',
        '“One of the most courageous things you can do is identify yourself, know who you are, what you believe in and where you want to go.” – Sheila Murray Bethel',
        '“I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear.” – Rosa Parks',
        '“Strong women don’t play the victim. Don’t make themselves look pitiful and don’t point fingers. They stand and they deal.” – Mandy Hale',
        '“Above all, be the heroine of your life, not the victim.” – Nora Ephron',
        '“Life is not easy for any of us. But what of that? We must have perseverance and, above all, confidence in ourselves. We must believe we are gifted for something and that this thing must be attained.” – Marie Curie',

];
//creating the function
btn.addEventListener('click', function(){
    let randomQuote = quote[Math.floor(Math.random()* quote.length)]
    output.innerHTML = randomQuote;
});