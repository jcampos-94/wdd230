const file = 'json/data.json';

async function getMemberData() {
  const response = await fetch(file);
  const data = await response.json();
  displayMembersGold(data.members);
  displayMembersSilver(data.members);
}

const displayMembersGold = (members) => {
    // Filter members with gold membership
    const goldMembers = members.filter(member => member.membership === "gold");

    // Randomly select two random gold members
    const selectedGoldMembers = [];

    while (selectedGoldMembers.length < 2 && goldMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * goldMembers.length);
        const selectedMember = goldMembers[randomIndex];
        selectedGoldMembers.push(selectedMember);
        goldMembers.splice(randomIndex, 1);
    }
  
    // Display information of selected members on the DOM
    selectedGoldMembers.forEach((member, index) => {
        const name = member.name;
        const phone = member.phone;
        const email = member.email;
        const website = member.webSite;
        const img = member.img;
        const url = member.url;
        
        const divId = `s${index + 1}`;
        const divElement = document.getElementById(divId);
        
        // Update content of elements in the div
        divElement.querySelector('.div-title').innerHTML = name;

        const spotLogoElement = divElement.querySelector('.spot-logo img');
        spotLogoElement.src = img;
        spotLogoElement.alt = `${name}-logo`;

        divElement.querySelector('.email').innerHTML = email;
        divElement.querySelector('.contact').innerHTML = `${phone} | <a href="${url}">${website}</a>`;        
    });
}

const displayMembersSilver = (members) => {
    // Filter members with silver membership
    const silverMembers = members.filter(member => member.membership === "silver");

    // Randomly select one silver member
    const selectedMember = silverMembers[Math.floor(Math.random() * silverMembers.length)];
  
    // Display information of selected member on the DOM{
    const name = selectedMember.name;
    const phone = selectedMember.phone;
    const email = selectedMember.email;
    const website = selectedMember.webSite;
    const img = selectedMember.img;
    const url = selectedMember.url;
    
    const divId = `s3`;
    const divElement = document.getElementById(divId);
    
    // Update content of elements in the div
    divElement.querySelector('.div-title').innerHTML = name;

    const spotLogoElement = divElement.querySelector('.spot-logo img');
    spotLogoElement.src = img;
    spotLogoElement.alt = `${name}-logo`;

    divElement.querySelector('.email').innerHTML = email;
    divElement.querySelector('.contact').innerHTML = `${phone} | <a href="${url}">${website}</a>`;
}

getMemberData();