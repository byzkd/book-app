import React from 'react';
import styles from './book.module.scss';
import Tag from '../tag'

function Book({complete, rating, progress,imageUrl,title,author,tags,review = "Herhangi bir incelemece yok."}){
    const Stars = Array(rating).fill(null).map(st => <><img src="https://www.svgrepo.com/show/111254/star.svg" className="star-icon"></img></>)
    let Tags = (
        <p>
            
             {tags.length > 0 ? tags.map((tag)=> (
            <Tag label = {tag}/>
            )) : <Tag label="genel"/>}

        </p>
       

    )

    let metadata

    if(complete){
         metadata = Stars

    } else {
         metadata= <progress value= {progress} max="100"/>
    }
    return (
    <article className={styles.book}>
       <picture className={styles.picture}>
           <img src={imageUrl} alt={title} loading="lazy" className="book-image"/>
        </picture> 
    <h1>{title}</h1>
    <h2>{author}</h2>

    {metadata}
    {Tags}
    <p>{review}</p>
   

    </article>
    
    )
          
}

export default Book;