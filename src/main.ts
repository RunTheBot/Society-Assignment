import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

// Setup dropdown functionality
function setupDropdowns() {
  document.addEventListener('DOMContentLoaded', () => {
    // Get all dropdown buttons
    const dropdownButtons = document.querySelectorAll('[onclick^="toggleDropdown"]');
    
    dropdownButtons.forEach(button => {
      // Remove the inline onclick attribute
      const id = button.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
      button.removeAttribute('onclick');
      
      // Add event listener
      button.addEventListener('click', () => {
        if (id) {
          const content = document.getElementById(id);
          if (!content) return;
          
          // Get all related dropdowns based on ID prefix
          const prefix = id.replace(/\d+$/, '');
          const allDropdowns = document.querySelectorAll(`[id^="${prefix}"]`);
          
          // Hide all other dropdowns
          allDropdowns.forEach(dropdown => {
            if (dropdown.id !== id) {
              dropdown.classList.add('hidden');
            }
          });
          
          // Toggle the current dropdown
          content.classList.toggle('hidden');
          
          // Toggle the arrow icon
          const arrow = button.querySelector('svg');
          if (arrow) {
            arrow.classList.toggle('rotate-180');
          }
        }
      });
    });
  });
}

// Initialize all interactive elements
setupDropdowns();

// Only run the app setup if the #app element exists
const appElement = document.querySelector<HTMLDivElement>('#app');
if (appElement) {
  appElement.innerHTML = `
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  `;

  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
}
