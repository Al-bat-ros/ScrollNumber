'use strict';

class EnumNumber {
    constructor({
        total,
        form,
        btnForm,
        count = 0, 
        step = 0,
        speed = 1
    })
    {
        this.totalValue = document.querySelector(total);
        this.totalInput = document.querySelector(form);
        this.totalBtn = document.querySelector(btnForm);
        this.options = {
            count,
            step,
            speed
        }
    }
    init(){
        this.listenBtn(); 
        this.listenInput();
        this.listenChange();  
    }

    counter(total){
        
        const timer = setInterval(() =>{

         if (total > this.options.count){
            if ((total - this.options.count) > 10000 ) {
                this.options.step = 1000;        
            } else if ((total - this.options.count) > 1000 ) {
                this.options.step = 100;        
            } else if ((total - this.options.count) > 100 ) {
                this.options.step = 10;        
            } else {
                this.options.step = 1;
            }
            this.options.count += this.options.step;
         }
         
         if (total < this.options.count){ 
            if ((this.options.count - total) > 10000 ) {
                this.options.step = 1000;        
            } else if ((this.options.count - total) > 1000 ) {
                this.options.step = 100;        
            } else if ((this.options.count - total) > 100 ) {
                this.options.step = 10;        
            } else {
                this.options.step = 1;
            }
            this.options.count -= this.options.step;
         }  

            if( total === this.options.count){ 
                this.options.count = total;
                clearInterval(timer);
            } 
            this.totalValue.textContent = this.options.count;  
        
        }, this.options.speed);

    };  
    
    listenBtn(){
        this.totalBtn.addEventListener('click', () =>{
            this.counter(Number(this.totalInput.value));
        })
    }
    listenInput(){
        this.totalInput.addEventListener('input', () => {
            this.counter(Number(this.totalInput.value));
        })
    }
    listenChange(){
        this.totalInput.addEventListener('change', () => {
            this.counter(Number(this.totalInput.value));
        })
    }
};



