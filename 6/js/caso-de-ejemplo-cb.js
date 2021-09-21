// Base de datos
const usuarios = [
    { username: 'tincho', id: 1 },
    { username: 'gabi', id: 2 }
]

// Este es nuestro sistema


// function de tarea
const recuperarUsuario = (id) => {
    console.log(`Recuperando el usuario ${id} de la base de datos...`);
    return { username: 'gabi', id: 2 }
};

// funciones post-tarea
const mostrarUsername = (usuario) => console.log(usuario.username)
const modificarUsername = (usuario) => {
    usuario.username = 'martin'
}

// No se cambia
const fn = (tarea, id, listo) => {
    const usuario = tarea(id);
    listo(usuario);
    console.log(usuario)
};

fn(recuperarUsuario, 2, modificarUsername);

// Un callback es una fn que es enviada a otra fn
// 1. Personalizar el funcionanmeinto de una fn, sin modificarla
// 2. Pueda avisarnos sobre la finalizacion de una tarea o hacer algo al final de una
