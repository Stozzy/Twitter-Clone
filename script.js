const listHistory = document.querySelector('#post-history ul');

//adding chrips
const addForm = document.forms['add-post'];
addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const value = addForm.querySelector('input[type="text"]').value;
    
    //create element
    const li = document.createElement('li');
    const previousPost = document.createElement('span');
    const deletePost = document.createElement('button');
    
    //add content
    previousPost.textContent = value;
    deletePost.textContent = 'delete';
        
    //add CSS classes
    previousPost.classList.add('previous-post');
    deletePost.classList.add('delete-post');
    
    //appending children to li, then to parent ul
    li.appendChild(previousPost);
    li.appendChild(deletePost);
    listHistory.prepend(li);
});

//delete chirps - event bubbling
listHistory.addEventListener('click', function(e) {
    if (e.target.className == 'delete-post') {
        const li = e.target.parentElement;
        listHistory.removeChild(li);
    }
});
