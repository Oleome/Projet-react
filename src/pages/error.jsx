import errorpic from '../assets/errorpic.png'
import '../styles/error.scss'

function Error() {
    return (
        <div className='error__div'>
            <img src={errorpic} alt="erreur 404" />
            <span>Oups! La page que vous demandez n'existe pas.</span>
            <a href="/">Retourner sur la page d'accueil</a>
        </div>
    )
}
 
export default Error