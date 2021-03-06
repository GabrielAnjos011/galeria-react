import { render, screen } from "@testing-library/react"
import { Button } from '.'

describe('<Button/>', () => {
    it('should render the button with the next', () => {
        render(<Button text='Load more'/>)

        const button = screen.getByRole('button', {name: /load more/i})
        expect(button).toBeInTheDocument()
    })
})