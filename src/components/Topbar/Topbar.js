import React from 'react'
import classNames from 'classnames/bind'
import Styles from './Topbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(Styles)


const Topbar = ({ song, setSong }) => {


  const addAudio = (e) => {
    if (e.target.files[0]) {
      setSong(e.target.files[0].name)
    }
  };


  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>Call details</h2>
      <div className='btn'>
        <input type='file' id='files' accept='audio/*' className={cx('hidden')} onChange={addAudio} />
        <label htmlFor='files' className={cx('upload-btn')} >
          <FontAwesomeIcon icon={faArrowUpFromBracket} className={cx('icon-btn')} />
          <span className={cx('title-btn')}>Upload Audio</span>
        </label>
      </div>
    </div>
  )
}

export default Topbar