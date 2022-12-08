import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import './Home.css'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
  <div className="container">
    <div className="underContainer">
      <div className="mainText">
        <h1 className="homeGreet">Освободим вас от забот</h1>
        <p className="homeGreet"><em>Поможем найти надёжного исполнителя для любых задач</em></p>
      </div>
      {/* <hr className='categoryHr' /> */}
      <div className="categories">
        <div className="categoryBlock">
          <img className='icon' src="/бытовые услуги.png" alt="иконка бытовые услуги" />
          <Link className='category-link' to='/task/find'><span>Бытовые услуги</span></Link>
        </div>
        <div className="categoryBlock">
          <img className='icon' src="/грузоперевозки.png" alt="иконка грузоперевозок" />
          <Link className='category-link' to='/task/find'><span>Грузоперевозки</span></Link>
        </div>
        <div className="categoryBlock">
          <img className='icon' src="/курьер.png" alt="иконка курьерских услуг" />
          <Link className='category-link' to='/task/find'><span>Курьерские услуги</span></Link>
        </div>
        <div className="categoryBlock">
          <img className='icon' src="/комп_пом.png" alt="иконка комп_помощь" />
          <Link className='category-link' to='/task/find'><span>Компьютерная помощь</span></Link>
        </div>
        <div className="categoryBlock">
          <img className='icon' src="/красота и зд.png" alt="иконка красота и здоровье" />
          <Link className='category-link' to='/task/find'><span>Красота и здоровье</span></Link>
        </div>
      </div>
      {/* <hr className='categoryHr' /> */}
      <div className="findTask">
        <Link to='/task/find'><button className='showTasks'>Посмотреть все услуги</button></Link>
      </div>
        <div className="describe">
          <h2 className='txt'>Как работает наш сайт?</h2>
        </div>
      <div className="howItWorks">
        <div className="how-it-works-block">
          Опиши<br/>свою задачу и условия
        </div>
        <img className='arrow-icon' src="/right-arrow-icon-27.png" alt="иконка красота и здоровье"/>
        <div className="how-it-works-block">
          Получи<br/>отклик от исполнителя
        </div>
        <img className='arrow-icon' src="/right-arrow-icon-27.png" alt="иконка красота и здоровье"/>
        <div className="how-it-works-block">
          Выбери подходящего исполнителя
        </div>
      </div>
      {/* ОТЗЫВЫ ОТ ИСПОЛНИТЕЛЕЙ???????? */}
      {/* ????? */}
      <div className="footer">
        <div className="team">
          <h4 className='ourTeam'>Наша команда:</h4>
            <a className='link' target='blank' href="https://github.com/saburtallo">Степан Киракосян</a>
            <a className='link' target='blank' href="https://github.com/aproshkov">Александр Прошков</a>
            <a className='link' target='blank' href="https://github.com/PartyPo1son">Кирилл Прихожий</a>
            <a className='link' target='blank' href="https://github.com/KardopoloFF">Никита Кардополов</a>
          <hr className='footerHr' />
        </div>
        <h3> ПОМОГАТОР - 2022 &#169;</h3>
      </div>
    </div>
  </div>
  );
}