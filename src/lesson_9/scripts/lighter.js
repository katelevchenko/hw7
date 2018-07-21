import '../styles/lighter.scss';

export function lighter(lighterElement) {
  const lights = lighterElement.querySelectorAll('.street-lighter__light');
 // console.log('LIGHTER INIT!');
 // const lighterRed = document.querySelector('.street-lighter__light_red');
 // const lighterYellow = document.querySelector('.street-lighter__light_yellow');
 // const lighterGreen = document.querySelector('.street-lighter__light_green');
    //const lights = document.querySelectorAll('.street-lighter__light');
  //console.log(lights);

  function switchOff() {
    for(let i = 0; i < lights.length; i++) {
      const light = lights[i];
      light.classList.remove('street-lighter__light_active')
    }
    // lighterRed.classList.remove('street-lighter__light_active');
   // lighterYellow.classList.remove('street-lighter__light_active');
   // lighterGreen.classList.remove('street-lighter__light_active');
    //console.log('SWITCHED');
  }

  function switchOn(element) {
    console.log('ENABLED');
    element.classList.add('street-lighter__light_active');
  }


  function clickHandler(element) {
    switchOff();
    switchOn(element);
  }

  for(let i = 0; i < lights.length; i++) {
    const light = lights[i];
    light.addEventListener('click', function () {
      clickHandler(light);
    });
  }
  //lighterRed.addEventListener('click', function () {
   // clickHandler(lighterRed)
  //});
  //lighterYellow.addEventListener('click', function () {
   // clickHandler(lighterYellow)
 // });
 //lighterGreen.addEventListener('click', function () {
  //  clickHandler(lighterGreen);
  //});

}