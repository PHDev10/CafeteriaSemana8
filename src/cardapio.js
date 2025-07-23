document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('add-form');
  const tableBody = document.getElementById('menuBody');
  const searchInput = document.getElementById('searchInput');
  const modal = new bootstrap.Modal(document.getElementById('addItemModal'));

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('itemName').value;
    const preco = document.getElementById('itemPrice').value;
    const desc = document.getElementById('itemDesc').value;

    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = tableBody.rows.length + 1;

    const nomeCell = document.createElement('td');
    nomeCell.textContent = nome;

    const precoCell = document.createElement('td');
    precoCell.textContent = `R$ ${parseFloat(preco).toFixed(2)}`;

    const descCell = document.createElement('td');
    descCell.textContent = desc;

    row.appendChild(idCell);
    row.appendChild(nomeCell);
    row.appendChild(precoCell);
    row.appendChild(descCell);

    tableBody.appendChild(row);

    form.reset();
    modal.hide(); // Fecha o modal
  });

  searchInput.addEventListener('keyup', function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#menuBody tr');

    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(filter) ? '' : 'none';
    });
  });
});

