import React from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import ReactPaginate from 'react-paginate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
const Footer = ({ pageNumber, setPageNumber, page }) => {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>1-10 of 100 items</span>
            <ReactPaginate
                className={cx('pagination')}
                pageCount={page}
                breakLabel='...'
                breakClassName={cx('break-btn')}
                previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                previousClassName={cx('previous-btn')}
                nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                nextClassName={cx('next-btn')}
                pageClassName={cx('page-btn')}
                activeClassName={cx('active')}
            />
            <button className={cx('last-btn')}>10/page <FontAwesomeIcon icon={faChevronDown} className={cx('icon-down')}/></button>
        </div>
    )
}

export default Footer