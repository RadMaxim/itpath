// Импортируем все компоненты
import './js/components/content/content.js'
import './js/components/footer/footer.js';
import './js/components/promo/promo.js';
import './js/components/informUS/informUs.js';
import './js/components/Navigation/nav.js';
import './js/components/asks/asks.js';
import './js/components/address/address.js';
import './js/components/teacher/Teacher.js';
import './js/components/form/Form.js';
import './js/components/directions/Directions.js';

// Если какой-то из этих модулей экспортирует функцию инициализации,
// её нужно вызвать здесь. Например:
//
// import { initFooter } from './js/components/footer/footer.js';
// initFooter();
//
// Но если модули сами выполняют код при импорте (например, вставляют DOM-элементы),
// то импорта выше достаточно.