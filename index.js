
 let name = document.querySelector('.name')
 let age = document.querySelector('.age')
 let genderIdentity = document.querySelector('.gender')
 let userIcon = document.querySelector('.user-icon')
 let userCity = document.querySelector('.city')
 let userState = document.querySelector('.state')
 let userCountry = document.querySelector('.country')
 let url = 'https://randomuser.me/api/'


async function getRandomUser() {

    let response = await fetch(url)
    let data = await response.json()

    name.innerHTML = data.results[0].name.first
    userIcon.src = data.results[0].picture.medium
    age.innerHTML = data.results[0].dob.age
    genderIdentity.innerHTML = data.results[0].gender
    userCity.innerHTML = data.results[0].location.city
    userState.innerHTML = data.results[0].location.state
    userCountry.innerHTML = data.results[0].location.country
    
}

getRandomUser()