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

comments.forEach((element) => {
  let comment = document.createElement('div');
  comment.classList.add('comment');

  let commentImg = document.createElement('div');
  commentImg.classList.add('comment__img');

  let commentContent = document.createElement('div');
  commentContent.classList.add('comment__content');

  comment.append(commentImg, commentContent);

  let commentHead = document.createElement('div');
  commentHead.classList.add('comment__content-head');

  commentContent.append(commentHead);

  let commentHeadUsername = document.createElement('div');
  let commentHeadDate = document.createElement('div');

  commentHead.append(commentHeadUsername, commentHeadDate);
});
