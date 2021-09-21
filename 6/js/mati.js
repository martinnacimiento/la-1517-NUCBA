const paises = [":flag_br:", ":flag_au:", ":flag_bo:", ":flag_ar:", ":flag_jp:", ":flag_it:", ":flag_ru:"];
const lugares = ["Rio", "Roma", "BsAs", "Tokyo", "La Paz", "Moscu"];

// function de tarea
const fnCustom = (lugar) => {
    console.log(`Procesamiento de datos de 1 millon de registros...`);
};

// funciones de notificacion
const avisoWpp = () => console.log('Se avisa por wpp')
const avisoFb = () => console.log('Se avisa por fb')
const avisoSlack = () => console.log('Se avisa por slack')

// No se cambia
const fn = (cb, lugar, listo) => {
    cb(lugar);
    listo();
};

fn(fnCustom, lugares[1], avisoFb);

// Un callback es una fn que es enviada a otra fn
// 1. Personalizar el funcionanmeinto de una fn, sin modificarla
// 2. Pueda avisarnos sobre la finalizacion de una tarea o hacer algo al final de una
