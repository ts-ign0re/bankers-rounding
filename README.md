### Install

```
$ npm install --save bankers-rounding
```

### User

```
// ES5
var bankersRounding = require('bankers-rounding');

// ES6
import bankersRounding from 'bankers-rounding';



// Tests

bankersRounding(2.5); // 2
bankersRounding(3.5); // 4
bankersRounding(0.025, 2); // 0.02
bankersRounding(0.035, 2); // 0.04
```




