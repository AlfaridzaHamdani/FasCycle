import styles from "./styles.module.scss";
import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import DataSection from "./DataSection";
import SolutionSection from "./SolutionSection";
import CtaSection from "./CtaSection";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div className={styles.landingPage}>
      <HeroSection />
      <ArticleSection />
      <DataSection />
      <SolutionSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default index;
