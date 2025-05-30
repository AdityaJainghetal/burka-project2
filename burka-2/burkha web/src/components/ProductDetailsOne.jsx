// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom';
// import Slider from 'react-slick';
// import { getCountdown } from '../helper/Countdown';
// import axios from 'axios';

// const ProductDetailsOne = () => {
//     const { id } = useParams();
//     const [timeLeft, setTimeLeft] = useState(getCountdown());
//     const [product, setProduct] = useState(null);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(`https://backend-20ar.onrender.com/product/${id}`);
//                 setProduct(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(true);
//                 setLoading(false);
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTimeLeft(getCountdown());
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     const productImages = product?.images || [];
  

//     const [quantity, setQuantity] = useState(1);
//     const incrementQuantity = () => setQuantity(quantity + 1);
//     const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);


//       const [mainImage, setMainImage] = useState('');

//     useEffect(() => {
//         if (productImages.length > 0) {
//             setMainImage(productImages[0]);
//         }
//     }, [productImages]);

//     const settingsThumbs = {
//         slidesToShow: 4,
//         swipeToSlide: true,
//         focusOnSelect: true,
//         infinite: false,
//         arrows: true,
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error loading product</div>;
//     if (!product) return null;

//     return (
//         <section className="product-details py-80">
//             <div className="container container-lg">
//                 <div className="row gy-4">
//                     <div className="col-lg-12">
//                         <div className="row gy-4">
//                             <div className="col-xl-6">
//                                 <div className="product-details__left">
//                                     <div className="product-details__thumb-slider border border-gray-100 rounded-16">
//                                         <div className="">
//                                             <div className="product-details__thumb flex-center h-100">
//                                                 <img src={mainImage} alt="Main Product" />
//                                                 {/* {console.log(mainImage,'asdfgh')} */}
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="mt-24">
//                                         <div className="product-details__images-slider">
//                                             <Slider {...settingsThumbs}>
//                                                 {productImages.map((image, index) => (
//                                                     <div onClick={() => setMainImage(image)} className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8" key={index} onClick={() => setMainImage(image)}>
//                                                         <img className='thum' src={image} alt={`Thumbnail ${index}`} />
//                                                     </div>
//                                                 ))}
//                                             </Slider>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-6">
//                                 <div className="product-details__content">
//                                     <h5 className="mb-12">{product.name}</h5>
//                                     <div className="flex-align flex-wrap gap-12">
//                                         <div className="flex-align gap-12 flex-wrap">
//                                             <div className="flex-align gap-8">
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                             </div>
//                                             <span className="text-sm fw-medium text-neutral-600">
//                                                 4.7 Star Rating
//                                             </span>
//                                             <span className="text-sm fw-medium text-gray-500">
//                                                 ₹{product.price}
//                                             </span>
//                                         </div>
//                                         <span className="text-sm fw-medium text-gray-500">|</span>
//                                         <span className="text-gray-900">
//                                             <span className="text-gray-400">SKU:</span> {product.sku || "EB4DRP"}
//                                         </span>
//                                     </div>
//                                     <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
//                                     <p className="text-gray-700">
//                                         {product.description}
//                                     </p>
//                                     <div className="mt-32 flex-align flex-wrap gap-32">
//                                         <div className="flex-align gap-8">
//                                             <h4 className="mb-0">₹{product.discountedPrice || product.price}</h4>
//                                             {product.discountedPrice && (
//                                                 <span className="text-md text-gray-500">₹{product.price}</span>
//                                             )}
//                                         </div>
//                                         <Link to="#" className="btn btn-main rounded-pill">
//                                             Order on What'sApp
//                                         </Link>
//                                     </div>
//                                     <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
//                                     <div className="flex-align flex-wrap gap-16 bg-color-one rounded-8 py-16 px-24">
                                        
                                      
                                       
