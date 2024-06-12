import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component.jsx";

const CardList = ({ characters }) => (
  <div className="card-list">
    {characters.map((character) => {
      return (
        <CardContainer character={character} />
      );
    })}
  </div>
)

// Class component equivalent

// import { Component } from "react";

// class CardList extends Component {
//   render () {
//     const { characters } = this.props;

//     return (
//       <div className="card-list">
//         {characters.map((character) => {
//           return (
//             <CardContainer character={character} />
//           );
//         })}
//       </div>
//     );
//   }
// }

// if they don't look for something speciic in file, just give them CardList
export default CardList;