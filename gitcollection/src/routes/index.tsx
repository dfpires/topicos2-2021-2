import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Repository } from '../pages/Repository'

export const Routes: React.FC = () => {

    return (

        <Switch>
            {/* o caminho padrão e a rota default (raiz) é respondida pelo Dashboard} */}
            <Route component={Dashboard} path="/" exact/> 
             {/* a rota /repo é respondida pelo Repository} */}
            <Route component={Repository} path="/repo"/>
        </Switch>
    )

}