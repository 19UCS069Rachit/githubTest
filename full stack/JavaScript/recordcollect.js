var collection=
{
    "2548":
    {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": ["Let it rock", "You give love a bad name"]
    },
    "2468":
    {
        "album": "1999",
        "artist": "Prince",
        "tracks": ["1999", "Little red corvette"]
    },
    "1245":
    {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439":
    {
        "album": "ABBA Gold"
    }
}

var collectioncopy=JSON.parse(JSON.stringify(collection))

function updateRec(id,prop,value)
{
    if(value==="")
    {
        delete collection[id][prop]
    }
    else if(prop==="tracks")
    {
        if(collection[id].hasOwnProperty(prop))
            collection[id][prop].push(value)
        else
            collection[id][prop]=[value]
    }  
    else
        collection[id][prop]=value
}
alert(collection)
updateRec("1245","album","Blank Space")
alert(collection)
updateRec("5439","tracks","Oww")
alert(collection)