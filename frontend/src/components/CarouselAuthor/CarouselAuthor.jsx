// import React, { useState, useEffect, useRef } from 'react';
// import './CarouselAuthor.css';

// const CarouselAuthor = ({ authors }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const trackRef = useRef(null);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === authors.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? authors.length - 1 : prevIndex - 1));
//   };

//   useEffect(() => {
//     const updateCarousel = () => {
//       const track = trackRef.current;
//       const itemWidth = track.children[0].offsetWidth;
//       track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//     };
//     updateCarousel();
//     window.addEventListener('resize', updateCarousel);
//     return () => window.removeEventListener('resize', updateCarousel);
//   }, [currentIndex, authors.length]);

//   return (
//     <div className="carousel-container">
//       <div className="carousel-track" ref={trackRef}>
//         {authors.map((author, index) => (
//           <div key={index} className="carousel-item">
//             <img src={author.image} alt={author.name} />
//             <p>{author.name}</p>
//           </div>
//         ))}
//       </div>
//       <button className="prev" onClick={prevSlide}>Prev</button>
//       <button className="next" onClick={nextSlide}>Next</button>
//     </div>
//   );
// };

// export default CarouselAuthor;
