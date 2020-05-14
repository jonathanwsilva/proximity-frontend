import React from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'
import MapView from './components/map-view'
import Modal from './components/modal'

export default () => {
    return (
        <Router>
            <SomeComponent />
        </Router>
    )
}

// TODO: Rename me
const SomeComponent = () => {
    const history = useHistory();
    return (
        <MapView>
            <Route exact path="/">
                <Modal onSubmit={({ what, where }) => {
                    history.push(`/${what}/${where}`);
                }} />
            </Route>
        </MapView>
    )
}