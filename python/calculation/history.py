import json

# we want store the values and result inside the history
# i used global list for store the values
history = []

def generateHistory(result):
    # when user want to clear the history
    if(result == "clear"):
        # delete entire history items
        del(history[:])
        return "null"
    # or user want to fetch the list of data
    elif (result == ""):
        # convert into json
        convert = json.dumps(history)
        return(convert)
    # i want to maxinum 10 items only store inside the history list
    # if exceed the 10 automaticlay delete the first item and append the new item at last when the user
    else:
        # if history length below than 10 value will append on the last
        if len(history) <= 10:
            history.append(result)
            return(history)
        # if history length is above 10 it will delete the first item
        else:
            del history[0]
            return(history)
        