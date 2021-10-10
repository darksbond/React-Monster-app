import React, { Component } from 'react';
import { SearchBox} from './component/search-box/search-box.component'
import { CardList } from './component/card-list/card-list.component';
import '../src/App.css'
class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: [],
      search:''
    }
}
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
        .catch((err) => { console.log('there is some issue', err); })
          .then((data) => this.setState({monsters:data}));
}

 

render() {
  const { search, monsters } = this.state;
  
  const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()));
  
  const handleChange = (e) => this.setState({ search: e.target.value });
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          handleChange={handleChange}
          placeholder='Search Monsters'

        />
        <CardList monsters={filterMonsters} >
        </CardList>
      </div>
    )
  }
}
export default App;