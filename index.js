var recipes = {};
<<<<<<< HEAD

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { object[key] = value
return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObject = delete object.key
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
  }
=======
var recipes = new Object();
>>>>>>> 3e9e0e1bf2c919554ae23c10f4730e87828b5492
