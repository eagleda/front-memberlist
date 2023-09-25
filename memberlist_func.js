async function logJSONData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    return jsonData;
}
window.onload = pageLoad;
function pageLoad() {
    let jsonData = logJSONData();
    jsonData.then((value)=>{
        for(ele of value){
            console.log(ele);
            createMember(ele);
        }
    })
    function createMember(node) {
        const member = document.createElement('div');
        member.className = 'member';
        member.innerHTML =
            `<div>
            <div style='display:flex; flex-wrap:wrap;'>
            <div class="mbrName">${node.username}</div>
            <div class="mbrName">(${node.name})</div>
            </div>
            <div class="mbrEmail">${node.email}</div>
          </div>
          <div>
            <div class="mbrPhoneWebsite">${node.phone}</div>
            <div class="mbrPhoneWebsite">${node.website}</div>
          </div>`;
          document.body.appendChild(member);
    }
    
}

