import React from 'react';
import { Data } from '../Data/Data'
import classNames from 'classnames/bind'
import styles from './Dashboard.module.scss'
import Table from '../Table/Table';

const cx = classNames.bind(styles)

const Dashboard = () => {

  return (
    <div className={cx('wrapper')}>
      <Table data={Data} />
    </div>
  )
}

export default Dashboard