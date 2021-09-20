import React, { memo, useContext } from 'react'
import { LangKeys } from 'Src/locales'
import enUs from 'Src/locales/en-us'
import zhCn from 'Src/locales/zh-cn'
import { LangContext } from '../index'

export const useFormatMessage = (id: LangKeys, args?: Record<string, React.ReactNode>) => {
  const lang = useContext(LangContext)
  const dictionary = lang === 'zh-CN' ? zhCn : enUs
  return dictionary[id].split(/{\s*(\w+)\s*}/).map<React.ReactNode>((item, index) => {
    if (index % 2 === 0) {
      return <>{item}</>
    }
    return <>{item}</>
  })
}

const FormattedMessage: React.FC<{ id: LangKeys; args?: Record<string, React.ReactNode> }> = ({ id, args }) => {
  const content = useFormatMessage(id, args)
  return <>{content}</>
}

export default memo(FormattedMessage)
