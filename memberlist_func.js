async function logJSONData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    console.log(jsonData);
}
window.onload = pageLoad;
function pageLoad() {
    logJSONData();
}