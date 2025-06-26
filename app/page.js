import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import Resume from "./_components/Resume";
import About from "./_components/About";
import Services from "./_components/Services";
import ProjectsCard from "./_components/ProjectsCard";
import ContactMe from "./_components/ContactMe";
import SocialMediaSidebar from "./_components/SocialMediaSidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Resume />
      <ProjectsCard />
      <Services />
      <ContactMe />
      <Footer />
      <SocialMediaSidebar />
    </>
  );
}
