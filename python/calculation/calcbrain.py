import re
import calculation.history as his

def calcbrain(getval):
    # remove the whitespace form the value
    val = getval.replace(" ", "")

    # if val has contains the symbol
    if "+" in val:
        # split the value into two sperated for calculation and remove the symbol
        res = val.split("+")
        # after splitted convert into float
        val_a = float(res[0])
        val_b = float(res[1])
        #calculation
        result = val_a + val_b
        # after result has generated should store the values and result inside the history
        forHis = str(getval) + " = " + str(result)
        his.generateHistory(forHis)
        # convert into string then return
        return(str(result))

    # if val has contains the symbol
    if "x" in val:
        # split the value into two sperated for calculation and remove the symbol
        res = val.split("x")
        # after splitted convert into float
        val_a = float(res[0])
        val_b = float(res[1])
        #calculation
        result = val_a * val_b
        # after result has generated should store the values and result inside the history
        forHis = str(getval) + " = " + str(result)
        his.generateHistory(forHis)
        # convert into string then return
        return(str(result))

    # if val has contains the symbol
    if "/" in val:
        # split the value into two sperated for calculation and remove the symbol
        res = val.split("/")
        # after splitted convert into float
        val_a = float(res[0])
        val_b = float(res[1])
        #calculation
        result = val_a / val_b
        # after result has generated should store the values and result inside the history
        forHis = str(getval) + " = " + str(result)
        his.generateHistory(forHis)
        # convert into string then return
        return(str(result))

    # if val has contains the symbol
    if "-" in val:
        # split the value into two sperated for calculation and remove the symbol
        res = val.split("-")
        # after splitted convert into float
        val_a = float(res[0])
        val_b = float(res[1])
        #calculation
        result = val_a - val_b
        # sometimes substraction will create the minus symbol it will not looks good so to solve
        # conver to string and replace it
        resultStr = str(result)
        removeMin = resultStr.replace("-", "")
        # after result has generated should store the values and result inside the history
        forHis = str(getval) + " = " + str(result)
        his.generateHistory(forHis)
        # convert into string then return
        return(removeMin)
    else:
        # sometimes user dosnt enter the second value it will show same value without goto the calculation
        return(getval)