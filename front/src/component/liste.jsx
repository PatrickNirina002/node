import React, { Component } from 'react';


 class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      resAPI: ""
    };
  }


  componentWillMount() {
    fetch('http://localhost:3000/list')
      .then(res => res.text())
      .then(data => this.setState({ resAPI: data }));
  }
  
  render() {
    return (
      <div className="contact">
        <h1>Liste</h1>
        <button onClick={()=>{
            var list = this.state.resAPI
            var lister = JSON.parse(list)
          for(var i=0;i<lister.length;i++)
          {
            document.getElementById("nom").innerHTML += lister[i].nom + " ";
            document.getElementById("nom").innerHTML += lister[i].Prenom+ "<br>";
          }
        }}>
            LISTER
        </button>
        <p id="nom"></p>
      </div>
    )
  }
}

export default List;