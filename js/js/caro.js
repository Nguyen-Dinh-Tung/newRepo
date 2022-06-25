let listTable = document.getElementById("caro");
let flag = 0;
let btn_start = document.getElementById("btn_start");
let playerWin = document.getElementById("result");
let td = document.querySelectorAll("td");
btn_start.addEventListener("click", rePlayGame);
function rePlayGame() {
  td.innerHTML = "";
  renderListTable();
}

function renderListTable() {
  let html = "";
  for (let i = 0; i < 10; i++) {
    html += "<tr>";
    for (let j = 0; j < 10; j++) {
      html += `<td onclick="handleClick(${i},${j})" id="${[i]}${[j]}" ></td>`;
    }
    html += "</tr>";
  }
  listTable.innerHTML = html;
}
renderListTable();
function handleClick(x, y) {
  if (!flag) {
    if (document.getElementById(`${x}${y}`).innerText == "") {
      document.getElementById(`${x}${y}`).innerText = "x";
      flag++;
    }
  } else {
    if (document.getElementById(`${x}${y}`).innerText == "") {
      document.getElementById(`${x}${y}`).innerText = "o";
      flag--;
    }
  }
  function checkWin() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = [];
      for (let j = 0; j < 10; j++) {
        arr[i][j] = document.getElementById(`${i}${j}`).innerText;
      }
    }
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        // check x
        if (
          arr[i][j] == "x" &&
          arr[i + 1][j + 1] == "x" &&
          arr[i + 2][j + 2] == "x" &&
          arr[i + 3][j + 3] == "x" &&
          arr[i + 4][j + 4] == "x"
        ) {
          playerWin.innerHTML = "Người chơi X win";
          document.getElementById(`${x}${y}`).innerText == "";
          renderListTable();
        } else if (
          arr[i][j] == "x" &&
          arr[i + 1][j - 1] == "x" &&
          arr[i + 2][j - 2] == "x" &&
          arr[i + 3][j - 3] == "x" &&
          arr[i + 4][j - 4] == "x"
        ) {
          playerWin.innerHTML = "Người chơi X win";
          document.getElementById(`${x}${y}`).innerText == "";
          renderListTable();
        } else if (
          arr[i][j] == "x" &&
          arr[i][j + 1] == "x" &&
          arr[i][j + 2] == "x" &&
          arr[i][j + 3] == "x" &&
          arr[i][j + 4] == "x"
        ) {
          playerWin.innerHTML = "Người chơi X win";
          document.getElementById(`${x}${y}`).innerText == "";
          renderListTable();
        }
        // check o
        if (
          arr[i][j] == "o" &&
          arr[i + 1][j + 1] == "o" &&
          arr[i + 2][j + 2] == "o" &&
          arr[i + 3][j + 3] == "o" &&
          arr[i + 4][j + 4] == "o"
        ) {
          playerWin.innerHTML = "Người chơi O win";
          document.getElementById(`${x}${y}`).innerText == "";
          renderListTable();
        } else if (
          arr[i][j] == "o" &&
          arr[i + 1][j - 1] == "o" &&
          arr[i + 2][j - 2] == "o" &&
          arr[i + 3][j - 3] == "o" &&
          arr[i + 4][j - 4] == "o"
        ) {
          playerWin.innerHTML = "Người chơi O win";
          document.getElementById(`${x}${y}`).innerText == "";
          renderListTable();
        } else if (
          arr[i][j] == "o" &&
          arr[i][j + 1] == "o" &&
          arr[i][j + 2] == "o" &&
          arr[i][j + 3] == "o" &&
          arr[i][j + 4] == "o"
        ) {
          playerWin.innerHTML = "Người chơi O win";
          document.getElementById(`${x}${y}`).innerText == "";
          renderListTable();
        }
      }
    }
  }
  checkWin();
}
