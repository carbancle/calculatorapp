var request = require('request-promise')

// when i press the history button there will be a history container shold show
document.getElementById('history_btn').addEventListener('click', () => {
    // in css i hide the .section_hist container now when press this button it will visible
    document.getElementById('section_hist').style.visibility = 'visible'

    // when i press history button it should load the history
    var options = {
        method: 'POST',
        uri: 'http://127.0.0.1:5000/history',
        form: { value: "" }
    }
    request(options).then(function (data) {
        // parse json to get the specitfied value
        if(JSON.parse(data)[0] == null) {
            // if data is null then show empty string
            document.getElementById('hi_a').innerHTML = ""
        } else {
            // else show the value
            document.getElementById('hi_a').innerHTML = JSON.parse(data)[0]
        }
        if(JSON.parse(data)[1] == null) {
            // if data is null then show empty string
            document.getElementById('hi_b').innerHTML = ""
        } else {
            // else show the value
            document.getElementById('hi_b').innerHTML = JSON.parse(data)[1]
        }
        if(JSON.parse(data)[2] == null) {
            // if data is null then show empty string
            document.getElementById('hi_c').innerHTML = ""
        } else {
            // else show the value
            document.getElementById('hi_c').innerHTML = JSON.parse(data)[2]
        }
        if(JSON.parse(data)[3] == null) {
            // if data is null then show empty string
            document.getElementById('hi_d').innerHTML = ""
        } else {
            // else show the value
            document.getElementById('hi_d').innerHTML = JSON.parse(data)[3]
        }
        if(JSON.parse(data)[4] == null) {
            // if data is null then show empty string
            document.getElementById('hi_e').innerHTML = ""
        } else {
            // else show the value
            document.getElementById('hi_e').innerHTML = JSON.parse(data)[4]
        }
        if(JSON.parse(data)[5] == null) {
            // if data is null then show empty string
            document.getElementById('hi_f').innerHTML = ""
        } else {
            // else show the value
            document.getElementById('hi_f').innerHTML = JSON.parse(data)[5]
        }
        if(JSON.parse(data)[6] == null) {
            // if data is null then show empty string
            document.getElementById('hi_g').innerHTML = ""
        } else {
            // else show the value
            document.getElementById('hi_g').innerHTML = JSON.parse(data)[6]
        }
        if(JSON.parse(data)[7] == null) {
            // if data is null then show empty string
            document.getElementById('hi_h').innerHTML = ""
        } else {
            // else show the value
            document.getElementById('hi_h').innerHTML = JSON.parse(data)[7]
        }
        if(JSON.parse(data)[8] == null) {
            // if data is null then show empty string
            document.getElementById('hi_i').innerHTML = ""
        } else {
            // else show the value
            document.getElementById('hi_i').innerHTML = JSON.parse(data)[8]
        }
        if(JSON.parse(data)[9] == null) {
            // if data is null then show empty string
            document.getElementById('hi_j').innerHTML = ""
        } else {
            // else show the value
            document.getElementById('hi_j').innerHTML = JSON.parse(data)[9]
        }
    })
})

// you can see there is a empty container on the right side
// when i click the empth space the history should hidden
document.getElementById('history_empty').addEventListener('click', () => {
    // in css i hide the .section_hist container now when press this button it will visible
    document.getElementById('section_hist').style.visibility = 'hidden'
})

// global value for store the numbers when the button pressed
var values = ""
// global value for store the result and use it for the next calculation
var result = ""

// button function
// you may seen the current value is replacing the previous value to solve that
// i use append methon in string
document.getElementById('btn_7').addEventListener('click', () => {
    // assign the value for the result label
    values += "7"
    // result label
    document.getElementById('result_label').innerHTML = values
})
document.getElementById('btn_8').addEventListener('click', () => {
    // assign the value for the result label
    values += "8"
    // result label
    document.getElementById('result_label').innerHTML = values
})
document.getElementById('btn_9').addEventListener('click', () => {
    // assign the value for the result label
    values += "9"
    // result label
    document.getElementById('result_label').innerHTML = values
})
document.getElementById('btn_4').addEventListener('click', () => {
    // assign the value for the result label
    values += "4"
    // result label
    document.getElementById('result_label').innerHTML = values
})
document.getElementById('btn_5').addEventListener('click', () => {
    // assign the value for the result label
    values += "5"
    // result label
    document.getElementById('result_label').innerHTML = values
})
document.getElementById('btn_6').addEventListener('click', () => {
    // assign the value for the result label
    values += "6"
    // result label
    document.getElementById('result_label').innerHTML = values
})
document.getElementById('btn_1').addEventListener('click', () => {
    // assign the value for the result label
    values += "1"
    // result label
    document.getElementById('result_label').innerHTML = values
})
document.getElementById('btn_2').addEventListener('click', () => {
    // assign the value for the result label
    values += "2"
    // result label
    document.getElementById('result_label').innerHTML = values
})
document.getElementById('btn_3').addEventListener('click', () => {
    // assign the value for the result label
    values += "3"
    // result label
    document.getElementById('result_label').innerHTML = values
})
document.getElementById('btn_dot').addEventListener('click', () => {
    // assign the value for the result label
    values += "."
    // result label
    document.getElementById('result_label').innerHTML = values
})
document.getElementById('btn_0').addEventListener('click', () => {
    // assign the value for the result label
    values += "0"
    // result label
    document.getElementById('result_label').innerHTML = values
})

