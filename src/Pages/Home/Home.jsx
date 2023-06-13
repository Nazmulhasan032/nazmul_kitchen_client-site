import React, { useEffect, useState, Suspense } from 'react';
import food1 from '../../assets/food1.jpg';
import food2 from '../../assets/food2.jpg';
import food3 from '../../assets/food3.jpeg';
import { Carousel, Spinner } from 'react-bootstrap';

const CheifCard = React.lazy(() => import('./CheifCard'));
const RecipeSection = React.lazy(() => import('./RecipeSection'));
const FeaturesSection = React.lazy(() => import('./FeaturesSection'));

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [allChief, setAllChief] = useState([]);

    useEffect(() => {
        fetch(`https://nazmul-kitchen-server-nazmulhasan032.vercel.app/home`)
            .then(res => res.json())
            .then(data => {
                setAllChief(data);
                setLoading(false);
            });
    }, []);

    const [index, setIndex] = useState(0);
    const handleSelect = selectedIndex => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel className="container" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div style={{ height: '500px' }} className="w-80">
                        <img className="d-block w-100 fluid" src={food1} alt="First slide" />
                    </div>
                    <Carousel.Caption>
                        <h3>Tandoori Chicken</h3>
                        <p>
                            Tandoori chicken, a dish of roasted chicken marinated in yogurt and generously spiced, giving the
                            meat its trademark red color
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ height: '500px' }} className="w-80">
                        <img className="d-block w-100 fluid" src={food2} alt="Second slide" />
                    </div>
                    <Carousel.Caption>
                        <h3>Beef Steak</h3>
                        <p>Aside from the hand test, you can measure a steak by cutting it open and looking at its color.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ height: '500px' }} className="w-80">
                        <img className="d-block w-100 fluid" src={food3} alt="Third slide" />
                    </div>
                    <Carousel.Caption>
                        <h3>Dessert Items</h3>
                        <p>You will be pleased with our dessert items. It makes you joy and refreshing.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {loading ? (
                <div className="text-center mt-3">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                <Suspense fallback={<div>Loading...</div>}>
                    {allChief.map(chief => <CheifCard key={chief.id} chief={chief} />)}
                    <RecipeSection />
                    <FeaturesSection />
                </Suspense>
            )}
        </div>
    );
};

export default Home;





