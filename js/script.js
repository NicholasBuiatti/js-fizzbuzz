// Consegna
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

const myUl = document.querySelector('ul');
myUl.className = 'list-group flex-row flex-wrap justify-content-between text-center'
for (let i = 1; i <= 100; i++) {
    
    if (i % (3 * 5) == 0) {
        myUl.innerHTML = myUl.innerHTML + `
        <li class='list-group-item rounded-3 bg-light col-1 p-3 m-2'>
            'FizzBuzz'
        </li>`
        console.log('FizzBuzz')
    } else if (i % 5 == 0) {
        myUl.innerHTML = myUl.innerHTML + `
        <li class='list-group-item rounded-3 bg-warning col-1 p-3 m-2'>
            'Buzz'
        </li>`
        console.log('Buzz')
    } else if (i % 3 == 0) {
        myUl.innerHTML = myUl.innerHTML + `
        <li class='list-group-item rounded-3 bg-info col-1 p-3 m-2'>
            'Fizz'
        </li>`
        console.log('Fizz');
    } else {
        myUl.innerHTML = myUl.innerHTML + `
        <li class='list-group-item rounded-3 bg-danger col-1 p-3 m-2'>
            ${i}
        </li>`
        console.log(i)
    }
    
}

