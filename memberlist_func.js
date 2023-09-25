async function logJSONData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonData = await response.json();
  console.log(jsonData[0].address.street);
  return jsonData;
}
window.onload = pageLoad;
function pageLoad() {
  const jsonData = logJSONData();
  for (const node of jsonData) {
    createMember(node);
  }
}

function createMember(node) {
  const member = document.createElement('div');
  member.className = 'member';
  member.innerHTML =
    `<div>
        <div class="mbrName">Leanne Graham</div>
        <div class="mbrEmail">Nathan@yesenia.net</div>
      </div>
      <div>
        <div class="mbrPhoneWebsite">1-463-123-4447</div>
        <div class="mbrPhoneWebsite">ramiro.info</div>
      </div>`;
  return member;
}