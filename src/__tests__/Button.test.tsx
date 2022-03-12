import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Button from '../components/Button'

describe('Running Test for Button', () => {
    test('Check <Button> text', () => {
        render(<Button disabled>Hello</Button>)
        expect(
            screen.getByRole('button', { name: 'Hello' })
        ).toBeDisabled()
    })
})
