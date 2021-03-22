import React from "react";
import {local as language} from "./assets/lang/fr_fr";

// French is the default language here, and we set this to provide the text string used by views and components during test execution
const LanguageContext = React.createContext(language);

export const LanguageProvider = LanguageContext.Provider;

export default LanguageContext;
    