document.addEventListener('DOMContentLoaded', () => {

  function updateWorldClocks() {
    const now = new Date();

    const londonTime = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/London',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(now);

    const sydneyTime = new Intl.DateTimeFormat('en-AU', {
      timeZone: 'Australia/Sydney',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(now);

    document.getElementById('londonTime').textContent = londonTime;
    document.getElementById('sydneyTime').textContent = sydneyTime;
  }

  updateWorldClocks();
  setInterval(updateWorldClocks, 1000);

});
