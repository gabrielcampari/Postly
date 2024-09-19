import Post from "./components/Post";
import './App.css'; 

function App(){
  return(
   <main>
    <Post author="Gabriel Campari" body="Cybersecurity & IoT" />
    <Post author="Felipe Araújo" body="Backend developer" />
  </main>
  );
}

export default App;
