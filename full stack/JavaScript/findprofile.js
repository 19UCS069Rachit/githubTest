var profile=
[
    {
        "firstname":"Abc",
        "lastname":"Zyx",
        "number":"123",
        "likes":["apples","pizza","rice"]
    },
    {
        "firstname":"Def",
        "lastname":"Wvu",
        "number":"456",
        "likes":["Beach","hills"]
    },
    {
        "firstname":"Ghi",
        "lastname":"Tsr",
        "number":"789",
        "likes":["JavaScript"]
    }
]

function findProfile(name,prop)
{
    for(var i=0;i<profile.length;i++)
    {
        if(profile[i].firstname===name)
            return profile[i][prop] || "No Such Property Exists"
        else
            return "No Such Name Exists"
    }
}

alert("Abc likes : ",findProfile("Abc","likes"))