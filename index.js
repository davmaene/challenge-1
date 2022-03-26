(() => {
    let i = 0;
    
    const arr = [
        'da',
        'vi',
        'd',
        'ma',
        'en',
        'e'
    ];

    const _handleClick = (initialize) => {

        if(i <= arr.length) initialize ? i = 0 :  i++;
        else i = 0;
        
        document.getElementById("postion").innerHTML = i + 1;
        document.getElementById("value").innerHTML = arr[i];
    }
    _handleClick(true);

    document.getElementById("btn").onclick = (e) => {
        e.preventDefault()
        _handleClick()
    }

})()