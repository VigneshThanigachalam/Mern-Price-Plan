import "./App.css";
import  Free from "./Components/Free";
import Plus from "./Components/Plus";
import Pro from "./Components/Pro";
import "./Components/style.css";
import "./Components/style.css";
function App() {
  return (
    <section     className="pricing py-5">
    <div className="container">
    <div className="row">
<Free />
<Plus />
<Pro />    
      
    </div>
    </div>
    </section>
  );
}

export default App;
