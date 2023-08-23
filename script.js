document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('post-form');
    const commentsSection = document.getElementById('comments-section');

    postForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const postContent = document.getElementById('post-content').value;
        if (postContent.trim() !== '') {
            createPost(postContent);
            postForm.reset();
        }
    });

    function createPost(content) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <div class="post-content">${content}</div>
            <button class="comment-button">Comment</button>
            <div class="comments"></div>
        `;

        commentsSection.appendChild(postElement);

        const commentButton = postElement.querySelector('.comment-button');
        commentButton.addEventListener('click', function () {
            const commentsContainer = postElement.querySelector('.comments');
            const commentInput = document.createElement('input');
            commentInput.type = 'text';
            commentInput.placeholder = 'Add a comment';
            commentInput.classList.add('comment-input');
            
            const submitButton = document.createElement('button');
            submitButton.textContent = 'Submit';
            submitButton.classList.add('submit-comment');

            commentsContainer.appendChild(commentInput);
            commentsContainer.appendChild(submitButton);

            submitButton.addEventListener('click', function () {
                const commentContent = commentInput.value;
                if (commentContent.trim() !== '') {
                    createComment(commentsContainer, commentContent);
                    commentInput.value = '';
                }
            });
        });
    }

    function createComment(container, content) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = content;
        container.appendChild(commentElement);
    }
});
