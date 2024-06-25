import { useEffect, useState } from "react";
import Card from "./components/card";
import Button from "./components/Button";
import Footer from "./components/Footer";


function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="bg-secondary flex flex-col items-center justify-center h-screen">
      <main className="flex flex-col items-center bg-tertiary absolute mt-28 rounded-lg custom-clamp-width md:mt-0 md:mb-8 md:w-96">
        <Card advice={advice} adviceId={adviceId}/>
        <img src="./pattern-divider-mobile.svg" alt="divider" className="p-4 overflow-hidden"/>
        <Button fetchAdvice={fetchAdvice}/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
