import React from 'react';
import foto1 from '../images/foto1.jpg';
import foto2 from '../images/foto2.jpg';
import foto3 from '../images/foto3.jpg';
import foto4 from '../images/foto4.jpg';
import foto5 from '../images/foto5.jpg';
import './GaleriaImagenes.css';


const GaleriaImagenes = () => {
    const imagenes = [
        {
            titulo: 'La Eterna primavera',
            descripcion: 'En el corazón de Medellín, la ciudad de la eterna primavera, el clima acoge con un perpetuo abrazo de suavidad y frescura. Aquí, las estaciones parecen fusionarse en una danza eterna, donde la primavera es la protagonista indiscutible. Los días se despliegan con una luz dorada y un cielo azul que se extiende sin fin, mientras las flores adornan cada rincón con su colorido vibrante. En los parques y jardines, la vida florece en una sinfonía de colores y aromas, invitando a todos a sumergirse en la belleza natural que rodea la ciudad. Los habitantes de Medellín, acostumbrados a esta constante primavera, llevan consigo el espíritu cálido y acogedor de esta estación eterna, tejiendo un tejido de esperanza y alegría que impregna cada calle y cada rincón de esta tierra bendecida por la eterna primavera.',
            imagenURL: foto1,
        },
        {
            titulo: 'Amor',
            descripcion: 'En esta región, el amor se teje en cada rincón, como un hilo invisible que une los corazones de quienes habitan este lugar. Es un lugar donde el romance flota en el aire, impregnando cada calle, cada cafetería y cada parque con su dulce esencia. Aquí, el paisaje se convierte en el escenario perfecto para los enamorados, con montañas que se alzan majestuosas en el horizonte y valles que se extienden en una sinfonía de verdor. Los atardeceres pintan el cielo con tonos cálidos y suaves, creando un telón de fondo perfecto para las historias de amor que se desarrollan en esta tierra. En cada mirada, en cada sonrisa, se puede sentir la magia del amor que envuelve a esta región, convirtiéndola en un lugar donde los corazones encuentran su hogar.',
            imagenURL: foto2,
        },
        {
            titulo: 'Madre Tierra',
            descripcion: 'El contacto con nuestra madre tierra nos llena de una profunda felicidad, como el abrazo cálido de un ser querido después de mucho tiempo. Es un reencuentro con nuestras raíces, con la esencia misma de nuestra existencia. En cada paso que damos sobre su suelo, podemos sentir su pulso latente, el latido constante de la vida que fluye a través de ella. Sus paisajes nos sorprenden con su belleza inigualable, desde las montañas imponentes hasta los valles serenos y los ríos que serpentean entre ellos como venas que alimentan su corazón. Cada brizna de hierba, cada hoja, cada flor, es un recordatorio de la generosidad infinita de nuestra madre tierra, que nos acoge con los brazos abiertos y nos brinda todo lo que necesitamos para prosperar. En su presencia, nos sentimos completos, conectados con algo más grande que nosotros mismos, recordando que somos parte de un ciclo eterno de vida y renovación.',
            imagenURL: foto3,
        },
        {
            titulo: 'Pureza',
            descripcion: 'La pureza del aire se refleja en la pureza de tus ojos, claros como el cielo despejado en una mañana de primavera. En ellos, se refleja la inocencia y la bondad que solo un niño puede irradiar, sin la mancha del mundo que corrompe, solo la esencia más pura de la humanidad. Cada mirada es como un destello de luz que ilumina el alma, recordándonos la belleza simple y verdadera que habita en lo más profundo de nuestro ser. Como el aire que respiramos, tus ojos son una fuente de frescura y claridad, llenándonos de esperanza y renovando nuestra fe en la bondad del mundo. En ellos encontramos un refugio de paz y serenidad, un recordatorio de que, incluso en los momentos más oscuros, la pureza siempre prevalece.',
            imagenURL: foto4,
        },
        {
            titulo: 'Cuarta Dimensión',
            descripcion: 'En la naturaleza, experimentamos el desdoblamiento de nuestra percepción, como si entráramos en una cuarta dimensión donde el tiempo y el espacio se entrelazan en una danza eterna. Es como si nos sumergiéramos en un mundo donde cada árbol, cada río, cada montaña tiene una historia que contar, una vida propia que transcurre en un tiempo que trasciende nuestro entendimiento lineal. En este reino de la cuarta dimensión, somos testigos de la interconexión de todas las cosas, donde cada evento está entrelazado con otro en una red infinita de causas y efectos. Nos desdoblamos en la vastedad del paisaje, fundiéndonos con la naturaleza misma y experimentando la sensación de ser uno con todo lo que nos rodea. En este estado de conexión profunda, somos transportados más allá de los límites de nuestra percepción ordinaria, hacia un lugar donde el tiempo se detiene y el universo se revela en toda su magnificencia.',
            imagenURL: foto5,
        },
    ];

    return (
        <div>
            <h1>Galería de Imágenes</h1>
            <div className="gallery">
                {imagenes.map((imagen, index) => (
                    <div key={index} className="image-card">
                        <div className="image-container">
                            <img src={imagen.imagenURL} alt={imagen.titulo} />
                        </div>
                        <div className="info-container">
                            <h2>{imagen.titulo}</h2>
                            <p>{imagen.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GaleriaImagenes;

