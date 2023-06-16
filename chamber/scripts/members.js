const url = 'json/data.json';

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.members);
  //displayProphets(data.members);
}

getMemberData();