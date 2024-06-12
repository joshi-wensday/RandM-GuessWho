import './card-container.styles.css'

const CardContainer = ({ character, display }) => {
    const { id, name, species, gender, origin, isVisible } = character;
    const { name: originName } = origin || {}; // Destructure name from origin, provide a default empty object

    return (
        <div className="card-container" key={id}>
            <img src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} alt={`character ${name}`} />
            <h2 className={isVisible ? "show" : "hidden"}>{name}</h2>
            <p>{gender} - {species}</p>
            <p>Origin: {originName}</p>
        </div>
    );
}

// Class component equivalent

// import { Component } from "react";

// class CardContainer extends Component {
//     render () {
//         const { id, name, species, gender, origin } = this.props.character;
//         const { name: originName } = origin || {}; // Destructure name from origin, provide a default empty object
//         return (
//             <div className="card-container" key={id}>
//                 <img src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} alt={`character ${name}`} />
//                 <h2>{name}</h2>
//                 <p>{gender} - {species}</p>
//                 <p>Origin: {originName}</p>
//             </div>
//         );
//     }
// }

export default CardContainer;

