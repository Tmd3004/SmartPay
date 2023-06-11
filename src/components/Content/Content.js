import React, { useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './Content.module.scss'
import Wavesurfer from "wavesurfer.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';


const cx = classNames.bind(styles)

const Content = ({song}) => {

  const waveform = useRef(null);

  useEffect(() => {
    if (!waveform.current) {
      waveform.current = Wavesurfer.create({
        container: "#waveform",
        waveColor: "#AFAFAF",
        barGap: 2,
        barWidth: 3,
        barRadius: 3,
        cursorWidth: 3,
        cursorColor: "#AFAFAF",
      });
      waveform.current.load(`./track/${song}`);
    }
  }, [song]);

  const playAudio = () => {
    // Check if the audio is already playing
    if (waveform.current.isPlaying()) {
      waveform.current.pause();
    } else {
      waveform.current.play();
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h3 className={cx('desc')}>The Ultimate 1.1 coaching hours</h3>
        <h3 className={cx('date')}>Thu 20 may, 9-10 am</h3>
      </div>
      <div className={cx('audio')} id="waveform">
      </div>
      <div className={cx('button')}>
        <div className={cx('media')}>
          <button className={cx('play')} onClick={playAudio}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <input type='range' min={0} max={100} className={cx('audio-scroll')} />
          <FontAwesomeIcon icon={faVolumeHigh} className={cx('volume')} />
          <input type='range' min={0} max={100} value={100} className={cx('volume-scroll')} />
          <span className={cx('time')}>0:00 / 1:28</span>
        </div>
        <div className={cx('utility')}>
          <span className={cx('speed')}>1X</span>
          <FontAwesomeIcon icon={faTrashCan} className={cx('delete-icon')}/>
        </div>
      </div>
    </div>
  )
}

export default Content