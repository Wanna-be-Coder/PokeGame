import React, {Component} from 'react';
import './Pokecard.css'




class Pokecard extends Component {


    render(){
        const imgUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
        let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);
        const imgsrc= `${imgUrl}${padToThree(this.props.id)}.png`
        return(
            <div className="Pokecard-card">
              {/* <img src={this.props.id>10 ? imgUrl+"0"+this.props.id+".png": imgUrl+"0"+this.props.id+".png"} alt={this.props.name} style={{width:"100%"}} />   */}
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"250px"}}>           
                     <img src={imgsrc} alt={this.props.name} />
              </div>
               <div className="Pokecard-container">
                <h3>{this.props.name}</h3>           
                <p>Type: {this.props.type}</p>
                <p>Experience: {this.props.base_exp}</p>
                </div>
            </div>
            
        );
    }
}

export default Pokecard;