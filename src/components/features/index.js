import styles from "./Features.module.css";

const values = [
  {
    title: "Collaboration",
    description:
      "Ideas grow when shared. Our open and collaborative approach sparks new possibilities, leading to groundbreaking innovations that redefine brand experiences",
  },
  {
    title: "Curiosity",
    description:
      "What’s next? What’s new? What’s possible? These questions never leave our minds. We constantly push boundaries, set industry trends, and explore new creative horizons",
  },
  {
    title: "Creativity",
    description:
      "We don’t just create campaigns—we craft experiences that leave audiences in awe. Our only goal? To find that one genius idea that transforms a brand’s story",
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
  );
};

export default Features;
