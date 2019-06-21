import React, {Component} from 'react';
import Pokecard from './Pokecard';



class Pokedex extends Component {
    // static defaultProps =      {

    //    pokemon: [{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    //     {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    //     {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    //     {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    //     {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    //     {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    //     {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    //     {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    // ]
    // };

    render(){
        let containerStyle = {display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"};
        let title;
        if(this.props.isWinner){
        title = <h2 style={{textAlign:"center",color:"green"}} >Winner</h2>
        }
        else {
         title = <h2 style={{textAlign:"center",color:"red"}}>Looser</h2>   
        }
        return(
            <div>
                <h1 style={{textAlign:"center"}}>TEAM {this.props.teamName}</h1>
                {title}
                <h4 style={{textAlign:"center"}} >Total Experience: {this.props.exp}</h4>
            <div style={containerStyle}>
            {this.props.pokemon.map((p) => (
                    <Pokecard  id={p.id} name={p.name} type={p.type} base_exp={p.base_experience} />
            ))}
 

           </div>
           </div>
            
        );
    }
}

export default Pokedex;