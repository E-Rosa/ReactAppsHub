export default function Post(props){
    return (
        <>
            <div className='Post'>
                <h2 className='post-title'>{props.title}</h2>
                <h5 className='post-subtitle'>{props.subtitle}</h5>
                <p className='post-text'>{props.text}</p>
                <img src={props.images[0]} ></img>
            </div>
        </>
    )
}