
document.addEventListener('DOMContentLoaded', function () {
	//DATA OF AUTHORS
	var authors = [
		{ name: 'Author 1', info: 'Author 1 information', articles: [{ title: 'Article 1', author: authors, description: 'Description of Article 1', comments: ['Comment 1', 'Comment 2'] }] },
		{ name: 'Author 2', info: 'Author 2 information', articles: [{ title: 'Article 2', author: authors, description: 'Description of Article 2', comments: ['Comment 3', 'Comment 4'] }] },
		{ name: 'Author 3', info: 'Author 3 information', articles: [{ title: 'Article 3', author: authors, description: 'Description of Article 3', comments: ['Comment 5', 'Comment 6'] }] }
	];
	//DATA OF ARTICLES
	var articles = [
		{ title: 'Article 1', author: authors, description: 'Description of Article 1', comments: ['Comment 1', 'Comment 2'] },
		{ title: 'Article 2', author: authors, description: 'Description of Article 2', comments: ['Comment 3', 'Comment 4'] },
		{ title: 'Article 3', author: authors, description: 'Description of Article 3', comments: ['Comment 5', 'Comment 6'] }
	];

	var articlesContainer = document.getElementById('articles');
	articlesContainer.classList.add('articles-container')
	// Display articles
	articles.forEach(function (article, index) {
		//data of balise
		var articleElement = document.createElement('ul');
		var lineElement = document.createElement('li');
		var titleElement = document.createElement('a');
		var authorElement = document.createElement('a');
		//class of element
		articleElement.classList.add('article');
		titleElement.classList.add('title');
		authorElement.classList.add('author');
		//text
		titleElement.textContent = article.title;
		authorElement.textContent = 'By ' + article.author[index].name;
		//blog
		articleElement.appendChild(lineElement);
		articleElement.appendChild(titleElement);
		articleElement.appendChild(authorElement);
		articlesContainer.appendChild(articleElement);

		var viewDescription = false;
		var viewInfoAuthor = false;
		//view description below the title of artile
		titleElement.addEventListener('click', function () {
			if (viewDescription) {
				removeArticle();
			} else {
				displayArticleDescription();
				removeAuthor();
			}
		});
		//view description below the author
		authorElement.addEventListener('click', function () {
			if (viewInfoAuthor) {
				removeAuthor();
			} else {
				displayAuthorInfo();
				removeArticle();
			}
		});

		function displayArticleDescription() {
			var infoArticle = document.createElement('div')
			infoArticle.classList.add('bloc-article');
			var descriptionElement = document.createElement('p');
			descriptionElement.classList.add('description');
			descriptionElement.textContent = article.description;

			var commentsElement = document.createElement('ul');
			commentsElement.classList.add('comments');
			article.comments.forEach(function (comment) {
				var commentItem = document.createElement('li');
				commentItem.textContent = comment;
				commentsElement.appendChild(commentItem);
			});

			infoArticle.appendChild(descriptionElement);
			infoArticle.appendChild(commentsElement);
			articleElement.appendChild(infoArticle);

			viewDescription = true;
		}

		function removeArticle() {
			var infoArticle = articleElement.querySelector('.bloc-article');
			articleElement.removeChild(infoArticle);
			viewDescription = false;
		}

		function displayAuthorInfo() {
			var infoAuthor = document.createElement('div');
			infoAuthor.classList.add('bloc-author');
			var infoElement = document.createElement('p');
			infoElement.classList.add('info');
			infoElement.textContent = article.author[index].info;

			var linksElement = document.createElement('ul');
			linksElement.classList.add('article_link');
			article.author[index].articles.forEach(function (article) {
				var articleItem = document.createElement('li');
				articleItem.textContent = article.title;
				articleItem.addEventListener('click', function () {
					if (viewDescription) {
						removeArticle();
					} else {
						displayArticleDescription();
						removeAuthor();
					}
				});
				linksElement.appendChild(articleItem);
			});

			infoAuthor.appendChild(infoElement);
			infoAuthor.appendChild(linksElement);
			articleElement.appendChild(infoAuthor);

			viewInfoAuthor = true;
		}

		function removeAuthor() {
			var infoAuthor = articleElement.querySelector('.bloc-author');
			articleElement.removeChild(infoAuthor);
			viewInfoAuthor = false;
		}

	});

});
