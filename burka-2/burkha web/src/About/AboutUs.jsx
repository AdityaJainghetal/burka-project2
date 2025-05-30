import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="bg-light overflow-hidden">
            <Container className="py-5 px-4 px-md-5">
                <Row className="align-items-center g-5">
                    {/* Image */}
                    <Col md={6} as={motion.div}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src="https://www.jiomart.com/images/product/original/rv3ihcraqn/bhumifab-latest-style-embroidered-umbrella-crepe-solid-burqa-with-hijab-golden-black-product-images-rv3ihcraqn-0-202312272120.jpg"
                            alt="Elegant Burqa Collection"
                            className="w-100 rounded shadow"
                            style={{ objectFit: 'cover', height: '500px' }}
                        />
                    </Col>

                    {/* Text Content */}
                    <Col md={6} as={motion.div}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="h1 fw-semibold text-dark">Our Journey</h2>
                        <p className="mt-4 text-secondary lh-lg">
                            Founded with a vision to celebrate modesty in fashion, we began our journey to redefine Islamic clothing. Our premium burqas combine tradition with contemporary design, offering comfort without compromising on style.
                        </p>
                        
                        <h2 className="h1 fw-semibold text-dark mt-5">Why Choose Our Burqas?</h2>
                        <p className="mt-4 text-secondary lh-lg">
                            Each piece is crafted with premium fabrics, innovative designs, and attention to detail. From breathable summer collections to elegant winter wear, we cater to diverse needs while maintaining the highest standards of modesty.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* Features Section */}
            <Container className="py-5 px-4 px-md-5">
                <motion.h2 
                    className="text-center mb-5 fw-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    Innovative Features
                </motion.h2>
                
                <Row className="g-5">
                    {/* Feature 1 */}
                    <Col md={4} as={motion.div}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="p-4 bg-white rounded shadow-sm h-100">
                            <img
                                src="https://www.jiomart.com/images/product/original/rv3ihcraqn/bhumifab-latest-style-embroidered-umbrella-crepe-solid-burqa-with-hijab-golden-black-product-images-rv3ihcraqn-0-202312272120.jpg"
                                alt="Breathable Fabric"
                                className="w-100 rounded mb-4"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <h3 className="fs-3 fw-bold text-dark">Premium Fabrics</h3>
                            <p className="text-secondary mt-3">
                                Our specially developed fabrics provide maximum comfort with breathability and durability, perfect for all seasons.
                            </p>
                        </div>
                    </Col>

                    {/* Feature 2 */}
                    <Col md={4} as={motion.div}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center"
                    >
                        <div className="p-4 bg-white rounded shadow-sm h-100">
                            <img
                                src="https://www.jiomart.com/images/product/original/rv3ihcraqn/bhumifab-latest-style-embroidered-umbrella-crepe-solid-burqa-with-hijab-golden-black-product-images-rv3ihcraqn-0-202312272120.jpg"
                                alt="Modern Designs"
                                className="w-100 rounded mb-4"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <h3 className="fs-3 fw-bold text-dark">Contemporary Designs</h3>
                            <p className="text-secondary mt-3">
                                Elegant cuts and modern silhouettes that maintain modesty while keeping up with current fashion trends.
                            </p>
                        </div>
                    </Col>

                    {/* Feature 3 */}
                    <Col md={4} as={motion.div}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-center"
                    >
                        <div className="p-4 bg-white rounded shadow-sm h-100">
                            <img
                                src="https://www.jiomart.com/images/product/original/rv3ihcraqn/bhumifab-latest-style-embroidered-umbrella-crepe-solid-burqa-with-hijab-golden-black-product-images-rv3ihcraqn-0-202312272120.jpg"
                                alt="Versatile Styles"
                                className="w-100 rounded mb-4"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <h3 className="fs-3 fw-bold text-dark">Versatile Styles</h3>
                            <p className="text-secondary mt-3">
                                From daily wear to special occasions, our collection offers diverse styles suitable for every need.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Values Section */}
            <Container className="py-5 px-4 px-md-5 bg-white rounded-4 my-5">
                <Row className="g-4">
                    <Col md={6} as={motion.div}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="p-4 h-100">
                            <h3 className="fs-3 fw-bold text-dark mb-4">Our Commitment</h3>
                            <p className="text-secondary lh-lg">
                                We're dedicated to empowering women through fashion that aligns with Islamic values. Every stitch reflects our commitment to quality, comfort, and the preservation of modesty in modern society.
                            </p>
                        </div>
                    </Col>
                    
                    <Col md={6} as={motion.div}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="p-4 h-100">
                            <h3 className="fs-3 fw-bold text-dark mb-4">Sustainable Practices</h3>
                            <p className="text-secondary lh-lg">
                                Our production process emphasizes ethical sourcing and sustainable methods. We believe in fashion that respects both people and the planet, creating pieces that last.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;