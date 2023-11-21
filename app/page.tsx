import './globals.css'
import Header from "./Components/Header";
import Main from './Components/Main';
import Footer from './Components/Footer';



export default function Home() {
  return (
    <main className="overflow-hidden">
    <Header/>  
    <Main/> 
    <Footer/>
    </main>
  )
}
