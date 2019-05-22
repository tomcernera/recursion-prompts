// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
    if (x - y === 2) 
    {
      return [x + 1];
    } 
    else 
    {
      var list = range(x, y - 1);
      list.push(y - 1);
      return list;
    }
};

range(0,7);