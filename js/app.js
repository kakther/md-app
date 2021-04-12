$(() => {

    $.ajax({
        url: 'http://www.omdbapi.com/?i=tt3896198&apikey=5a03a681'
    }).then(
        (data) => {
            console.log(data)
        },
        () => {
            console.log('bad request')
        }
    );
})
