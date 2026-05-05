// index.js (или ваш главный файл)
(async () => {
  // 1. Загружаем и выполняем content.js первым
  await import('./js/components/content/content.js');
  
  // 2. Затем все остальные (порядок важен)
  await import('./js/components/Navigation/nav.js');
  await import('./js/components/promo/promo.js');
  await import('./js/components/directions/Cards.js');
  await import('./js/components/teacher/Teacher.js');
  await import('./js/components/informUS/informUs.js');
  await import('./js/components/asks/asks.js');
  await import('./js/components/address/address.js');
  await import('./js/components/form/Form.js');
  await import('./js/components/footer/footer.js');
})();