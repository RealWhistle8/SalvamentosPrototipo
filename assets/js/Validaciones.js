function SaveDoc(){
    Swal.fire({
        title: '¿Desea guardar cambios?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
    
})
}

function SaveDate(){
  Swal.fire({
   
    icon: 'success',
    title: 'Fecha de Traslado Confirmada',
    showConfirmButton: false,
    timer: 1500
  })
}

function SaveChanges(){
  Swal.fire({
   
    icon: 'success',
    title: 'Cambios Guardados',
    showConfirmButton: false,
    timer: 1500
  })
}

function SaveInventario(){
  Swal.fire({
   
    icon: 'success',
    title: 'Inventario Cargado Correctamente',
    showConfirmButton: false,
    timer: 1500
  })
}