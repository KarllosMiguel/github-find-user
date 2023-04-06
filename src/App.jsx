import api from "./api";
import React,{useEffect,useState} from "react";
import Logo from "./components/Logo";
import { Container } from "./components/Container/styles";
import GlobalStyle from "./styles/Globalstyles";
import InputContainer from "./components/InputContainer";

const App = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get(``)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <Container>
        <Logo/>
        <InputContainer/>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
