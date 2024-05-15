import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
      currentItems: [],
      competitions:[
      {
        id: 1,
        title: 'Best cloud for data storage',
        img: 'con1.jpg',
        desc: 'IT competition',
        category: 'it',
        prize: '100$'
      },
      {
        id: 2,
        title: 'Best business plan',
        img: 'con2.png',
        desc: 'Business competition',
        category: 'business',
        prize: '150$'
      },
      {
        id: 3,
        title: 'Best antivirus',
        img: 'con3.jpg',
        desc: 'IT competition',
        category: 'it',
        prize: '1000$'
      },
      {
        id: 4,
        title: 'Best application for servers',
        img: 'con4.webp',
        desc: 'IT competition',
        category: 'it',
        prize: '1000$'
      },
      {
        id: 5,
        title: 'Math competition',
        img: 'con5.webp',
        desc: 'Science competition',
        category: 'science',
        prize: '500$'
      },
      {
        id: 6,
        title: 'Art competition',
        img: 'con6.png',
        desc: 'Art competition',
        category: 'art',
        prize: '200$'
      }
      ]
    }
    this.state.currentItems = this.state.competitions
    this.addToFavorite = this.addToFavorite.bind(this)
    this.deleteFavorite = this.deleteFavorite.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
    <div className="wrapper">
      <Header favorites={this.state.favorites} onDelete={this.deleteFavorite} />
      <Categories chooseCategory={this.chooseCategory} />
      <Items competitions={this.state.currentItems} onAdd={this.addToFavorite} />
      <Footer />
    </div>
    )
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.competitions})
      return
    } 

    this.setState({
      currentItems: this.state.competitions.filter(el => el.category === category)    
    })
  }

  deleteFavorite(id) {
    this.setState({favorites: this.state.favorites.filter(el => el.id !== id)})
  }

  addToFavorite(item) {
    this.setState({ favorites: [...this.state.favorites, item] })
  }
}

export default App;
