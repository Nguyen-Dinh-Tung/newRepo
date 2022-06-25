let product = document.getElementById("product");
let add = document.getElementById("add");
let edit = document.getElementById("edit");
let total_product = document.getElementById("total_product");
let arr = [
  ["Iphone", 1230000, 30],
  ["Sam sung", 100000, 20],
];
function render() {
  let htmls = "";
  arr.forEach(function (item, index) {
    htmls += "<tr>";
    htmls += `<td>${index + 1}</td>`;
    htmls += `<td>${item[0]}</td>`;
    htmls += `<td>${item[1]}</td>`;
    htmls += `<td>${item[2]}</td>`;
    htmls += `<td><button id="delete" onclick="handleDelete(${index})">Xóa</button></td>`;
    htmls += `<td><button id="delete" onclick="handleEdit(${index})">Sửa</button></td>`;
    htmls += "</tr>";
  });
  product.innerHTML = htmls;
  total_product.innerHTML = arr.length + " Tổng các sản phẩm";
}
render();

function handleDelete(index) {
  arr.splice(index, 1);
  render();
}
function handleAdd() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let sll = document.getElementById("sll").value;
  let item = [name, price, sll];
  arr.push(item);
  render();
}
function handleEdit(index) {
  let item = arr[index];
  let name = (document.getElementById("name").value = item[0]);
  let price = (document.getElementById("price").value = item[1]);
  let sll = (document.getElementById("sll").value = item[2]);
  let id = (document.getElementById("index").value = index);
  add.style.display = "none";
  edit.style.display = "inline-block";
  return index;
}
function changeItem() {
  let id = document.getElementById("index").value;
  let item = arr[id];
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let sll = document.getElementById("sll").value;
  item[0] = name;
  item[1] = price;
  item[2] = sll;
  add.style.display = "inline-block";
  edit.style.display = "none";
  render();
  clearInput();
}
function clearInput() {
  let name = (document.getElementById("name").value = "");
  let price = (document.getElementById("price").value = "");
  let sll = (document.getElementById("sll").value = "");
}
