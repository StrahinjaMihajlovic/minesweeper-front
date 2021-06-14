import Authorization from './auth/Authorization.js'
import Loader from './Loader.js';
import RenderPageFromUrl from './RenderPageFromUrl.js'

// Invoked as a wrapper for every page depending on the user authorization
class DefaultEndPoint extends Authorization {  
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.isLoggedIn();
    }

    render() {
        let display;
        if(this.state.connected) {
            display = <RenderPageFromUrl />
        } else {
            display = <Loader />
        }
        return (
            display
        );
    }
}

export default DefaultEndPoint;