// define a recipes object.
var recipes = {}


// updateObjectWithKeyAndValue(object, key, value)
function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, { [key]: value 
  })
  //newObj[key] = value
  return newObj
}

// destructivelyUpdateObjectWithKeyAndValue(object, key, value)
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

// deleteFromObjectByKey(object, key)
function deleteFromObjectByKey(object, key) {
  


}


// destructivelyDeleteFromObjectByKey(object, key)
function destructivelyDeleteFromObjectByKey(object, key) {


}
