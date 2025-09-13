import { credits } from "./data.ts";

function CreditsContent() {
  return (
    <div className="credits-container">
      <h2>Credits</h2>
      <div className="credits-list">
        <ul>
            {credits.map((item, idx)=> (
                <li key={idx}>{item}</li>
            ))}          
        </ul>
      </div>
    </div>
  );
}

export default CreditsContent;