function cesar(){
    Swal.fire({
        
        imageUrl: './assets/MCCOY.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })

}

function weddings(){
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'We are working on this section to give you the best experience!',
    footer: '<p>Dont worry</p>'
  })
}
function weddings_es(){
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: '¡Estamos trabajando en esta sección para brindarte la mejor experiencia!',
    footer: '<p>Dont worry</p>'
  })
}

function serve(){

  Swal.fire({
    title: '<strong>Services</strong>',
    
    html:
      'select one of our services' +
      '<p><a href="./for_her.html">For Her</a></p>' +
      '<p><a href="./for_him.html">For Him</a></p>'+
      '<p><a href="#" onclick="weddings()">Weddings</a></p>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    
  })
}



function serve_es(){

  Swal.fire({
    title: '<strong>Servicios</strong>',
    
    html:
      'Selecciona uno de nuestros servicios' +
      '<p><a href="./For_her_es.html">Para ella</a></p>' +
      '<p><a href="./for_him_es.html">Para el</a></p>'+
      '<p><a href="#" onclick="weddings_es()">Bodas</a></p>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    
  })
}


function envents(){
 
  Swal.fire({
    title: '<strong>Events</strong>',
    
    html:
      'select one of our events' +
      '<p><a href="./event_1.html">2022 Summer Issiue</a></p>' +
      '<p><a href="#" onclick="weddings()">Miss Colombia</a></p>',
      
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    
  })
}

function enventos(){
 
  Swal.fire({
    title: '<strong>Eventos</strong>',
    
    html:
      'selecciona uno de nuestros eventos' +
      '<p><a href="./event_1_es.html">2022 Summer Issiue</a></p>' +
      '<p><a href="#" onclick="weddings_es()">Miss Colombia</a></p>',
      
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    
  })
}