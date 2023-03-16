import translateOsrResult from "../translate.mjs"
// import { TranslateResult } from "google-translate-api"; // Import the type definition for the translateApi response
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Mock the google-translate-api function
// jest.mock("google-translate-api", () => {
//   return {
//     __esModule: true,
//     default: (text, options) => {
//       const response = new TranslateResult(text, "en");
//       response.text = `translated:${text}`;
//       return Promise.resolve(response);
//     },
//   };
// });

