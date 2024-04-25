import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
      competitions:[
      {
        id: 1,
        title: 'Best cloud for data storage',
        img: 'con1.jpg',
        desc: 'IT competition',
        category: 'it-competition',
        prize: '100$'
      },
      {
        id: 2,
        title: 'Best business plan',
        img: 'con2.png',
        desc: 'Business competition',
        category: 'business-competition',
        prize: '150$'
      },
      {
        id: 3,
        title: 'Best antivirus',
        img: 'con3.jpg',
        desc: 'IT competition',
        category: 'it-competition',
        prize: '1000$'
      },
      {
        id: 4,
        title: 'Best application for servers',
        img: 'con4.webp',
        desc: 'IT competition',
        category: 'it-competition',
        prize: '1000$'
      },
      {
        id: 5,
        title: 'Math competition',
        img: 'con5.webp',
        desc: 'Science competition',
        category: 'science-competition',
        prize: '500$'
      },
      {
        id: 6,
        title: 'Writting competition',
        img: 'con6.png',
        desc: 'Writting competition',
        category: 'science-competition',
        prize: '200$'
      }
      ]
    }
    this.addToFavorite = this.addToFavorite.bind(this)
  }
  render() {
    return (
    <div className="wrapper">
      <Header favorites={this.state.favorites} />
      <Items competitions={this.state.competitions} onAdd={this.addToFavorite} />
      <Footer />
    </div>
    )
  }

  addToFavorite(item) {
    this.setState({ favorites: [...this.state.favorites, item] })
  }
}

export default App;
