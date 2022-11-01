import React, { Component } from 'react'

export default class DanhSachGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = '';
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon'
                disabled = true;
            }
            return <button disabled={disabled} className={`ghe ${cssGheDaDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
            return <button className='rowNumber'>
                {hang.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='ml-5'>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else {


            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }
    render() {
        console.log(this.props.hangGhe.danhSachGhe)
        return (
            <div className='text-light ml-4 mt-4 text-left'>
                {this.renderHangGhe()}
            </div>
        )
    }
}
