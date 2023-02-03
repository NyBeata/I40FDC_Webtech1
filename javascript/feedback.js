function feedbackSent(){
    if(document.getElementById('comment').value != ''){
        document.getElementById('feedbackForm').classList.add('d-none');
        document.getElementById('feedbackThanks').classList.remove('d-none');
        document.getElementById('comment').classList.remove('is-invalid');
        document.getElementById('empty').classList.add('d-none');
    } else {
        document.getElementById('comment').classList.add('is-invalid');
        document.getElementById('empty').classList.remove('d-none');
    }
    
}