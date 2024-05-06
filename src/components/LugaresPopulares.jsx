import React from 'react';
import comuna13 from '../images/comuna13.jpg';
import jardinBotanico from '../images/jardinBotanico.jpg';
import peñol from '../images/peñol.jpg';
import './LugaresPopulares.css';

const LugaresPopulares = () => {
    const lugares = [
        {
            titulo: 'Comuna 13',
            descripcion: 'La Comuna 13, en Medellín, es mucho más que un simple vecindario; es un testimonio vivo de la resiliencia y el poder transformador de una comunidad. Conocida por su turbulento pasado, esta área ha experimentado una increíble metamorfosis en las últimas décadas. Lo que alguna vez fue considerado uno de los lugares más peligrosos de la ciudad, se ha convertido en un vibrante centro de creatividad y esperanza. Sus calles están adornadas con murales coloridos y expresivos, que cuentan historias de resistencia, resiliencia y esperanza. Cada obra de arte callejero es un tributo a la fuerza del espíritu humano y un recordatorio de que la belleza puede surgir incluso en los lugares más inesperados. La Comuna 13 es ahora un destino turístico popular, donde los visitantes pueden sumergirse en su vibrante cultura, disfrutar de la música y la danza, y aprender sobre su fascinante historia de transformación. Más que un simple barrio, la Comuna 13 es un símbolo de la capacidad de las comunidades para reinventarse a sí mismas y crear un futuro lleno de esperanza y posibilidades.',
            imagenURL: comuna13,
        },
        {
            titulo: 'Jardín Botánico',
            descripcion: 'El Jardín Botánico de Medellín es un verdadero paraíso natural en el corazón de la ciudad. Conocido por su exuberante belleza y su diversidad biológica, este jardín encantado es un refugio para la mente y el espíritu. Al adentrarse en sus senderos sombreados, los visitantes son recibidos por una impresionante variedad de plantas, desde exóticas flores tropicales hasta majestuosos árboles centenarios. El aire está lleno de fragancias embriagadoras y el sonido melodioso de las aves que revolotean entre las copas de los árboles. Este oasis verde también es el hogar de una amplia variedad de especies de aves, que encuentran refugio en sus frondosos rincones. Los colores brillantes de los plumajes y el canto alegre de las aves añaden una dimensión mágica a la experiencia, transportando a los visitantes a un mundo de maravilla y asombro. Ya sea paseando tranquilamente por sus jardines o simplemente contemplando la belleza que lo rodea, el Jardín Botánico de Medellín ofrece una experiencia inolvidable para todos los que tienen el privilegio de visitarlo.',
            imagenURL: jardinBotanico,
        },

        {
            titulo: 'Piedra del peñol',
            descripcion: 'La Piedra del Peñol, una maravilla natural imponente que se alza majestuosa en el paisaje colombiano, es mucho más que una simple formación rocosa; es un símbolo de la grandeza y la belleza de la naturaleza. Conocida por su imponente presencia y sus impresionantes vistas panorámicas, esta colosal roca atrae a visitantes de todo el mundo. Ascender sus escalones tallados en la piedra es una experiencia única, que ofrece no solo una vista espectacular desde su cima, sino también la oportunidad de sentir la conexión profunda con la tierra y el cielo. Desde lo alto de la Piedra del Peñol, el paisaje se despliega ante los ojos maravillados, revelando la magnificencia de la región con sus verdes valles, serenos lagos y picos montañosos que se pierden en el horizonte. Cada paso hacia la cima es un recordatorio del poder y la majestuosidad de la naturaleza, una invitación a contemplar la belleza que nos rodea y a reflexionar sobre nuestro lugar en el universo. La Piedra del Peñol es, en esencia, una joya de la naturaleza que nos recuerda la grandeza y la maravilla del mundo en el que vivimos.',
            imagenURL: peñol,
        },
        
    ];

    return (
        <div className="lugares-populares">
            <h2>Lugares Populares</h2>
            {lugares.map((lugar, index) => (
                <div key={index} className="lugar1">
                    <div className="image-container1">
                        <img src={lugar.imagenURL} alt={lugar.titulo} />
                    </div>
                    <div className="info-container1">
                        <h2>{lugar.titulo}</h2>
                        <p>{lugar.descripcion}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LugaresPopulares;

