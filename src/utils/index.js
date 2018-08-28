const convertToUrl = (name, id) => {
  return name.split(' ').join('-').concat('-'+ id)
}

const getIDfromUrl = (url) => url.split('-').slice(-1)[0]

export { convertToUrl, getIDfromUrl }
