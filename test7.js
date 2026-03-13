var arr = [
{
    userName:"Test",
    lastName:"Test",
    email:"test.test@gmail.com"
},
{
    userName:"Dmitro",
    lastName:"Porohov",
    email:"dmitro.porohov@yahoo.com"
},
{
    userName:"Andrii",
    lastName:"",
    email:"andrii@mail.ru"
}
];

var validEmails = [];

var regex = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail|yahoo)\.com$/;

for (var i = 0; i < arr.length; i++) {
    if (regex.test(arr[i].email)) {
        validEmails.push(arr[i].email);
    }
}

console.log(validEmails);