class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');

    this.elem.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(user => `
          <tr>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.salary}</td>
            <td>${user.city}</td>
            <td><button>X</button></td>
          </tr>
        `).join('')}
      </tbody>
    `;

    this.elem.addEventListener('click', (event) => {
      if (event.target.tagName !== 'BUTTON') return;
      event.target.closest('tr').remove();
    });
  }
}