
  let Foods = document.querySelector('.Foods');
  let electronics = document.querySelector('.electronics');
  let Cloths = document.querySelector('.Cloths');
let Womens = document.querySelector('.Womens');
let Phone = document.querySelector('.Phone');
let logOut = document.getElementById('logOut');
let electronicsData = '';
let FoodsData = '';
let ClothsMensData = '';
let ClothsWomensData = '';
let PhonesData = '';
let CartArray =  []
function fristRender(){

  
  (async function () {
  // strat electronics data fetch
    try {
    const res = await fetch('https://fakestoreapi.com/products/category/electronics');
    const data = await res.json();
    console.log(data);
    electronicsData = data
    localStorage.setItem('electronicsData' , JSON.stringify(data))   
    
    if(data){
      let REndersData = JSON.parse(localStorage.getItem('electronicsData'))    
      console.log(REndersData);
      electronicsData.forEach((element , index) => {
        electronics.innerHTML+= `
        
        <div class="items">
        <img src="${element.image}" >
        <p>Title : ${element.title}</p>
        <p>Category : ${element.category}</p>
  <p>Price : ${element.price}</p>
  <p>DiscountPercentage : ${element.discountPercentage || '80%'}</p>
  <p>Rating : ${element.rating.rate}</p>
  <p>Brand : ${element.brand}</p>
  <button class='btns' data-index='${index}' >Cart Add</button>
  
  </div>
  `
  
})
}else{
  electronics.innerHTML = 'Data Not Found'
}
  } catch (error) {
    console.error('Error:', error);
  }

  // strat Foods data fetch
  try {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    console.log(data);
    FoodsData = data
    localStorage.setItem('FoodsData' , JSON.stringify(data))
    if(data){
      let RenderFoodsData = JSON.parse(localStorage.getItem('FoodsData'))
      RenderFoodsData.products.forEach((element , index) => {

        
        Foods.innerHTML+= `
        
        <div class="items">
        <img src="${element.images[0]}" >
        <p>Title : ${element.title}</p>
        <p>Category : ${element.category}</p>
        <p>Price : ${element.price}</p>
        <p>DiscountPercentage : ${element.discountPercentage}</p>
        <p>Rating : ${element.rating}</p>
        <p>Brand : ${element.brand}</p>
        <button class='btns' data-index='${index}' >Cart Add</button>
        
        </div>
        `
        
      });;
}else{
  Foods.innerHTML = 'Data Not Found'
}
} catch (error) {
  console.error('Error:', error);
}


// sart cloths products



try {
  const res = await fetch("https://fakestoreapi.com/products/category/men's clothing?limit=20");
  const data = await res.json();
  console.log(data);
  ClothsMensData = data
  localStorage.setItem('ClothsMensData' , JSON.stringify(data))
  if(data){
    let RenderClothsMensData = JSON.parse(localStorage.getItem('ClothsMensData'))
    RenderClothsMensData.forEach((element , index) => {
        Cloths.innerHTML+= `
        
        <div class="items">
        <img src="${element.image}" >
        <p>Title : ${element.title}</p>
        <p>Category : ${element.category}</p>
        <p>Price : ${element.price}</p>
        <p>DiscountPercentage : ${element.discountPercentage || '80%'}</p>
        <p>Rating : ${element.rating.rate}</p>
        <p>Brand : ${element.brand}</p>
  <button class='btns' data-index='${index}' >Cart Add</button>
  
  </div>
  `
  
});;
}else{
  Cloths.innerHTML = 'Data Not Found'
}
} catch (error) {
  console.error('Error:', error);
}
  
// start womens

try {
  const res = await fetch("https://fakestoreapi.com/products/category/women's clothing?limit=20");
  const data = await res.json();
  console.log(data);
  ClothsWomensData = data
  localStorage.setItem('ClothsWomensData' , JSON.stringify(data))
  if(data){
    
  let RenderClothsWomensData = JSON.parse(localStorage.getItem('ClothsWomensData'))
      RenderClothsWomensData.forEach((element , index) => {
        Womens.innerHTML+= `
        
        <div class="items">
        <img src="${element.image}" >
  <p>Title : ${element.title}</p>
  <p>Category : ${element.category}</p>
  <p>Price : ${element.price}</p>
  <p>DiscountPercentage : ${element.discountPercentage || '80%'}</p>
  <p>Rating : ${element.rating.rate}</p>
  <p>Brand : ${element.brand}</p>
  <button class='btns' data-index='${index}' >Cart Add</button>
  
  </div>
  `
  
});;
}else{
  Womens.innerHTML = 'Data Not Found'
}
  } catch (error) {
    console.error('Error:', error);
  }


  // start phone
  
  
  try {
    const res = await fetch("https://dummyjson.com/products/category/smartphones?limit=30");
    const data = await res.json();
    console.log(data);
    PhonesData = data
    localStorage.setItem('PhonesData' , JSON.stringify(data))
    
let RenderPhonesData = JSON.parse(localStorage.getItem('PhonesData'))
      RenderPhonesData.products.forEach((element , index) => {
        Phone.innerHTML+= `
    
        <div class="items">
        <img src="${element.thumbnail}" >
        <p>Title : ${element.title}</p>
        <p>Category : ${element.category}</p>
  <p>Price : ${element.price}</p>
  <p>DiscountPercentage : ${element.discountPercentage || '80%'}</p>
  <p>Rating : ${element.rating}</p>
  <p>Brand : ${element.brand}</p>
  <button class='btns' data-index='${index}' >Cart Add</button>
  
  </div>
  `
  
});;

} catch (error) {
  console.error('Error:', error);
}

})();  
}
fristRender()
// Start Menu Btns
  
