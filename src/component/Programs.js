import React from 'react';
import kampungCerdas from '../img/reading-book (4).svg'
import binaMoral from '../img/man (1).svg'
import masyarakatMandiri from '../img/entrepreneur (1).svg'
import university from '../img/school.svg'
import './programs.css'




function Programs(props) 
{
    return (
        <div>
            <section id="programs" className="programs">
                <div className="container">
                    <div className='row text-center py-5'>
                        <div className="col-12 pb-4">
                            <h2 className="text-red">Program</h2>
                        </div>
                        <div className='col-12 col-sm-6 col-lg-3'>
                            <img src={kampungCerdas}></img><br />
                            <h3>Kampung Cerdas</h3>
                            <p>Pendidikan formal dan non-formal gratis untuk anak-anak dari kalangan marjinal.</p>
                        </div>
                        <div className='col-12 col-sm-6 col-lg-3'>
                            <img src={binaMoral}></img><br />
                            <h3>Bina Moral Remaja</h3>
                            <p>Seminar ESQ untuk membentuk remaja yang cerdas, bermoral, dan bertakwa.</p>
                        </div>
                        <div className='col-12 col-sm-6 col-lg-3'>
                            <img src={masyarakatMandiri}></img><br />
                            <h3>Masyarakat Mandiri</h3>
                            <p>Bantuan sosial serta pelatihan keterampilan bagi masyarakat sekitar.</p>
                        </div>
                        <div className='col-12 col-sm-6 col-lg-3'>
                            <img src={university}></img><br />
                            <h3>Al-Ikhlas University</h3>
                            <p>Pencetak pemimpin bangsa di masa depan yang berkarakter dan bermoral.</p>
                        </div>
                        <div className = 'col-12 pt-3'><br /><br/><br />
                            <a className='btn bg-reed text-white font-weight-bold' target='_blank' href='' role='button'><span>Pelajari Lebih Lanjut</span></a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Programs;