import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navsidebar from './Component/Header/Navsidebar';
import Homepage from './Component/Main/Homepage';
import Footerhp from './Component/Main/Footerhp';




const App = () => {
    

  return (
    <div className="App"  >
      <header className = "header-container" >
            {/* {showMenu && <nav id="fixNav"> <Navsidebar/></nav>} */}
            <Navsidebar/>
      </header>




      <main className='body-container' style={{position:"relative"}}>
          <Homepage/>
          
        
      </main>
      <footer className='footer-container'>
        <Footerhp/>
        
        
        

      </footer>

    </div>
  );
}

export default App;
