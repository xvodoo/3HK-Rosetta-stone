const currentVersion = '1.2.0'; 

fetch('/api/version')
  .then(res => res.json())
  .then(data => {
    if (data.version !== currentVersion) {
      alert(`🚨 Mise à jour disponible : version ${data.version}. 
         حمل الإصدار جديد آبطل
3HK 🗡  https://whatsapp.com/channel/0029Vb62RTF0G0XeN4Qx4c3W`);
      
    }
  })
  .catch(err => {
    console.error('Erreur lors du contrôle de version:', err);
  });