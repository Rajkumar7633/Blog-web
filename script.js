function addBlog(blog) {
  const blogList = document.querySelector('.blog-list');

  const newBox = document.createElement('div');
  newBox.classList.add('blog-box');

  const newBlogPost = document.createElement('div');
  newBlogPost.classList.add('blog-post');
  newBox.appendChild(newBlogPost);

  const newBlogHeader = document.createElement('div');
  newBlogHeader.classList.add('blog-header');
  newBlogPost.appendChild(newBlogHeader);

  const newBlogTitle = document.createElement('h2');
  newBlogTitle.classList.add('blog-title');
  newBlogTitle.textContent = blog.title;
  newBlogHeader.appendChild(newBlogTitle);

  const newBlogDate = document.createElement('p');
  newBlogDate.classList.add('blog-date');
  newBlogDate.textContent = blog.date;
  newBlogHeader.appendChild(newBlogDate);

  const newBlogContent = document.createElement('p');
  newBlogContent.classList.add('blog-content');
  newBlogContent.textContent = blog.content;
  newBlogPost.appendChild(newBlogContent);

  // Create the blog-buttons div
  const blogButtons = document.createElement('div');
  blogButtons.classList.add('blog-buttons');
  newBox.appendChild(blogButtons);

  // Create the move-up button
  const moveUpButton = document.createElement('button');
  moveUpButton.classList.add('blog-button', 'move-up');
  moveUpButton.textContent = 'Move Up';
  blogButtons.appendChild(moveUpButton);

  // Add event listener to move-up button
  moveUpButton.addEventListener('click', () => {
    const currentBlog = newBox;
    const previousBlog = currentBlog.previousElementSibling;
    if (previousBlog) {
      blogList.insertBefore(currentBlog, previousBlog);
    }
  });

  // Create the move-down button
  const moveDownButton = document.createElement('button');
  moveDownButton.classList.add('blog-button', 'move-down');
  moveDownButton.textContent = 'Move Down';
  blogButtons.appendChild(moveDownButton);

  moveDownButton.addEventListener('click', () => {
    const currentBlog = newBox;
    const nextBlog = currentBlog.nextElementSibling;
    if (nextBlog) {
      // Use insertBefore to insert the current blog after the next sibling
      blogList.insertBefore(currentBlog, nextBlog.nextSibling);
    }
  });
  // Create the delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('blog-button', 'delete');
  deleteButton.textContent = 'Delete';
  blogButtons.appendChild(deleteButton);

  // Add event listener to delete button
  deleteButton.addEventListener('click', () => {
    newBox.remove();
  });

  blogList.appendChild(newBox);
}

const blogData = [
  {
    title: 'First Blog Post',
    date: 'January 1, 2022',
    content: 'This is the content of the first blog post.'
  },
  {
    title: 'Second Blog Post',
    date: 'February 1, 2022',
    content: 'This is the content of the second blog post.'
  },
  {
    title: 'Third Blog Post',
    date: 'March 1, 2022',
    content: 'This is the content of the third blog post.'
  }
];

blogData.forEach(blog => addBlog(blog)); // Automatically call the function for each blog in the array
