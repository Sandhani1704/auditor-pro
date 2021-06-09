import './app.css';
import Animation from '../../images/first_screen.gif'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header__logo">AuditorPRO</div>
        <div className="header__button-container">
          <button className="header__button_login">Bход</button>
          <button className="button header__button_start">Начать бесплатно</button>
        </div>
      </header>
      <main>
        <section className="auditor-info">
          <div className="auditor-info__text-container">
            <p className="auditor-info__subtitle">Путь, который приносит деньги</p>
            <h1 className="auditor-info__title">Онлайн сервис
            по созданию
            чек-листов
            </h1>
            <p className="auditor-info__text">Создаст качественный сервис - ваше
            устойчивое конкурентное преимущество
            </p>
            <button className="button button__auditor-info">Заказать консультацию</button>
          </div>
          <div className="auditor-info__animation">
            {/* <img className="auditor-info__img-animation" src={Animation} alt="анимация"/> */}
          </div>

        </section>
        <section className="about-profit">


          <div className="about-profit__container">
            <h1 className="about-profit__title">Что вам даст AuditorPRO</h1>
            <div className="about-profit__text-container">
              <div className="about-profit__paragraph-container">
                <h3 className="about-profit__paragraph-title">Оптимизация работы</h3>
                <p className="about-profit__paragraph-text">
                  С чек-листами не нужно</p>
                <p className="about-profit__paragraph-text">
                  вспоминать, что и когда делать,</p>
                <p className="about-profit__paragraph-text">
                  а можно сосредоточиться</p>
                <p className="about-profit__paragraph-text">
                  на самой работе
              </p>

              </div>

              <div className="about-profit__paragraph-container">
                <h3 className="about-profit__paragraph-title">Экономия времени</h3>
                <p className="about-profit__paragraph-text">
                  Составленный чек-лист будет</p>
                <p className="about-profit__paragraph-text">
                  служить долго и больше</p>
                <p className="about-profit__paragraph-text">
                  не нужно каждый раз тратить</p>
                <p className="about-profit__paragraph-text">
                  время на планирование работы
              </p>
              </div>

              <div className="about-profit__paragraph-container">
                <h3 className="about-profit__paragraph-title">Быстрое обучение
                новых сотрудников</h3>
                <p className="about-profit__paragraph-text">
                  Благодаря составленному</p>
                <p className="about-profit__paragraph-text">
                  чек-листу у сотрудника будет</p>
                <p className="about-profit__paragraph-text">
                  структурированная информация</p>
                <p className="about-profit__paragraph-text">
                  о рабочем процессе
              </p>
              </div>

              <div className="about-profit__paragraph-container">
                <h3 className="about-profit__paragraph-title about-profit__paragraph-title_high">Сокращение числа ошибок</h3>
                <p className="about-profit__paragraph-text">
                  Допущенные во время работы</p>
                <p className="about-profit__paragraph-text">
                  промахи можно добавить
                </p>
                <p className="about-profit__paragraph-text">
                  в чек-лист и больше
                </p>
                <p className="about-profit__paragraph-text">
                  их не повторять
                </p>
              </div>

            </div>

          </div>
          <div className="auditor-info__animation auditor-info__animation_ball">
          </div>
        </section>
        <section className="how-it-works">
          <div className="how-it-works__illustrations"></div>
          <div className="how-it-works__text-container">
            <h3 className="how-it-works__title">Как это работает</h3>
            <h5 className="how-it-works__subtitle">
              Создание чек-листа с присвоением QR-кода
            </h5>
            <p className="how-it-works__paragraph-text">
              Разместите QR коды в местах, с которых<br />
              начинается проверка</p>
            <p className="how-it-works__paragraph-text">
              Сотрудник сканирует QR код и открывает<br />
              чек-лист
                </p>
            <p className="how-it-works__paragraph-text">
              Сотрудник выполняет все действия по чек-листу<br />
              и отмечает все пункты
                </p>
            <p className="how-it-works__paragraph-text">
              Формируется отчет о проверке
                </p>
          </div>
        </section >

        <section className="prices">
          <div className="prices__corporate-container">
          <h2 className="prices__title">Корпоративные тарифы</h2>
          <p className="prices__caption">с внедрением чек-листов под ключ</p>
          </div>

        </section>
      </main>
    </div >
  );
}

export default App;
