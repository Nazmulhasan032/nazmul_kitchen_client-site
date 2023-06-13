import React from 'react';
import member1 from '../../assets/member1.jpg'
import member2 from '../../assets/member2.jpg'
import member3 from '../../assets/member3.jpg'

const FeaturesSection = () => {
    return (
        <div className='container my-5'>

        <h2>Featured member</h2>

        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                    <img src={member1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Nazmul Hasan</h5>
                            <small>Founder & CEO</small>
                            
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={member2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Anas Bin Abdullah</h5>
                            <small>Chief Head & COO</small>
                            
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={member3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Maruf Hossain</h5>
                            <small>Tech Manager & CFO</small>
                            
                        </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default FeaturesSection;