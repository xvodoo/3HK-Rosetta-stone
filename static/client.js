// الاتصال بالسيرفر عبر WebSocket
const socket = new WebSocket('ws://localhost:3000');

// الاستماع للرسائل من السيرفر
socket.addEventListener('message', function (event) {
  if (event.data === 'reload') {
    alert('A new version is available. Reloading...');
    window.location.reload(); 
  }
});

fetch('/api/version')
  .then(response => response.json())
  .then(data => {
    const latestVersion = data.version;
    const currentVersion = '1.0.0'; 

    if (latestVersion !== currentVersion) {
      alert(`🚨 Mise à jour disponible : version ${data.version}.
       حمل الإصدار جديد آبطل
       https://github.com/xvodoo/3HK-Rosetta-stone`);
    }
  })
  .catch(error => {
    console.error('Error checking version:', error);
  });

// WebSocket المعالجة للرسائل
ws.on('message', (message) => {
  const data = JSON.parse(message);
  if (data.type === 'version_update' && data.version !== currentVersion) {
    console.log(`New version available: ${data.version}`);
    // عرض رسالة التحديث هنا إذا كانت النسخة الجديدة موجودة
  }
});