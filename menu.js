/*
    Cuando el cliente seleccione un pedido
    deberia mostrarse en la pagina y
    si el cliente elige otro pedido se
    muestra esta ultima seleccion.
 */

// Se crean constantes para las ordenes.

const ORDEN_PIZZA = 1;
const ORDEN_MILA = 2;
const ORDEN_CAFE = 3;

// A la orden sellecionada le sigue una imagen representativa de esa orden.
const IMG_PIZZA = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgustotv.com%2Fwp-content%2Fuploads%2F2020%2F04%2FOWK_2032_Neapolitan-Pizza_horizontal_ver1-scaled.jpg&f=1&nofb=1";
const IMG_MILA = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.tasteatlas.com%2Fimages%2Fdishes%2F8ae6e3c99b2d41a2a15c57d23a337b4e.jpg&f=1&nofb=1";
const IMG_CAFE = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Xz9rGUgyYVg0AshuS5lEAQHaE8%26pid%3DApi&f=1";

/**
 * Esta funcion recibe el id del boton
 * seleccionado y envia la orden correspondiente.
 * Se usa la estructura selectiva 'switch' para 
 * buscar el id indicado entre los demas ids.
 */
function enviarOrden(id) {
    /* 
    El constructor 'number' obliga al id a ser de tipo number.
    'swith' usa igual estricto ===, para decidir igualdades.
    Valor y tipo de datos deben ser iguales.
    */
    switch (Number(id)) {
        case ORDEN_PIZZA:
            document.querySelector('#ordenRealizada').innerHTML=`
                <h2>Orden de pizza.</h2>
                <img width="400px" src=${IMG_PIZZA}>
            
            `;
            break;

        case ORDEN_MILA:
            document.querySelector('#ordenRealizada').innerHTML=`
                <h2>Orden de milanesa.</h2>
                <img width="400px" src=${IMG_MILA}>
            
            `;
            break;

        case ORDEN_CAFE:
            document.querySelector('#ordenRealizada').innerHTML=`
                <h2>Orden de cafe.</h2>
                <img width="400px" src=${IMG_CAFE}>
            
            `;
            break;
        default:


    }
}