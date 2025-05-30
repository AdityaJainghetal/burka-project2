// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';
// // import Slider from 'react-slick';

// import axios from 'axios';
// import { toast } from 'react-toastify';

// const NewArrivalOne = () => {
//     const [courses, setCourses] = useState([]);
//     const [filterText, setFilterText] = useState('');
//     const navigate = useNavigate()




//     const api = 'http://localhost:8080/product';

//     useEffect(() => {
//         const fetchCourses = async () => {
//             try {
//                 const response = await axios.get(api);
//                 setCourses(response.data);
//             } catch (error) {
//                 toast.error('Error fetching course data');
//                 console.error('Error fetching course data:', error);
//             }
//         };
//         fetchCourses();
//     }, []);
    
    
    
    
//   const handleCourseClick = (courseId) => {
//     navigate(`/product-details/${courseId}`);
//   };

    
    
    
//     function SampleNextArrow(props) {
//         const { className, onClick } = props;
//         return (
//             <button
//                 type="button" onClick={onClick}
//                 className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
//             >
//                 <i className="ph ph-caret-right" />
//             </button>
//         );
//     }
//     function SamplePrevArrow(props) {
//         const { className, onClick } = props;

//         return (

//             <button
//                 type="button"
//                 onClick={onClick}
//                 className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
//             >
//                 <i className="ph ph-caret-left" />
//             </button>
//         );
//     }
//     const settings = {
//         dots: false,
//         arrows: true,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         autoplay: true,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [
//             {
//                 breakpoint: 1599,
//                 settings: {
//                     slidesToShow: 6,

//                 },
//             },
//             {
//                 breakpoint: 1399,
//                 settings: {
//                     slidesToShow: 4,

//                 },
//             },
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 3,

//                 },
//             },
//             {
//                 breakpoint: 575,
//                 settings: {
//                     slidesToShow: 2,

//                 },
//             },
//             {
//                 breakpoint: 424,
//                 settings: {
//                     slidesToShow: 1,

//                 },
//             },

//         ],
//     };
//     return (
//         <section className="new-arrival pb-80">
//             <div className="container container-lg">
//                 <div className="section-heading">
//                     <div className="flex-between flex-wrap gap-8">
//                         <h5 className="mb-0">New Arrivals</h5>
//                         <div className="flex-align mr-point gap-16">
//                             <Link
//                                 to="/shop"
//                                 className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
//                             >
//                                 View All Deals
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="new-arrival__slider arrow-style-two">
//                     <Slider {...settings}>
//                         {courses.map((course) => (
//                         <div>
//                             <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                 <Link
//                                     // to="/product-details"
//                                      onClick={() => handleCourseClick(course._id)}
//                                     className="product-card__thumb flex-center"
//                                 >
//                                     <img src={course.images?.[0]} alt="" />
//                                 </Link>
//                                 <div className="product-card__content mt-12">
//                                     <div className="flex-align gap-6">
//                                         <span className="text-xs fw-bold text-gray-500">4.8</span>
//                                         <span className="text-15 fw-bold text-warning-600 d-flex">
//                                             <i className="ph-fill ph-star" />
//                                         </span>
//                                         <span className="text-xs fw-bold text-gray-500">{course.price}</span>
//                                     </div>
//                                     <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                         <Link to="/product-details" className="link text-line-2">
//                                          {course.name}
//                                         </Link>
//                                     </h6>
//                                     <div className="flex-align gap-4">
//                                         <span className="text-main-600 text-md d-flex">
//                                             <i className="ph-fill ph-storefront" />
//                                         </span>
//                                         <span className="text-gray-500 text-xs">
//                                            {course.fabric}
//                                         </span>
//                                     </div>
//                                     <div className="flex-between gap-8 mt-24 flex-wrap">
//                                         <div className="product-card__price">
//                                             <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
//                                              {course.price}
//                                             </span>
//                                             <span className="text-heading text-md fw-semibold ">
//                                                {course.stock}<span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                             </span>
//                                         </div>
//                                         <Link
//                                             to="/cart"
//                                             className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
//                                         >
//                                             Add <i className="ph ph-shopping-cart" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                    </Slider>
                    
//                 </div>
//             </div>
//         </section>

//     )
// }

// export default NewArrivalOne




import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Redux/CardSlice'; // Update path as needed

