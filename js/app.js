$(() => {
    
    const apikey = '5a03a681'
    $('form').on('submit', (event) => {
        // preventDefult will prevent auto submittion
        event.preventDefault();
        const $userInput = $('input[type="text"]').val();

        $.ajax({

            url: `http://www.omdbapi.com/?s=${$userInput}&apikey=5a03a681`
        }).then(
            (data) => {
               
                for(let i = 0; i < 10; i++) {

                    // const $plot = $('<div>').addClass('movieInfo');
                    const $poster = $('<img>').addClass('posterImg').attr('src', data.Search[i].Poster);
                    const $title = $('<h1>');
                    const $year = $('<h3>').addClass('year');
                    const $runtime = $('<h3>').addClass('runtime');

                   $('.row').append($poster)
                
                // $('.cardholder').append($movie_info)
              

                }
                console.log(data)

            },
            () => {
                console.log('bad request')
            }
        );
    })
    
})
