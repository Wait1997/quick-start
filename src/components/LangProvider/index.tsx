import React, { createContext, useState } from 'react'
import { getLang, Language } from 'Src/locales'

export const LangContext = createContext<{ defaultLang: Language; checkChange: (lang: Language) => void }>({
  defaultLang: 'zh-CN',
  checkChange: () => null
})

export interface LangProviderProps {
  children?: React.ReactNode
}

const lang = getLang()

const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [defaultLang, setDefaultLang] = useState<Language>(lang)

  const checkChange = (language: Language) => {
    setDefaultLang(language)
  }

  return <LangContext.Provider value={{ defaultLang, checkChange }}>{children}</LangContext.Provider>
}

export default LangProvider
