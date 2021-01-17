import React from 'react';

const NewsItem = ({ title, author, published, link, snippet }) => {
	return (
		<li>
			<h2>{title}</h2>
			<p>{snippet}</p>
			<h3>
				{author}, {published.slice(0, 10)}
			</h3>
			<button>
				<a href={link} target="_blank">
					Read It
				</a>
			</button>
		</li>
	);
	d;
};

export default NewsItem;
