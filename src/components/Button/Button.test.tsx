import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, it, vi } from 'vitest';
import { Button } from '.'

describe('Button test', () => {
    afterEach(cleanup);

    it('should render component', () => {
        render(<Button label='Test'/>)
    })

    it('should render a label', () => {
        render(<Button label='Test Label Render'/>)
        screen.getByText('Test Label Render')
    })

    it('should be disabled', () => {
        render(<Button label='test' disabled/>)
        expect(screen.getByRole('button')).toBeDisabled()
    })

})