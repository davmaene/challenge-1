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

    const _handleClick = () => {
        if(i <= arr.length) i++;
        else i = 0;

        
    }

    document.getElementById("btn").onclick = _handleClick

})()