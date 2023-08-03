const RestrantCard = ({image,name,cuisine,rating}) =>{
    const {rating_text} = rating;
   
     return(
             <div className='card'>
                     <img src={image?.url}/>
                     <h2>{name}</h2>
                    <h3>{cuisine?.map(data => {return data.name}).join(", ")}</h3> 
                     <h4>{rating_text} stars</h4> 
             </div>
     )
}

export default RestrantCard;