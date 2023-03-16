import {createWorker} from "tesseract.js";
const lang= "chi_sim"
const worker =await createWorker({
    oem: 1,
    psm: 3,
});
await worker.load();
await worker.loadLanguage(lang);
await worker.initialize(lang);
export async function extractText(img) {

    const result = await worker.recognize(img);
    return {words: result.data.words};
}
