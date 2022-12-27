import { MainContent } from "./MainContent"
import { SideBar } from "./SideBar"
import MainContainer from "./styles/MainContainer"

function App() {
  return (
    <MainContainer>
      <SideBar />
      <MainContent />
    </MainContainer>
  )
}

export default App