// calc function
// you may seen there is all symbol con selectable at continusly to stop that
document.getElementById('btn_divid').addEventListener('click', () => {
    // should values already contains the selected symbol or any other symbol present
    // if present it should repalce previous symbol into selected symbol
    if (values.includes(" / ")) {

    } else if (values.includes(" x ")) {
        // to replace current symbol into selected symbol
        values = values.replace("x", "/")
        document.getElementById('result_label').innerHTML = values.replace("x", "/")
    } else if (values.includes(" - ")) {
        // to replace current symbol into selected symbol
        values = values.replace("-", "/")
        document.getElementById('result_label').innerHTML = values.replace("-", "/")
    } else if (values.includes(" + ")) {
        // to replace current symbol into selected symbol
        values = values.replace("+", "/")
        document.getElementById('result_label').innerHTML = values.replace("+", "/")
    } else {
        values += " / "
        document.getElementById('result_label').innerHTML = values
    }
})
document.getElementById('btn_multi').addEventListener('click', () => {
    // should values already contains the selected symbol or any other symbol present
    // if present it should repalce previous symbol into selected symbol
    if (values.includes(" / ")) {
        // to replace current symbol into selected symbol
        values = values.replace("/", "x")
        document.getElementById('result_label').innerHTML = values.replace("/", "x")
    } else if (values.includes(" x ")) {
        
    } else if (values.includes(" - ")) {
        // to replace current symbol into selected symbol
        values = values.replace("-", "x")
        document.getElementById('result_label').innerHTML = values.replace("-", "x")
    } else if (values.includes(" + ")) {
        // to replace current symbol into selected symbol
        values = values.replace("+", "x")
        document.getElementById('result_label').innerHTML = values.replace("+", "x")
    } else {
        values += " x "
        document.getElementById('result_label').innerHTML = values
    }
})
document.getElementById('btn_substr').addEventListener('click', () => {
    // should values already contains the selected symbol or any other symbol present
    // if present it should repalce previous symbol into selected symbol
    if (values.includes(" / ")) {
        // to replace current symbol into selected symbol
        values = values.replace("/", "-")
        document.getElementById('result_label').innerHTML = values.replace("/", "-")
    } else if (values.includes(" x ")) {
        // to replace current symbol into selected symbol
        values = values.replace("x", "-")
        document.getElementById('result_label').innerHTML = values.replace("x", "-")
    } else if (values.includes(" - ")) {

    } else if (values.includes(" + ")) {
        // to replace current symbol into selected symbol
        values = values.replace("+", "-")
        document.getElementById('result_label').innerHTML = values.replace("+", "-")
    } else {
        values += " - "
        document.getElementById('result_label').innerHTML = values
    }
})
document.getElementById('btn_additi').addEventListener('click', () => {
    // should values already contains the selected symbol or any other symbol present
    // if present it should repalce previous symbol into selected symbol
    if (values.includes(" / ")) {
        values = values.replace("/", "+")
        document.getElementById('result_label').innerHTML = values.replace("/", "+")
    } else if (values.includes(" x ")) {
        // to replace current symbol into selected symbol
        values = values.replace("x", "+")
        document.getElementById('result_label').innerHTML = values.replace("x", "+")
    } else if (values.includes(" - ")) {
        // to replace current symbol into selected symbol
        values = values.replace("-", "+")
        document.getElementById('result_label').innerHTML = values.replace("-", "+")
    } else if (values.includes(" + ")) {

    } else {
        values += " + "
        document.getElementById('result_label').innerHTML = values
    }
})

document.getElementById('btn_del').addEventListener('click', () => {
    // to clear the result label set it empty
    values = ""
    // result label
    document.getElementById('result_label').innerHTML = values
})

// when the button equal has pressed it send the values to python
// to process the output
document.getElementById('btn_equal').addEventListener('click', () => {
    var options = {
        method: 'POST',
        uri: 'http://127.0.0.1:5000/calculation',
        form: { value: values }
    }

    request(options).then(function (innerHTML) {
        // when the values has post form js to python it will process the output send back to the js
        // once it recived the data it will store in result for antehr calculation
        result = innerHTML
        document.getElementById('result_label').innerHTML = innerHTML
        values = result
    })
})

document.getElementById('history_clr_btn').addEventListener('click', () => {
    var options = {
        method: 'POST',
        uri: 'http://127.0.0.1:5000/history',
        form: { value : "clear" }
    }
    request(options).then(function (data) {
        document.getElementById('section_hist').style.visibility = 'hidden'
    })
})