//                                     </div>
//                                     <div className="mb-24">
//                                         <div className="mt-32 flex-align gap-12 mb-16">
//                                             <span className="w-32 h-32 bg-white flex-center rounded-circle text-main-600 box-shadow-xl">
//                                                 <i className="ph-fill ph-lightning" />
//                                             </span>
//                                             <h6 className="text-md mb-0 fw-bold text-gray-900">
//                                                 Products are almost sold out
//                                             </h6>
//                                         </div>
//                                         <div
//                                             className="progress w-100 bg-gray-100 rounded-pill h-8"
//                                             role="progressbar"
//                                             aria-label="Basic example"
//                                             aria-valuenow={32}
//                                             aria-valuemin={0}
//                                             aria-valuemax={100}
//                                         >
//                                             <div
//                                                 className="progress-bar bg-main-two-600 rounded-pill"
//                                                 style={{ width: "32%" }}
//                                             />
//                                         </div>
//                                         <span className="text-sm text-gray-700 mt-8">
//                                             Available only: {product.stock || 45}
//                                         </span>
//                                     </div>
//                                     <span className="text-gray-900 d-block mb-8">Quantity:</span>
//                                     <div className="flex-between gap-16 flex-wrap">
//                                         <div className="flex-align flex-wrap gap-16">
//                                             <div className="border border-gray-100 rounded-pill py-9 px-16 flex-align">
//                                                 <button onClick={decrementQuantity}
//                                                     type="button"
//                                                     className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"
//                                                 >
//                                                     <i className="ph ph-minus" />
//                                                 </button>
//                                                 <input
//                                                     type="number"
//                                                     className="quantity__input border-0 text-center w-32"
//                                                     value={quantity} readOnly
//                                                 />
//                                                 <button onClick={incrementQuantity}
//                                                     type="button"
//                                                     className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"
//                                                 >
//                                                     <i className="ph ph-plus" />
//                                                 </button>
//                                             </div>
//                                             <Link
//                                                 to="#"
//                                                 className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-48"
//                                             >
//                                                 <i className="ph ph-shopping-cart" /> Add To Cart
//                                             </Link>
//                                         </div>
                                     
//                                     </div>
//                                     <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                                   
                                   
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                
//                 </div>
//                 <div className="pt-80">
//                     <div className="product-dContent border rounded-24">
//                         <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
//                             <ul
//                                 className="nav common-tab nav-pills mb-3"
//                                 id="pills-tab"
//                                 role="tablist"
//                             >
//                                 <li className="nav-item" role="presentation">
//                                     <button
//                                         className="nav-link active"
//                                         id="pills-description-tab"
//                                         data-bs-toggle="pill"
//                                         data-bs-target="#pills-description"
//                                         type="button"
//                                         role="tab"
//                                         aria-controls="pills-description"
//                                         aria-selected="true"
//                                     >
//                                         Description
//                                     </button>
//                                 </li>
//                                 <li className="nav-item" role="presentation">
//                                     <button
//                                         className="nav-link"
//                                         id="pills-reviews-tab"
//                                         data-bs-toggle="pill"
//                                         data-bs-target="#pills-reviews"
//                                         type="button"
//                                         role="tab"
//                                         aria-controls="pills-reviews"
//                                         aria-selected="false"
//                                     >
//                                         Reviews
//                                     </button>
//                                 </li>
//                             </ul>
//                             <Link
//                                 to="#"
//                                 className="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white"
//                             >
//                                 <img src="assets/images/icon/satisfaction-icon.png" alt="" />
//                                 100% Satisfaction Guaranteed
//                             </Link>
//                         </div>
//                         <div className="product-dContent__box">
//                             <div className="tab-content" id="pills-tabContent">
//                                 <div
//                                     className="tab-pane fade show active"
//                                     id="pills-description"
//                                     role="tabpanel"
//                                     aria-labelledby="pills-description-tab"
//                                     tabIndex={0}
//                                 >
//                                     <div className="mb-40">
//                                         <h6 className="mb-24">Product Description</h6>
//                                         <p>
//                                             {product.description}
//                                         </p>
//                                         <p>
//                                             {product.additionalDescription || ""}
//                                         </p>
                                      
