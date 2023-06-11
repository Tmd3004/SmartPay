import React from 'react'
import classNames from 'classnames/bind'
import Styles from './Item.module.scss'

const cx = classNames.bind(Styles)

const Item = ({ icon, title }) => {
  return (
    <button className={cx('wrapper')}>
        <div className={cx('content')}>
          <span className={cx('icon')}>{icon}</span>
          <span className={cx('title')}>{title}</span>
        </div>
        <span className={cx('fill')}></span>
    </button>
  )
}

export default Item