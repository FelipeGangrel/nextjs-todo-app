type InputProps = React.HTMLProps<HTMLInputElement>

const Input: React.FC<InputProps> = ({ ...props }) => {
  return <input {...props} />
}

export default Input
