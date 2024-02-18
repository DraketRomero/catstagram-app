
import { CatsImages } from './components/CatsImages';
import { GridImage } from './components/GridImage';
import { ModalInformationCats } from './components/ModalInformationCats';
import { Navbar } from './components/Navbar'
import { CatsProvider } from './context/cats/CatsProvider'

const App = () => {
  return (
    <CatsProvider>
      <Navbar />
      <CatsImages />
      <hr />
      <GridImage />
      <ModalInformationCats />
    </CatsProvider>
  )
}

export default App;
