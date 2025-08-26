
import { useNavigate } from "react-router-dom";
import wall from "../assets/для домашней страницы.jpeg"



function Home(){
    return(
        <div>
            <div className = "head-image">
                <img src= {wall}/>
            </div>
        <h1>Galaxy Z Fold7</h1>
        <h3>Искуственный интеллект<br/>
            Galaxy AI
        </h3>
        <a href="#">Узнать больше</a>
        </div>
    );
        
}


export default Home;