import React from 'react';
import news1 from '../img/news3.jpg'
import news2 from '../img/news7.jpg'
import news3 from '../img/news8.jpg'
import news4 from '../img/news9.jpg'
import news5 from '../img/news10.jpg'
import './news.css'

function News(props) {
    return (
        <div id='updates' className='updates py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='pb-3'>Updates</h2>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4'>
                        <a href='' className='text-white'>
                            <figure className='position-relative overflow-hidden'>
                                <img src={news1} className='img-fluid'  alt='news 3'>
                                </img>
                                <figcaption className='d-flex align-items-center justify-content-center-position-absolute'>
                                        <h3>Disinfeksi di lingkungan Sekitar</h3>
                                    </figcaption>
                            </figure>

                        </a>

                    </div>
                    <div className='col-12 col-sm-6 col-md-4'>
                        <a href='' className='text-white'>
                            <figure className='position-relative overflow-hidden'>
                                <img src={news2} className='img-fluid'  alt='news 3'>
                                </img>
                                <figcaption className='d-flex align-items-center justify-content-center-position-absolute'>
                                        <h3>Disinfeksi di lingkungan Sekitar</h3>
                                    </figcaption>
                            </figure>

                        </a>

                    </div>
                    <div className='col-12 col-sm-6 col-md-4'>
                        <a href='' className='text-white'>
                            <figure className='position-relative overflow-hidden'>
                                <img src={news3} className='img-fluid'  alt='news 3'>
                                </img>
                                <figcaption className='d-flex align-items-center justify-content-center-position-absolute'>
                                        <h3>Disinfeksi di lingkungan Sekitar</h3>
                                    </figcaption>
                            </figure>

                        </a>

                    </div>
                    <div className='col-12 col-sm-6'>
                        <a href='' className='text-white'>
                            <figure className='position-relative overflow-hidden'>
                                <img src={news4} className='img-fluid'  alt='news 3'>
                                </img>
                                <figcaption className='d-flex align-items-center justify-content-center-position-absolute'>
                                        <h3>Disinfeksi di lingkungan Sekitar</h3>
                                    </figcaption>
                            </figure>

                        </a>

                    </div>
                    <div className='col-12 col-sm-6'>
                        <a href='' className='text-white'>
                            <figure className='position-relative overflow-hidden'>
                                <img src={news5} className='img-fluid'  alt='news 3'>
                                </img>
                                <figcaption className='d-flex align-items-center justify-content-center-position-absolute'>
                                        <h3>Disinfeksi di lingkungan Sekitar</h3>
                                    </figcaption>
                            </figure>

                        </a>

                    </div>


                </div>

            </div>
        </div>
    );
}

export default News;