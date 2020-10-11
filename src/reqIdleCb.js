/**
 * This is a file to learn web api: reqestIdleCallback
 */

let tasks = 100;

function myNonEssentialWork(deadline) {
  console.log(deadline);
  console.log(deadline.timeRemaining());

  while (deadline.timeRemaining() > 0 && tasks > 0) {
    doWorkIfNeed();
    tasks--;
  }

  if (tasks > 0) {
    requestIdleCallback(myNonEssentialWork);
  }

  // if (tasks > 0) {
  //   requestIdleCallback(nonEssentialWork);
  // }
}

function doWorkIfNeed() {
  console.log("process working...");
}

requestIdleCallback(myNonEssentialWork);
