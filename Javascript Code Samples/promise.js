// Promise = An object that manages asynchronous operations.
//           Wrap a promise object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// Do these chores in order

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkTheDog() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        let dogWalked = true;
        
        if (dogWalked) {
            resolve('You walk the dog 🐕‍🦺');
        }
        else {
            reject('You didn\'t walked the dog.' );
        }
    }, 1500);
  });
}

function cleanTheKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
        let kitchenCleaned = true;

        if (kitchenCleaned) {
            resolve('You clean the kitchen 🧹');
        }
        else {
            reject('You didn\'t cleaned the kitchen.');
        }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let trashedOut = true;

      if (trashedOut) {
        resolve('You take out the trash 🚮');
      }
      else {
        reject('You didn\'t trashed out');
      }
    }, 500);
  });
}

// walkTheDog(() => {
//   cleanTheKitchen(() => {
//     takeOutTrash(() => console.log('You finished!'));
//   });
// });

walkTheDog()
.then(res => { console.log(res); return cleanTheKitchen();})
.then(res => { console.log(res); return takeOutTrash();})
.then(res => {console.log(res); console.log('YOU FINISHED ALL CHORES!')})
.catch(err => console.error(err));

// Promise.all([walkTheDog(), cleanTheKitchen(), takeOutTrash()]).then(res => console.log(res))
