import Image from "next/image";
import React, { useState } from "react";

function NextFallbackImage(props) {
  const { src, fallbackSrc, className, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  // Can I set a lottie anim as the placeholder?

  return (
    <Image
      {...rest}
      className={className}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    ></Image>
  );
}

export default NextFallbackImage;
