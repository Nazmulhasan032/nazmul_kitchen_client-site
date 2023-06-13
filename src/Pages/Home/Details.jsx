import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import chief from '../../assets/chief.jpg';
import recipe1 from '../../assets/recipe1.jpg'
import recipe2 from '../../assets/recipe2.jpg'
import recipe3 from '../../assets/recipe3.jpg'
import { FaAlignLeft, FaClock, FaEye } from "react-icons/fa";

const Details = ({ id }) => {
  const [detail, setDetail] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  // useEffect(() => {
  //   fetch(`https://nazmul-kitchen-server-nazmulhasan032.vercel.app/details/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDetail(data);
  //     });
  // }, [id]);

  const handleFavorite = () => {
    setIsFavorite(true);
    alert('Recipe added to favorites!');
  };

  return (
    <>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={chief} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Browning Webster</h5>
                <p className="card-text">Experience: 8 years</p>
                <p className="card-text">
                  <small className="text-body-secondary">Recipe: 18</small>
                </p>
                <p className="card-text">
                  <b>Bio: </b>
                  <small className="text-body-secondary">
                    Browning Webster is an accomplished chef with over 15 years of experience in the culinary industry.
                    He has worked in renowned restaurants across the globe, refining his skills and passion for creating
                    extraordinary dishes. John culinary journey began at a young age, inspired by his grandmother
                    traditional recipes. Today, he is known for his expertise in fusion cuisine, where he combines diverse
                    flavors and techniques to deliver unique culinary experiences.
                  </small>
                </p>
                <p className="card-text">
                  <FaThumbsUp />
                  50052
                </p>

                <Button variant="btn btn-primary" onClick={handleFavorite} disabled={isFavorite}>
                  {isFavorite ? 'Favorite' : 'Add to Favorites'}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5'>
            <h4>Recent Recipes: </h4>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        <div className="col">
                    <div className="card">
                        <img src={recipe1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Chicken Shawarma</h5>
                            <p className="card-text mb-0"> <small><FaClock /> 15 min</small></p>
                            <p className="card-text mb-0"> <small> <FaAlignLeft /> 8 ingredients</small> </p>
                            <p className="card-text"> <small><FaEye /> 4590 views</small> </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={recipe2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Vegetable salad</h5>
                            <p className="card-text mb-0"> <small><FaClock /> 30 min</small></p>
                            <p className="card-text mb-0"> <small> <FaAlignLeft /> 16 ingredients</small> </p>
                            <p className="card-text"> <small><FaEye /> 5450 views</small> </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={recipe3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Chow mein</h5>
                            <p className="card-text mb-0"> <small><FaClock /> 25 min</small></p>
                            <p className="card-text mb-0"> <small> <FaAlignLeft /> 10 ingredients</small> </p>
                            <p className="card-text"> <small><FaEye /> 4508 views</small> </p>
                        </div>
                    </div>
                </div>

        </div>
      </div>
    </>
  );
};

export default Details;


