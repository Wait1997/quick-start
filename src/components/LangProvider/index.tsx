import React, { createContext, useEffect, useState } from 'react'
import { Language } from 'Src/locales'

export const LangContext = createContext('ch-ZN')

export interface LangProviderProps {
  lang?: Language
  children?: React.ReactNode
}

const LangProvider: React.FC<LangProviderProps> = ({ lang, children }) => {
  const [defaultLang, setDefaultLang] = useState('zh-CN')

  useEffect(() => {
    if (lang) {
      console.log(lang)
      setDefaultLang(lang)
    }
  }, [lang])

  return <LangContext.Provider value={defaultLang}>{children}</LangContext.Provider>
}

export default LangProvider
