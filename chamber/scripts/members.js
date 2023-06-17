const file = 'json/data.json';

async function getMemberData() {
  const response = await fetch(file);
  const data = await response.json();
  displayMembers(data.members);
}

const displayMembers = (members) => {
    const cards = document.querySelector('div.memberCards'); // select the output container element
  
    members.forEach((member) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('div');
      card.classList.add("member");

      let logo = document.createElement('img');
      let name = document.createElement('h2');
      name.classList.add("memberName");
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let webSite = document.createElement('a');

      // Build the h2 and p content out to show the name, address, phone and website
      name.innerHTML = `${member.name}`;
      address.innerHTML = `${member.address}`;
      phone.innerHTML = `${member.phone}`;
      phone.classList.add("phoneNumber");
      webSite.innerHTML = `${member.webSite}`;
      webSite.setAttribute('href', `${member.url}`);
  
      // Build the logo by setting all the relevant attributes
      logo.setAttribute('src', member.img);
      logo.setAttribute('alt', `${member.name}'s logo`);
      logo.setAttribute('loading', 'lazy');
  
      // Append the section(card) with the created elements
      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(webSite);
  
      cards.appendChild(card);
    }); // end of forEach loop
  } // end of function expression

getMemberData();