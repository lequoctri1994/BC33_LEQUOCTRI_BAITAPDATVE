import React, { Component, Fragment } from 'react'
import ThongTinThanhToan from '../Components/ThongTinThanhToan'
import './DatVe.css'
import danhSachGheData from '../Data/danhSachGhe.json'
import DanhSachGhe from '../Components/DanhSachGhe'





export default class DatVe extends Component {

  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return <div className='text-left' key={index}>
        <DanhSachGhe hangGhe={hangGhe} soHangGhe={index}/>
      </div>
    })
  }


  render() {
    return (
      <div className='bookingMovie' style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: '100%' }}>
        <div style={{ position: 'fixed', backgroundColor: 'rgba(0,0,0,0.8', width: '100%', height: '100%' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 ">
                <div className='text-warning display-4'>ĐẶT VÉ XEM PHIM CYBERLEARN</div>
                <div className='text-light text-center mt-2' style={{ fontSize: '20px' }}>MÀN HÌNH</div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <div className="screen"></div>
                </div>
                  {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <div className='text-light display-6  text-center '>DANH SÁCH GHẾ BẠN CHỌN</div>
                <ThongTinThanhToan />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
