// 初期値
let html = '';

// 教材のコード

let num = Math.floor(Math.random() * 5);

switch (num) {
  case 2:
    console.log('小吉です');
    html += `${num}は小吉です`;
    break;
  case 3:
    console.log('中吉です');
    html += `${num}は中吉です`;
    break;
  case 4:
    console.log('大吉です');
    html += `${num}は大吉です`;
    break;
  default:
    console.log('ハズレです');
    html += `${num}はハズレです`;
    break;
}

// その他のコード

const domCode = document.getElementById('dom-code');
domCode.innerHTML = html;

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
  location.reload();
});