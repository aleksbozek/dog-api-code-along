// console.log('test')

// https://dog.ceo/api/breeds/list/all


//gets dog list. also grabs the data & assigns it to an object as an array
const getOptions = async () => {
  const url = 'https://dog.ceo/api/breeds/list/all'
  try {
    const res = await axios.get(url)
    // console.log(res.data.message)
    const dogList = Object.keys(res.data.message)
    console.log(dogList)
    optionValues(dogList)
  } catch (error) {
    console.log(`Error: ${error}`)
  }

}

//iterates through the array & creates a dropdown option in the selector
function optionValues(list) {
  list.forEach((dog) => {
    console.log(dog)
    const select = document.querySelector('select')
    // console.log(select)
    const option = document.createElement('option')
    option.value = `${dog}`
    option.textContent = `${dog}`
    select.append(option)
  })
}


getOptions()