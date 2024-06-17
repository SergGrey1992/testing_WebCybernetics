'use client'

import React from 'react'
import type { PropsWithChildren } from 'react'

import { Icon } from '@/shared/ui/Icon'
import { Button } from '@/shared/ui/Button'

import { useStore } from '@/feature/Form/lib/state'

import styles from './styles.module.css'

interface IndexPropsType {}

export const ActionModal = ({}: PropsWithChildren<IndexPropsType>) => {
    const toggle = useStore((state) => state.toggle)
    return (
        <Button
            rounded
            rightIcon={
                <div className={styles.iconBox}>
                    <Icon as={'arrow_up_right'} width={24} height={24} />
                </div>
            }
            onClick={toggle}
        >
            Попробовать бесплатно
        </Button>
    )
}
