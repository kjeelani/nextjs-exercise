import { ClubGrid } from "@/components/ClubGrid";

function App() {
  return (
    <div className="App">
      {/* For the club parameter, put "delta" for the data used for the README.md
          OR put any other string for a random club list
      */}
      <ClubGrid clubName={"delta"}/>
    </div>
  );
}

export default App;