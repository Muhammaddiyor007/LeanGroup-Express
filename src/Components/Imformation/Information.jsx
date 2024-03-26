import React, { Component } from 'react'
import BtnComponents from '../btnComponents';
import './information.scss'
import image from '../../assets/image/informatsiya.png'
import person from '../../assets/image/Person.svg'
import phone from '../../assets/image/phone.svg'

export class Information extends Component {
  render() {
    return (
      <div className="information">
        <div
          className="container"
          style={{
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2>
            Получить подробную <span>информацию</span>
          </h2>
          <p>
            Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее
            время
          </p>
          <form>
            <div className="name">
              <img src={person} alt="" />
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div className="tell">
              <img src={phone} alt="" />
              <input type="text" placeholder="+375 (29) 0000000" />
            </div>
            <textarea name="" id="" cols="60" rows="10"></textarea>
          </form>
          <BtnComponents>Получить информацию</BtnComponents>
        </div>
      </div>
    );
  }
}

export default Information