
import "./Card.css"
function Card({ name, img, link })
{

    return(
        <div className="Card">
            <img src={img} id="image"  alt="Profile_image" />
             <div className="Details">
                <h1 id="user_name">Name:{name}</h1>
                <div className="user_profile">
                    <a id="link"  href={link} target="_blank" >View Profile</a>
                </div>
             </div>
            
        </div>
    )
}

export default Card