$( () => {

    
    ///grabbing the game button
    const $openBTN = $('#openModal');
    
    ////////grabbing modal element
    const $modal = $('#modal');
    
    ///////////grabbing close button
    const $closeBTN = $('#close')
    
    
    
    const openModal =()=>{
        $modal.css('display','block');
    }
    
    const closeModal =()=>{
        $modal.css('display', 'none');
    }
    
    $openBTN.on('click', openModal);
    $closeBTN.on('click', closeModal);
    setTimeout(openModal, 1000);


});