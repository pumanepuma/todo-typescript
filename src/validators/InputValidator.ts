type validationResultType = {
    isValid:boolean,
    errorMessage: string 
}

class InputValidator{
    checkInput(input:string){
        let res : validationResultType = {isValid:true, errorMessage: ''}
        if(input.trim().length === 0) {
            res = {isValid : false, errorMessage : "Todo title can't be empty"}
            return res
        }
        else if(input.length > 255){
            res = {isValid : false, errorMessage : "Todo title is too long"}
            return res
        }
        else return res
    }
}

export default new InputValidator()