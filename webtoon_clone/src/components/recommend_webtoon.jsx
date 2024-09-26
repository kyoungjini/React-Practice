function RecommendWebtoon(props) {
	return (
		<section className="recommend-container">
			<img className="img" src={props.thumbnail} />
			<p className="title">{props.title}</p>
			<p className="writer">{props.writer}</p>
			<p className="updated_story">{props.updated_story}</p>
			<p className="star">⭐ {props.star}</p>
		</section>
	);
}

export default RecommendWebtoon;
