var profile = document.querySelector('#profilename button');
var profiledropbox = document.querySelector('#profiledropbox');
var profiledropboxClose = document.querySelector('#profiledropbox i');

profile.addEventListener('click', function(){
    profiledropbox.style.display = 'flex';
})
profiledropboxClose.addEventListener('click', function(){
    profiledropbox.style.display = 'none';
})



var languagebox = document.querySelector('#language #lang');
var languagedrop = document.querySelector('#languagedrop');
var languagedropClose = document.querySelector('#languagedrop i');

languagebox.addEventListener('click',function(){
    languagedrop.style.display = 'flex';
});
languagedropClose.addEventListener('click', function(){
    languagedrop.style.display = 'none';
});


var genrebox = document.querySelector('#genre #genr');
var genredrop = document.querySelector('#genredrop');
var genredropClose = document.querySelector('#genredrop i');

genrebox.addEventListener('click',function(){
    genredrop.style.display = 'flex';
});
genredropClose.addEventListener('click', function(){
    genredrop.style.display = 'none';
});

var yearbox = document.querySelector('#year #years');
var yeardrop = document.querySelector('#yeardrop');
var yeardropClose = document.querySelector('#yeardrop i');

yearbox.addEventListener('click',function(){
    yeardrop.style.display = 'flex';
});
yeardropClose.addEventListener('click', function(){
    yeardrop.style.display = 'none';
});