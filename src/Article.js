export default function Article(props) {
//   console.log(props);
  return (
    <div className="Article">
      <div className="news-img">
      {
        props.article.urlToImage != null ? <img src={props.article.urlToImage} alt="Loading issue"/> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSIoITxjHXTFPHStxt2XTSB7I3tsva_F0vw&s" alt="Unable to load"/>
      }
        
      </div>
      <h1>{props.article.title}</h1>
      <p>
        {props.article.description?.substring(0, 100).concat(". . .")}{" "}
        <a href={props.article.url}>Read More</a>
      </p>
      <div className="source">
        <p>{props.article.author}</p>
        <p>{props.article.source.name}</p>
      </div>
    </div>
  );
}
