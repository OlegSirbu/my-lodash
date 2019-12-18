var arr = [{
    name: 'o1',
    phone: '0123'
},
{
    name: 'o2',
    phone: '0830912803'
},
{
    name: 'o3',
    phone: '7419783912749312'
},
{
    name: 'o4',
    phone: '37812471923'
},
{
    name: 'o5',
    phone: '888888'
},
]

var getPhoneByName = function(name){
    return arr.find(f => f.name === name)[0].phone;
}

getPhoneByName('01');