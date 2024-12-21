const ipData = [];
const btnGetIp = document.getElementById('btnGetIp');
const inputIpAddress = document.getElementById('inputIpAddress');
const ipTableBody = document.querySelector('#ipTable tbody');

btnGetIp.addEventListener('click', fetchIpInfo);
inputIpAddress.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') fetchIpInfo();
});

function fetchIpInfo() {

  const ip = inputIpAddress.value.trim();
  if (!ip) {
    showAlert('Please enter a valid IP address.', 'warning');
    return;
  }

  if (ipData.some(entry => entry.ip === ip)) {
    showAlert('This IP is already in the table.', 'info');
    return;
  }

  const url = `https://ipinfo.io/${ip}/json?token=ea38c5437881ca`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const entry = {
        ip: data.ip || 'N/A',
        org: data.org || 'N/A',
        country: data.country || 'N/A',
        city: data.city || 'N/A'
      };

      ipData.push(entry);
      renderTable();
    })
    .catch(error => showAlert('Failed to fetch IP data. Please try again.', 'danger'));
}

function renderTable() {
  ipTableBody.innerHTML = ipData.map((entry, index) => `
    <tr>
      <td>${entry.ip}</td>
      <td>${entry.org}</td>
      <td>${entry.country}</td>
      <td>${entry.city}</td>
      <td><button class="btn btn-sm btn-danger" onclick="removeEntry(${index})">X</button></td>
    </tr>
  `).join('');
}

function removeEntry(index) {
  ipData.splice(index, 1);
  renderTable();
}

function showAlert(message, type) {
  const alertContainer = document.getElementById('alertContainer');
  alertContainer.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}
