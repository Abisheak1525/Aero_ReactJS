function Parent()
{
    return (
        <div>
            <h1>parent Component</h1>
            <Child res={10}/>
        </div>
    )
}

function Child(props)
{
    return(
        <div>
            <h1>Child Component</h1>
            <h1>The value is {props.res}</h1>
        </div>
    )
}
export default Parent;
