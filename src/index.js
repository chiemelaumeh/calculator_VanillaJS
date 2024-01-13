// import { camelCase } from "lodash"
// console.log(camelCase("hell world"))
// console.log("helloworl")

let screen = document.getElementById('screen');
let nums = document.querySelectorAll('li');



for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener('click', function () {
    delValue = document.getElementById('screen').value;

    if (nums[i].innerHTML == '=') {
      screen.value = eval(screen.value) 
     

    } else {
      if (nums[i].innerHTML == 'Reset' || nums[i].innerHTML == 'CE') {
        screen.value = '';
      } else {
        screen.value += nums[i].innerHTML;
      }

      if (nums[i].innerHTML == 'Del') {
        screen.value = delValue.slice(0, -1);
      }
      if (nums[i].innerHTML == 'Off/On') {
        screen.value = '';
        if (screen.className =="screen screenBg") {
          screen.className = "offScreenBg"
        } else {
          screen.className = "screen screenBg"
        }
      }
    }
  });


}


