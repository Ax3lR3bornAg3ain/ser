const postForm = document.getElementById('postForm');
const postContent = document.getElementById('postContent');
const board = document.getElementById('board');

document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
});

function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    for (let i = 0; i < posts.length; i++) {
        createPostElement(posts[i]);
    }
}

function savePosts(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

postForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const content = postContent.value.trim();
    
    if (content !== '') {
        const newPost = {
            content: content
        };
        
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(newPost);
        savePosts(posts);
        
        createPostElement(newPost);
        
        postContent.value = '';
    }
});

function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.textContent = post.content;
    
    board.appendChild(postElement); 
}