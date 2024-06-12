import './search-box.styles.css';

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <input 
      className={`search-box ${className}`}
      type='search' 
      placeholder={placeholder}
      onChange={onChangeHandler}
  />
);

// Class component equivalent

// import { Component } from "react";

// class SearchBox extends Component {
//   render() {
//     const { onChangeHandler, placeholder, className } = this.props;
//     return (
//         <input 
//             className={`search-box ${className}`}
//             type='search' 
//             placeholder={placeholder}
//             onChange={onChangeHandler}
//         />
//     );
//   }
// }

export default SearchBox;