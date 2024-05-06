import React from 'react';
import arvi from '../images/arvi.jpg';
import pueblito from '../images/pueblito.jpg';
import './LugaresTranscurridos.css';

const LugaresTranscurridos = () => {
    const lugares = [
        { 
            titulo: 'Parque Arví',
            descripcion: 'El Parque Arví, un tesoro natural en las afueras de Medellín, ofrece una experiencia verdaderamente enriquecedora para aquellos que buscan conectar con la belleza y la serenidad de la naturaleza. Este exuberante parque natural es mucho más que un simple destino turístico; es un santuario donde los visitantes pueden sumergirse en la tranquilidad de los bosques, explorar senderos sinuosos y descubrir la rica biodiversidad que habita en su interior. Con sus extensos senderos de senderismo, el Parque Arví invita a los aventureros a adentrarse en sus rincones más remotos, donde serán recompensados con vistas impresionantes y la oportunidad de encontrarse cara a cara con la vida silvestre local. Además, sus pintorescas zonas de picnic ofrecen el escenario perfecto para disfrutar de un día al aire libre en compañía de familiares y amigos, compartiendo risas y creando recuerdos inolvidables. En el Parque Arví, la armonía entre el hombre y la naturaleza es palpable, y cada visita es una oportunidad para renovar nuestro aprecio por el mundo natural que nos rodea.',
            imagenURL: arvi
        },
        {
            titulo: 'Pueblito Paisa',
            descripcion: 'El Pueblito Paisa es un encantador oasis que transporta a sus visitantes a través del tiempo y el espacio, ofreciendo una ventana a la rica historia y cultura de Antioquia. Situado en lo alto de una colina con vistas panorámicas de la ciudad de Medellín, este pintoresco pueblo replica fielmente la arquitectura y el encanto de los pueblos antioqueños tradicionales. Al caminar por sus calles empedradas y estrechas, uno se encuentra inmerso en un ambiente de nostalgia y autenticidad, donde las casas de colores brillantes y las plazas adoquinadas evocan la esencia misma de la vida rural en Colombia. Desde la iglesia hasta la plaza principal, cada rincón del Pueblito Paisa cuenta una historia, ofreciendo a los visitantes una visión fascinante de la vida cotidiana en el pasado. Además de su encanto arquitectónico, el Pueblito Paisa también ofrece vistas impresionantes de la ciudad y sus alrededores, proporcionando un telón de fondo espectacular para una experiencia inolvidable. En resumen, el Pueblito Paisa es mucho más que una simple réplica; es un tributo a la herencia cultural y la identidad única de la región de Antioquia.',
            imagenURL: pueblito
        },
        
    ];

    return (
        <div>
            <h2>Lugares Transcurridos</h2>
            {lugares.map((lugar, index) => (
               <div key={index} className="lugar2">
               <div className="image-container2">
                   <img src={lugar.imagenURL} alt={lugar.titulo} />
               </div>
               <div className="info-container2">
                   <h2>{lugar.titulo}</h2>
                   <p>{lugar.descripcion}</p>
               </div>
           </div>
            ))}
        </div>
    );
}

export default LugaresTranscurridos;