let faList = document.querySelector('.fa-list')
  let leftSidebar = document.querySelector('.leftSidebar')
faList.addEventListener('click' , ()=>{
leftSidebar.classList.toggle('sliderSidebar')


})

// Start electronics 

let left = document.getElementById('left')
let right = document.getElementById('right')
left.addEventListener('click' , ()=>{
  electronics.scrollBy  (  {
    left : -350,
    behavior : 'smooth'
  })
})
right.addEventListener('click' , ()=>{
  electronics.scrollBy  (  {
    left : 350,
    behavior : 'smooth'
  })
})

let startX = 0;
let scrollLeft = 0;

electronics.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = electronics.scrollLeft;
});

electronics.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = startX - x; 
  electronics.scrollLeft = scrollLeft + walk;
});

// start Foods functions



let leftFoods = document.getElementById('leftFoods');
let rightFoods = document.getElementById('rightFoods');


leftFoods.addEventListener('click', () => {
  Foods.scrollBy({
    left: -350,
    behavior: 'smooth'
  });
});

rightFoods.addEventListener('click', () => {
  Foods.scrollBy({
    left: 350,
    behavior: 'smooth'
  });
});

let startXFoods = 0;
let scrollLeftFoods = 0;


Foods.addEventListener('touchstart', (e) => {
  startXFoods = e.touches[0].pageX;
  scrollLeftFoods = Foods.scrollLeft;  
});


Foods.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = startXFoods - x;
  Foods.scrollLeft = scrollLeftFoods + walk; 
});





// start Cloths functions


let leftCloths = document.getElementById('leftCloths');
let rightCloths = document.getElementById('rightCloths');


leftCloths.addEventListener('click', () => {
  Cloths.scrollBy({
    left: -350,
    behavior: 'smooth'
  });
});

rightCloths.addEventListener('click', () => {
  Cloths.scrollBy({
    left: 350,
    behavior: 'smooth'
  });
});


let ClothsStartX = 0;
let ClothsScrollLeft = 0;


Cloths.addEventListener('touchstart', (e) => {
  ClothsStartX = e.touches[0].pageX;
  ClothsScrollLeft = Cloths.scrollLeft;

});

