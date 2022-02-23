function verify() {
    var data = new Date();
    var year = data.getFullYear();
    var fyear = document.getElementById('txtyear');
    var res = document.querySelector('div#res');
    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert('[ERROR] Verify the data and try again!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var age = year - Number(fyear.value);
        var gender = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            gender = 'Man';
            if (age >= 0 && age < 10){
                // Kid
                img.setAttribute('src', 'img/kidboy.jpg');
                img.setAttribute('width', '250px');
                img.setAttribute('height', '250px');
                img.setAttribute('style', 'border-radius: 125px; background-size: cover; background-position: center;');
            } else if (age < 21) {
                // Young
                img.setAttribute('src', 'img/teenageboy.jpg');
                img.setAttribute('width', '250px');
                img.setAttribute('height', '250px');
                img.setAttribute('style', 'border-radius: 125px; background-size: cover; background-position: center;');
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'img/adultman.jpg');
                img.setAttribute('width', '250px');
                img.setAttribute('height', '250px');
                img.setAttribute('style', 'border-radius: 125px; background-size: cover; background-position: center;');
            } else {
                // Old]
                img.setAttribute('src', 'img/oldman.jpg');
                img.setAttribute('width', '250px');
                img.setAttribute('height', '250px');
                img.setAttribute('style', 'border-radius: 125px; background-size: cover; background-position: center;');
            }
        } else if (fsex[1].checked) {
            gender = 'Woman';
            if (age >= 0 && age < 10){
                // Kid
                img.setAttribute('src', 'img/kidgirl.jpg');
                img.setAttribute('width', '250px');
                img.setAttribute('height', '250px');
                img.setAttribute('style', 'border-radius: 125px; background-size: cover; background-position: center;');
            } else if (age < 21) {
                // Young
                img.setAttribute('src', 'img/teenagegirl.jpg');
                img.setAttribute('width', '250px');
                img.setAttribute('height', '250px');
                img.setAttribute('style', 'border-radius: 125px; background-size: cover; background-position: center;');
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'img/adultwoman.jpg');
                img.setAttribute('width', '250px');
                img.setAttribute('height', '250px');
                img.setAttribute('style', 'border-radius: 125px; background-size: cover; background-position: center;');
            } else {
                // Old
                img.setAttribute('src', 'img/oldwoman.jpg');
                img.setAttribute('width', '250px');
                img.setAttribute('height', '250px');
                img.setAttribute('style', 'border-radius: 125px; background-size: cover; background-position: center;');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `We detected a ${gender} ${age} years old. `;
        res.appendChild(img);
    }
}