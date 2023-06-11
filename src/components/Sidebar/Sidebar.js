import React from 'react'
import Item from '../Item/Item'
import classNames from 'classnames/bind'
import Styles from './Sidebar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(Styles)

const Sidebar = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div className={cx('img-logo')}>
          <img src='./images/logo.png' alt='logo' className={cx('logo')} />
        </div>
        <span className={cx('desc')}>Platform: Phone</span>
      </div>

      <div className={cx('content')}>
        <Item icon={<FontAwesomeIcon icon={faHeadset}/>} title='Quality call'/> 
      </div>

    </div>
  )
}

export default Sidebar