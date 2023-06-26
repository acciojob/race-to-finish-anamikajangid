window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
 
  let a= new Promise(resolve = {
	  setTimeout(() = {
		  resolved("a")
	  },3000)
  })
let b= new Promise(resolve = {
	  setTimeout(() = {
		  resolved("b")
	  },2000)
  })
let c= new Promise(resolve = {
	  setTimeout(() = {
		  resolved("c")
	  },1000)
  })
let d= new Promise(resolve = {
	  setTimeout(() = {
		  resolved("d")
	  },4000)
  })
let e= new Promise(resolve = {
	  setTimeout(() = {
		  resolved("e")
	  },5000)
  })

let x = Promise.any([a,b,c,d,e])
x.then((data) => {
	const  element = document.getElementById("output");
	element.innerText = data;
})