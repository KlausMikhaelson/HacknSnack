$ = document.querySelector;

document.getElementById("uploadPhotoForm").addEventListener('submit',evt => {
    evt.preventDefault();
    const body = new FormData(evt.target);
    const container = document.getElementById("uploadFileContainer")
    const url = "/add-photo";
    fetch(url, {
        method: 'POST',
        body: body
    }).then(resp => {
        if(resp.status < 200 || resp.status >= 300)
            throw new Error(`Request failed with status ${resp.status}`)
        return resp.json()
    }).then(json => {
        container.innerHTML = '<b>Thank you for submitting your photo!</b>';
    }).catch(err => {
        container.innerHTML = 'Some error occured';
    })
})