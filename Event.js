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

    // Rest of your code...
});
