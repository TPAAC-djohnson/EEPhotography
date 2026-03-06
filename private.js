document.addEventListener('DOMContentLoaded', () => {
  const correctPassword = 'KingMe';
  const storageKey = 'eepatl_private_access';

  try {
    const alreadyAuthorized = localStorage.getItem(storageKey);

    if (alreadyAuthorized === 'granted') {
      return;
    }

    const enteredPassword = window.prompt('Enter password to access this private page:');

    if (enteredPassword === correctPassword) {
      localStorage.setItem(storageKey, 'granted');
      return;
    }

    alert('Access denied.');
    window.location.href = 'index.html';
  } catch (error) {
    const enteredPassword = window.prompt('Enter password to access this private page:');

    if (enteredPassword !== correctPassword) {
      alert('Access denied.');
      window.location.href = 'index.html';
    }
  }
});
const logoutBtn = document.getElementById('logoutBtn');

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('eepatl_private_access');
    window.location.href = 'index.html';
  });
}
