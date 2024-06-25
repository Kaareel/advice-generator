import { useEffect, useState } from "react";
import Card from "./components/card";
import Button from "./components/Button";
import Footer from "./components/Footer";
import getAdvice from "./services/getAdvice";


function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  const fetchData = async () => {
    try { 
      const data = await getAdvice();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
  }catch (error) {
    console.error('Error fetching advice:', error);
  }
}
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="bg-secondary flex flex-col items-center justify-center h-screen">
      <main className="flex flex-col items-center bg-tertiary absolute mt-28 rounded-lg custom-clamp-width md:mt-0 md:mb-8 md:w-96">
        <Card advice={advice} adviceId={adviceId}/>
        <img src="./pattern-divider-desktop.svg"srcSet="./pattern-divider-desktop.svg x1, ./pattern-divider-mobile.svg x2" alt="divider" className="p-4 overflow-hidden"/>
        <Button onClick={fetchData}/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
