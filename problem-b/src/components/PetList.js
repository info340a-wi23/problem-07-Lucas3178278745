import React from 'react';

function PetCard(props) {
    const adopt_text = props.petData.adopted ? " (Adopted)" : "";
    return (
      <div className="card" onClick={() => props.adopt(props.petData.name)}>
        <img className="card-img-top" src={props.petData.img} alt={props.petData.name} />
        <div className="card-body">
          <h3 className="card-title">{props.petData.name + adopt_text}</h3>
          <p className="card-text">{props.petData.sex} {props.petData.breed}</p>
        </div>
      </div>
    );
}

function PetList(props) {
    const petCards = props.pets.map(pet => <PetCard key={pet.id} petData={pet} adopt={props.adopt}/>);
  
    return (
      <div id="petList" className="col-9">
        <h2>Dogs for Adoption</h2>
        <div className="card-deck">
          {petCards}
        </div>
      </div>
    );
}

export default PetList;
