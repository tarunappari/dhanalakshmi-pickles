// "use client";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import Link from "next/link";
// import styles from "@/styles/common/PlantCard.module.scss";

// export function PlantCard({
//   plant = {
//     id: "1",
//     title: "Monstera Deliciosa - Swiss Cheese Plant",
//     description:
//       "A stunning tropical plant perfect for brightening up any indoor space with its iconic split leaves.",
//     image:
//       "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=800&auto=format&fit=crop",
//     originalPrice: "$45.99",
//     discountedPrice: "$59.99",
//     handle: "monstera-deliciosa",
//     isOnSale: true,
//     inStock: true,
//   },
// }) {
//   return (
//     <CardContainer className={styles.cardWrapper}>
//       <CardBody className={styles.plantCard}>
//         {/* Image at top with 3D effect */}
//         <CardItem translateZ="100" className={styles.imageContainer}>
//           {plant.isOnSale && <div className={styles.saleBadge}>SALE</div>}
//           <img
//             src={plant.image}
//             alt={plant.title}
//             loading="lazy"
//           />
//         </CardItem>

//         {/* Card content with 3D effects */}
//         <CardItem translateZ="50" className={styles.cardContent}>
//           {/* Title below image */}
//           <CardItem translateZ="60">
//             <h3 className={styles.title}>{plant.title}</h3>
//           </CardItem>

//           {/* Price section with original and discounted prices */}
//           <CardItem translateZ="40">
//             <div className={styles.priceContainer}>
//               <span className={styles.originalPrice}>{plant.originalPrice}</span>
//               {plant.isOnSale && plant.discountedPrice && (
//                 <span className={styles.discountedPrice}>{plant.discountedPrice}</span>
//               )}
//             </div>
//           </CardItem>

//           {/* View button at the bottom */}
//           <CardItem translateZ="30">
//             <Link
//               href={`/plants/${plant.handle}`}
//               className={styles.viewButton}
//             >
//               {plant.inStock ? 'View Plant' : 'Out of Stock'}
//             </Link>
//           </CardItem>
//         </CardItem>
//       </CardBody>
//     </CardContainer>
//   );
// }


// .plantCard {
//   background: white;
//   border-radius: 1rem;
//   border: 1px solid #e5e7eb;
//   overflow: hidden;
//   transition: all 0.3s ease;
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 320px;
  
//   &:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
//     border-color: #10b981;
//   }
// }

// .imageContainer {
//   position: relative;
//   width: 100%;
//   height: 240px;
//   overflow: hidden;
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.3s ease;
//   }
  
//   &:hover img {
//     transform: scale(1.05);
//   }
// }

// .cardContent {
//   padding: 1.5rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// }

// .title {
//   font-size: 1.25rem;
//   font-weight: 600;
//   color: #1f2937;
//   line-height: 1.4;
//   margin: 0;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
// }

// .priceContainer {
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   margin: 0.5rem 0;
// }

// .originalPrice {
//   font-size: 1.125rem;
//   font-weight: 700;
//   color: #10b981;
// }

// .discountedPrice {
//   font-size: 0.875rem;
//   color: #6b7280;
//   text-decoration: line-through;
// }

// .viewButton {
//   width: 100% !important;
//   background: #10b981 !important;
//   color: white !important;
//   border: 2px solid #059669 !important;
//   border-radius: 0.5rem;
//   padding: 12px 24px !important;
//   font-size: 14px !important;
//   font-weight: 600 !important;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   text-decoration: none !important;
//   text-align: center !important;
//   display: block !important;
//   margin-top: 16px !important;
//   min-height: 44px !important;
//   line-height: 1.2 !important;
  
//   &:hover {
//     background: linear-gradient(135deg, #059669 0%, #047857 100%);
//     transform: translateY(-1px);
//     box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
//   }
  
//   &:active {
//     transform: translateY(0);
//   }
// }

// // Responsive design
// @media (max-width: 768px) {
//   .plantCard {
//     max-width: 280px;
//   }
  
//   .imageContainer {
//     height: 200px;
//   }
  
//   .cardContent {
//     padding: 1.25rem;
//   }
  
//   .title {
//     font-size: 1.125rem;
//   }
// }

// // 3D card integration styling
// .cardWrapper {
//   perspective: 1000px;

//   .plantCard {
//     transform-style: preserve-3d;
//     position: relative;

//     // Ensure all child elements preserve 3D
//     * {
//       transform-style: preserve-3d;
//     }
//   }
// }

// // Fix for 3D card layout
// .plantCard {
//   // Override any conflicting 3D card styles
//   height: auto !important;
//   width: auto !important;

//   // Ensure proper stacking
//   .imageContainer {
//     position: relative;
//     z-index: 3;
//   }

//   .cardContent {
//     position: relative;
//     z-index: 2;
//     transform-style: preserve-3d;

//     // Ensure content elements maintain 3D
//     > * {
//       transform-style: preserve-3d;
//     }
//   }
// }

// // Hover states for better interaction
// .plantCard {
//   &:hover {
//     .title {
//       color: #059669;
//     }
    
//     .originalPrice {
//       color: #047857;
//     }
//   }
// }

// // Loading state (optional)
// .loading {
//   .imageContainer {
//     background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
//     background-size: 200% 100%;
//     animation: loading 1.5s infinite;
//   }
// }

// @keyframes loading {
//   0% {
//     background-position: 200% 0;
//   }
//   100% {
//     background-position: -200% 0;
//   }
// }

// // Sale badge (optional)
// .saleBadge {
//   position: absolute;
//   top: 0.75rem;
//   right: 0.75rem;
//   background: #ef4444;
//   color: white;
//   padding: 0.25rem 0.5rem;
//   border-radius: 0.25rem;
//   font-size: 0.75rem;
//   font-weight: 600;
//   z-index: 10;
// }

// // Out of stock state (optional)
// .outOfStock {
//   .imageContainer::after {
//     content: 'Out of Stock';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.7);
//     color: white;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-weight: 600;
//     font-size: 1.125rem;
//   }
  
//   .viewButton {
//     background: #9ca3af;
//     cursor: not-allowed;
    
//     &:hover {
//       background: #9ca3af;
//       transform: none;
//       box-shadow: none;
//     }
//   }
// }
