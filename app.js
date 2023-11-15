const APIurl = 'https://api.github.com/users/'

const getUser = async (username)=>{
    const response = await fetch(APIurl + username)
    const data = await response.json();
    console.log(data);
}

getUser("steve")

