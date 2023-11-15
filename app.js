const APIurl = "https://api.github.com/users/";
const main = document.querySelector("#main ");
const search = document.querySelector("#search");

const getUser = async (username) => {
    const response = await fetch(APIurl + username);
    const data = await response.json();
    console.log(data);
    const card = `
    <div class="box">

            <div>
                <img src="${data.avatar_url}" alt="" class="avatar">
            </div>
    
            <div class="card">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
    
    
                <ul class="info">
                    <li>${data.followers}<strong> Followers</strong></li>
                    <li>${data.following}<strong> Followings</strong></li>
                    <li>${data.public_repos
                    }<strong> Repos</strong></li>
                </ul>
    
                <ul class="repos">
                    
                </ul>
            </div>
        </div>
        `
        main.innerHTML  = card;
        getRepos(username)
}





const getRepos = async (username)=>{
    const repos = document.querySelector(".repos")
    const response = await fetch(APIurl + username + "/repos");
    const data = await response.json();
    console.log(data);
    data.forEach(
        (item)=>{
            console.log(item);
            const elem = document.createElement('a')
            elem.classList.add('repo')
            elem.href = item.html_url;
            elem.innerText = item.name;
            elem.target = "_blank";
            repos.appendChild(elem);
        }
    )
}


const formSubmit = ()=>{
    
    if(search.value != ""){
        getUser(search.value);
        search.value = ""
    }
    return false
}

search.addEventListener('focusout', ()=>{
    formSubmit();
});

// {/* <a href="#" target="_blank" class="repo">Repo 1</a>
//                     <a href="#" target="_blank" class="repo">Repo 1</a>
//                     <a href="#" target="_blank" class="repo">Repo 1</a> */}