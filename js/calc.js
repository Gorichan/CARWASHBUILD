document.querySelector('.calculator__content').addEventListener(
    'change', ({target}) => {
        if(target.nodeName !== 'INPUT') {return false}
        if(target.getAttribute('data-type') === 'postNumber') {
            document.querySelector('.rangeNums .activeCalc').classList.remove('activeCalc')


            const collection = document.querySelectorAll('.rangeNums span');

            for(let i = 0; i <= collection.length - 1; i++) {
                // console.log(collection[i].innerText )
                if(collection[i].innerText == target.value) {
                    collection[i].classList.add('activeCalc');
                }
            }
        }

        let params = {
            object: Number(document.querySelector('input[data-type="object"]:checked').value),
            postNumber: Number(document.querySelector('input[data-type="postNumber"]').value),
            chefMount: Number(document.querySelector('input[data-type="chefMount"]:checked').value)
        }



        let calcResult = null;


        params[target.getAttribute('data-type')] = Number(target.value);

        if(params.object === 1) {
            let localRes = params.postNumber * getThousands(3, 5);
            params.chefMount ? localRes += getThousands(5, 4) : false;
            calcResult = localRes;
        }

        if(params.object === 2) {
            let localRes = params.postNumber * (getThousands(3, 5) + getThousands(2, 5) + getThousands(5, 5));
            params.chefMount ? localRes += getThousands(5, 4) : false;
            calcResult = localRes;
        }



        render(calcResult);
});



const getThousands = (number, exponent) => {
    return number * Math.pow(10, exponent)
}

const render = sum => {
    let sumString = sum.toString();
    let calcResult = null;

    if(sumString.length === 8) {
        let sub = sumString.substring(0, 2);
        let subSub = sumString.substring(2, 5);
        let subSubSub = sumString.substring(5);
        calcResult = sub + ' ' + subSub + ' ' + subSubSub + ' ₽';
    }

    if(sumString.length === 7) {
        let sub = sumString.substring(0, 1);
        let subSub = sumString.substring(1, 4);
        let subSubSub = sumString.substring(4);
        calcResult = sub + ' ' + subSub + ' ' + subSubSub + ' ₽';
    }

    if(sumString.length === 6) {
        let sub = sumString.substring(0, 3);
        let subSub = sumString.substring(3);
        calcResult = sub + ' ' + subSub + ' ' + ' ₽';
    }

    if(sumString.length === 5) {
        let sub = sumString.substring(0, 2);
        let subSub = sumString.substring(2);
        calcResult = sub + ' ' + subSub + ' ' + ' ₽';
    }

    document.getElementById('value-container').innerHTML = calcResult;
}

//фундамент: кол-во_постов * 300к + шеф-монтаж 50к
// автомойка: кол-во_постов * (300к+200к+500к) + шеф-монтаж 50к
// Итого с префиксом "от".