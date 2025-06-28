import FacebookMsg from "../_components/FacebookMsg";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import SocialMediaSidebar from "../_components/SocialMediaSidebar";



export default function RootLayout({ children }) {
  return (
    <>
     <Header/>
     {children}
     <Footer />
     <SocialMediaSidebar />
     <FacebookMsg />
    </>
  );
}
