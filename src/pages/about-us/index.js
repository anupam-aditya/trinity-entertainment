import React from "react";
import styles from "./AboutUs.module.css";
import HighlightSlider from "../../components/highlight-slider";
import asi1 from "../../assets/asi-1.jpg";
import asi2 from "../../assets/asi-2.jpg";
import asi3 from "../../assets/asi-3.jpg";
import asi4 from "../../assets/asi-4.jpg";
import fahad from "../../assets/fahad.jpg";
import hemant from "../../assets/hemant.jpg";
import vishmay from "../../assets/vishmay.jpg";
import InfoSection from "../../components/info-section";
import MissionVisionSection from "../../components/mission-vision";
import WhyChooseTrinity from "../../components/why-trinity";
import OurClients from "../../components/our-clients";
import eema from "../../assets/eema.png";
import bni from "../../assets/bni.png";
import marriot from "../../assets/marriot.png";

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Hemant Matai",
      role: "Founder & Joint Managing Director",
      description:
        "Known as Mr. Fixer, Hemant is a marketing maverick who has worked with Disney-STAR, Red Bull, Procam, and Reliance Brands. With a deep-rooted passion for experiential marketing, he has led some of the most prestigious brand campaigns and marquee projects in the industry. When asked about his secret to success, he simply says— “A full stomach fuels my best ideas.”",
      image: hemant,
      profileUrl:
        "https://www.linkedin.com/in/hemant-matai-59483011?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Vismay Chokshi",
      role: "Managing Director",
      description:
        "A businessman at heart and a creator by passion, Vismay has brought global sensations like Hardwell, Pitbull, Sean Kingston, and LMFAO to India. Whether he’s strategizing events or winning at cricket, his spirit of innovation and leadership drives our agency forward. Nicknamed “Sethji”, he ensures that every project is executed flawlessly and profitably.",
      image: vishmay,
      profileUrl:
        "https://www.linkedin.com/in/vismay-chokshi-9a068b141?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Fahad Chowdhary",
      role: "Creative Managing Director",
      description:
        "Fahad is a visionary storyteller with an eye for design and immersive experiences. Featured in Economic Times’ 35 Under 35, he has mastered the art of turning ideas into reality. Fueled by boundless energy and creativity, he thrives on bringing brands to life through compelling visuals and engaging brand narratives. If there’s anyone who can work non-stop like a Jedi, it’s Fahad—our very own Wade Wilson (aka Deadpool).",
      image: fahad,
      profileUrl:
        "https://www.linkedin.com/in/fahad-chowdhary-3b096748?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ];
  const imagesArray = [
    { id: 0, image: asi1 },
    { id: 1, image: asi2 },
    { id: 2, image: asi1 },
    { id: 3, image: asi2 },
  ];
  const counterData = [
    { number: 15, text: "years of collaborative experience" },
    {
      number: 1000,
      text: "events successfully executed",
    },
    { text: "events delivered per year", number: 100 },
    { number: 25, text: "industry awards won" },
  ];
  const partnershipArray = [eema, bni, marriot];
  const features = [
    {
      title: "Global Expertise",
      desc: "We create experiences that resonate worldwide, blending local insights with international trends",
    },
    {
      title: "End-to-End Solutions",
      desc: "From ideation to execution, we handle every aspect of your event, brand activation, or campaign",
    },
    {
      title: "Creative & Data-Driven",
      desc: "We merge innovation with analytics to ensure your brand experiences drive real engagement",
    },
    {
      title: "Proven Track Record",
      desc: "With 1000+ successful events and a portfolio of award-winning campaigns, we deliver nothing but the best",
    },
  ];

  return (
    <div className={styles.aboutUsPage}>
      <div className={styles.highlightSliderContainer}>
        <HighlightSlider
          title="Crafting Experiences That Last a Lifetime"
          subHeading=""
          text={[
            "At Trinity Entertainment, we are more than just an experiential marketing agency—we are architects of memorable brand experiences. With over 200 years of combined brainpower (yes, we did the math!), we’ve cracked the code on what makes a brand moment truly unforgettable",
            "We bridge the gap between brands and their audiences, ensuring every interaction is authentic, engaging, and impactful. Through our strategic event planning, brand activations, and immersive experiences, we help brands stand out, connect, and leave lasting impressions",
          ]}
          imagesArray={imagesArray}
          autoPlayInterval={3000}
        />
      </div>
      <div className={styles.infoSection}>
        <InfoSection counterData={counterData} />
      </div>
      <div className={styles.teamSection}>
        <div className={styles.container}>
          {/* Header Section */}
          <div className={styles.header}>
            <div className={styles.headerBackground}>
              <h1 className={styles.title}>Meet Our Visionaries</h1>
            </div>

            {/* Main Description */}
          </div>

          {/* Team Members Grid */}
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              // index !== 1 ?
              <div key={index} className={styles.memberCard}>
                <a
                  href={member.profileUrl}
                  className={styles.imageContainer}
                  style={{
                    background: `url(${member.image})`,
                    backgroundSize: "contain",
                  }}
                  target="_blank"
                />

                {/* Member Info */}
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberDescription}>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.missionVisionSection}>
        <MissionVisionSection />
      </div>
      <div className={styles.clientSection}>
        <OurClients data={partnershipArray} />
      </div>
      <div className={styles.whyTrinitySection}>
        <WhyChooseTrinity
          features={features}
          title="Why Choose Trinity Entertainment?"
        />
      </div>
    </div>
  );
};

export default AboutUsPage;

/* Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata */
