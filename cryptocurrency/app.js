$(() => {
  ///////////////////Price of the Coin//////////////////////
  // const coin = 'BTC'
  // const endpoint = `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD,JPY,EUR,BTC?apikey=6ccfcc7c18aa8c9a843472090f99f174349d955a89cbfc6a69b0f78f3ace71c5`
  const $marketCapNumber = 100;
  const endpoint = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${$marketCapNumber}&tsym=USD&?apikey=6ccfcc7c18aa8c9a843472090f99f174349d955a89cbfc6a69b0f78f3ace71c5`;
  console.log(endpoint);

  const handleData = data => {
      
      for (let i=0; i<$marketCapNumber; i++) {
        
        let number = i+1;
        //name
        let name = data.Data[i].CoinInfo.FullName;
        // symbol e.g btc, xrp, ltc
        let symbol = data.Data[i].DISPLAY.USD.FROMSYMBOL;
        //  price
        let price = data.Data[i].DISPLAY.USD.PRICE;
        //   marketcap
        let $marcketCap = data.Data[i].DISPLAY.USD.MKTCAP;
        
      

        const tableRow = $('<tr>')
        tableRow.addClass('tableRowData')
        ////
        const tableCell = $('<td>')
        tableCell.addClass('rank data')
        const $rankOfCoin = $('<p>').text(`${number}`)
        tableCell.append($rankOfCoin)
        
        
        //////
        const tableCell2= $('<td>')
        tableCell2.addClass('name data');
        const $nameOfCoin = $('<p>').text(`${name}`);
        tableCell2.append($nameOfCoin);
        ////
        const tableCell3 = $('<td>')
        tableCell3.addClass('symbol data')
        const $ticker = $('<p>').text(`${symbol}`);
        tableCell3.append($ticker)
        ///
        const tableCell4 = $('<td>')
        tableCell4.addClass('marketCap data')
        const $totalMarketCap = $('<p>').text(`${$marcketCap}`);
        tableCell4.append($totalMarketCap);
        ////
        const tableCell5 = $('<td>')
        tableCell5.addClass('price data')
        const $coinprice = $('<p>').text(`${price}`);
        tableCell5.append($coinprice)
        ///
        tableRow.append(
            tableCell,
            tableCell2,
            tableCell3,
            tableCell4,
            tableCell5
        )

        $('.a').append(tableRow);
        
    }





    // for (let i = 0; i < $marketCapNumber; i++) {
        // $('.a').append(
        //       "<tr class='tableRowData'>" +
        //         "<td class='rank data' id = '1'> </td>" +
        //         "<td class='name data' id = '2'> </td>" +
        //         "<td class=' symbol data' id= '3'> </td>" +
        //         "<td class=' marketCap data' id ='4'> </td>" +
        //         "<td class='price data' id='5'> </td>" +
        //         "</tr>"
        //     );
        //   }
          
    //data from the API
    // for (let j = 0; j < 100; j++) {
      // Name
    //   let j=0;
    
      //   created inputs
      // assigning variable to class names
        // const nameClass = $('.name');
        // const symbolClass= $('.symbol');
        // const priceClass = $('.price');
        // const marketCapClass = $('.marketCap');
      // append to the <td>
      
    //   $(nameClass).append($nameOfCoin);
    //   $(symbolClass).append($ticker);
    //   $(priceClass).append($coinprice);
    //   $(marketCapClass).append($totalMarketCap);
    // }
  };
  $.ajax({
    url: endpoint,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Authorization'
    }
  }).then(handleData);



   
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





  const burger = $('.burger');
  const nav = $('.navLinks');
  const navlinks =$('li');
///toggle
  const openNav =()=>{
    nav.toggleClass('nav-active')
    let animation = navlinks.animate({fontSize: '5em', opacity: '0.5'}, "slow");
    
  }

burger.on('click', openNav);



});
