import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/hero.css';
import './styles.css';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Instructions from '../../components/Instructions';
import ToggleButton from '../../components/ToggleButton';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PlanCard from '../../components/PlanCard';
import TabButton from '../../components/TabButton';
import { useHistory, useLocation } from 'react-router-dom';

const CoffeeFrequency = React.forwardRef(({ firstCard, secondCard, thirdCard, value, setValue, buttonText, containerId }, ref) => {
    const buttonMemo = useMemo(() => (
        <ToggleButton ref={ref} text={buttonText} />
        ), [ ref, buttonText ]
    );

    return (
        <Container fluid className="mb-5 w-100 px-0 d-flex flex-column align-items-stretch">
            { buttonMemo}
            <Container fluid id={containerId} className="mt-4 w-100 px-0 align-items-stretch flex-column flex-sm-row 
                justify-content-between plan-filter">
                <PlanCard
                    title={firstCard.title}
                    description={firstCard.description}
                    value={value} 
                    setValue={setValue}
                />
                <PlanCard
                    title={secondCard.title}
                    description={secondCard.description}
                    value={value} 
                    setValue={setValue}
                />
                <PlanCard
                    title={thirdCard.title}
                    description={thirdCard.description}
                    value={value} 
                    setValue={setValue}
                />
            </Container>
        </Container>
    );
});

