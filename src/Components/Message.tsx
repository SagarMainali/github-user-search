
type Props = {
  message: string
}

function ShowFirst({ message}: Props) {
  return (
    <div className="message">
      { message} 
    </div>
  )
}

export default ShowFirst