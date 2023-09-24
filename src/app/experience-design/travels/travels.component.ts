import { Component } from '@angular/core';
import { Travel } from 'src/app/models/travel';



@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent {

  travels: Travel[] = [
    {
        titulo: "Paradise Island",
        descripcion: "Un lugar tropical para descansar y disfrutar.",
        logo: "url_to_paradise_island_logo",
        correo: "contact@paradiseisland.com",
        telefono: 1234567890,
        fechaRegistro: "2022-01-05",
        precio: 2500.00,
        photo1: "url_to_photo1",
        photo2: "url_to_photo2",
        photo3: "url_to_photo3",
        photo4: "url_to_photo4",
        photo5: "url_to_photo5",
        activities: [
            { titulo: "Snorkeling", descripcion: "Explora el mundo submarino." },
            { titulo: "Fiesta en la Playa", descripcion: "Baila al ritmo del mar." }
        ]
    },
    {
        titulo: "Montaña Mística",
        descripcion: "Un retiro espiritual en la cima del mundo.",
        logo: "url_to_montana_mistica_logo",
        correo: "contact@montanamistica.com",
        telefono: 9876543210,
        fechaRegistro: "2021-10-15",
        precio: 1800.00,
        photo1: "url_to_montana_photo1",
        photo2: "url_to_montana_photo2",
        photo3: "url_to_montana_photo3",
        photo4: "url_to_montana_photo4",
        photo5: "url_to_montana_photo5",
        activities: [
            { titulo: "Meditación", descripcion: "Encuentra tu paz interior." },
            { titulo: "Trekking", descripcion: "Un recorrido por senderos místicos." }
        ]
    },
    {
        titulo: "Safari Africano",
        descripcion: "Aventura salvaje en la sabana africana.",
        logo: "url_to_safari_logo",
        correo: "contact@safariafricano.com",
        telefono: 1122334455,
        fechaRegistro: "2022-05-12",
        precio: 3200.00,
        photo1: "url_to_safari_photo1",
        photo2: "url_to_safari_photo2",
        photo3: "url_to_safari_photo3",
        photo4: "url_to_safari_photo4",
        photo5: "url_to_safari_photo5",
        activities: [
            { titulo: "Avistamiento de Animales", descripcion: "Observa leones, elefantes y más." },
            { titulo: "Campamento Nocturno", descripcion: "Una noche bajo las estrellas." }
        ]
    },
    {
        titulo: "Tour por Europa",
        descripcion: "Descubre las maravillas del viejo continente.",
        logo: "url_to_europa_logo",
        correo: "contact@europatour.com",
        telefono: 2233445566,
        fechaRegistro: "2021-12-10",
        precio: 4500.00,
        photo1: "url_to_europa_photo1",
        photo2: "url_to_europa_photo2",
        photo3: "url_to_europa_photo3",
        photo4: "url_to_europa_photo4",
        photo5: "url_to_europa_photo5",
        activities: [
            { titulo: "Visita a París", descripcion: "La ciudad del amor te espera." },
            { titulo: "Tour por Roma", descripcion: "Explora la historia de la capital italiana." }
        ]
    },
    {
        titulo: "Escapada al Caribe",
        descripcion: "Playas de arena blanca y aguas cristalinas.",
        logo: "url_to_caribe_logo",
        correo: "contact@caribeescapada.com",
        telefono: 3344556677,
        fechaRegistro: "2022-02-20",
        precio: 2000.00,
        photo1: "url_to_caribe_photo1",
        photo2: "url_to_caribe_photo2",
        photo3: "url_to_caribe_photo3",
        photo4: "url_to_caribe_photo4",
        photo5: "url_to_caribe_photo5",
        activities: [
            { titulo: "Paseo en Yate", descripcion: "Navega por el mar Caribe." },
            { titulo: "Clase de Buceo", descripcion: "Descubre la vida marina." }
        ]
    },
    {
        titulo: "Aventura en Asia",
        descripcion: "Explora templos milenarios y paisajes impresionantes.",
        logo: "url_to_asia_logo",
        correo: "contact@asiaaventura.com",
        telefono: 5566778899,
        fechaRegistro: "2022-03-18",
        precio: 3800.00,
        photo1: "url_to_asia_photo1",
        photo2: "url_to_asia_photo2",
        photo3: "url_to_asia_photo3",
        photo4: "url_to_asia_photo4",
        photo5: "url_to_asia_photo5",
        activities: [
            { titulo: "Visita a la Gran Muralla", descripcion: "Un ícono mundial en China." },
            { titulo: "Yoga en Bali", descripcion: "Relajación en un paraíso tropical." }
        ]
    },
    {
        titulo: "Expedición Polar",
        descripcion: "Aventura helada en los polos del planeta.",
        logo: "url_to_polar_logo",
        correo: "contact@expedicionpolar.com",
        telefono: 6677889900,
        fechaRegistro: "2022-04-08",
        precio: 5000.00,
        photo1: "url_to_polar_photo1",
        photo2: "url_to_polar_photo2",
        photo3: "url_to_polar_photo3",
        photo4: "url_to_polar_photo4",
        photo5: "url_to_polar_photo5",
        activities: [
            { titulo: "Visita a Glaciares", descripcion: "Maravillas naturales de hielo." },
            { titulo: "Avistamiento de Pinguinos", descripcion: "Observa estas aves en su hábitat natural." }
        ]
    },
    {
        titulo: "Viaje al Amazonas",
        descripcion: "Descubre la majestuosidad de la selva tropical.",
        logo: "url_to_amazonas_logo",
        correo: "contact@amazonasviaje.com",
        telefono: 7788990011,
        fechaRegistro: "2021-07-14",
        precio: 2900.00,
        photo1: "url_to_amazonas_photo1",
        photo2: "url_to_amazonas_photo2",
        photo3: "url_to_amazonas_photo3",
        photo4: "url_to_amazonas_photo4",
        photo5: "url_to_amazonas_photo5",
        activities: [
            { titulo: "Paseo en Canoa", descripcion: "Navega por el río Amazonas." },
            { titulo: "Trekking en la Selva", descripcion: "Aventura entre la biodiversidad." }
        ]
    },
    {
        titulo: "Desierto Dorado",
        descripcion: "La magia y misterio de los desiertos arenosos.",
        logo: "url_to_desierto_logo",
        correo: "contact@desiertodorado.com",
        telefono: 8899001122,
        fechaRegistro: "2022-06-21",
        precio: 2100.00,
        photo1: "url_to_desierto_photo1",
        photo2: "url_to_desierto_photo2",
        photo3: "url_to_desierto_photo3",
        photo4: "url_to_desierto_photo4",
        photo5: "url_to_desierto_photo5",
        activities: [
            { titulo: "Paseo en Camello", descripcion: "Viaja como los antiguos nómadas." },
            { titulo: "Noche bajo las Estrellas", descripcion: "Un cielo inigualable en el desierto." }
        ]
    },
    {
        titulo: "Odisea Oceánica",
        descripcion: "Explora las profundidades del océano y sus islas.",
        logo: "url_to_oceano_logo",
        correo: "contact@odiseaoceanica.com",
        telefono: 9900112233,
        fechaRegistro: "2021-08-30",
        precio: 4000.00,
        photo1: "url_to_oceano_photo1",
        photo2: "url_to_oceano_photo2",
        photo3: "url_to_oceano_photo3",
        photo4: "url_to_oceano_photo4",
        photo5: "url_to_oceano_photo5",
        activities: [
            { titulo: "Buceo Profundo", descripcion: "Encuentra tesoros ocultos." },
            { titulo: "Picnic en Isla Desierta", descripcion: "Disfruta de la tranquilidad del mar." }
        ]
    }
  ];


}
