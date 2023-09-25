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
            <div class="mbrName">Leanne Graham</div>
            <div class="mbrEmail">Nathan@yesenia.net</div>
          </div>
          <div>
            <div class="mbrPhoneWebsite">1-463-123-4447</div>
            <div class="mbrPhoneWebsite">ramiro.info</div>
          </div>`;
          document.body.appendChild(member);
    }
    
}

