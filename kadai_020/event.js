const bTn = document.getElementById('btn');
const teXt = document.getElementById('text');

bTn.addEventListener('click', () => {
const h2 = document.createElement('h2');
teXt.textContent = 'ボタンをクリックしました';
});