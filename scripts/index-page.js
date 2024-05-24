let comments = [
  {
    name: 'Victor Pinto',
    date: '11/02/2023',
    comment:
      'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
  },
  {
    name: 'Christina Cabrera',
    date: '10/28/2023',
    comment:
      'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
  },
  {
    name: 'Isaac Tadesse',
    date: '10/20/2023',
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

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
      `${element.date}`
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

const createNewComment = (name, date, comment){
  return{
    name: name,
    date: date,
    comment: comment
  }
}

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let commentName = commentForm.name.value;
  let currentDate = new Date();
  let dateDay = currentDate.getDate();
  let dateMonth = currentDate.getMonth() + 1;
  let dateYear = currentDate.getFullYear();
  let commentDate = `${dateDay}/${dateMonth}/${dateYear}`;
  let commentText = commentForm.comment.value;

  let newComment = createNewComment(commentName, commentDate, commentText)

  comments.unshift(newComment);

  commentsContainer.innerText = '';
  displayExistingComments(comments);
});

displayExistingComments(comments);
