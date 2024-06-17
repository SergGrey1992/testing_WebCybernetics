'use client'

import React from 'react'
import type { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

import styles from './styles.module.css'
import { useStore } from '@/feature/Form/lib/state'

interface Props {
    portalId: string
}

export const Modal = ({ portalId, children }: PropsWithChildren<Props>) => {
    const [mounted, setMounted] = React.useState(false)
    const toggle = useStore((state) => state.toggle)

    React.useEffect(() => setMounted(true), [])

    return mounted
        ? createPortal(
              <div className={styles.modal} onClick={toggle}>
                  {children}
              </div>,
              document.getElementById(portalId)!
          )
        : null
}
