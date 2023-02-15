/** @author AM Blank
 *  @version 2/13/23
 *  CS 341 HW4
 * */

var express = require('express');
var router = express.Router();

/* GET list of orders */
//(returns a json object
//for now, hardcoded values)

router.get('/', function(req, res, next) {
    //each object has two properties: topping and quantity
    const one = { topping: "cherry", quantity: 5 };
    const two = { topping: "plain", quantity: 2 };
    const three = { topping: "chocolate", quantity: 7 };

    //put 'em into an array
    const arr = [one, two, three];

    //convert arr to json object
    res.json(arr);

    
});

module.exports = router;