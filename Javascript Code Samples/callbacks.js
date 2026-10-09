// 
function walkTheDog(cb) {
    setTimeout(() => {
      console.log('You walk the dog 🐕‍🦺');
      cb();
    }, 1500);
}

function cleanTheKitchen(cb) {
    setTimeout(() => {
      console.log('You clean the kitchen 🧹');
      cb();
    }, 2500);
}

function takeOutTrash(cb) {
    setTimeout(() => {
      console.log('You take out the trash 🚮');
      cb();
    }, 500);
}

walkTheDog(() => {
  cleanTheKitchen(() => {
    takeOutTrash(() => console.log('You finished!'));
  });
});
