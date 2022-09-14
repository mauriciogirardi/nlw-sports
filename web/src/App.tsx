import "./styles/main.css";
import logo from "./assets/logo.svg";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Footer } from "./components/Footer";
import { CardGames } from "./components/CarGames";
import { Title } from "./components/Tiitle";

function App() {
  return (
    <DefaultLayout>
      <img src={logo} />
      <Title />
      <CardGames />
      <Footer />
    </DefaultLayout>
  );
}

export default App;
