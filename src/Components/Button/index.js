const Button = ( {children, className, onClick} ) => {
  return(
    <button
    type="Button"
    className={className}
    onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;