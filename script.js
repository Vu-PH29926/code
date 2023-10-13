// const  btnScrollTo =  document.querySelector('.btn-scroll-to');
// const section1 = document.querySelector('#section-1');
// btnScrollTo.addEventListener('click', function (e){
//     const s1corrds = section1.getBoundingClientRect();
//     console.log(s1corrds);

//     console.log(e.target.getBoundingClientRect());

//     console.log('current sroll (X/Y' ,window.pageXOffset, pageYOffset);

//     console.log(
//         'height/width viewport',
//         document.documentElement.clientHeight,
//         document.documentElement.clientWidth,
//     );

//     section1.scrollIntoView({behavior: 'smooth'});
// });

//5.3
// const radomInt = (min,max) =>
//   Math.floor(Math.random() * (max - min  + 1) + min );
// const radomColor = () =>
// `rgb(${radomInt(0,255)},${radomInt(0,255)},${radomInt()})`;


// document.querySelector('.nav-link').addEventListener
// ('click', function (e){
//     this.style.backgroundColor = radomColor();
//     console.log('LINK',e.target);
// });

// document.querySelector('.nav-link').addEventListener
// ('click', function (e){
//     this.style.backgroundColor = radomColor();
//     console.log('CONTAINER',e.target);
// });

// document.querySelector('.nav-link').addEventListener
// ('click', function (e){
//     this.style.backgroundColor = radomColor();
//     console.log('NAV',e.target);
// });

//5.4
section1.scrollIntaView({behavior:'smooth'});

//page navigaion
// document.querySelectorAll('.nav__link').forEach
// (function(e){
//     el.addEventListener('click', function(e){
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntaView({
//             behavior: 'smooth'
//         });
//     });
// });

//1.Add event listener to common parent element 
//2.Determine what element originated the event 

document.querySelector('.nav__links').addEventListener
('click',function(e){
    e.preventDefault();

    //matching strateg
    if(e.target.classList.contains('nav__libk')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntaView({
            behavior : 'smooth'
        })
    }
});

 