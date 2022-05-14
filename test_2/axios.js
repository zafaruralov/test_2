const getBtn = document.getElementById('get-btn');


const getData = () => {
  axios.get('https://54.uz/works.json').then(response => {
    console.log(response);
    const values = response.data.filter(data => data.bonus > 1000)
    console.log(values)
  }).catch(() => {console.log('feild')})
};



getBtn.addEventListener('click', getData);
