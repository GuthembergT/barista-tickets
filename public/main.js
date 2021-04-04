

//  Worked with House Cass and my House Hayden 
document.querySelector('#notFullfilled').addEventListener('click', markCompleted)

function markCompleted(e) {
  if (e.target.className === 'fas fa-check-square') {
    const listItem = e.target.closest('.ticket')
    const name = listItem.querySelector('.name').innerText
    const order = listItem.querySelector('.order').innerText
    const size = listItem.querySelector('.size').innerText

    fetch('profile', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'order': order,
        'size' : size
      })
    }).then(function () {
      console.log('RELOAD WINDOW');
      window.location.reload();
    })
  }
}