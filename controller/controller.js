class Controller{
    constructor(model){
        this.fazLogin;
    }

    fazLogin(){
        let form = document.querySelector(".form");
        form.addEventListener("submit", (event)=>{
            event.preventDefault();
            let formChildren = event.target.children
            let dataForm = []
            for(let item in formChildren){
                if(item == 0 || item == 1){
                    dataForm.push(formChildren[item].value)
                }
            }
            return dataForm;
        })
    }
}

module.export = Controller.fazLogin();