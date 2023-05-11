import React from "react";
import "../../styles/main.scss";

const Landing = () => {
    return (
        <div>
            <header className="header">
                <div className="container"> 
                    <div className="header__wrapper">
                        <div className="logo header__logo">
                            <img
                                className="logo__img"
                                src="/svg/logo.svg"
                                alt="logo"
                            />
                            <div className="logo__description">
                                крупный интегратор CRM в Росcии и ещё 8 странах
                            </div>
                        </div>

                        <nav className="menu header__menu">
                            <ul>
                                <li>
                                    <a href="#">Услуги</a>
                                </li>
                                <li>
                                    <a href="#">Виджеты</a>
                                </li>
                                <li>
                                    <a href="#">Интеграции</a>
                                </li>
                                <li>
                                    <a href="#">Кейсы</a>
                                </li>
                                <li>
                                    <a href="#">Сертификаты</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="phone header__phone">
                            <a href="#">+7 555 555-55-55</a>
                        </div>

                        <div className="icons header__icons">
                            <a href="#" className="icons__item">
                                <img
                                    src="/svg/contacts/telegram.svg"
                                    alt="telegram"
                                />
                            </a>
                            <a href="#" className="icons__item">
                                <img src="/svg/contacts/viber.svg" alt="viber" />
                            </a>
                            <a href="#" className="icons__item">
                                <img
                                    src="/svg/contacts/whatsapp.svg"
                                    alt="whatsapp"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <section className="main-info">
                <div className="container"> 
                    <div className="main-info__wrapper">
                        <div className="primary-info">
                            <h1 className="primary-info__title">
                                Зарабатывайте больше{" "}
                                <span className="gradient-text">c WELBEX</span>
                            </h1>
                            <div className="primary-info__description">
                                Развиваем и контролируем продажи за вас
                            </div>
                        </div>
                        <div className="gift">
                            <div className="gift__title">
                                Вместе c <span className="gradient-text gradient-text--uppercase">бесплатной консультацией</span> мы дарим:
                            </div>
                            <ul className="gift__list">
                                <li className="gift__item">
                                    <div className="gift__item-title">Виджеты</div>
                                    <div className="gift__item-mobileTitle">30 виджетов</div>
                                    <div className="gift__item-description">
                                        30 готовых решений
                                    </div>
                                </li>
                                <li className="gift__item">
                                    <div className="gift__item-title">
                                        Dashboard
                                    </div>
                                    <div className="gift__item-mobileTitle">Dashboard</div>
                                    <div className="gift__item-description">
                                        c показателями вашего бизнеса
                                    </div>
                                </li>
                                <li className="gift__item">
                                    <div className="gift__item-title">
                                        Skype Аудит
                                    </div>
                                    <div className="gift__item-mobileTitle">Skype аудит</div>
                                    <div className="gift__item-description">
                                        отдела продаж и CRM системы
                                    </div>
                                </li>
                                <li className="gift__item">
                                    <div className="gift__item-title">35 дней</div>
                                    <div className="gift__item-mobileTitle">Месяц аmoCRM</div>
                                    <div className="gift__item-description">
                                        использования CRM
                                    </div>
                                </li>
                            </ul>
                            <button className="button gift__button">
                                Получить консультацию
                            </button>
                        </div>
                    </div>
                </div>
                <div className="graphics">
                    <div className="graphics__figure"></div>   
                    <div className="graphics__figure"></div>
                    <div className="graphics__figure"></div>
                    <div className="graphics__figure"></div>
                    <div className="graphics__figure"></div>
                </div>  
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="footer-menu">
                        <div className="footer-menu__section">
                            <h4 className="footer-menu__section-title">
                                О компании
                            </h4>
                            <ul className="footer-menu__list">
                                <li className="footer-menu__list-item">
                                    <a href="#">Партнёрская программа</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <a href="#">Вакансии</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-menu__section">
                            <h4 className="footer-menu__section-title">
                                Меню
                            </h4>
                            <ul className="footer-menu__list">
                                <li className="footer-menu__list-item">
                                    <a href="#">Расчёт стоимости</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <a href="#">Услуги</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <a href="#">Виджеты</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <a href="#">Интеграции</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <a href="#">Наши клиенты</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <a href="#">Кейсы</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <a href="#">Благодарственные письма</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <a href="#">Сертификаты</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <a href="#">Блог на Youtube</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <a href="#">Вопрос / Ответ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-menu__section">
                            <h4 className="footer-menu__section-title">
                                Контакты
                            </h4>
                            <ul className="footer-menu__list">
                                <li className="footer-menu__list-item">
                                    <a href="#">+7 555 555-55-55</a>
                                </li>
                                <li className="footer-menu__list-item">
                                <div className="icons">
                            <a href="#" className="icons__item">
                                <img
                                    src="/svg/contacts/telegram.svg"
                                    alt="telegram"
                                />
                            </a>
                            <a href="#" className="icons__item">
                                <img src="/svg/contacts/viber.svg" alt="viber" />
                            </a>
                            <a href="#" className="icons__item">
                                <img
                                    src="/svg/contacts/whatsapp.svg"
                                    alt="whatsapp"
                                />
                            </a>
                        </div>
                                </li>
                                <li className="footer-menu__list-item">
                                    <a href="#">Москва, Путевой проезд 3с1, к 902</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="copyright__item">©WELBEX 2022. Все права защищены.</div>
                        <a className="copyright__item" href="#">Политика конфиденциальности</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
