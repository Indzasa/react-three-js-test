# JavaScript Developer Test

Это тестовое задание для соискателей в нашу компанию на вакансию JavaScript-разработчика. <br>
Это задание, связанное с работой three.js сцены в React-приложении, состоит из основного задания и дополнительных задач. Выполнение дополнительных задач приветствуется, но не обязательно к выполнению.

## Первое задание

### Исходные данные:

- проект, созданный при помощи [React](https://github.com/facebook/react), находящийся в данном репозитории. Проект содержит сцену [three.js](https://github.com/mrdoob/three.js)
- меш (формат `obj`), загруженный в сцену
- камера, которой можно управлять с помощью мыши

### Задачи для выполнения

- в правом верхнем углу создать компонент со счетчиком формата `0/5` с абсолютным позиционированием
- реализовать следующую механику (далее, нанесение точки на меш): при наведении курсора на меш (луч, исходящий из центра камеры к текущей позиции курсора, пересекает меш в точке, называемой далее A) и последующем двойном клике на левую кнопку мыши должен отобразиться компонент, соответствующий точке А, представленный HTML-элементом (например, div с текстом, соответствующим индексу точки). В момент нанесения точки на меш также должен произойти инкремент счетчика. Пример выполнения: <br>
![Demo](marker-demo.gif)
<br>
- когда значение счетчика достигнет 5, необходимо заблокировать возможность нанесения точки на меш

### Указания

- создавая необходимые компоненты приложения, ориентироваться на данную [статью](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- для реализации счетчика использовать состояние основного компонента

### Примечания

- внешний вид и стили не важны и оцениваться не будут. Для отображения точек на меше можно использовать любой цвет, который будет выделяться на нем
- зависимости проекта могут быть установлены при помощи команды `npm install` или `yarn` (в случае, если вы используете пакетный менеджер [yarn](https://yarnpkg.com))
- проект может быть запущен с помощью команды `npm run start` или `yarn start` (в случае, если вы используете пакетный менеджер [yarn](https://yarnpkg.com))

### Дополнительные задания

- при нажатии на элемент, соответствующей точке, удалять ее с экрана и делать декремент счетчика
- отображать луч на экране при нанесении точки на меш
- реализовать HTML-элемент с помощью [CSS2DRenderer](https://threejs.org/docs/index.html#examples/en/renderers/CSS2DRenderer) или [CSS3DRenderer](https://threejs.org/docs/index.html#examples/en/renderers/CSS3DRenderer)
- выполнить удаление сцены и ее компонентов из памяти в жизненном цикле `componentWillUnmount` основного компонента

### Сдача задания

Проект должен быть загружен на github для проверки. Проект должен запускаться без ошибок или предупреждений.
