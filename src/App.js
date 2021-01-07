import Login from "./component/Login"
import ProfilStudent from "./component/ProfilStudent"
import SignupStudent from "./component/SignupStudent"

function App(props) {
  return (
    <div className="App">
      <SignupStudent/>
      <Login/>
      <ProfilStudent/>
    </div>
  );
}

export default App;
