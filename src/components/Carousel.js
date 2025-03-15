import React, { useRef, useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ items = [] }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState({});
  const itemRefs = useRef(items.map(() => React.createRef()));

  // Handle scroll events to update the active index based on the container's center.
  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDiff = Infinity;
    Array.from(container.children).forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const diff = Math.abs(childCenter - containerCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });
    setActiveIndex(closestIndex);
  };

  // Navigate to a specific index and center that item.
  const goTo = (index) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const clampedIndex = Math.max(
      0,
      Math.min(index, container.children.length - 1)
    );
    const targetChild = container.children[clampedIndex];
    const targetScrollLeft =
      targetChild.offsetLeft +
      targetChild.offsetWidth / 2 -
      container.clientWidth / 2;
    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
    setActiveIndex(clampedIndex);
  };

  // Set up Intersection Observer to detect when items enter or exit the viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // When at least 20% of the item is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.dataset.id;
        setVisibleItems((prevState) => ({
          ...prevState,
          [id]: entry.isIntersecting ? "visible" : "exiting",
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all item refs
    itemRefs.current.forEach((ref, index) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      observer.disconnect();
    };
  }, []);

  // Set up scroll event listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on unmount
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.carouselHeading}>
          What Our <span className={styles.highlight}>Clients</span> Say About
          Us <span className={styles.line}></span>
        </h2>
      </div>
      <div className={styles.carousel}>
        <div className={styles.carouselWrapper} ref={containerRef}>
          {items.map((item, index) => (
            <div
              key={item.id}
              ref={itemRefs.current[index]}
              data-id={item.id}
              className={`${styles.carouselItem} ${
                activeIndex === index ? styles.selected : ""
              } ${visibleItems[item.id] ? styles[visibleItems[item.id]] : ""}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className={styles.carouselImg}
              />
              <h3 className={styles.carouselTitle}>{item.title}</h3>
              <p className={styles.carouselText}>"{item.text}"</p>
            </div>
          ))}
        </div>

        <div className={styles.buttonsContainer}>
          <button
            className={styles.carouselButton}
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            className={styles.carouselButton}
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
