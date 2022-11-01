import React, { Component } from 'react'

export default class ThongTinThanhToan extends Component {
    render() {
        return (
            <div>
                <div className='text-light mt-5'>
                    <button className='gheDuocChon'></button> <span style={{ fontSize: '30px' }}>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'></button> <span style={{ fontSize: '30px' }}>Ghế đang đặt</span>
                    <br />
                    <button style={{ marginLeft: '0' }} className='ghe'></button> <span style={{ fontSize: '30px' }}>Ghế chưa đặt</span>
                </div>
                <div className='mt-4'>
                    <table className="table" border='2'>
                        <thead>
                            <tr className=' text-light' style={{ fontSize: '30px' }}>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>



                </div>
            </div>
        )
    }
}
