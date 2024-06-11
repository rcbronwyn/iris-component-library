import '@testing-library/jest-dom'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// reset hooks before each test suite
afterEach(() => {
    cleanup()
})