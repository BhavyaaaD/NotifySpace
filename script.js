const clearBtn=document.getElementById('markAllAsReadBtn');
const count=document.getElementById('number-unread');

function clearUI(e){
    e.preventDefault();
    let unreadNotifications = document.querySelectorAll('.unread') ;
    unreadNotifications.forEach((div)=>{
        //removing bg color
        div.classList.remove('unread');
        //removing dot
        const span=div.querySelector('.dot');
        span.classList.remove('dot');

        //changing the the number of unread notifications
        count.textContent='0';
       
    })


}

clearBtn.addEventListener('click',clearUI);