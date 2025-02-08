import "./style.css";

const basePath = import.meta.env.DEV ? "/src" : "";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Nature of Code projects</h1>
    <p>
      From the Nature of Code by Daniel Shiffman
    </p>
    <p>
      Projects by Devin Lane
    </p>
    <ul>
    <li><a href="${basePath}/projects/00-randomness/index.html"> 00: Random Walk </a></li>
    </ul>
  </div>
`;
