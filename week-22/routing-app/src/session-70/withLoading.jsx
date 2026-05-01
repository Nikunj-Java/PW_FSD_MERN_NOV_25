
function withLoading(Component){
    return function EnhancedComponent({isLoading, ...props}){
        if(isLoading){
            return <div>Loading...</div>
        }
        return <Component {...props} />;
    }
}

export default withLoading;