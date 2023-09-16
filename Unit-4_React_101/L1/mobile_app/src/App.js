
import './App.css';
import {Listdata} from './components/Listdata';

function App() {
  const OsList=["Android","Blackberry","iPhone","Window Phone"]
  const arrMobile=["Samsung","HTC","Micromax","Apple"]
  return (
    <>
    <div id='App'>
      <h1>React Mobile OS</h1>

      <Listdata headerTitle="Mobile Operating System" dataList={OsList} />
      <Listdata headerTitle="Mobile Manufacturers" dataList={arrMobile} applyCss='true' />
    </div>
    </>
  );
}

export default App;
