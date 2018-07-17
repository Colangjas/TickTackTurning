import {Route, IndexRoutes} from 'react-router'
import {template} from '../containers/Template'

const createRoutes = () => {
    return(
        <Route path="/" component={template} ></Route>
    )
}

const Routes = createRoutes()

export default Routes

