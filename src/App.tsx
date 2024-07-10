import Calender from "./components/Calender";
import { EventProvider } from "./context/Events";

function App() {
  return (
    <>
      <EventProvider>
        <Calender />
      </EventProvider>
    </>
  );
}

export default App;
