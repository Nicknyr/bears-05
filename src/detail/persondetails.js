import React from 'react'
import {Link} from 'react-router-dom'

const PersonDetails = (props) => {

  console.log(props)

  let basic = props.props.basic.data




  // let list = null
  // if(props.list !== null) {
  //   list = props.list.data.results.map((item, i) => {
  //     if(item.media_type === "movie") {
  //       return(
  //         <Link to={"/detail/" + item.id} key={i} className="item">
  //           <div className="item__titleLine">
  //             <li>{item.title}</li>
  //             <i className="material-icons">movie</i>
  //           </div>
  //           <p className="item__info">Released: {item.release_date} | {item.vote_average} <i className="material-icons">star</i></p>
  //           <p className="item__overview">{item.overview}</p>
  //         </Link>
  //       )
  //     } else if(item.media_type === "tv") {
  //       return(
  //         <Link to={"/detail/" + item.id} key={i} className="item">
  //           <div className="item__titleLine">
  //             <li key={i}>{item.name}</li>
  //             <i className="material-icons">tv</i>
  //           </div>
  //           <p className="item__info">Released: {item.release_date} | {item.vote_average} <i className="material-icons">star</i></p>
  //           <p className="item__overview">{item.overview}</p>
  //         </Link>
  //       )
  //     } else {
  //       return(
  //         <Link to={"/detail/" + item.id} key={i} className="item">
  //           <div className="item__titleLine">
  //             <li key={i}>{item.name}</li>
  //             <i className="material-icons">person</i>
  //           </div>
  //           <p className="item__info">Released: {item.release_date} | {item.vote_average} <i className="material-icons">star</i></p>
  //           <p className="item__overview">{item.overview}</p>
  //         </Link>
  //       )
  //     }
  //   })
  // }
  return(
    <div className="content">
      <h2 className="movieTitle">{basic.title}</h2>
      <div className="imageContainer">
        <img src={"https://image.tmdb.org/t/p/w640/" + basic.profile_path}/>
        <section className="vitalInfo">
          <p className="vitalInfo__ranking">{basic.popularity}<i className="material-icons">star</i></p>
        </section>
      </div>
      <p className="movieOverview">
        {basic.biography}
      </p>
    </div>
  )
}

export default PersonDetails
