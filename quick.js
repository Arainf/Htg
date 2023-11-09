
// shirt 1
const quick1 = document.querySelector("#shirt1-desc");
const shirt1 = document.querySelector("#shirt1");
const quickView1 = document.querySelector("#quickView1");
const xmark1 = document.querySelector("#x1");
let isToggled1 = false; // Variable to track the state
// shirt 2
const quick2 = document.querySelector("#shirt2-desc");
const shirt2 = document.querySelector("#shirt2");
const quickView2 = document.querySelector("#quickView2");
const xmark2 = document.querySelector("#x2");
let isToggled2 = false; // Variable to track the state
// shirt 3
const quick3 = document.querySelector("#shirt3-desc");
const shirt3 = document.querySelector("#shirt3");
const quickView3 = document.querySelector("#quickView3");
const xmark3 = document.querySelector("#x3");
let isToggled3 = false; // Variable to track the state
// shirt 4
const quick4 = document.querySelector("#shirt4-desc");
const shirt4 = document.querySelector("#shirt4");
const quickView4 = document.querySelector("#quickView4");
const xmark4 = document.querySelector("#x4");
let isToggled4 = false; // Variable to track the state
// shirt 5
const quick5 = document.querySelector("#shirt5-desc");
const shirt5 = document.querySelector("#shirt5");
const quickView5 = document.querySelector("#quickView5");
const xmark5 = document.querySelector("#x5");
let isToggled5 = false; // Variable to track the state
// shirt 6
const quick6 = document.querySelector("#shirt6-desc");
const shirt6 = document.querySelector("#shirt6");
const quickView6 = document.querySelector("#quickView6");
const xmark6 = document.querySelector("#x6");
let isToggled6 = false; // Variable to track the state
// shirt 7
const quick7 = document.querySelector("#shirt7-desc");
const shirt7 = document.querySelector("#shirt7");
const quickView7 = document.querySelector("#quickView7");
const xmark7 = document.querySelector("#x7");
let isToggled7 = false; // Variable to track the state
// shirt 8
const quick8 = document.querySelector("#shirt8-desc");
const shirt8 = document.querySelector("#shirt8");
const quickView8 = document.querySelector("#quickView8");
const xmark8 = document.querySelector("#x8");
let isToggled8 = false; // Variable to track the state


//shirt 1
quickView1.addEventListener("click", function() {
  if (isToggled1) {
    // shirt 1
    quick1.style.opacity = '0';
    quick1.style.zIndex = '-1';
    quick1.style.transition = 'all 400ms ease-in-out';
  } else {
    // shirt 1
    quick1.style.opacity = '1';
    quick1.style.zIndex = '1';
    xmark1.addEventListener("click", function(){
      if (isToggled1) {
        // shirt 1
        quick1.style.opacity = '0';
        quick1.style.zIndex = '-1';
        quick1.style.transition = 'all 400ms ease-in-out';
      }
      isToggled1 = !isToggled1;
    })
  }
    // Toggle the state
  isToggled1 = !isToggled1;
})

//shirt 2
quickView2.addEventListener("click", function() {
  if (isToggled2) {
    // shirt 2
    quick2.style.opacity = '0';
    quick2.style.zIndex = '-1';
    quick2.style.transition = 'all 400ms ease-in-out';
  } else {
    // shirt 2
    quick2.style.opacity = '1';
    quick2.style.zIndex = '1';
    xmark2.addEventListener("click", function(){
      if (isToggled2) {
        // shirt 2
        quick2.style.opacity = '0';
        quick2.style.zIndex = '-1';
        quick2.style.transition = 'all 400ms ease-in-out';
  
      }
      isToggled2 = !isToggled2;
    })
  }
    // Toggle the state
  isToggled2 = !isToggled2;
})