//                                     </div>
                                 
                                   
//                                 </div>
//                                 <div
//                                     className="tab-pane fade"
//                                     id="pills-reviews"
//                                     role="tabpanel"
//                                     aria-labelledby="pills-reviews-tab"
//                                     tabIndex={0}
//                                 >
//                                     <div className="row g-4">
//                                         <div className="col-lg-6">
//                                             <h6 className="mb-24">Product Description</h6>
//                                             <div className="d-flex align-items-start gap-24 pb-44 border-bottom border-gray-100 mb-44">
//                                                 <img
//                                                     src="assets/images/thumbs/comment-img1.png"
//                                                     alt=""
//                                                     className="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
//                                                 />
//                                                 <div className="flex-grow-1">
//                                                     <div className="flex-between align-items-start gap-8 ">
//                                                         <div className="">
//                                                             <h6 className="mb-12 text-md">Nicolas cage</h6>
//                                                             <div className="flex-align gap-8">
//                                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                             </div>
//                                                         </div>
//                                                         <span className="text-gray-800 text-xs">
//                                                             3 Days ago
//                                                         </span>
//                                                     </div>
//                                                     <h6 className="mb-14 text-md mt-24">Greate Product</h6>
//                                                     <p className="text-gray-700">
//                                                         There are many variations of passages of Lorem Ipsum
//                                                         available, but the majority have suffered alteration in
//                                                         some form, by injected humour
//                                                     </p>
//                                                     <div className="flex-align gap-20 mt-44">
//                                                         <button className="flex-align gap-12 text-gray-700 hover-text-main-600">
//                                                             <i className="ph-bold ph-thumbs-up" />
//                                                             Like
//                                                         </button>
//                                                         <Link
//                                                             to="#comment-form"
//                                                             className="flex-align gap-12 text-gray-700 hover-text-main-600"
//                                                         >
//                                                             <i className="ph-bold ph-arrow-bend-up-left" />
//                                                             Replay
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="d-flex align-items-start gap-24">
//                                                 <img
//                                                     src="assets/images/thumbs/comment-img1.png"
//                                                     alt=""
//                                                     className="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
//                                                 />
//                                                 <div className="flex-grow-1">
//                                                     <div className="flex-between align-items-start gap-8 ">
//                                                         <div className="">
//                                                             <h6 className="mb-12 text-md">Nicolas cage</h6>
//                                                             <div className="flex-align gap-8">
//                                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                             </div>
//                                                         </div>
//                                                         <span className="text-gray-800 text-xs">
//                                                             3 Days ago
//                                                         </span>
//                                                     </div>
//                                                     <h6 className="mb-14 text-md mt-24">Greate Product</h6>
//                                                     <p className="text-gray-700">
//                                                         There are many variations of passages of Lorem Ipsum
//                                                         available, but the majority have suffered alteration in
//                                                         some form, by injected humour
//                                                     </p>
//                                                     <div className="flex-align gap-20 mt-44">
//                                                         <button className="flex-align gap-12 text-gray-700 hover-text-main-600">
//                                                             <i className="ph-bold ph-thumbs-up" />
//                                                             Like
//                                                         </button>
//                                                         <Link
//                                                             to="#comment-form"
//                                                             className="flex-align gap-12 text-gray-700 hover-text-main-600"
//                                                         >
//                                                             <i className="ph-bold ph-arrow-bend-up-left" />
//                                                             Replay
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="mt-56">
//                                                 <div className="">
//                                                     <h6 className="mb-24">Write a Review</h6>
//                                                     <span className="text-heading mb-8">
//                                                         What is it like to Product?
//                                                     </span>
//                                                     <div className="flex-align gap-8">
//                                                         <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                             <i className="ph-fill ph-star" />
//                                                         </span>
//                                                         <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                             <i className="ph-fill ph-star" />
//                                                         </span>
//                                                         <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                             <i className="ph-fill ph-star" />
//                                                         </span>
//                                                         <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                             <i className="ph-fill ph-star" />
//                                                         </span>
//                                                         <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                             <i className="ph-fill ph-star" />
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="mt-32">
//                                                     <form action="#">
//                                                         <div className="mb-32">
//                                                             <label
//                                                                 htmlFor="title"
//                                                                 className="text-neutral-600 mb-8"
//                                                             >
//                                                                 Review Title
//                                                             </label>
//                                                             <input
//                                                                 type="text"
//                                                                 className="common-input rounded-8"
//                                                                 id="title"
//                                                                 placeholder="Great Products"
//                                                             />
//                                                         </div>
//                                                         <div className="mb-32">
//                                                             <label
//                                                                 htmlFor="desc"
//                                                                 className="text-neutral-600 mb-8"
//                                                             >
//                                                                 Review Content
//                                                             </label>
//                                                             <textarea
//                                                                 className="common-input rounded-8"
//                                                                 id="desc"
//                                                                 defaultValue={
//                                                                     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
//                                                                 }
//                                                             />
//                                                         </div>
//                                                         <button
//                                                             type="submit"
//                                                             className="btn btn-main rounded-pill mt-48"
//                                                         >
//                                                             Submit Review
//                                                         </button>
//                                                     </form>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-6">
//                                             <div className="ms-xxl-5">
//                                                 <h6 className="mb-24">Customers Feedback</h6>
//                                                 <div className="d-flex flex-wrap gap-44">
//                                                     <div className="border border-gray-100 rounded-8 px-40 py-52 flex-center flex-column flex-shrink-0 text-center">
//                                                         <h2 className="mb-6 text-main-600">4.8</h2>
//                                                         <div className="flex-center gap-8">
//                                                             <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                 <i className="ph-fill ph-star" />
//                                                             </span>
//                                                             <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                 <i className="ph-fill ph-star" />
//                                                             </span>
//                                                             <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                 <i className="ph-fill ph-star" />
//                                                             </span>
//                                                             <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                 <i className="ph-fill ph-star" />
//                                                             </span>
//                                                             <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                                 <i className="ph-fill ph-star" />
//                                                             </span>
//                                                         </div>
//                                                         <span className="mt-16 text-gray-500">
//                                                             Average Product Rating
//                                                         </span>
//                                                     </div>
//                                                     <div className="border border-gray-100 rounded-8 px-24 py-40 flex-grow-1">
//                                                         <div className="flex-align gap-8 mb-20">
//                                                             <span className="text-gray-900 flex-shrink-0">5</span>
//                                                             <div
//                                                                 className="progress w-100 bg-gray-100 rounded-pill h-8"
//                                                                 role="progressbar"
//                                                                 aria-label="Basic example"
//                                                                 aria-valuenow={70}
//                                                                 aria-valuemin={0}
//                                                                 aria-valuemax={100}
//                                                             >
//                                                                 <div
//                                                                     className="progress-bar bg-main-600 rounded-pill"
//                                                                     style={{ width: "70%" }}
//                                                                 />
//                                                             </div>
//                                                             <div className="flex-align gap-4">
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                             </div>
//                                                             <span className="text-gray-900 flex-shrink-0">
//                                                                 124
//                                                             </span>
//                                                         </div>
//                                                         <div className="flex-align gap-8 mb-20">
//                                                             <span className="text-gray-900 flex-shrink-0">4</span>
//                                                             <div
//                                                                 className="progress w-100 bg-gray-100 rounded-pill h-8"
//                                                                 role="progressbar"
//                                                                 aria-label="Basic example"
//                                                                 aria-valuenow={50}
//                                                                 aria-valuemin={0}
//                                                                 aria-valuemax={100}
//                                                             >
//                                                                 <div
//                                                                     className="progress-bar bg-main-600 rounded-pill"
//                                                                     style={{ width: "50%" }}
//                                                                 />
//                                                             </div>
//                                                             <div className="flex-align gap-4">
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                             </div>
//                                                             <span className="text-gray-900 flex-shrink-0">
//                                                                 52
//                                                             </span>
//                                                         </div>
//                                                         <div className="flex-align gap-8 mb-20">
//                                                             <span className="text-gray-900 flex-shrink-0">3</span>
//                                                             <div
//                                                                 className="progress w-100 bg-gray-100 rounded-pill h-8"
//                                                                 role="progressbar"
//                                                                 aria-label="Basic example"
//                                                                 aria-valuenow={35}
//                                                                 aria-valuemin={0}
//                                                                 aria-valuemax={100}
//                                                             >
//                                                                 <div
//                                                                     className="progress-bar bg-main-600 rounded-pill"
//                                                                     style={{ width: "35%" }}
//                                                                 />
//                                                             </div>
//                                                             <div className="flex-align gap-4">
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                             </div>
//                                                             <span className="text-gray-900 flex-shrink-0">
//                                                                 12
//                                                             </span>
//                                                         </div>
//                                                         <div className="flex-align gap-8 mb-20">
//                                                             <span className="text-gray-900 flex-shrink-0">2</span>
//                                                             <div
//                                                                 className="progress w-100 bg-gray-100 rounded-pill h-8"
//                                                                 role="progressbar"
//                                                                 aria-label="Basic example"
//                                                                 aria-valuenow={20}
//                                                                 aria-valuemin={0}
//                                                                 aria-valuemax={100}
//                                                             >
//                                                                 <div
//                                                                     className="progress-bar bg-main-600 rounded-pill"
//                                                                     style={{ width: "20%" }}
//                                                                 />
//                                                             </div>
//                                                             <div className="flex-align gap-4">
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                             </div>
//                                                             <span className="text-gray-900 flex-shrink-0">5</span>
//                                                         </div>
//                                                         <div className="flex-align gap-8 mb-0">
//                                                             <span className="text-gray-900 flex-shrink-0">1</span>
//                                                             <div
//                                                                 className="progress w-100 bg-gray-100 rounded-pill h-8"
//                                                                 role="progressbar"
//                                                                 aria-label="Basic example"
//                                                                 aria-valuenow={5}
//                                                                 aria-valuemin={0}
//                                                                 aria-valuemax={100}
//                                                             >
//                                                                 <div
//                                                                     className="progress-bar bg-main-600 rounded-pill"
//                                                                     style={{ width: "5%" }}
//                                                                 />
//                                                             </div>
//                                                             <div className="flex-align gap-4">
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                                 <span className="text-xs fw-medium text-warning-600 d-flex">
//                                                                     <i className="ph-fill ph-star" />
//                                                                 </span>
//                                                             </div>
//                                                             <span className="text-gray-900 flex-shrink-0">2</span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }

// export default ProductDetailsOne


// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom';
// import Slider from 'react-slick';
// import { getCountdown } from '../helper/Countdown';
// import axios from 'axios';
// import DOMPurify from 'dompurify';
// import { addtoCart } from '../Redux/CardSlice'; 
// import { toast } from 'react-toastify';

// import { useDispatch } from 'react-redux';
// // import { addtoCart } from '../Redux/CardSlice';
// import {  useNavigate } from 'react-router-dom';


// const ProductDetailsOne = () => {
//     const { id } = useParams();
//     const [timeLeft, setTimeLeft] = useState(getCountdown());
//     const [product, setProduct] = useState(null);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);
//     // const navigate = useNavigate();
//         const dispatch = useDispatch();


//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(`https://backend-20ar.onrender.com/product/${id}`);
//                 setProduct(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(true);
//                 setLoading(false);
//             }
//         };
//         fetchProduct();
//     }, [id]);



//     const handleaddtoCart = (course) => {
//         dispatch(
//             addtoCart({
//                 id: course._id,
//                 name: course.name,
//                 price: course.price,
//                 image: course.images?.[0],
//                 qnty: 1
//             })
//         );
//         toast.success(`${course.name} added to cart!`);
//     };








//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTimeLeft(getCountdown());
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     const productImages = product?.images || [];
  
