/**
 * Created by wwtliu on 14/8/16.
 */

var countNum = 0;

function count() {
    postMessage(countNum);
    countNum += 1;
    setTimeout(count, 1000);
}

count();