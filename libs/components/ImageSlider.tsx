import { useEffect, useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import { Box, Stack } from "@mui/material"





const images = [
  { url: "/img/property/furni1.jpg", alt: "Banner One" },
  { url: "/img/property/furni2.jpg", alt: "Banner Two" },
  { url: "/img/property/furni3.jpg", alt: "Banner Three" },
]

const texts = [
  "Elevate Your Home with Stylish and Comfortable Furniture",
"Crafting Timeless Furniture for Every Room You Love",
"Discover Furniture That Blends Comfort and Modern Elegance"
]

export function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0)
  const [textVisible, setTextVisible] = useState(false) 

  useEffect(() => {
    setTextVisible(false); 
    const textAnimationTimer = setTimeout(() => {
      setTextVisible(true); 
    }, 1000);

    return () => clearTimeout(textAnimationTimer); 
  }, [imageIndex]);


  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  return (
    <section
      className="slider-container"
      aria-label="Image Slider"
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
       <Stack 
       className="title-box"
       sx={{
        width: "450px",
        height: "250px",
        background: "rgb(10, 24, 74, 0.8)",
        color: "white",
        zIndex: "99",
        position: "absolute", 
        top: "230px",
        left: "100px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        textAlign: "left",
        columnGap: "5px",
        opacity: textVisible ? 1 : 0, 
        borderRadius: "8px",
        lineHeight: "1.4"
      }}>
       <Box
          className={`image-text ${textVisible ? "slide-in" : ""}`}
        >
          <p style={{fontSize: "12px", color: "orange", fontWeight: "bold"}}>Limited time offer</p>
          <h1>
            {texts[imageIndex].split(' ').map((word, i) => (
              i === 0 ? 
                <span key={i} style={{ fontSize: "35px", fontWeight: "bold", color: "#fff"}}>{word}</span>
                : ` ${word}`
            ))}
          </h1>
        </Box>
       </Stack>
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  )
}

export default ImageSlider;