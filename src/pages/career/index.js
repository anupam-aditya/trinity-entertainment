import React from "react";
import Form from "../../components/form";
import styles from "./Career.module.css";
import Features from "../../components/features";
import careerFormImage from "../../assets/career-form.jpg";
import TextSlider from "../../components/text-slider";
import LifeAtTrinity from "../../components/life-at-trinity";

function Career() {
  const items = [
    {
      title: "Chinmay",
      text: "“A workplace that excites me every morning! It’s like working with a bunch of event-planning wizards who also happen to be your best buddies. Growth and opportunities? You don’t have to worry about that here. It’s a family!”",
    },
    {
      title: "Clive",
      text: "“I’ve been with Trinity for a while now, and I can honestly say I’ve never felt more comfortable at work. There’s no hierarchy, just pure efficiency and a whole lot of learning—even beyond your own department.”",
    },
    {
      title: "Ankur",
      text: "“From day one, I felt part of a passionate team dedicated to crafting memorable experiences. The collaborative atmosphere fuels innovation, and leadership support is incredibly inspiring. Every project feels like a new adventure!”",
    },
    {
      title: "Amey",
      text: "“The energy here is contagious! Every day is a chance to bring new ideas to the table, learn from industry experts, and be part of something bigger than yourself. Creativity and learning go hand in hand at Trinity.”",
    },
    {
      title: "Sushant",
      text: "“Our mantra? IDEAS, IDEAS, IDEAS. EXECUTION, EXECUTION, EXECUTION! A modern workspace with diverse age groups, different backgrounds, and insane talent. Sounds wild? It’s even crazier in reality!”",
    },
    {
      title: "Surbhi",
      text: "“Proud to be part of a team that creates mind-blowing events—glamorous galas, massive sports events, and exhilarating festivals. The best part? Work-life balance actually exists here!”",
    },
    {
      title: "Darryl",
      text: "“The appreciation we receive makes every achievement even sweeter. Building strong client relationships comes naturally, making our work not just a job, but a fulfilling journey of connections.”",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.highlightContainer}>
        <LifeAtTrinity />
      </div>
      <div className={styles.sliderSection}>
        <TextSlider
          showButtons={true}
          showNavigation={false}
          title="Why work with trinity"
          subHeading="Hear it from the Humans of Trinity"
          text="We’re not just coworkers. We are a tight-knit crew of dreamers, doers, and disruptors, bound by a shared passion for creating unforgettable brand experiences"
          items={items}
          textStyle={styles.textStyle}
          cardStyle={styles.sliderCard}
          headingStyle={styles.headingStyle}
          subHeadingStyle={styles.subHeadingStyle}
          sliderContainerStyle={styles.sliderContainer}
          carouselWrapperStyle={styles.carouselWrapperStyle}
        />
      </div>
      <div className={styles.valuesSection}>
        <Features
          title={"We Value our VALUES"}
          subHeading={
            "At Trinity, our work is driven by three core values that define our approach to marketing, events, and experiential solutions"
          }
          grid={styles.grid}
          cardClass={styles.cardClass}
          containerClass={styles.valuesContainerClass}
        />
      </div>
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <p className={styles.sectionHeading}>
            Ready to Be Our Next Teammate?
          </p>
          <div className={styles.formComponent}>
            <div className={styles.imageComponent}>
              <img
                className={styles.image}
                src={careerFormImage}
                alt="career-form"
              />
            </div>
            <Form containerClass={styles.form} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Career;
