window.onload = ()=>{
    $('.fa-heart').click((e)=>{
        console.log(e.target.classList[0]);
        if(e.target.classList[0] == 'fa-regular'){
            e.target.classList = 'fa-solid fa-heart';
        }else{
            e.target.classList = 'fa-regular fa-heart';
        }
    })

    $('#btnWishList').click(()=>{
        console.log($('#btnWishList').children()[0].classList[0]);
        if($('#btnWishList').children()[0].classList[0] == 'fa-regular'){
            $('#btnWishList').children()[0].classList = 'fa-solid fa-heart';
        }else{
            $('#btnWishList').children()[0].classList = 'fa-regular fa-heart';
        }
    })
}