Cloths.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = ClothsStartX - x;
  Cloths.scrollLeft = ClothsScrollLeft + walk;


});


// start Womens 



let leftWomen = document.getElementById('leftWomen');
let rightWomen = document.getElementById('rightWomen');

leftWomen.addEventListener('click', () => {
  Womens.scrollBy({
    left: -350,
    behavior: 'smooth'
  });
});

rightWomen.addEventListener('click', () => {
  Womens.scrollBy({
    left: 350,
    behavior: 'smooth'
  });
});


let WomensStartX = 0;
let WomensScrollLeft = 0;


Womens.addEventListener('touchstart', (e) => {
  WomensStartX = e.touches[0].pageX;
  WomensScrollLeft = Womens.scrollLeft; 
});


Womens.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = WomensStartX - x;
  Womens.scrollLeft = WomensScrollLeft + walk; 
});


// start Phones


let leftPhone = document.getElementById('leftPhone');
let rightPhone = document.getElementById('rightPhone');

leftPhone.addEventListener('click', () => {
  Phone.scrollBy({
    left: -350,
    behavior: 'smooth'
  });
});

rightPhone.addEventListener('click', () => {
  Phone.scrollBy({
    left: 350,
    behavior: 'smooth'
  });
});


let PhoneStartX = 0;
let PhoneScrollLeft = 0;


Phone.addEventListener('touchstart', (e) => {
  PhoneStartX = e.touches[0].pageX;
  PhoneScrollLeft = Phone.scrollLeft; 
});


Phone.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = PhoneStartX - x;
  Phone.scrollLeft = PhoneScrollLeft + walk; 
});








  // start Add Cart Functions

  // electronics
  electronics.addEventListener('click', (event) => {
  let loggin =   localStorage.getItem('Loggin')
    if(loggin ===  'true'){
     if(!event.target.classList.contains('btns') ) return 
     let index = event.target.dataset.index;

   CartArray.push(electronicsData[index])
    }
    else{
      
  RenderSignUp()
    }
  });
  
 


// Foods

  Foods.addEventListener('click', (event) => {
 let loggin =   localStorage.getItem('Loggin')
    if(loggin ===  'true'){
     if(!event.target.classList.contains('btns') ) return 
     let index = event.target.dataset.index;  
     CartArray.push(FoodsData.products[index]) 
    }
    else{
      
  RenderSignUp()
    }  });
  
// Cloths men's

  Cloths.addEventListener('click', (event) => {
   let loggin =   localStorage.getItem('Loggin')
    if(loggin ===  'true'){
     if(!event.target.classList.contains('btns') ) return 
     let index = event.target.dataset.index;  
     CartArray.push(ClothsMensData[index])
    }
    else{
      
  RenderSignUp()
    }
  });

// Cloths Women's

  Womens.addEventListener('click', (event) => {
    let loggin =   localStorage.getItem('Loggin')
    if(loggin ===  'true'){
     if(!event.target.classList.contains('btns') ) return 
     let index = event.target.dataset.index;
     
     CartArray.push(ClothsWomensData[index])
    }
    else{
      
  RenderSignUp()
    }
  });

// Smart phone

  Phone.addEventListener('click', (event) => {
    let loggin =   localStorage.getItem('Loggin')
    if(loggin ===  'true'){
     if(!event.target.classList.contains('btns') ) return 
     let index = event.target.dataset.index;
     
     CartArray.push(PhonesData.products[index])

    }
    else{
      
  RenderSignUp()
    }
});


const GotoLogIn = ()=>{
PopupLogIN()
}
const GotosignUp = ()=>{
RenderSignUp()
}

  






// start signUp functions

