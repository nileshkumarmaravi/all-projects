 burger = document.querySelector('.burger')
 navbar = document.querySelector('.navbar')
 navlist = document.querySelector('.nav-list')
 rightnav = document.querySelector('.rightnav')


  burger.addEventlistener('click',() =>{
    navbar.classlist.toggle('v-class');
   navlist.classlist.toggle('v-class');
   navbar.classlist.toggle('h-nav');

    
  })