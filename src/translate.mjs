import {translate} from '@vitalets/google-translate-api'
import Tesseract from "tesseract.js";
// const inputImage = document.getElementById("inputImage");
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// let image;
//
// async function loadImage() {
//   const file = inputImage.files[0];
//   const img = new Image();
//   img.src = URL.createObjectURL(file);
//
//   img.onload = () => {
//     canvas.width = img.width;
//     canvas.height = img.height;
//     ctx.drawImage(img, 0, 0);
//     image = img;
//   };
// }
//
// async function translateImage() {
//   if (!image) return;
//
//   const extractedText = await extractText(image);
//   const translatedText = await translate(extractedText);
//   insertTranslatedText(image, extractedText, translatedText);
// }

async function extractText(img) {
  const result = await Tesseract.recognize(img, "chi_sim", {
    logger: (info) => console.log(info),
  });

  return result.data;
}
async function translateOsrResult(ocrResult) {
  const textArray = ocrResult.words.map(word => word.text);
  const textString = textArray.join(" ");

  const response = await translate(textString, {  to: "en" });
  const translatedTextString = response.text;

  const translatedText = translatedTextString.split(" ");
  return translatedText;
}

// function insertTranslatedText(img, extractedText, translatedText) {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(img, 0, 0);
//
//   extractedText.words.forEach((word, idx) => {
//     const x = word.bbox.x0;
//     const y = word.bbox.y0;
//     const w = word.bbox.x1 - x;
//     const h = word.bbox.y1 - y;
//     ctx.fillStyle = "white";
//     ctx.fillRect(x, y, w, h);
//
//     ctx.fillStyle = "black";
//     ctx.font = "18px Arial";
//     ctx.fillText(translatedText[idx], x, y + h);
//   });
// }
export default translateOsrResult