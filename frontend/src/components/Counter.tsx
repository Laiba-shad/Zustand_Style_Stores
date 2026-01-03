import React from "react";
import { useCounterStore } from "../stores/useCounterStore"; 
import { useLanguageStore } from "../stores/useLanguageStore";
import BasicButton from "../ui/Button";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore()
const {language} = useLanguageStore();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
<BasicButton/>
        <h2>Current Language: {language}</h2>
        {language === 'en' && <p>Hello!</p>}
        {language === 'es' && <p>¡Hola!</p>}
        {language === 'fr' && <p>Bonjour!</p>}
        {language === 'de' && <p>Hallo!</p>}
        {language === 'zh' && <p>Ne Hao</p>} 
      
    </div>
  );
}