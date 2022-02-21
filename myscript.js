const team = [

    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },

    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },

    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },

    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },

    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },

    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    }

  ];

  

// per ogni elemento dell'array stampo una card

// creo un div nell'html con la classe card-container

// inserisco con inner html il contenuto appropriato nei div

// fine



const teamContainer = document.querySelector('.team-container');

let i = 1;

for(i; i < team.length; i++) {
  
  let cardImageImg = `<img scr=img/${team[i].image}>`;

  let cardImage = `<div class="card-image">${cardImageImg}</div>`;

  let cardTextH3 = `<h3>${team[i].name}</h3>`;

  let cardTextP = `<p>${team[i].role}</p>`;

  let cardText = `<div class="card-text">${cardTextH3}${cardTextP}</div>`;

  let card = `<div class="team-card">${cardImage}${cardText}</div>`;

  teamContainer.innerHTML += card;
}

console.log(i);