import "./App.css";
import ProfilePhoto from "./profile/ProfilePhoto";
import FullName from "./profile/FullName";
import Address from "./profile/Address";
function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