const RenderSignUp = ()=>{
    document.body.innerText = 'LODING....'
      localStorage.setItem('logFrom' , 'true')
      let logFrom =   localStorage.getItem('logFrom')
setTimeout(()=>{
if(logFrom ===  'true'){

  document.body.innerHTML =  `
  
  <div class="signUp">
  <i class="fa-brands fa-adn"></i>
    <h2>Join Us</h1>
    <h4>Create Your New  Account</h4>
<div class="inputsFelid">
<div class="inputs">
<i class="fa-solid fa-user"></i>
<input type="text" placeholder="Full Name" id='FullName'>
</div>
<div class="inputs">
<i class="fa-solid fa-envelope"></i>
<input type="email" placeholder="Email Address" id='Email'>
</div>
<div class="inputs">
<i class="fa-solid fa-lock"></i>
<input type="password" placeholder="Password" id='Password'>
<i class="fa-solid fa-eye" onclick=ShowPassword('text')></i>
</div>
<div class="inputs">
<i class="fa-solid fa-lock"></i>
<input type="password" placeholder="Confirm Password" id='Cpassword' >
<i class="fa-solid fa-eye" onclick=CShowPassword('text')></i>
</div>
<p><input type="checkbox">
<span class="agree">I Agree to the terms & Condition</span>
</p>
<button onclick='CreateAccount()'>Create Account</button>
<p>Already have an Account? <span  onclick='GotoLogIn()'>LogIn</span></p>
</div>
</div>

`
}

},1500)
}

// satrt Show Password

const ShowPassword = (text)=>{
 let Password = document.getElementById('Password')
 if(Password.type === 'password'){
  Password.type = text
 }else{
  Password.type = 'password'
 }
}
const CShowPassword = (text)=>{
 let Cpassword = document.getElementById('Cpassword')
 if(Cpassword.type === 'password'){
  Cpassword.type = text
 }else{
  Cpassword.type = 'password'
 }
}

// start logIn  model

const PopupLogIN = ()=>{
document.body.innerText = 'LODING.....'
  setTimeout(()=>{
document.body.style.textAlign = 'center'
document.body.style.background = ''
    document.body.innerHTML = `
    <center>
    <div style="width: 30%;" class="signUp" id='signUp' >
    <i class="fa-brands fa-adn"></i>
    <h2>Join Us</h1>
    <h4>Create Your New  Account</h4>
<div class="inputsFelid">
<div class="inputs">
    <div class="inputs">
    <i class="fa-solid fa-envelope"></i>
    <input type="email" placeholder="Email Address" id='LEmail'>
    </div>
    <br>
    <div class="inputs">
<i class="fa-solid fa-lock"></i>
<input type="password" placeholder="Password" id='LPassword'>
<i class="fa-solid fa-eye"onclick=LogInShowPassword('text')></i>
</div>
<br>
<button onclick='LoginAccount()'>Login Account</button>
<p>Create To the New Account? <span  onclick='GotosignUp()'>Create Account</span></p>
</div>
</div>
</center>
`
let signUp = document.getElementById('signUp')

signUp.style.display = 'flex'
signUp.style.justifyContent = 'center'
signUp.style.alignItems = 'center'
},2000)
}

// start Log in Password Show
const LogInShowPassword = (text)=>{
 let LPassword = document.getElementById('LPassword')
 if(LPassword.type === 'password'){
  LPassword.type = text
 }else{
  LPassword.type = 'password'
 }
}


// craete account function

