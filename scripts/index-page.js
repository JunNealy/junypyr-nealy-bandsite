import { BandSiteApi, apiKey } from './band-site-api.js';
import ConvertTimeCode from './unix-timestamp-convert.js';

let commentForm = document.querySelector('.comments__form');

let commentsContainer = document.querySelector('.comments__container');

const bandSiteApi = new BandSiteApi(apiKey);

async function retrieveComments() {
  try {
    let comments = await bandSiteApi.getComments();
    console.log(comments);
    return comments;
  } catch (error) {
    console.log(error);
  }
}

let comments = await retrieveComments();

const createElement = (elemName, className, content = '') => {
  let newElement = document.createElement(`${elemName}`);
  newElement.classList.add(`${className}`);
  newElement.innerText = `${content}`;
  return newElement;
};

function displayExistingComments(array) {
  const convertTimeCode = new ConvertTimeCode();
  array.forEach((element) => {
    let comment = createElement('div', 'comment');
    commentsContainer.prepend(comment);

    let commentImg = createElement('div', 'comment__img');
    comment.append(commentImg);

    let commentContent = createElement('div', 'comment__content');
    comment.append(commentContent);

    let commentHead = createElement('div', 'comment__content-head');
    commentContent.append(commentHead);

    let commentUsername = createElement(
      'p',
      'comment__content-head--username',
      `${element.name}`
    );
    commentHead.append(commentUsername);

    let commentDate = createElement(
      'p',
      'comment__content-head--date',
      `${convertTimeCode.toMMDDYYY(element.timestamp)}`
    );
    commentHead.append(commentDate);

    let commentText = createElement(
      'p',
      'comment__content-text',
      `${element.comment}`
    );
    commentContent.append(commentText);
  });
}

const createNewComment = (name, comment) => {
  return {
    name: name,
    comment: comment,
  };
};

commentForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  let commentName = commentForm.name.value;
  let commentText = commentForm.comment.value;

  let newComment = createNewComment(commentName, commentText);

  await bandSiteApi.postComment(newComment);
  let comments = await retrieveComments();
  commentForm.reset();
  displayExistingComments(comments);
});

displayExistingComments(comments);
