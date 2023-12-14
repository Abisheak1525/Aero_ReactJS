import logo from './asta.webp';
function FunctionCom()
{
    return(
        <div>
            <h1>
                hello
            </h1>
        </div>
    )
}
function ImageAsta()
{
    return(
        <div>
            <h1>
                <FunctionCom/>
                <img src={logo} alt="image"></img>
            </h1>
        </div>
    )
}
export default ImageAsta;


