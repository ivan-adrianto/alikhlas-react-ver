import React from 'react';
import './aboutUs.css'

function AboutUs(props) {
    return (
        <div>
            <section id='tentang-kami' className='tentang-kami'>
                <div className='container'>
                    <div className='row no-gutters'>
                        <div className='col-12 col-md-6 d-flex align-items-center order-1 order-md-0'>
                            <div className='p-15'>
                                <h2>Sejarah Al-Ikhlas</h2>
                                <p>Krisis sosial yang terjadi di Indonesia pada tahun 1998 telah membuka mata kita bahwa
                            korupsi masih merajalela, kemiskinan terjadi dimana-mana, dan berbagai sektor masyarakat kita mengalami kerusakan. Dan meskipun jumlah penduduk Indonesia didominasi umat Islam, namun perkembangan ilmu dan teknologinya jauh tertinggal dari bangsa-bangsa lain.   
        
                            </p><br/>
                            <p>Berawal dari keprihatinan terhadap fenomena tersebut, sekitar tahun 1990-an terdapat kumpulan pemuda dari berbagai perguruan tinggi yang memiliki idealisme dan kepedulian terhadap masyarakatnya, mencari kebermaknaan dan memberi arti kepada masyarakat. Mereka memikirkan secara mendalam bagaimana jalan membangun Indonesia, melahirkan berbagai konsep pembangunan masyarakat, membenahi bidang-bidang kehidupan yang mengalami kerusakan.</p> <br />
                            <button className="btn bg-red text-white font-weight-bold">Lebih lanjut &#8594;</button>
                            </div>
                            </div>

                        <div className="col-12 col-md-6 order-0 order-md-1"><br /><br /><br />
                        <div className='cover aboutUs' ></div>
                        

                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
}

export default AboutUs;