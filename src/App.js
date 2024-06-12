import { useState, useEffect } from 'react';

import SearchBox from './components/search-box/search-box.component.jsx';
import CardList from './components/card-list/card-list.component.jsx';
import Button from './components/button/button.component.jsx'
import './App.css';


const App = () => {

  const [searchTerm, setSearchTerm] = useState(''); // [value, setValue]
  const [characters, setCharacters] = useState([]);
  const [trueCharacters, setTrueCharacters] = useState([characters]);
  const [displayedCharacters, setDisplayedCharacters] = useState([characters]);
  const [filteredCharacters, setFilteredCharacters] = useState([characters]);
  const [isAllVisible, setIsAllVisible] = useState(false);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
     .then((response) => response.json())
     .then((data) => {
        const charactersWithVisibility = data.results.map((character) => ({
          ...character,
          isVisible: false,
        }));
        setCharacters(charactersWithVisibility);
        setDisplayedCharacters(charactersWithVisibility);
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchChange = (event) => {
    const searchTermString = event.target.value.toLocaleLowerCase();
    setSearchTerm(searchTermString);
  };

  const onButtonClick = () => {
    if (isAllVisible === true) {
      setIsAllVisible(false);
    }
    else {
      setIsAllVisible(true);
    }
  };

  const updateCharacterVisibility = (characters, searchTerm) => {
    return characters.map((character) => {
      if (character.name && character.name.toLowerCase() === searchTerm) {
        return {
          ...character,
          isVisible: true,
        };
      }
      return character;
    });
  };

  useEffect(() => {
    const allTrueCharacters = characters.map((character) => {
      return {
       ...character,
        isVisible: true,
      };
    });
    setTrueCharacters(allTrueCharacters);
  }, [characters]);

  useEffect(() => {
    const updatedCharacters = updateCharacterVisibility(displayedCharacters, searchTerm);
    setDisplayedCharacters(updatedCharacters);
  }, [searchTerm, characters]);

  useEffect(() => {
    const newFilteredCharacters = displayedCharacters.filter((character) => {
      return character.name && character.name.toLowerCase().includes(searchTerm);
    });
    setFilteredCharacters(newFilteredCharacters);
  }, [searchTerm, displayedCharacters]);
  

  return (
    <div className="App">
      <div className="title-container">
        <h1 className='app-title'>Rick & Morty - Guess Who</h1>
      </div>
      <div className="container">
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder="search characters :)" 
          className="characters-search-box" 
        />
        <Button 
          onClick={onButtonClick}
          className="characters-display-button"
          buttonText={isAllVisible? 'Hide Names' : 'Show Names'}
        />
      </div>

      <CardList 
        characters={isAllVisible? trueCharacters : filteredCharacters}
      />
      
    </div>
  );
}

// Class component equivalent:

// import { Component } from 'react';

// class App extends Component {
//  constructor() {
//     super();
//     this.state = {
//       characters: [],
//       searchTerm: '',
//     }
//     console.log('constructor')
//   }

//   componentDidMount() {
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(()=>{
//         return {
//            characters: users,
//          }
//        }
//       ))
//   }

//   onSearchChange = (event) => {
//     const searchTerm = event.target.value.toLocaleLowerCase();
//     this.setState(()=>{return {searchTerm}});
//   };

//   render() {
//     console.log('render')

//     const { characters, searchTerm } = this.state;
//     const { onSearchChange } = this;

//     const filteredCharacters = 
//         characters.filter((character) => {
//           return character.name.toLowerCase().includes(searchTerm);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>GUESS WHO</h1>

//         <SearchBox onChangeHandler={onSearchChange} placeholder="search characters :)" className="characters-search-box" />
//         <CardList characters={filteredCharacters} />
//       </div>
//     );
//   }
// }

export default App;
