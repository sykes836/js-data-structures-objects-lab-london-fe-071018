// Write your solution in this file!

var driver = {};

function updateDriverWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromDriverByKey(object, key){
  return Object.assign({}, object, key)
  delete object[clone]
  return object
}
function destructivelyDeleteFromDriverByKey(object, key){
  delete object[key]
  return object
} 