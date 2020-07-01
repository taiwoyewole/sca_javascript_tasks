const createResultString = (key, displayedNum, state) => {
const keyContent = key.textContent;
const action = key.dataset.action;
const {
    firstValue,
    modValue,
    operator,
    previousKeyType} = state;
}

keys.addEventListener('click', e => {
    if(e.target.matches('button')) return
        const key = e.target;
        const displayedNum = display.textContent;
        const resultString = createResultString(key, displayedNum, calculator.dataset);

        display.textContent = resultString;
        updateCalculatorState(key, calculator, resultString, displayNum)
        const updateVisualState = (key, calculator) => {
            const keyType = getKeyType(key)
            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
            
            if (keyType === 'operator') key.classList.add('is-depressed')
            
            if (keyType === 'clear' && key.textContent !== 'AC') {
              key.textContent = 'AC'
            }
            
            if (keyType !== 'clear') {
              const clearButton = calculator.querySelector('[data-action=clear]')
              clearButton.textContent = 'CE'
            }
        }

            const calculate = (n1, operator, n2) => {
                const firstNum = parseFloat(n1)
                const secondNum = parseFloat(n2)
                if (operator === 'add') return firstNum + secondNum
                if (operator === 'subtract') return firstNum - secondNum
                if (operator === 'multiply') return firstNum * secondNum
                if (operator === 'divide') return firstNum / secondNum
            }
        const createResultString = (key, displayedNum, state) => {
            const keyType = getKeyType(key);
            calculator.dataset.previousKeyType = keyType;

            if (!action) {
                return displayedNum === '0' || 
                    previousKeyType === 'operator' ||
                    previousKeyType === 'calculate'
                ? keyContent
                : displayedNum + keyContent;
            }

            if (action === 'decimal') {
                if (!displayedNum.includes('.')) return displayedNum + '.';
                if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.';
                return displayedNum;
            } 

            if (
                action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide'
            ) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;

                return firstValue &&
                operator &&
                previousKeyType !== 'operator' &&
                previousKeyType !== 'calculate'
                ? calculate(firstValue, operator, displayedNum)
                : displayedNum;
            }   
            
            // if (action === 'clear') return 0;
        
            // if (action !== 'clear') {
            //     const clearButton = calculator.querySelector('[data-action=clear]')
            //     clearButton.textContent = 'CE';
            // }
        
            if (keyType === 'calculate') {
                calculator.dataset.modValue = firstValue && previousKeyType === 'calculate'
                  ? modValue
                  : displayedNum
            }
        }
});