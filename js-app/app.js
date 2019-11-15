HIKING_API_ENDPOINT = 'https://parla-api.groupe12.arla-sigl.fr';

function reload_hikes(hikes) {
  const hikeNode = document.getElementById('hikes');
  // reset all childs
  hikeNode.innerHTML = "";
  const ul = document.createElement('ul');
  const hikeList = hikes.map(hike => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = hike.name;
    li.appendChild(p);
    return li;
  });
  hikeList.map(hikeNode => ul.appendChild(hikeNode));
  hikeNode.appendChild(ul);
}

async function loadHikes() {
  let hikes = [];
  try {
    const response = await fetch(HIKING_API_ENDPOINT + '/v1/hike/all', {
      headers: {'Content-Type': 'application/json'}
    });
    hikes = await response.json();
  } catch (e) {
    console.error('error catched: ', e);
  } finally {
    reload_hikes(hikes);
  }
}
