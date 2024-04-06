'use client'

import React from 'react'
import S from './index.module.css'
import cn from 'classnames'
import { useForm } from 'react-hook-form'

interface TextAreaProps {
  fieldKey: 'outline' | 'why'
}

function Textarea({ fieldKey }: TextAreaProps) {
  const { register, watch } = useForm()

  const outlineField = register('outline', {
    required: '',
    maxLength: { value: 500, message: '최대 500자까지 작성가능합니다.' },
  })
  const whyField = register('whyField', {
    required: '',
    maxLength: { value: 500, message: '최대 500자까지 작성가능합니다.' },
  })
  const fields = {
    outline: {
      register: outlineField,
      MaxLength: 500,
    },
    why: {
      register: whyField,
      MaxLength: 500,
    },
  }

  const countCharacters = () => {
    const content = watch(fieldKey)
    if (!content) {
      return 0
    }
    return content.length
  }

  return (
    <div className={S.textarea_container}>
      <textarea
        {...fields[fieldKey].register}
        maxLength={fields[fieldKey].MaxLength - 1}
      />
      <div className={S.letter_count_container}>
        <span
          className={cn({
            [S.letter_max]: countCharacters() >= fields[fieldKey].MaxLength,
          })}
        >
          {countCharacters()}
        </span>
        <span>{`/${fields[fieldKey].MaxLength}`}</span>
      </div>
    </div>
  )
}

export default Textarea
