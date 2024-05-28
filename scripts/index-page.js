import { BandSiteApi, apiKey } from './band-site-api.js';

const bandSiteApi = new BandSiteApi(apiKey);

async function retrieveComments() {
  try {
    let commentsArr = await bandSiteApi.getComments();
    return commentsArr;
  } catch (e) {
    console.log(e);
  }
}

let comments = await retrieveComments();
console.log(comments);

let commentsContainer = document.querySelector('.comments__container');

const createElement = (elemName, className, content = '') => {
  let newElement = document.createElement(`${elemName}`);
  newElement.classList.add(`${className}`);
  newElement.innerText = `${content}`;
  return newElement;
};

function displayExistingComments(array) {
  array.forEach((element) => {
    let comment = createElement('div', 'comment');
    commentsContainer.append(comment);

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
      `${element.timeStamp}`
    );
    commentHead.append(commentDate);

    let commentText = createElement(
      'p',
      'comment__content-text',
      `${element.comment}`
    );
    commentContent.append(commentText);

    commentsContainer.append(comment);
  });
}

let commentForm = document.querySelector('.comments__form');

const createNewComment = (name, date, comment) => {
  return {
    name: name,
    date: date,
    comment: comment,
  };
};

const getCommentDate = () => {
  let currentDate = new Date();
  let dateDay = currentDate.getDate();
  let dateMonth = currentDate.getMonth() + 1;
  let dateYear = currentDate.getFullYear();
  return `${dateDay}/${dateMonth}/${dateYear}`;
};

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let commentName = commentForm.name.value;
  let commentDate = getCommentDate();
  let commentText = commentForm.comment.value;

  let newComment = createNewComment(commentName, commentDate, commentText);
  comments.unshift(newComment);
  commentsContainer.innerText = '';
  commentForm.reset();
  displayExistingComments(comments);
});

displayExistingComments(comments);
