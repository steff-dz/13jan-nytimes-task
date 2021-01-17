import React, { useState, useEffect } from 'react';
import NewsListContainer from './containers/NewsListContainer';
import NewsItem from './components/NewsItem';

function App() {
	const [ responseData, setResponseData ] = useState([]);
	const [ articles, setArticles ] = useState(null);
	const KEY = '3fJbod6E1tMLfc5cyjYnIPeOGC9COeVE';

	useEffect(() => {
		getArticles();
	}, []);

	// useEffect(
	// 	() => {
	// 		filterArticles();
	// 	},
	// 	[ responseData ]
	// );

	const getArticles = () => {
		fetch(`https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/2021/1.json?api-key=${KEY}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				//console.log(data.response);
				setResponseData(data.response.docs);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// function filterArticles() {
	// 	if (responseData === []) {
	// 		return;
	// 	} else {
	// 		setArticles(responseData.filter((el) => el.multimedia.length > 0));
	// 	}
	// }

	function rengerPage() {
		if (responseData === null) {
			return;
		} else {
			return responseData.map((el, i) => (
				<NewsItem
					key={i}
					title={el.headline.main}
					author={el.byline.original}
					snippet={el.abstract}
					published={el.pub_date}
					link={el.web_url}
				/>
			));
		}
	}

	// const getInfo = () => {
	// 	console.log(responseData[8]);
	// 	console.log(responseData[8].multimedia);
	// for (let i = 0; i < 10; i++) {
	// 	console.log(responseData[i].abstract);
	// 	setArticles(responseData[i]);
	// }
	// console.log(responseData);
	// console.log(responseData[0].abstract);
	// console.log(responseData[0].byline.original);
	// console.log(responseData[0].pub_date);
	// console.log(responseData[0].web_url);
	// console.log(responseData[0].headline.main);
	// console.log(responseData[0].multimedia[3].legacy.thumbnail);
	//};

	return (
		<main>
			<h1>NY TIMES ARTICLES</h1>
			<ul>{rengerPage()}</ul>
		</main>
	);
}

export default App;
