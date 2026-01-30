import {add} from './math.js';
import {subtract} from './math.js';
import {multiply} from './math.js';
import {divide} from './math.js';
import {showResult} from './ui.js';

document.getElementById('addBtn').addEventListener('click',()=>{
    const n1= Number(document.getElementById('num1').value);
    const n2= Number(document.getElementById('num2').value);
    const result= add(n1,n2);
    showResult(result);
})