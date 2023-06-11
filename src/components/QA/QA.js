import React, {useState} from 'react'
import classNames from 'classnames/bind'
import styles from './QA.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer'

const cx = classNames.bind(styles)

const QA = () => {

    let [pageNumber, setPageNumber] = useState(1)

    return (
        <div className={cx('information-table')}>
            <table className={cx('table-data')}>
                <tr>
                    <th className={cx('th-table')}>QA FOR CS TEAM - SMARTPAY</th>
                    <th width="20%" className={cx('th-table')}>TOPIC</th>
                    <th className={cx('th-table')}>TỶ TRỌNG</th>
                    <th className={cx('th-table')}>ĐIỂM</th>
                    <th className={cx('th-table')}>NỘI DUNG CHẤM ĐIỂM</th>
                </tr>
                <tr className={cx('header-table')}>
                    <th><FontAwesomeIcon icon={faSortDown} className={cx('play')}/> Bố cục</th>
                    <th></th>
                    <th>10</th>
                    <th colSpan="2"></th>
                </tr>
                <tr>
                    <th rowSpan="3">Mở đầu</th>
                    <td colSpan="2">Có</td>
                    <td>4</td>
                    <td rowSpan="6">Chao Khach:.... </td>
                </tr>
                <tr>
                    <td colSpan="2">Không</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td colSpan="2">Mở đầu không đầy đủ</td>
                    <td>1</td>
                </tr>
                <tr>
                    <th rowSpan="3">Kết thúc</th>
                    <td colSpan="2">Có</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td colSpan="2">Không</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td colSpan="2">Kết thúc không đầy đủ</td>
                    <td>1</td>
                </tr>
                <tr className={cx('header-table')}>
                    <th>Nội dung</th>
                    <th></th>
                    <th>70</th>
                    <th colSpan="2"></th>
                </tr>
                <tr>
                    <th rowSpan="2">Agent có trả lời đúng câu hỏi của kháng hàng không?</th>
                    <td colSpan="2">Có</td>
                    <td>4</td>
                    <td rowSpan="4">Tuân thủ quy trình: Khi khách hàng nói khó hiểu: có đặt câu hỏi gợi mở để khai thác thông tin?
                        Cung cấp thêm thông tin cần thiết (không chỉ hỏi gì phản hồi đó)</td>
                </tr>
                <tr>
                    <td colSpan="2">Không</td>
                    <td>0</td>
                </tr>
                <tr>
                    <th rowSpan="2">Agent có giải thích đầy đủ tình trạng hiện tại & đưa ra giải pháp thích hợp/giải thích hợp lý không?</th>
                    <td colSpan="2">Có</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td colSpan="2">Không</td>
                    <td>0</td>
                </tr>
                <tr className={cx('header-table')}>
                    <th>Thái Độ/Lời Lẽ/Ngôn Ngữ</th>
                    <th></th>
                    <th>20</th>
                    <th colSpan="2"></th>
                </tr>
                <tr>
                    <th rowSpan="2">Thái độ</th>
                    <td colSpan="2">Đạt</td>
                    <td>10</td>
                    <td rowSpan="4">Thái độ: niềm nở, nhiệt tình, thân thiện.
                        Thể hiện sự đồng cảm, tận tâm hỗ trợ khách hàng.
                        Không nói chen lời, ngắt lời khách, không thờ ơ im lặng.
                        Không lớn tiếng, tông giọng lên cao, hay quá xuống thấp nghe chán nản, trầm buồn
                        Ngôn ngữ:
                        không sử dụng các từ chuyên ngành/ tiếng lóng/tiếng anh/ từ phản cảm…</td>
                </tr>
                <tr>
                    <td colSpan="2">Không đạt</td>
                    <td>0</td>
                </tr>
                <tr>
                    <th rowSpan="2">Ngôn ngữ</th>
                    <td colSpan="2">Đạt</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td colSpan="2">Không đạt</td>
                    <td>0</td>
                </tr>
                <tfoot>
                    <tr className={cx('header-table')}>
                        <th></th>
                        <th></th>
                        <th className={cx('table-total')}>Total: 100</th>
                        <th>100</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
            <Footer 
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                page={50}
            />
        </div>
    )
}

export default QA