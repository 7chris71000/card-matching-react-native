import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (storageKey, value) => {
  try{
    let storedValue;
    if(typeof value === 'object'){
      storedValue = JSON.stringify(value)
    } else {
      storedValue = value
    }
    await AsyncStorage.setItem(storageKey, storedValue);
  } catch(e) {
    return e;
  }
}

export const getData = async (storageKey) => {
  try {
    let value = await AsyncStorage.getItem(storageKey);
    try {
      value = JSON.parse(value)
    } catch(e){}

    if(value !== null){
      return value
    }
  } catch(e) {
    return e;
  }
}

export const removeData = async (storageKey) => {
  try {
    return await AsyncStorage.removeItem(storageKey);
  } catch(e) {
    return e;
  }
}

/**
 * Add an object to a stored array and save the new array in AsyncStorage
 * @param {string} storageKey - storage key AsyncStorage uses to save the value
 * @param {Object} value - object value to store in the storageKey. Eg: {"name": "Chris", "score": "10"} 
 */
export const addToArrayAndSave = async (storageKey, value) => {
  return new Promise((resolve, reject) => {
    getData(storageKey).then(result => {

      const newArray = JSON.stringify([...result, value]);
      storeData(storageKey, newArray).then(result => {
        resolve(newArray);
      }).catch(e => {
        reject('Error occurred while storing data.');
      });

    }).catch(e => {
      reject('Error occurred while getting data.');
    })
  })
}




