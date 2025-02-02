import styles from "./Features.module.css";

const values = [
  {
    title: "Collaboration",
    description:
      "Our collaborative approach towards work leads us to have open conversations that create new ideas and ultimately turn into innovations. This not only allows us to discuss the possibilities but also lets us turn them into realities.",
  },
  {
    title: "Innovation",
    description:
      "We aim to be trend-setters in our industry for every event that we do and this is only possible if the minds are curious. What's the next big thing we want to create? This question never leaves our minds and fuels our passion towards research, brainstorming, growth and hardwork.",
  },
  {
    title: "Integrity",
    description:
      "We are on a journey to create awe-inspiring experiences. The only destinations we have are our creations for brands, for customers. We stop when we land on the one genius idea fit for you and move on to hunt for the next.",
  },
];

const Features = ({
  title,
  containerClass,
  headingClass,
  cardClass,
  gridClass,
}) => {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.container} ${containerClass}`}>
        {title && (
          <h2 className={`${styles.heading} ${headingClass}`}>{title}</h2>
        )}

        <div className={`${styles.grid} ${gridClass}`}>
          {values.map((value, index) => (
            <div key={index} className={`${styles.card} ${cardClass}`}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
