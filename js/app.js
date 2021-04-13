$(() => {
    
    const apikey = '5a03a681'
    $('form').on('submit', (event) => {
        // preventDefult will prevent auto submittion
        event.preventDefault();
        const $userInput = $('input[type="text"]').val();
        console.log($userInput)

        $.ajax({

            url: `http://www.omdbapi.com/?s=${$userInput}&apikey=5a03a681`
        }).then(
            (data) => {
               
                for(let i = 0; i < 10; i++) {

                    // const $plot = $('<div>').addClass('movieInfo');
                    const $poster = $('<img>').addClass('posterImg').attr('src', data.Search[i].Poster);
                    const $title = $('<h2>').text(data.Search[i].Title)
                    const $year = $('<h3>').addClass('year').text(data.Search[i].Year);
                                        
                    // const $runtime = $('<h3>').addClass('runtime');

                   $('.row').append($poster);
                   $('.row').append($title);
                   $('.row').append($year); 
                
                // $('.cardholder').append($movie_info)

                // Add a button for each movie for description
                const $imb = $(`<button target="_blank" href= ${data.Search[i].ImdbID}>`).text('Movie Detail') 
                $('.row').append($imb); 
                
                /*
                Incomplete work:
                1. Make "Movie Detail" button click able to see move details
                2. C

                
                */






                }
                console.log(data)

            },
            () => {
                console.log('bad request')
            }
        );
    })
    
})
