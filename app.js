// Environment detection
document.getElementById('env').textContent = 'Development Local';

// Dark mode functionality
const toggle = document.createElement('button');
toggle.textContent = 'Toggle Dark Mode';
toggle.onclick = () => document.body.classList.toggle('dark-mode');
document.body.appendChild(toggle);