// shirt 3
quickView3.addEventListener("click", function() {
  if (isToggled3) {
    // shirt 3
    quick3.style.opacity = '0';
    quick3.style.zIndex = '-1';
    quick3.style.transition = 'all 400ms ease-in-out';
  } else {
    // shirt 3
     quick3.style.opacity = '1';
     quick3.style.zIndex = '1';
    xmark3.addEventListener("click", function(){
      if (isToggled3) {
        // shirt 3
        quick3.style.opacity = '0';
        quick3.style.zIndex = '-1';
        quick3.style.transition = 'all 400ms ease-in-out';
  
      }
      isToggled3 = !isToggled3;
    })
  }
    // Toggle the state
  isToggled3 = !isToggled3;
})

// shirt 4
quickView4.addEventListener("click", function() {
  if (isToggled4) {
    // shirt 4
    quick4.style.opacity = '0';
    quick4.style.zIndex = '-1';
    quick4.style.transition = 'all 400ms ease-in-out';
  } else {
    // shirt 4
    quick4.style.opacity = '1';
    quick4.style.zIndex = '1';
    xmark4.addEventListener("click", function(){
      if (isToggled4) {
        // shirt 4
        quick4.style.opacity = '0';
        quick4.style.zIndex = '-1';
        quick4.style.transition = 'all 400ms ease-in-out';
  
      }
      isToggled4 = !isToggled4;
    })
  }
    // Toggle the state
  isToggled4 = !isToggled4;
})

// shirt 5
quickView5.addEventListener("click", function() {
  if (isToggled5) {
    // shirt 5
    quick5.style.opacity = '0';
    quick5.style.zIndex = '-1';
    quick5.style.transition = 'all 400ms ease-in-out';
  } else {
    // shirt 5
    quick5.style.opacity = '1';
    quick5.style.zIndex = '1';
    xmark5.addEventListener("click", function(){
      if (isToggled5) {
        // shirt 5
        quick5.style.opacity = '0';
        quick5.style.zIndex = '-1';
        quick5.style.transition = 'all 400ms ease-in-out';
  
      }
      isToggled5 = !isToggled5;
    })
  }
    // Toggle the state
  isToggled5 = !isToggled5;
})

// shirt 6
quickView6.addEventListener("click", function() {
  if (isToggled6) {
    // shirt 6
    quick6.style.opacity = '0';
    quick6.style.zIndex = '-1';
    quick6.style.transition = 'all 400ms ease-in-out';
  } else {
    // shirt 6
    quick6.style.opacity = '1';
    quick6.style.zIndex = '1';  
    xmark6.addEventListener("click", function(){
      if (isToggled6) {
        // shirt 6
        quick6.style.opacity = '0';
        quick6.style.zIndex = '-1';
        quick6.style.transition = 'all 400ms ease-in-out';
  
      }
      isToggled6 = !isToggled6;
    })
  }
    // Toggle the state
  isToggled6 = !isToggled6;
})

// shirt 7
quickView7.addEventListener("click", function() {
  if (isToggled7) {
    // shirt 7
    quick7.style.opacity = '0';
    quick7.style.zIndex = '-1';
    quick7.style.transition = 'all 400ms ease-in-out';
  } else {
    // shirt 7
    quick7.style.opacity = '1';
    quick7.style.zIndex = '1';  
    xmark7.addEventListener("click", function(){
      if (isToggled7) {
        // shirt 7
        quick7.style.opacity = '0';
        quick7.style.zIndex = '-1';
        quick7.style.transition = 'all 400ms ease-in-out';
      }
      isToggled7 = !isToggled7;
    })
  }
    // Toggle the state
  isToggled7 = !isToggled7;
})

// shirt 8
quickView8.addEventListener("click", function() {
  if (isToggled8) {
    // shirt 8
    quick8.style.opacity = '0';
    quick8.style.zIndex = '-1';
    quick8.style.transition = 'all 400ms ease-in-out';

  } else {
    // shirt 8
    quick8.style.opacity = '1';
    quick8.style.zIndex = '1'; 
    xmark8.addEventListener("click", function(){
      if (isToggled8) {
        // shirt 8
        quick8.style.opacity = '0';
        quick8.style.zIndex = '-1';
        quick8.style.transition = 'all 400ms ease-in-out';
    
      }
      isToggled8 = !isToggled8;
    })
  }
    // Toggle the state
  isToggled8 = !isToggled8;
})


