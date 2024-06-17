'use client'

import React from 'react'
import { useStore } from '@/feature/Form/lib/state'
import { Modal } from '@/shared/ui/Modal/index'
import { Content } from '@/feature/Form/ui/Content/index'

interface Props {}

export const Form = ({}: Props) => {
    const isOpen = useStore((state) => state.isOpen)
    if (!isOpen) return null
    return (
        <Modal portalId={'modal'}>
            <Content />
        </Modal>
    )
}
