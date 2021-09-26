import React, { createContext, useCallback, useState } from 'react'
import { getLang, setLang, Language } from 'Src/locales'

export type LangContextType = { defaultLang: Language; checkChange: (lang: Language) => void }
export const LangContext = createContext<LangContextType>({ defaultLang: 'zh-CN', checkChange: () => null })

export interface LangProviderProps {
  children?: React.ReactNode
}

const lang = getLang()

const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [defaultLang, setDefaultLang] = useState<Language>(lang)

  const checkChange = useCallback((language: Language) => {
    setDefaultLang(language)
    setLang(language)
  }, [])

  return <LangContext.Provider value={{ defaultLang, checkChange }}>{children}</LangContext.Provider>
}

export default LangProvider
