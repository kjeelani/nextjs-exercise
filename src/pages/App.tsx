import { delta } from "@/data/TestData";
import { ClubGrid } from "@/components/ClubGrid";

function App() {
  return (
    <div className="App">
      {/* For the club parameter, put "delta" for a pre-selected card list
          OR put any other string for a random club list
      */}
      <ClubGrid clubName={"delta"}/>
    </div>
  );
}

export default App;