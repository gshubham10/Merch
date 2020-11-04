import React from "react";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? product.image
    : `https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?cs=srgb&dl=pexels-kai-pilger-996329.jpg&fm=jpg`;
  return <img src="" alt="product" />;
};

export default ImageHelper;
