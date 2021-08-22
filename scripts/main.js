document.addEventListener('DOMContentLoaded', function() {


    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=86462d983c84f531e9d955645a2d57af')

    .then(response => response.json())

    .then(data => {
        let datas = data.rates
        let select = document.getElementById('select')
        for (let i in datas) {
            let el = document.createElement('option')
            el.textContent = i;
            el.value = i;
            select.appendChild(el)

        }
        selection = select.options[select.selectedIndex].text;

        function coordinates() {
            const currency = document.querySelector('#currency');
            currency.value = currency.value.replace(/[^\d\.\,]/g, '');;

        };
        setInterval(coordinates, 0)

        function textWrite() {
            const currency = document.querySelector('#currency').value;
            let rate1 = select.value
            const rate = data.rates[rate1] * Number(currency);
            if (rate !== undefined) {

                document.querySelector('#result').innerHTML = `${currency} EUR is equal to ${rate.toFixed(2)} ${rate1}.`;
            } else {
                document.querySelector('#result').innerHTML = 'Invalid  currency.';
            }
        }
        setInterval(textWrite, 0)




    })

    .catch(error => {
        console.log('Error:', error)
    });
    return false;






})