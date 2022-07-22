import Navbar from "./Componets/Navbar/Navbar"; // anexamos el componente del navbar a la app
import User from "./Componets/User/User"; // anexamos el componente del perfil a la app
import Footer from "./Componets/Footer/Footer"; // anexamos el componente del footer
import Tabs from "./Componets/Tab/Tabs";
import Repos from "./Componets/Repos/Repos";
function App() {
  return (
    <>
      <Navbar />
      <User />
      <Tabs />
      <Repos />
      <Footer />
    </>
  );
}

export default App;