//     const [quantity, setQuantity] = useState(1);
//     const incrementQuantity = () => setQuantity(quantity + 1);
//     const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

//     const [mainImage, setMainImage] = useState('');

//     useEffect(() => {
//         if (productImages.length > 0) {
//             setMainImage(productImages[0]);
//         }
//     }, [productImages]);

//     const settingsThumbs = {
//         slidesToShow: 4,
//         swipeToSlide: true,
//         focusOnSelect: true,
//         infinite: false,
//         arrows: true,
//     };

//     // Sanitize HTML content
//     const sanitize = (dirty) => ({
//         __html: DOMPurify.sanitize(dirty)
//     });

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error loading product</div>;
//     if (!product) return null;

//     return (
//         <section className="product-details py-80">
//             <div className="container container-lg">
//                 <div className="row gy-4">
//                     <div className="col-lg-12">
//                         <div className="row gy-4">
//                             <div className="col-xl-6">
//                                 <div className="product-details__left">
//                                     <div className="product-details__thumb-slider border border-gray-100 rounded-16">
//                                         <div className="">
//                                             <div className="product-details__thumb flex-center h-100">
//                                                 <img src={mainImage} alt="Main Product" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="mt-24">
//                                         <div className="product-details__images-slider">
//                                             <Slider {...settingsThumbs}>
//                                                 {productImages.map((image, index) => (
//                                                     <div onClick={() => setMainImage(image)} className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8" key={index}>
//                                                         <img className='thum' src={image} alt={`Thumbnail ${index}`} />
//                                                     </div>
//                                                 ))}
//                                             </Slider>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-6">
//                                 <div className="product-details__content">
//                                     <h5 className="mb-12">{product.name}</h5>
//                                     <div className="flex-align flex-wrap gap-12">
//                                         <div className="flex-align gap-12 flex-wrap">
//                                             <div className="flex-align gap-8">
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                             </div>
//                                             <span className="text-sm fw-medium text-neutral-600">
//                                                 4.7 Star Rating
//                                             </span>
//                                             <span className="text-sm fw-medium text-gray-500">
//                                                 ₹{product.price}
//                                             </span>
//                                         </div>
//                                         <span className="text-sm fw-medium text-gray-500">|</span>
//                                         <span className="text-gray-900">
//                                             <span className="text-gray-400">SKU:</span> {product.sku || "EB4DRP"}
//                                         </span>
//                                     </div>
//                                     <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
//                                     <p className="text-gray-700" dangerouslySetInnerHTML={sanitize(product.description)} />
//                                     <div className="mt-32 flex-align flex-wrap gap-32">
//                                         <div className="flex-align gap-8">
//                                             <h4 className="mb-0">₹{product.discountedPrice || product.price}</h4>
//                                             {product.discountedPrice && (
//                                                 <span className="text-md text-gray-500">₹{product.price}</span>
//                                             )}
//                                         </div>
//                                         <Link to="#" className="btn btn-main rounded-pill">
//                                             Order on What'sApp
//                                         </Link>
//                                     </div>
//                                     <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
//                                     <div className="flex-align flex-wrap gap-16 bg-color-one rounded-8 py-16 px-24">
//                                         {/* Content here */}
//                                     </div>
//                                     <div className="mb-24">
//                                         <div className="mt-32 flex-align gap-12 mb-16">
//                                             <span className="w-32 h-32 bg-white flex-center rounded-circle text-main-600 box-shadow-xl">
//                                                 <i className="ph-fill ph-lightning" />
//                                             </span>
//                                             <h6 className="text-md mb-0 fw-bold text-gray-900">
//                                                 Products are almost sold out
//                                             </h6>
//                                         </div>
//                                         <div
//                                             className="progress w-100 bg-gray-100 rounded-pill h-8"
//                                             role="progressbar"
//                                             aria-valuenow={32}
//                                             aria-valuemin={0}
//                                             aria-valuemax={100}
//                                         >
//                                             <div
//                                                 className="progress-bar bg-main-two-600 rounded-pill"
//                                                 style={{ width: "32%" }}
//                                             />
//                                         </div>
//                                         <span className="text-sm text-gray-700 mt-8">
//                                             Available only: {product.stock || 45}
//                                         </span>
//                                     </div>
//                                     <span className="text-gray-900 d-block mb-8">Quantity:</span>
//                                     <div className="flex-between gap-16 flex-wrap">
//                                         <div className="flex-align flex-wrap gap-16">
//                                             <div className="border border-gray-100 rounded-pill py-9 px-16 flex-align">
//                                                 <button onClick={decrementQuantity}
//                                                     type="button"
//                                                     className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"
//                                                 >
//                                                     <i className="ph ph-minus" />
//                                                 </button>
//                                                 <input
//                                                     type="number"
//                                                     className="quantity__input border-0 text-center w-32"
//                                                     value={quantity} readOnly
//                                                 />
//                                                 <button onClick={incrementQuantity}
//                                                     type="button"
//                                                     className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"
//                                                 >
//                                                     <i className="ph ph-plus" />
//                                                 </button>
//                                             </div>
//                                             <Link
//                                                 // to="#"
//                                                 onClick={() => handleaddtoCart(course)}
//                                                 className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-48"
//                                             >
//                                                 <i className="ph ph-shopping-cart" /> Add To Cart
//                                             </Link>
//                                         </div>
//                                     </div>
//                                     <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="pt-80">
//                     <div className="product-dContent border rounded-24">
//                         <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
//                             <ul
//                                 className="nav common-tab nav-pills mb-3"
//                                 id="pills-tab"
//                                 role="tablist"
//                             >
//                                 <li className="nav-item" role="presentation">
//                                     <button
//                                         className="nav-link active"
//                                         id="pills-description-tab"
//                                         data-bs-toggle="pill"
//                                         data-bs-target="#pills-description"
//                                         type="button"
//                                         role="tab"
//                                         aria-controls="pills-description"
//                                         aria-selected="true"
//                                     >
//                                         Description
//                                     </button>
//                                 </li>
//                                 <li className="nav-item" role="presentation">
//                                     <button
//                                         className="nav-link"
//                                         id="pills-reviews-tab"
//                                         data-bs-toggle="pill"
//                                         data-bs-target="#pills-reviews"
//                                         type="button"
//                                         role="tab"
//                                         aria-controls="pills-reviews"
//                                         aria-selected="false"
//                                     >
//                                         Reviews
//                                     </button>
//                                 </li>
//                             </ul>
//                             <Link
//                                 to="#"
//                                 className="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white"
//                             >
//                                 <img src="assets/images/icon/satisfaction-icon.png" alt="" />
//                                 100% Satisfaction Guaranteed
//                             </Link>
//                         </div>
//                         <div className="product-dContent__box">
//                             <div className="tab-content" id="pills-tabContent">
//                                 <div
//                                     className="tab-pane fade show active"
//                                     id="pills-description"
//                                     role="tabpanel"
//                                     aria-labelledby="pills-description-tab"
//                                     tabIndex={0}
//                                 >
//                                     <div className="mb-40">
//                                         <h6 className="mb-24">Product Description</h6>
//                                         <p dangerouslySetInnerHTML={sanitize(product.description)} />
//                                         {product.additionalDescription && (
//                                             <p dangerouslySetInnerHTML={sanitize(product.additionalDescription)} />
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div
//                                     className="tab-pane fade"
//                                     id="pills-reviews"
//                                     role="tabpanel"
//                                     aria-labelledby="pills-reviews-tab"
//                                     tabIndex={0}
//                                 >
//                                     {/* Reviews content remains unchanged */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ProductDetailsOne



