import { useNavigate, useMatch} from 'react-router-dom';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        const history = useNavigate();
        let match = useMatch("/single/:id");
       
        return (
            <Component
                {...props}
                history={history}
                match={match}
            />
        );
    }


    return ComponentWithRouterProp;
}

export default withRouter;