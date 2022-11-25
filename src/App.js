import Table from "./PersonalFinancesManager/components/Table/Table.js";

function App() {
  return (
    <div className="App">
      <Table 
        label="Eating"
        totalSpent={10}
        limit={20}
      />
    </div>
  );
}

export default App;
