/*
Every language is a folder that needs to have 
the same archives just like "en" folder: 
appData.json, placesData.json, stylesData.json and index.js.

For example an "es" language most contain the same archives of "en" 
but in every json the value most change.
example:
en/appData.json:
"appData": {
    "general": {
      "txtNext": "Next"
    }
  }

es/appData.json:
"appData": {
    "general": {
      "txtNext": "Siguiente"
    }
  }
*/
import * as en from "./en";

/*
The Languages contains every language (every folder)
Every language is an object that contains:
languageCode - this represent the language code (en, es, pt, etc.)
data - this represents the import for the index of the given language
*/
const Languages = [
  { languageCode: "en", data: en }
  //{ languageCode: "es", data: en }
];

/*
Search for a language inside Lanaugages that match the languageCode,
if there is no match returns the first language in the array
*/
export const getLanguage = languageCode => {
  const currentLanguage = Languages.filter(
    language => language.languageCode === languageCode
  );
  if (currentLanguage.length > 0) {
    //did found a language, returns the language
    return currentLanguage[0];
  } else {
    //did not found a language, return first language
    return Languages[0];
  }
};

export default Languages;