const Subscription = () => {
    const [ coffeeFrequency, setCoffeeFrequency ] = useState('filter');
    const [ coffeeType, setCoffeeType ] = useState('decaf');
    const [ coffeeQuantity, setCoffeeQuantity ] = useState('250g');
    const [ coffeeGrind, setCoffeeGrind ] = useState('cafetiere');
    const [ coffeeDeliveyFrequency, setCoffeeDeliveyFrequency ] = useState('every week');

    const history = useHistory();

    const coffeeFrequencyButtonRef = React.createRef();

    const coffeeFrequencyMemo = useMemo(() => {
       return (
            <CoffeeFrequency 
                value={coffeeFrequency} 
                setValue={setCoffeeFrequency} 
                buttonText="How do you drink your coffee?"
                containerId="coffee-frequency"
                firstCard={{
                    title: 'Capsule',
                    description: 'Compatible with Nespresso systems and similar brewers'
                }}
                secondCard={{
                    title: 'Filter',
                    description: 'For pour over or drip methods like Aeropress, Chemex, and V60'
                }}
                thirdCard={{
                    title: 'Espresso',
                    description: 'Dense and finely ground beans for an intense, flavorful experience'
                }}
            />
        )
    }, [ coffeeFrequency ]);

    const coffeeTypeMemo = useMemo(() => {
        return (
             <CoffeeFrequency 
                 value={coffeeType} 
                 setValue={setCoffeeType} 
                 buttonText="What type of coffee?"
                 containerId="coffee-type"
                 firstCard={{
                     title: 'Single Origin',
                     description: 'Distinct, high quality coffee from a specific family-owned farm'
                 }}
                 secondCard={{
                     title: 'Decaf',
                     description: 'Just like regular coffee, except the caffeine has been removed'
                 }}
                 thirdCard={{
                     title: 'Blended',
                     description: 'Combination of two or three dark roasted beans of organic coffees'
                 }}
             />
         )
     }, [ coffeeType ]);

     const coffeeQuantityMemo = useMemo(() => {
        return (
             <CoffeeFrequency 
                 value={coffeeQuantity} 
                 setValue={setCoffeeQuantity} 
                 buttonText="How would you like?"
                 containerId="coffee-quantity"
                 firstCard={{
                     title: '250g',
                     description: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
                 }}
                 secondCard={{
                     title: '500g',
                     description: 'Perfect option for a couple. Yields about 40 delectable cups.'
                 }}
                 thirdCard={{
                     title: '1000g',
                     description: 'Perfect for offices and events. Yields about 90 delightful cups.'
                 }}
             />
         )
     }, [ coffeeQuantity ]);

     const coffeeGrindMemo = useMemo(() => {
        return (
             <CoffeeFrequency 
                 value={coffeeGrind} 
                 setValue={setCoffeeGrind} 
                 buttonText="Want us to grind them?"
                 containerId="coffee-grind"
                 ref={coffeeFrequencyButtonRef}
                 firstCard={{
                     title: 'Wholebean',
                     description: 'Best choice if you cherish the full sensory experience'
                 }}
                 secondCard={{
                     title: 'Filter',
                     description: 'For drip or pour-over coffee methods such as V60 or Aeropress'
                 }}
                 thirdCard={{
                     title: 'Cafetiere',
                     description: 'Course ground beans specially suited for french press coffee'
                 }}
             />
         )
     }, [ coffeeGrind, coffeeFrequencyButtonRef ]);

     const coffeeDeliveryMemo = useMemo(() => {
        return (
             <CoffeeFrequency 
                 value={coffeeDeliveyFrequency} 
                 setValue={setCoffeeDeliveyFrequency} 
                 buttonText="How often should we delivery?"
                 containerId="coffee-delivery"
                 firstCard={{
                     title: 'Every week',
                     description: '$7.20 per shipment. Includes free first-class shipping.'
                 }}
                 secondCard={{
                     title: 'Every 2 weeks',
                     description: '$9.60 per shipment. Includes free priority shipping.'
                 }}
                 thirdCard={{
                     title: 'Every month',
                     description: '$12.00 per shipment. Includes free priority shipping.'
                 }}
             />
         )
     }, [ coffeeDeliveyFrequency ]);

     const stepsMemo = useMemo(() => <Instructions isSubscriptionPage />, [ ]);
     const footerMemo = useMemo(() => <Footer />, [ ]);
     const heroMemo = useMemo(() => {
        return <Container fluid id="plan-hero" as="section" className="default-hero bg-cover rounded-3 bg-center bg-no-repeat d-flex
            align-items-center justify-content-center justify-content-sm-start subscription-hero">
            <div className="d-block default-hero__content">
                <h1 className="default-hero__title font-weight-9 opacity-9 text-center font-fraunces text-white">About us</h1>
                <p className="opacity-9 text-white text-center default-hero__description">
                    Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from 
                    around the world. We have since been dedicated to bring the perfect cup - from bean to brew -
                    in every shipment.
                </p>
            </div>
        </Container>
     }, [ ]);

     const tabsMemo = useMemo(() => {
         return (
             <>
                <TabButton step="01" text="Preferences" containerId="coffee-frenquency" />
                <TabButton step="02" text="Bean Type" containerId="coffee-type" />
                <TabButton step="03" text="Quantity" containerId="coffee-quantity"  />
                <TabButton step="04" text="Grind Options" containerId="coffee-grind" />
                <TabButton step="05" text="Deliveies" containerId="coffee-delivery" />
             </>
         );
     }, [ ]);

     const [ show, setShow ] = useState(false);
     const handleClose = () => setShow(b => !b);

     useEffect(() => {
        if(coffeeFrequency === 'capsule') {
            coffeeFrequencyButtonRef.current.disabled = true;
        } else {
            coffeeFrequencyButtonRef.current.disabled = false;
        }
     }, [ coffeeFrequency, coffeeFrequencyButtonRef ]);

     const [ shipment, setShipment ] = useState({
         "250g": {
             "every week": "7.20",
             "every 2 weeks": "9.60",
             "every wonth": "12.00"
         },
         "500g": {
            "every week": "13.00",
            "every 2 weeks": "17.50",
            "every month": "22.00"
        },
        "1000g": {
            "every week": "22.00",
            "every 2 weeks": "32.00",
            "every month": "42.00"
        }
    });

    const getTotalPrice = useCallback(() => {
        const price = parseInt(shipment[coffeeQuantity][coffeeDeliveyFrequency.toLowerCase()]);
        let totalPrice = price;

        if(coffeeDeliveyFrequency.toLowerCase() === 'every week') {
            totalPrice = price * 4;
        } else if(coffeeDeliveyFrequency.toLowerCase() === 'every 2 weeks') {
            totalPrice = price * 2;
        }

        return totalPrice;
     }, [ shipment, coffeeQuantity, coffeeDeliveyFrequency ]); 

     useEffect(() => getTotalPrice(), [ getTotalPrice ] );
    
    const getSummaryText = useCallback(() => {
        return (
            <p className="text-start text-white font-weight-9  font-fraunces 
                order-summary__description">
                I drink my coffee  {coffeeFrequency === 'capsule' ? ' using' : ' as'}   
                <em className="order-summary__description--highlight">  { coffeeFrequency}</em>, 
                with a <em className="order-summary__description--highlight">{ coffeeType }</em>,
                type of bean.  <em className="order-summary__description--highlight">{ coffeeQuantity }</em>  
                 {coffeeFrequency === 'capsule' ? '' : (<> ground ala <em className="order-summary__description--highlight">{ coffeeGrind }</em></>) }, sent to
                me <em className="order-summary__description--highlight">{ coffeeDeliveyFrequency }</em>
            </p>
        );
    }, [ coffeeFrequency, coffeeType, coffeeDeliveyFrequency, coffeeGrind, coffeeQuantity ]);

     const createAPlan = () => {
         console.log(setShipment);
        setShow(b => true);
     };

     const modalMemo = useMemo(() => {
        return (
            <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header closeButton className="modal__header">
                    <Modal.Title as="h2" className="font-weight-9 font-fraunces text-white modal__title">
                        Order summary
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { getSummaryText() }
                    <p className="text-start modal__note">
                        Is this correct? You can proceed to checkout or go back to plan selection if 
                        something is off. Subscription discount codes can also be redeemed at the checkout. 
                    </p>
                </Modal.Body>
                <Modal.Footer className="d-flex align-item-center justify-content-center">
                    <span className="d-none d-sm-block font-weight-9 font-fraunces modal__price">${ getTotalPrice().toFixed(2) } / mo</span>
                    <button className="text-white font-weight-9 py-2 mt-2 rounded-3 font-fraunces secondary-bg border-0 
                        modal__checkout"
                        onClick={() => history.push('/')}>
                        <span className="d-sm-none">Checkout - ${ getTotalPrice().toFixed(2) } / <sub className="modal__sub">mo</sub></span>
                        <span className="d-none d-sm-block">Create my plan</span>
                    </button>
                </Modal.Footer>
            </Modal>
        );
     }, [ show, getSummaryText, getTotalPrice, history ]);

     
    const { pathname, hash } = useLocation();

     useEffect(() => {
        // if not a hash link, scroll to top
        console.log(hash)
        if (hash === '') {
          window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
          setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView();
            }
          }, 0);
        }
      }, [ pathname, hash]);

    return (
        <>
            <Header />
            <Container fluid as="main" className="main">
                { heroMemo }
                { stepsMemo }
                <Container as="section" fluid className="mt-5 py-4 coffee-filter">
                    <Row>
                        <Col className="d-none d-md-flex flex-column" md={4} lg={3} >
                            <div className="d-flex align-items-stretch flex-column links-sidebar">
                                { tabsMemo }
                            </div>
                        </Col>
                        <Col xs={12} md={8} lg={{ span: 8, offset: 1 }} >
                            { coffeeFrequencyMemo }
                            { coffeeTypeMemo }
                            { coffeeQuantityMemo }
                            { coffeeGrindMemo }
                            { coffeeDeliveryMemo }
                            <Container fluid className="d-flex flex-column align-items-center px-0">
                                <div className="rounded-3 py-5 px-3 order-summary">
                                    <h2 className="text-start text-uppercase text-white opacity-8 mb-3 order-summary__title">Order summary</h2>
                                    { getSummaryText() }
                                </div>
                                <button className="text-white font-weight-9 py-2 mt-5 rounded-3 font-fraunces secondary-bg border-0 
                                    align-self-md-end order-summary__link"
                                    onClick={createAPlan}>
                                    Create my plan
                                </button>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                { modalMemo }
            </Container>
            { footerMemo }
        </>
    );
};

export default Subscription;