type validationResultType = {
    isValid:boolean,
    errorMessage: string 
}

class InputValidator{
    checkInput(input:string){
        const res: validationResultType = {isValid:false,errorMessage:''};
        if(input.trim().length == 0){
            res.isValid = false;
            res.errorMessage = 'todo title can not be empty'
        }
        else if(input.trim().length > 255){
            res.isValid = false;
            res.errorMessage = 'todo title is too long'
        }
        else{
            res.isValid = true;
            res.errorMessage = ''
        }
        return res
    }
}

export default new InputValidator()