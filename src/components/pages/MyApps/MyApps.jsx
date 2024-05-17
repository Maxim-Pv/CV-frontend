import { Link } from 'react-router-dom'
import st from './MyApps.module.css'

const MyApps = () => {
  return (
    <ul className={st.container}>
      <li className={st.item}>
        <h3 className={st.header}>Интерактивные комментарии</h3>
        <ul className={st.list}>
          <li>Возможности пользователя:</li>
          <li>Просмотр оптимального макета приложения в зависимости от размера экрана устройства</li>
          <li>Просматривать состояния наведения для всех интерактивных элементов на странице</li>
          <li>Создание, чтение, обновление и удаление комментариев и ответов</li>
          <li>Лайкать комментарии</li>
        </ul>
        <div className={st.buttonLink}>
          <Link to="https://interactive-comments-omega-snowy.vercel.app/" className={`${st.link} ${st.image1}`}/>
        </div>
      </li>

      <li className={st.item}>
        <h3 className={st.header}>Магазин кроссовок</h3>
        <ul className={st.list}>
          <li>Возможности пользователя:</li>
          <li>Просмотр оптимального макета приложения в зависимости от размера экрана устройства</li>
          <li>Просматривать состояния наведения для всех интерактивных элементов на странице</li>
          <li>Открывать галерею лайтбокса, нажав на большое изображение продукта</li>
          <li>Переключать большое изображение продукта, нажав на маленькое миниатюрное изображение</li>
          <li>Добавлять товары в корзину</li>
          <li>Просматривать корзину и удалять из нее товары</li>
        </ul>
        <div className={st.buttonLink}>
          <Link to="https://sneakers-shop-eight.vercel.app/" className={`${st.link} ${st.image2}`}/>
        </div>
      </li>

      <li className={st.item}>
        <h3 className={st.header}>Todo</h3>
        <ul className={st.list}>
          <li>Возможности пользователя:</li>
          <li>Просмотр оптимального макета приложения в зависимости от размера экрана устройства</li>
          <li>Просматривать состояния наведения для всех интерактивных элементов на странице</li>
          <li>Добавлять новые задачи в список</li>
          <li>Отмечать задачи как выполненные</li>
          <li>Удалять задачи из списка</li>
          <li>Фильтровать по всем/активным/полным задачам</li>
          <li>Удалять все выполненные задачи</li>
          <li>Переключять светлый и темный режим</li>
          <li>Перетаскивать элементы в списке, чтобы изменить их порядок.</li>
        </ul>
        <div className={st.buttonLink}>
          <Link to="https://fr-mentor-todo-app.vercel.app/" className={`${st.link} ${st.image3}`}/>
        </div>
      </li>
    </ul>
  )
}

export default MyApps