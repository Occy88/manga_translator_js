// tesseractHelper.test.js
import fs from "fs";
import { createCanvas, loadImage } from "canvas";
import { expect } from "chai";
import {extractText} from "../tesseractHelper.mjs";
import translateOsrResult from "../translate.mjs";

describe("extractText function", () => {
  it("extracts text from an image containing Simplified Chinese characters", async () => {
    const imagePath = "src/tests/2.jpg"; // Update the path to your local image
    const imgData = fs.readFileSync(imagePath);
    const img = await loadImage(imgData);

    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const extractedText = await extractText(imagePath);
    console.log(extractedText); // Log the result to see the extracted text and detected language
    // Add your expectations based on the content of the test image
    expect(extractedText.words.length).greaterThan(0);
  });
});
describe("translate function", () => {
  it("translates an array of text strings", async () => {
    const ocrResult = {
      words: [
        { text: "你好，" },
        { text: "世界！" },
      ],
    };

    const expectedTranslatedText = ["Hello,", "world!"];
    const translatedText = await translateOsrResult(ocrResult);

    expect(translatedText).toEqual(expectedTranslatedText);
  });

  // Add more test cases as needed
});
describe("translateImage function", () => {
  it("extracts and translates text from image", async () => {
    const imagePath = "src/tests/2.jpg"; // Update the path to your local image
    const imgData = fs.readFileSync(imagePath);
    const img = await loadImage(imgData);

    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const extractedText = await extractText(imagePath);
    const translatedText = await translateOsrResult(extractedText);
    console.log(translatedText)
  });
});
