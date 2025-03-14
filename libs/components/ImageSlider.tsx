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

const transitionDuration = 1500 // 1.5s transition for images
const textFadeOutDuration = 300  // Fast fade-out time for text

export function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0)
  const [textVisible, setTextVisible] = useState(true)

  useEffect(() => {
    setTextVisible(false) // Fast fade-out before image change
    const transitionTimer = setTimeout(() => {
      setTextVisible(true) // Fade-in after image transition
    }, transitionDuration)

    return () => clearTimeout(transitionTimer)
  }, [imageIndex])

  useEffect(() => {
    const interval = setInterval(() => showNextImage(), 8000)
    return () => clearInterval(interval) 
  }, [])

  function showNextImage() {
    setTextVisible(false) // Hide text immediately
    setTimeout(() => {
      setImageIndex((index) => (index + 1) % images.length)
    }, textFadeOutDuration) // Delay image change
  }

  function showPrevImage() {
    setTextVisible(false) // Hide text immediately
    setTimeout(() => {
      setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1))
    }, textFadeOutDuration) // Delay image change
  }

  return (
    <section className="slider-container" aria-label="Image Slider">
      <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
        <Stack className="title-box" sx={{
          width: "450px",
          height: "250px",
          background: "rgba(10, 24, 74, 0.8)",
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
          transition: `opacity ${textFadeOutDuration}ms ease-in-out`,
          borderRadius: "8px",
          lineHeight: "1.4",
        }}>
          <Box style={{paddingLeft: "10px"}}>
            <p style={{ fontSize: "12px", color: "orange", fontWeight: "550" }}>Limited time offer</p>
            <h1>
              {texts[imageIndex].split(' ').map((word, i) => (
                i === 0 ? <span key={i} style={{ fontSize: "35px", fontWeight: "400", color: "#fff" }}>{word}</span>
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
            style={{
              transform: `translateX(${-100 * imageIndex}%)`,
              transition: `transform ${transitionDuration}ms ease-in-out`
            }}
          />
        ))}
      </div>

      <button onClick={showPrevImage} className="img-slider-btn" style={{ left: 0 }} aria-label="View Previous Image">
        <ArrowBigLeft aria-hidden />
      </button>
      <button onClick={showNextImage} className="img-slider-btn" style={{ right: 0 }} aria-label="View Next Image">
        <ArrowBigRight aria-hidden />
      </button>

      <div style={{ position: "absolute", bottom: ".5rem", left: "50%", translate: "-50%", display: "flex", gap: ".25rem" }}>
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
          </button>
        ))}
      </div>
    </section>
  )
}

export default ImageSlider;
