import { useLanguageStore } from "../stores/useLanguageStore";
export default function Language() {
    const {language , setLanguage} = useLanguageStore();

    return (
        <div>
            <h1>Current Language: {language}</h1>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="fr">France</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
              </select>  
        </div>
    );
}