import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { getCountdown } from '../helper/Countdown';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { addtoCart } from '../Redux/CardSlice'; 
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const ProductDetailsOne = () => {
    const { id } = useParams();
    const [timeLeft, setTimeLeft] = useState(getCountdown());
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://backend-20ar.onrender.com/product/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleaddtoCart = () => {
        dispatch(
            addtoCart({
                id: product._id,
                name: product.name,
                price: product.price,
                image: product.images?.[0],
                qnty: quantity
            })
        );
        toast.success(`${product.name} added to cart!`);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getCountdown());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const productImages = product?.images || [];
    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        if (productImages.length > 0) {
            setMainImage(productImages[0]);
        }
    }, [productImages]);

    const settingsThumbs = {
        slidesToShow: 4,
        swipeToSlide: true,
        focusOnSelect: true,
        infinite: false,
        arrows: true,
    };

    const sanitize = (dirty) => ({
        __html: DOMPurify.sanitize(dirty)
    });

    if (loading) return <div className="flex-center py-80"><div className="spinner-border text-main-600" role="status"></div></div>;
    if (error) return <div className="flex-center py-80 text-danger">Error loading product</div>;
    if (!product) return null;

    return (
        <section className="product-details py-80">
            <div className="container container-lg">
                <div className="row gy-4">
                    <div className="col-lg-12">
                        <div className="row gy-4">
                            <div className="col-xl-6">
                                <div className="product-details__left">
                                    <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                                        <div className="">
                                            <div className="product-details__thumb flex-center h-100">
                                                <img src={mainImage} alt="Main Product" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-24">
                                        <div className="product-details__images-slider">
                                            <Slider {...settingsThumbs}>
                                                {productImages.map((image, index) => (
                                                    <div onClick={() => setMainImage(image)} className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8" key={index}>
                                                        <img className='thum' src={image} alt={`Thumbnail ${index}`} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="product-details__content">
                                    <h5 className="mb-12">{product.name}</h5>
                                    <div className="flex-align flex-wrap gap-12">
                                        <div className="flex-align gap-12 flex-wrap">
                                            <div className="flex-align gap-8">
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                            </div>
                                            <span className="text-sm fw-medium text-neutral-600">
                                                4.7 Star Rating
                                            </span>
                                            <span className="text-sm fw-medium text-gray-500">
                                                ₹{product.price}
                                            </span>
                                        </div>
                                        <span className="text-sm fw-medium text-gray-500">|</span>
                                        <span className="text-gray-900">
                                            <span className="text-gray-400">SKU:</span> {product.sku || "EB4DRP"}
                                        </span>
                                    </div>
                                    <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                                    <p className="text-gray-700" dangerouslySetInnerHTML={sanitize(product.description)} />
                                    <div className="mt-32 flex-align flex-wrap gap-32">
                                        <div className="flex-align gap-8">
                                            <h4 className="mb-0">₹{product.discountedPrice || product.price}</h4>
                                            {product.discountedPrice && (
                                                <span className="text-md text-gray-500">₹{product.price}</span>
                                            )}
                                        </div>
                                        <Link to="#" className="btn btn-main rounded-pill">
                                            Order on What'sApp
                                        </Link>
                                    </div>
                                    <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                                    <div className="flex-align flex-wrap gap-16 bg-color-one rounded-8 py-16 px-24">
                                        {/* Content here */}
                                    </div>
                                    <div className="mb-24">
                                        <div className="mt-32 flex-align gap-12 mb-16">
                                            <span className="w-32 h-32 bg-white flex-center rounded-circle text-main-600 box-shadow-xl">
                                                <i className="ph-fill ph-lightning" />
                                            </span>
                                            <h6 className="text-md mb-0 fw-bold text-gray-900">
                                                Products are almost sold out
                                            </h6>
                                        </div>
                                        <div
                                            className="progress w-100 bg-gray-100 rounded-pill h-8"
                                            role="progressbar"
                                            aria-valuenow={32}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "32%" }}
                                            />
                                        </div>
                                        <span className="text-sm text-gray-700 mt-8">
                                            Available only: {product.stock || 45}
                                        </span>
                                    </div>
                                    <span className="text-gray-900 d-block mb-8">Quantity:</span>
                                    <div className="flex-between gap-16 flex-wrap">
                                        <div className="flex-align flex-wrap gap-16">
                                            <div className="border border-gray-100 rounded-pill py-9 px-16 flex-align">
                                                <button onClick={decrementQuantity}
                                                    type="button"
                                                    className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"
                                                >
                                                    <i className="ph ph-minus" />
                                                </button>
                                                <input
                                                    type="number"
                                                    className="quantity__input border-0 text-center w-32"
                                                    value={quantity} readOnly
                                                />
                                                <button onClick={incrementQuantity}
                                                    type="button"
                                                    className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"
                                                >
                                                    <i className="ph ph-plus" />
                                                </button>
                                            </div>
                                            <button
                                                onClick={handleaddtoCart}
                                                className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-48"
                                            >
                                                <i className="ph ph-shopping-cart" /> Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-80">
                    <div className="product-dContent border rounded-24">
                        <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
                            <ul
                                className="nav common-tab nav-pills mb-3"
                                id="pills-tab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="pills-description-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-description"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-description"
                                        aria-selected="true"
                                    >
                                        Description
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-reviews-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-reviews"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-reviews"
                                        aria-selected="false"
                                    >
                                        Reviews
                                    </button>
                                </li>
                            </ul>
                            <Link
                                to="#"
                                className="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white"
                            >
                                <img src="assets/images/icon/satisfaction-icon.png" alt="" />
                                100% Satisfaction Guaranteed
                            </Link>
                        </div>
                        <div className="product-dContent__box">
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-description"
                                    role="tabpanel"
                                    aria-labelledby="pills-description-tab"
                                    tabIndex={0}
                                >
                                    <div className="mb-40">
                                        <h6 className="mb-24">Product Description</h6>
                                        <p dangerouslySetInnerHTML={sanitize(product.description)} />
                                        {product.additionalDescription && (
                                            <p dangerouslySetInnerHTML={sanitize(product.additionalDescription)} />
                                        )}
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-reviews"
                                    role="tabpanel"
                                    aria-labelledby="pills-reviews-tab"
                                    tabIndex={0}
                                >
                                    {/* Reviews content remains unchanged */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetailsOne