 
import { Header } from "./components/header";
import "./App.css"
import { Balance } from "./components/Balance";
import { Inc } from "./components/Incomeexpense";
import { Translist } from "./components/Transactionlist";
import { Addtransaction } from "./components/Addtransaction";
import { GlobalProvider } from "./context/Global_state";
export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Inc/>
        <Translist />
      </div>
      <Addtransaction />

    </GlobalProvider>
  );
}
