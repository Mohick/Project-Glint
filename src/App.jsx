import AboutViews from "./About/About";
import ClientViews from "./Client/Client";
import ContactsViews from "./Contacts/Contact";
import FooterViews from "./Footer/Footer";
import HeaderView from "./Header/Header";
import ModalMenu from "./Header/Modal Menu/Modal Menu";
import ServicesViews from "./Service/Services";
import Works from "./Works/Works";
 
function App() {
  return (
    <>
      <HeaderView />
      <ModalMenu />
      <AboutViews />
      <ServicesViews/>
      <Works/>
      <ClientViews/>
      <ContactsViews/>
      <FooterViews/>
    </>
  );
}

export default App;
