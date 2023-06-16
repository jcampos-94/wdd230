const file = 'json/data.json';

async function getMemberData() {
  const response = await fetch(file);
  const data = await response.json();
  console.table(data.members);
  displayMembers(data.members);
}

const displayMembers = (members) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    members.forEach((member) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');

      let portrait = document.createElement('img');
  
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', member.img);
      portrait.setAttribute('alt', `${member.name}'s logo`);
      portrait.setAttribute('loading', 'lazy');
  
      // Append the section(card) with the created elements
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of forEach loop
  } // end of function expression

getMemberData();