// console.log('test')

// https://dog.ceo/api/breeds/list/all
//https://dog.ceo/api/breed/malinois/images/random

//gets dog list. also grabs the data & assigns it to an object as an array
const getOptions = async () => {
  const url = 'https://dog.ceo/api/breeds/list/all'
  try {
    const res = await axios.get(url)
    // console.log(res.data.message)
    const dogList = Object.keys(res.data.message)
    // console.log(dogList)
    optionValues(dogList)
  } catch (error) {
    console.log(`Error: ${error}`)
  }

}

//iterates through the array & creates a dropdown option in the selector
function optionValues(list) {
  list.forEach((dog) => {
    // console.log(dog)
    const select = document.querySelector('select')
    // console.log(select)
    const option = document.createElement('option')
    option.value = `${dog}`
    option.textContent = `${dog}`
    select.append(option)
  })
}


getOptions()

function getValue(e) {
  e.preventDefault()
  const optionValue = document.querySelector('#select-breed').value
  // console.log(optionValue)
  getPic(optionValue)
}

async function getPic(breed) {
  removePic()
  const url = `https://dog.ceo/api/breed/${breed}/images/random`
  try {
    const res = await axios.get(url)
    console.log(res.data)
    picAppend(res.data.message)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

function picAppend(pic) {
  const img = document.createElement('img')
  img.src = pic
  document.querySelector('#append-dog').append(img)
}

function removePic() {
  const oldPic = document.querySelector('#append-dog')
  while (oldPic.lastChild) {
    oldPic.removeChild(oldPic.lastChild)
  }
}

const form = document.querySelector('form')
// console.log(form)
form.addEventListener('submit', getValue)


