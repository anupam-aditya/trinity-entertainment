import React, { useState } from "react";
import styles from "./Work.module.css";
import work1 from "../../assets/work-1.jpg";
import work2 from "../../assets/work-2.jpg";
import work4 from "../../assets/work-4.jpg";
import work5 from "../../assets/work-5.jpg";
import work6 from "../../assets/work-6.jpg";
import work7 from "../../assets/work-7.JPG";
import work8 from "../../assets/work-8.jpg";
import work9 from "../../assets/work-9.png";
import work10 from "../../assets/work-10.jpg";
import work11 from "../../assets/work-11.JPG";
import Modal from "../../components/popup";
import workData from "../../utils/workSpecifics.json";
import CardSection from "../../components/card-section";

function WorkPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState(false);
  const clickEventHandler = (e) => {
    const { client } = e.currentTarget.dataset;
    setEvent(workData[client]);
    setIsOpen(true);
  };
  const closeHandler = () => {
    setEvent(null);
    setIsOpen(false);
  };
  return (
    <section className={styles.workPageContainer}>
      {isOpen && (
        <Modal
          title={event?.event}
          onClose={closeHandler}
          background="#ef4158"
          color="#fff"
        >
          <div className={styles.workDetails}>
            {event?.heading && (
              <div className={styles.eventTitle}>
                <p className={styles.title}>{event?.heading}</p>
              </div>
            )}
            {event?.heading && (
              <div className={styles.eventHeading}>
                <p className={styles.heading}>{event?.client}</p>
              </div>
            )}
            {event?.objective && (
              <div className={styles.eventObjective}>
                <p className={styles.objective}>{event?.objective}</p>
              </div>
            )}
            {(event?.impact?.title || event?.impact?.answer) && (
              <div className={styles.eventImpact}>
                <p className={styles.impactQuestion}>{event?.impact?.title}</p>
                {event?.impact?.answer?.length > 0 &&
                  event?.impact?.answer?.map((item) => (
                    <p className={styles.impactAnswer}>{item}</p>
                  ))}
              </div>
            )}
            {(event?.mission?.title || event?.mission?.answer) && (
              <div className={styles.eventMission}>
                <p className={styles.missionQuestion}>
                  {event?.mission?.title}
                </p>
                {event?.mission?.answer?.length > 0 &&
                  event?.mission?.answer?.map((item) => (
                    <p className={styles.missionAnswer}>{item}</p>
                  ))}
              </div>
            )}
            {(event?.approach?.title || event?.approach?.answer) && (
              <CardSection
                data={event?.approach?.answer}
                title={event?.approach?.title}
                background="#ef4158"
                hasImage={false}
                subHeadingSize="1.25rem"
              />
            )}
            {(event?.highlight?.title || event?.highlight?.answer) && (
              <div className={styles.eventHighlight}>
                <p className={styles.highlightQuestion}>
                  {event?.highlight?.title}
                </p>
                {event?.highlight?.answer?.length > 0 &&
                  event?.highlight?.answer?.map((item) => (
                    <p className={styles.highlightAnswer}>{item}</p>
                  ))}
              </div>
            )}
            {(event?.whyUs?.title || event?.whyUs?.answer) && (
              <div className={styles.eventWhyUs}>
                <p className={styles.whyUsQuestion}>{event?.whyUs?.title}</p>
                {event?.whyUs?.answer?.length > 0 &&
                  event?.whyUs?.answer?.map((item) => (
                    <p className={styles.impactAnswer}>{item}</p>
                  ))}
              </div>
            )}
            {event?.image && <img style={{ maxWidth: "100%" }} src={work1} />}
          </div>
        </Modal>
      )}
      <div className={styles.workDemoSection}>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div
              className={`${styles.item1} ${styles.item}`}
              onClick={clickEventHandler}
              data-client="nykaaland"
            >
              <img src={work1} alt="Nykaaland" />
            </div>
            <div className={styles.nestedContainer}>
              <div
                className={`${styles.item1} ${styles.item}`}
                style={{ flex: "unset" }}
                onClick={clickEventHandler}
                data-client="wings-activation-zone-at-nh7-weekender"
              >
                <img src={work4} />
              </div>
              <div
                className={`${styles.item1} ${styles.item}`}
                style={{ flex: "unset" }}
                onClick={clickEventHandler}
                data-client="budweiser-fifa-world-cup-final-screening"
              >
                <img src={work10} />
              </div>
            </div>
            <div
              className={`${styles.item1} ${styles.item}`}
              onClick={clickEventHandler}
              data-client="leo-1"
            >
              <img src={work11} />
            </div>
          </div>
          <div className={styles.subContainer}>
            <div
              className={styles.item}
              onClick={clickEventHandler}
              data-client="puma-black-friday"
            >
              <img src={work5} />
            </div>
            <div className={`${styles.item} ${styles.absolutePosition}`}>
              <p className={styles.centralText}>Our Work</p>
            </div>
            <div
              className={`${styles.item}`}
              onClick={clickEventHandler}
              data-client="ab-inbev-diwali-party"
            >
              <img src={work9} />
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={`${styles.nestedContainer} ${styles.flexColumn}`}>
              <div
                className={styles.item}
                onClick={clickEventHandler}
                data-client="nexa-road-to-lollapalooza"
              >
                <img src={work6} />
              </div>
            </div>
            {/* <div className={`${styles.nestedContainer} ${styles.flexColumn}`}>
              <div className={styles.item} onClick={clickEventHandler}>
                <img src={work9} />
              </div>
            </div> */}
            {/* <div className={`${styles.nestedContainer} ${styles.flexColumn}`}>
              <div
                className={`${styles.item} ${styles.itemLong}`}
                onClick={clickEventHandler}
              >
                <img src={work4} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkPage;
