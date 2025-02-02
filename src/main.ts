import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Nature of Code projects</h1>
    <p>
      Projects from the Nature of Code book, by Devin Lane
    </p>
    <ul>
    <li><a href="/src/projects/00-randomness/index.html"> 00: Random Walk </a></li>
    </ul>
  </div>
`;
