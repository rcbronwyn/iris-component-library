interface ButtonProps extends React.ComponentProps<'button'> {
    label: string
}

export function Button({
    label,
    ...props
}: ButtonProps){


    return(
        <button
            type="button"
            {...props}
        >
            {label}
        </button>
    )
}