const numbers = document.querySelectorAll('.number');
const calculatorScreen=document.querySelector('.calculator-screen');
const operators=document.querySelectorAll('.operator');
const equalSign=document.querySelector('.equal-sign');
const clearBtn=document.querySelector('.all-clear');
const percentage=document.querySelector('.percentage');
const decimal=document.querySelector('.decimal');

let prevInput="0";
let currentInput="0";
let calculationOperator="";

const inputNumber=(number)=>{
	if(currentInput==="0"){
		currentInput=number;	
	}
else{
		currentInput+=number;
   }
}	
numbers.forEach((number)=>{
	number.addEventListener('click', (event)=>{
	   //console,log(event.target.value);
	   inputNumber(event.target.value);
	   updateScreen(currentInput);
	});
});
 const updateScreen=(number)=>{
	 calculatorScreen.value=number;
}



operators.forEach((operator)=>{
	operator.addEventListener('click', (event) =>{
		inputOperator(event.target.value);
    });
});
 
 const inputOperator= (operator) => {
	 prevInput=currentInput;
	 calculationOperator=operator;
	 currentInput="0";
	 
 }
	 
equalSign.addEventListener('click', ()=>{
	calculate();
	updateScreen(currentInput);
	
});

const calculate = () =>{
	let result = 0;
	switch(calculationOperator){
		case '+':
		  result= parseFloat(prevInput) + parseFloat(currentInput);
		  break;
		case '-':
		  result= parseFloat(prevInput) - parseFloat(currentInput);
		  break;
		case '*':
          result= parseFloat(prevInput) * parseFloat(currentInput);
		  break;
        case '/':
          result= parseFloat(prevInput) / parseFloat(currentInput);
		  break;
		default:
		  return;
	}
	
	currentInput=result.toString()
    calculationOperator="";
}


clearBtn.addEventListener('click', ()=>{
	clearAll();
	updateScreen(currentInput);
});


const clearAll=()=>{
	prevInput="0";
	currentInput="0";
	calculationOperator="";
}

percentage.addEventListener('click',()=>{
	prevInput=(parseFloat(currentInput)/100).toString()
	calculationOperator='*'
	currentInput="0"
});

decimal.addEventListener("click",()=>{
	currentInput=currentInput+".";
	updateScreen(currentInput)
});