const NewArrivalOne = () => {
    const [courses, setCourses] = useState([]);
    const [filterText, setFilterText] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const api = 'http://localhost:8080/product';

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(api);
                setCourses(response.data);
            } catch (error) {
                toast.error('Error fetching course data');
                console.error('Error fetching course data:', error);
            }
        };
        fetchCourses();
    }, []);
    
    const handleCourseClick = (courseId) => {
        navigate(`/product-details/${courseId}`);
    };

    const handleaddtoCart = (course) => {
        dispatch(
            addtoCart({
                id: course._id,
                name: course.name,
                price: course.price,
                image: course.images?.[0],
                qnty: 1
            })
        );
        toast.success(`${course.name} added to cart!`);
    };

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                type="button" onClick={onClick}
                className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
            >
                <i className="ph ph-caret-right" />
            </button>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                type="button"
                onClick={onClick}
                className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
            >
                <i className="ph ph-caret-left" />
            </button>
        );
    }

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="new-arrival pb-80">
            <div className="container container-lg">
                <div className="section-heading">
                    <div className="flex-between flex-wrap gap-8">
                        <h5 className="mb-0">New Arrivals</h5>
                        <div className="flex-align mr-point gap-16">
                            <Link
                                to="/shop"
                                className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                            >
                                View All Deals
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="new-arrival__slider arrow-style-two">
                    <Slider {...settings}>
                        {courses.map((course) => (
                            <div key={course._id}>
                                <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        onClick={() => handleCourseClick(course._id)}
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src={course.images?.[0]} alt={course.name} />
                                    </Link>


                                    
                                 <div className="product-card__content p-3 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-300">
  <h6 className="title text-lg fw-semibold mt-3 mb-3 text-dark">
    <div 
      onClick={() => handleCourseClick(course._id)}
      className="link text-line-2 cursor-pointer text-success"
    >
      {course.name}
    </div>
  </h6>

  <div className="d-flex align-items-center justify-content-between mb-2">
    <div className="d-flex align-items-center gap-2">
      <span className="text-success text-md me-2">
        <i className="ph-fill ph-storefront text-success fs-5" />
      </span>
      <span className="text-muted text-sm">
        {course.fabric || "No fabric specified"}
      </span>
    </div>
    <span className="text-end text-sm text-dark fw-semibold">
      Size: <span className="text-success">{course.size}</span>
    </span>
  </div>

  <div className="product-card__content mt-3">
    <div className="product-card__price mb-3 d-flex align-items-center gap-3">
      <span className="text-muted text-decoration-line-through fw-semibold">
        ₹{course.originalPrice || course.price}
      </span>
      <span className="text-success fw-bold fs-5">
        ₹{course.price}
      </span>
    </div>

    <span className="text-sm fw-semibold text-success">
      {course.stock}: 
      <span className="fw-normal text-muted"> Stock </span>
    </span>

    <button
      onClick={() => handleaddtoCart(course)}
      className="product-card__cart btn btn-success mt-3 w-100 rounded-pill d-flex align-items-center justify-content-center gap-2"
    >
      Add To Cart <i className="ph ph-shopping-cart" />
    </button>
  </div>
</div>


                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default NewArrivalOne;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const NewArrivalOne = () => {
//     const [courses, setCourses] = useState([]);
//     const [filterText, setFilterText] = useState('');

//     const api = 'http://localhost:8080/product';

//     useEffect(() => {
//         const fetchCourses = async () => {
//             try {
//                 const response = await axios.get(api);
//                 setCourses(response.data);
//             } catch (error) {
//                 toast.error('Error fetching course data');
//                 console.error('Error fetching course data:', error);
//             }
//         };
//         fetchCourses();
//     }, []);

//     function SampleNextArrow(props) {
//         const { className, onClick } = props;
//         return (
//             <button
//                 type="button" onClick={onClick}
//                 className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
//             >
//                 <i className="ph ph-caret-right" />
//             </button>
//         );
//     }

//     function SamplePrevArrow(props) {
//         const { className, onClick } = props;
//         return (
//             <button
//                 type="button"
//                 onClick={onClick}
//                 className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
//             >
//                 <i className="ph ph-caret-left" />
//             </button>
//         );
//     }

//     const settings = {
//         dots: false,
//         arrows: true,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         autoplay: true,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [
//             {
//                 breakpoint: 1599,
//                 settings: { slidesToShow: 6 },
//             },
//             {
//                 breakpoint: 1399,
//                 settings: { slidesToShow: 4 },
//             },
//             {
//                 breakpoint: 992,
//                 settings: { slidesToShow: 3 },
//             },
//             {
//                 breakpoint: 575,
//                 settings: { slidesToShow: 2 },
//             },
//             {
//                 breakpoint: 424,
//                 settings: { slidesToShow: 1 },
//             },
//         ],
//     };

//     return (
//         <section className="new-arrival pb-80">
//             <div className="container container-lg">
//                 <div className="section-heading">
//                     <div className="flex-between flex-wrap gap-8">
//                         <h5 className="mb-0">New Arrivals</h5>
//                         <div className="flex-align mr-point gap-16">
//                             <Link
//                                 to="/shop"
//                                 className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
//                             >
//                                 View All Deals
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="new-arrival__slider arrow-style-two">
//                     <Slider {...settings}>
//                         {courses.map((course) => (
//                             <div key={course.id}>
//                                 <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src={course.images?.[0]} alt={course.name} />
//                                     </Link>
//                                     <div className="product-card__content mt-12">
//                                         <div className="flex-align gap-6">
//                                             <span className="text-xs fw-bold text-gray-500">4.8</span>
//                                             <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                 <i className="ph-fill ph-star" />
//                                             </span>
//                                             <span className="text-xs fw-bold text-gray-500">(17k)</span>
//                                         </div>
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 {course.name}
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="flex-between gap-8 mt-24 flex-wrap">
//                                             <div className="product-card__price">
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
//                                                     {course.price}
//                                                 </span>
//                                                 <span className="text-heading text-md fw-semibold">
//                                                     {course.stocks} <span className="text-gray-500 fw-normal">/Qty</span>
//                                                 </span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
//                                             >
//                                                 Add <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default NewArrivalOne;