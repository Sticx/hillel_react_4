import './_ErrorPage.scss'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError()
    return (
        <div className="error-page" id="error-page">
            <h1 className="error-page__heading">
                4{} 0 {} 4
            </h1>
            <p className="error-page__subheading">Oops! Page not found.</p>
            <p className="error-page__subheading">
                {error.statusText || error.message}
            </p>
            <div className="error-page__animation">
                <div className="error-page__box"></div>
                <div className="error-page__box"></div>
                <div className="error-page__box"></div>
                <div className="error-page__box"></div>
                <div className="error-page__box"></div>
                <div className="error-page__box"></div>
                <div className="error-page__box"></div>
                <div className="error-page__box"></div>
            </div>
        </div>
    )
}

export default ErrorPage