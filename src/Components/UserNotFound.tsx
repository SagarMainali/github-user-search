
import error_img_dark from './assets/error-img-dark.png'
import error_img_light from './assets/error-img-light.png'

type Props = {
  message: string,
  darkMode: boolean
}

function ShowFirst({ message, darkMode }: Props) {
  return (
    <div className="message">
      <p>{message}</p>
      <div className="error-img">
        {darkMode ? <img src={error_img_light} alt="error image light" /> : <img src={error_img_dark} alt="error image dark" />}
      </div>
      <hr />
    </div>
  )
}

export default ShowFirst