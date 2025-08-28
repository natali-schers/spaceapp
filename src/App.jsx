import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle";

const GradientBackground = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    height: 100vh;
`;

function App() {
  return (
    <GradientBackground>
      <GlobalStyle />
    </GradientBackground>
  )
}

export default App