import { useEffect, useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import { Stack } from "@mui/system"





const images = [
  { url: "/img/property/banner1.avif", alt: "Banner One" },
  { url: "/img/property/banner2.avif", alt: "Banner Two" },
  { url: "/img/property/banner3.avif", alt: "Banner Three" },
]

const texts = [
  "Explore Beautiful Properties",
  "Modern and Cozy Living Spaces",
  "Your Dream Home Awaits",
]

export function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0)
  const [textVisible, setTextVisible] = useState(false) // To handle text visibility animation

  useEffect(() => {
    // Set the text to slide in after the component loads
    setTimeout(() => {
      setTextVisible(true)
    }, 1000) // Slide in after 100ms delay
  }, [])

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
          className={`image-text ${textVisible ? "slide-in" : ""}`}
          sx={{
            width: "500px",
            height: "300px",
            background: "rgb(9, 18, 44, 0.8)",
            color: "white",
            zIndex: "99",
            position: "absolute", 
            top: "40%",
            left: "5%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            textAlign: "center",
            opacity: textVisible ? 1 : 0, 
            border: "2px solid black", 
            borderRadius: "8px",
          }}
        >
          <p style={{fontSize: "15px"}}>Limited offer</p>
          <h1>
            {texts[imageIndex].split(' ').map((word, i) => (
              i === 0 ? 
                <span key={i} style={{ fontSize: "50px", fontWeight: "bold" }}>{word}</span> 
                : ` ${word}`
            ))}
          </h1>
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