import React from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Plant from "@/components/shop/plant/Product";;

const page = async () => {
 

  // try {
  //   const product = getStaticProductByHandle(handle);

  //   return (
  //     <div>
  //       <Navbar />
  //       <Plant handle={handle} product={product} />
  //       <Footer />
  //     </div>
  //   );
  // } catch (error) {
  //   console.error("Error fetching product:", error);
  //   return (
  //     <div>
  //       <Navbar />
  //       <Plant handle={handle} />
  //       <Footer />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Navbar />
      <Plant />
      <Footer />
    </div>
  )
};

export default page;
