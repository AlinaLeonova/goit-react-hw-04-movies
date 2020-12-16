import React from 'react';
import { Link } from 'react-router-dom';
import style from './NotFoundPage.module.css';
import imagePath from '../../assets/404Error.png'

const NotFoundPage = () => (
  <div className={style.NotFoundPageWrapper}>
    <img className={style.ErrorImg} src={imagePath} alt="No page" width='320' />
    <Link className={style.HomeLink} to="/">Go back home</Link>
  </div>
);


export default NotFoundPage;
