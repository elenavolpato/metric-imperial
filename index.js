const data = [
  {
    unitsOf: "Length",
    unit1: "Meters",
    unit2: "Feet",
    symbol1: "m",
    symbol2: "ft",
    conversion: 3.218
  },
  {
    unitsOf: "Volume",
    unit1: "Liters",
    unit2: "Gallons",
    symbol1: "l",
    symbol2:"gal",
    conversion: 0.264
  },
  {
    unitsOf: "Mass",
    unit1: "Kilograms",
    unit2: "Pounds",
    symbol1: "kg",
    symbol2: "lb",
    conversion: 2.204
  },
]

const inputEl = document.getElementById("result-el")
const convertBtn = document.getElementById("btn-convert")
const container = document.getElementById("container-el")

//plural of the conversion text

window.onload = function() {
 inputEl.focus();
};

function convert() {
  let x = (inputEl.value)
  //check if input is a number
  if (/\d/.test(x))   {
    //output in all units using the data 
    console.log('hello')
    let unitsDOM = ''
    for (let i = 0; i < data.length; i++) {
      unitsDOM += ` 
      <div class='converted-el'>
        <h3>${data[i].unitsOf} (${data[i].unit1}↔${data[i].unit2})</h3>
        <p>
          ${x}${data[i].symbol1} = ${(x * data[i].conversion).toFixed(3)}${data[i].symbol2} </br> 
          ${x}${data[i].symbol2} = ${(x / data[i].conversion).toFixed(3)}${data[i].symbol1} 
        </p>
      </div>`
    }
    container.innerHTML = unitsDOM 
    //if not a number a alert appears
  } else {
    return container.innerHTML = "<p class='alert'>Please type only numbers</p>"
  } 
}

convert()

function pressedEnter(e){
  if(e.keyCode == 13) {
    convert()
  }
}







