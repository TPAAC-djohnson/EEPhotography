document.addEventListener('DOMContentLoaded', () => {

  const correctPassword = 'KingMe';
  const storageKey = 'eepatl_private_access';

  try {
    const alreadyAuthorized = localStorage.getItem(storageKey);

    if (alreadyAuthorized === 'granted') {
      console.log("Access already granted");
    } else {

      const enteredPassword = window.prompt('Enter password to access this private page:');

      if (enteredPassword === correctPassword) {
        localStorage.setItem(storageKey, 'granted');
      } else {
        alert('Access denied.');
        window.location.href = 'index.html';
      }

    }

  } catch (error) {

    const enteredPassword = window.prompt('Enter password to access this private page:');

    if (enteredPassword !== correctPassword) {
      alert('Access denied.');
      window.location.href = 'index.html';
    }

  }

  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem(storageKey);
      window.location.href = 'index.html';
    });
  }

});
