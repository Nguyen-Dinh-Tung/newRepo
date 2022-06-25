let arr = [];
let listTable = document.getElementById("caro");
let flag = 0;
function renderListTable() {
  for (let i = 0; i < 10; i++) {
    arr[i] = [];
    for (let j = 0; j < 10; j++) {
      arr[i][j] = `<td ></td>`;
    }
    listTable.innerHTML += arr[i];
  }
}
renderListTable();
