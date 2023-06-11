import React from 'react'
import classNames from 'classnames/bind'
import styles from './Table.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const rows = (item, index) => {
    return (
        <tr key={index}>
            <td className={cx('content')}>
                <FontAwesomeIcon icon={faPlay} className={cx('play')} />
            </td>
            <td className={cx('content')}>{item.time}</td>
            <td className={cx('content')}>{item.content}</td>
            <td className={cx('content')}>{item.keyword}</td>
            {item.note === '' ?
                <td className={cx('content-end')}>
                    <button className={cx('note')}><FontAwesomeIcon icon={faPlus}/></button>
                </td>
                : <td className={cx('content-end')}>{item.note}</td>}
        </tr>
    )
}

const Table = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <table className={cx('table')}>
                <thead >
                    <tr className={cx('header')}>
                        <th scope='col' className={cx('header-title')}>
                            Bắt đầu
                        </th>
                        <th scope='col' className={cx('header-title')}>
                            Thời gian
                        </th>
                        <th scope='col' className={cx('header-title')}>
                            Nội dung
                        </th>
                        <th scope='col' className={cx('header-title')}>
                            Vi phạm mã từ khoá
                        </th>
                        <th scope='col' className={cx('header-title-end')}>
                            Ghi chú
                        </th>
                    </tr>
                </thead>
                <tbody className={cx('table-body')}>
                    {
                        data.map((item, index) => rows(item, index))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table