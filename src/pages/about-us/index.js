import React from "react";
import styles from "./AboutUs.module.css";

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Hemant Matai",
      role: "Founder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
      image: "/api/placeholder/150/150",
    },
    {
      name: "Hemant Matai",
      role: "Founder",
      description:
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
      image: "/api/placeholder/150/150",
    },
    {
      name: "Hemant Matai",
      role: "Founder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
      image: "/api/placeholder/150/150",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.headerBackground}>
          <h1 className={styles.title}>About Us</h1>
        </div>

        {/* Main Description */}
      </div>

      {/* Team Members Grid */}
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) =>
          index !== 1 ? (
            <div key={index} className={styles.memberCard}>
              {/* Member Image */}
              <div className={styles.imageContainer}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.memberImage}
                />
              </div>

              {/* Member Info */}
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberDescription}>{member.description}</p>
            </div>
          ) : (
            <div className={styles.middleMemberCard}>
              <p className={styles.mainDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea.
              </p>
              <p className={styles.mainDescription}>
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata{" "}
              </p>
              <div key={index} className={styles.memberCard}>
                {/* Member Image */}
                <div className={styles.imageContainer}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.memberImage}
                  />
                </div>

                {/* Member Info */}
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberDescription}>{member.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AboutUsPage;

/* Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata */
