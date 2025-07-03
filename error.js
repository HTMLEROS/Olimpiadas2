function avisoPagContruccion() {
    alert("Página en contruccón")
}

function mantenimiento(hora) {
    Swal.fire({
      title: '⚠️ Atención',
      text: `La página está en mantenimiento. Vuelva a las ${hora} hrs.`,
      icon: 'warning',
      confirmButtonText: 'Salir',
      confirmButtonColor: '#3085d6',
      backdrop: true,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "https://htmleros.github.io/inicio";
      }
    });
  }

function mantenimiento(error) {
  Swal.fire({
    title: 'ERROR',
    text: `Algo ha fallado.... ERR:${error}.`,
    icon: 'error',
    confirmButtonText: 'Salir',
    confirmButtonColor: '#3085d6',
    backdrop: true,
    allowOutsideClick: false
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "mantenimiento.html";
    }
  });
}

function seccionContruccion(seccion) {
  Swal.fire({
    title: 'Algo ha salido mal...',
    text: `La sección "${seccion}" aún no está disponible.`,
    icon: 'error',
    confirmButtonText: 'Volver atrás',
    confirmButtonColor: '#3085d6',
    backdrop: true,
    allowOutsideClick: false
  });
}

  function aviso(aviso) {
    Swal.fire({
      title: '📣 Aviso',
      text: `${aviso} -Administración.`,
      icon: 'info',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#3085d6',
      backdrop: true,
      allowOutsideClick: false
    });
  }
  
