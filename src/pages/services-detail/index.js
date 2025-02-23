import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Highlight from "../../components/highlight";
import styles from "./ServicesDetail.module.css";
import FAQ from "../../components/faq";
import Slider from "../../components/new-slider";
import ServicesSection from "../../components/services-section";
import RelatedWork from "../../components/related-work";
import WhyChooseTrinity from "../../components/why-trinity";
// import data from "../../utils/sample-data/workDetails.json";
// import { getWorkDetail } from "../../utils/dataLoader";

const ServicesDetailPage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState(null);
  // console.log("content is : ", content);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await getWorkDetail();
        setContent(response);
      } catch (error) {
        console.error(error.message);
        setContent(null);
      }
    };

    fetchContent();
  }, [slug]);

  const getWorkDetail = async () => {
    const response = await fetch("/sample-data/workDetails.json");
    const data = await response.json();
    return data[slug];
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.workDetailContainer}>
      {content?.workDescription && (
        <div className={styles.workDescriptionSection}>
          <Highlight data={content?.workDescription} />
        </div>
      )}
      {content?.ourRole && (
        <div className={styles.ourRoleSection}>
          <Highlight data={content?.ourRole} />
        </div>
      )}
      {/* {content?.keyPoints && <FeatureList titles={content?.keyPoints?.data} />} */}
      {content?.keyPoints && (
        <div className={styles.servicesSection}>
          <ServicesSection services={content?.keyPoints} />
        </div>
      )}
      {content?.workSpecifics && (
        <div className={styles.workSpecificsSection}>
          <RelatedWork projects={content?.workSpecifics} />
        </div>
      )}
      {content?.faqs && (
        <div className={styles.faqSection}>
          <FAQ title={content?.faqs?.heading} faqs={content?.faqs?.data} />
        </div>
      )}
      {content?.whyTrinity && (
        <div className={styles.whyTrinitySection}>
          <WhyChooseTrinity
            features={content?.whyTrinity?.data}
            title={content?.whyTrinity?.heading}
          />
        </div>
      )}
    </div>
  );
};

export default ServicesDetailPage;
