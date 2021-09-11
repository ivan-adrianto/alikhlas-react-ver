import React from 'react';
import './banner.css'

const Banner = (props) => {
  return (
    <div>
      <section id="home" class="banner d-flex align-items-center position-relative vh-100 cover hero">
        <div class="container-fluid container-fluid-max">
            <div class="row">
                <div class="col-12 col-md-8">
                    <h1 class="text-white teks-banner">Masa Depan Cerah <br /> untuk Semuanya</h1>
                    <div class="mt-3">
                        <a class="btn bg-red text-white mr-2 font-weight-bold" href="" role="button"><span>Cek Program Kami</span></a>
                        <a class="btn bg-red text-white font-weight-bold" href="" role="button"><span>Donasi</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Banner;