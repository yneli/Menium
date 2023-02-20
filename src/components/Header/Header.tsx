import style from "./Header.module.scss";
import { Container } from "../Container/Container";
import { BlueButton } from "../BlueButton/BlueButton";
export const Header = () => {
  return <div className={style.header}>
    <Container>
      <div className={style.items}>
        <div className={style.logo}>
          <img src="./assets/Logo1.svg" alt="" />
        </div>
        <nav className={style.navbar}>
          <ul className={style.navitems}>
            <li>Главная</li>
            <li>Цены</li>
            <li>Кейсы и отзывы</li>
            <li>Контакты</li>
          </ul>
        </nav>
        <div className={style.info}>
          <div className={style.socials}>
            <img src="./assets/tele.png" alt="" />
            <img src="./assets/wha.png" alt="" />
            <div className={style.number}>+ 7 (495) 555 65 65</div>
          </div>
          <div className={style.text}>Ежедневно с 09:00 до 18:00</div>
        </div>
        <BlueButton>Заказать звонок</BlueButton>
      </div>
    </Container>
  </div>; 
};