import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Highlight from "../../components/highlight";
import FeatureList from "../../components/feature-list";
import styles from "./ServicesDetail.module.css";
import FAQ from "../../components/faq";
import Slider from "../../components/new-slider";
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
        <Highlight data={content?.workDescription} />
      )}
      {content?.keyPoints && <FeatureList titles={content?.keyPoints?.data} />}
      {content?.workSpecifics && (
        <Slider
          slider={content?.workSpecifics?.title}
          items={content?.workSpecifics?.data}
        />
      )}
      {content?.faqs && (
        <FAQ title={content?.faqs?.heading} faqs={content?.faqs?.data} />
      )}
    </div>
  );
};

export default ServicesDetailPage;