const CreateAccount = ()=>{
logOut.style.display = 'block'   
let UsersDetail = JSON.parse(localStorage.getItem('UsersDetail'));
let FullName = document.getElementById('FullName')
 let Email = document.getElementById('Email')
 let Password = document.getElementById('Password')
 let Cpassword = document.getElementById('Cpassword')
 let UsersArray = JSON.parse(localStorage.getItem('UsersDetail')) || []
console.log(UsersDetail);
if(UsersDetail !== null){

   for(let i = 0 ; i < UsersDetail.length ; i++){
      if(UsersDetail[i].Email === Email.value){
          return alert('Already Email Exist')
        }
      
      }
    }
if(FullName.value === '' || Email.value === '' || Password.value === '' || Cpassword.value === '' ){
  alert('Please Enter Value')
  return
}
if(!Email.value.includes('@')  ){
  alert('Missing @')
  return
}
else if( !Email.value.includes('.')){
  alert('Missing .')
  return
}
else if(Password.value.length < 8){
  alert('Password Must be 8 characters')
}
else if(Password.value  !== Password.value.charAt(0).toUpperCase()+Password.value.slice(1)){
  alert('Password Must be 1st Letter Capital characters')
}
else if(!Password.value.includes('!') &&!Password.value.includes('@') &&!Password.value.includes('#') &&
!Password.value.includes('$')&& !Password.value.includes('%') &&
!Password.value.includes('^') &&!Password.value.includes('&')
){
  alert('Password Must be One Special characters ! @ # $ % ^ &')
}
else if(Password.value !== Cpassword.value){
  alert('Password not Match')
}else{
  alert('Create Account Sucess Fully')
localStorage.setItem('Loggin' , 'true')
 localStorage.setItem('logFrom' , 'false')
 UsersArray.push({
   FullName : FullName.value,
   Email : Email.value,
   Password : Password.value,
  })
  localStorage.setItem('UsersDetail' , JSON.stringify(UsersArray))
  location.reload()
}
} 

// start LogIn Function
let flag = false
let flag1 = false

const LoginAccount = () => {
  let LEmail = document.getElementById('LEmail')
  let LPassword = document.getElementById('LPassword')
  let UsersData = JSON.parse(localStorage.getItem('UsersDetail'))

 

  if (LEmail.value === '' || LPassword.value === '') {
    alert('Please Enter Input')
    return
  }

  for (let i = 0; i < UsersData.length; i++) {
    if (UsersData[i].Email === LEmail.value) {
      flag = true
      if (UsersData[i].Password === LPassword.value) {
        flag1 = true
        break
      }
    }
  }

  if (flag && flag1) {
    localStorage.setItem('Loggin', 'true')
    localStorage.setItem('logFrom', 'false')
    location.reload()
  } else {
    alert('Some Thing Went Wrong')
  }
}
 
// logOut functions
if(logOut){
  logOut.addEventListener('click' , ()=>{
    localStorage.setItem('Loggin' , 'false')
    location.reload()
  })
}

// Routing Component
function checkRountingFrom(){

  let logFrom =   localStorage.getItem('logFrom')
  if(logFrom ===  'true'){
   
    RenderSignUp()
  }
}
checkRountingFrom()

const CheckLogginBtns = ()=>{
  let Loggin = localStorage.getItem('Loggin')
  if(Loggin === 'true'){
    logOut.style.display = 'block'
  }
  else{
    logOut.style.display = 'none'
  }
}
CheckLogginBtns()


// start Cart Add Button
let cartAdd = document.getElementById('cartAdd')
if(cartAdd){ 
cartAdd.addEventListener('click' , ()=>{
let CartBox = document.getElementById('CartBox')
let top = document.getElementById('top')
let totlePrice = document.getElementById('totlePrice')
let arrPrice = []
top.innerHTML = ''
if(CartArray[0]){

  CartArray.forEach((e , i)=>{
    top.innerHTML += `<div class ='items'> 
   <p>
  <span>Quntity</span>
  <span>${i+1}</span>
  </p>
  <p>
  <span>Brand</span>
  <span>${e.title}</span>
  </p>
  <p>
  <span>Price</span>
  <span>${e.price}</span>
  </p> 
  </div>`
  
  CartBox.classList.toggle('CartBoxShow')
  
  arrPrice.push(e.price)
  
// totlePrice.innerHTML+= prices
})
console.log(arrPrice);
let Ammount = arrPrice.reduce((a , b)=>{
return a + b
  
})
totlePrice.innerHTML = Ammount;

}
else{
  alert('Add Cart')
}

})
}

// payments Done


let done = document.getElementById('done')
if(done){
  done.addEventListener('click' , ()=>{
    setTimeout(()=>{
      
      location.reload()
    },2000)
    document.body.innerText = 'Add Cart Done Payment...'
  })
}