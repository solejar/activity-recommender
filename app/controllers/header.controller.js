//this controller is just for page switching on a larger scope.
angular.module('lang').controller('headerCtrl',function($window, $timeout){

    this.contentIndex=0;

    this.showContinueButton = function(currContent){
        //let currContent = this.content[index];

        if(currContent.isQuestion){
            for(let i = 0; i<3; i++){
                if(currContent.questionOptions[i].selected){
                    //console.log('something is selected');
                    return true;
                }
            }
            //console.log('nothing is selected');
            return false;

        }else{
            return true;
        }

    }

    this.getClass = function(selected){
        if(selected){
            return 'isSelected'
        }else{
            return 'notSelected'
        }
    }

    this.adjustSelection = function(currContent, selectedIndex){
        console.log('selected index is: ', selectedIndex);
        for(let i = 0; i<3;i++){
            let option = currContent.questionOptions[i];

            console.log(option)
            if(i==selectedIndex){
                option.selected = true;
            }else{
                option.selected = false;
            }

            currContent.questionOptions[i] = option;
        }
        console.log('leaving selection adjustment')
    }

    this.showSpinner = false;
    this.incrementIndex = function(){

        if(this.contentIndex==this.content.length-1){
            console.log('turning on spinner');
            this.showSpinner = true;
            $timeout(function(){
                 this.contentIndex++;
            }.bind(this),4000);
        }else{
            this.contentIndex++;
        }
    }

    this.content = [
        {
            description: "Hi, Mara!",
            isQuestion: false
        },
        {
            description: "Welcome to the Super Activity Recommender v1.0",
            isQuestion: false
        },
        {
            description: "I can help you find the most awesome things to do in NYC",
            isQuestion: false
        },
        {
            description: "Please help me by answering the following questions:",
            isQuestion: false
        },
        {
            description: "1) My spirit animal is definitely:",
            isQuestion: true,
            questionOptions: [
                {description: "A playful dolphin", selected: false},
                {description: "A curious fox", selected: false},
                {description: "A free-flying hawk", selected: false}
            ]

        },
        {
            description: "2) On a lazy Sunday you can find me:",
            isQuestion: true,
            questionOptions: [
                {description: "Curled up with a book in bed", selected: false},
                {description: "Adventuring somewhere new and fun", selected: false},
                {description: "Diving into bottomless brunch", selected: false}
            ]
        },
        {
            description: "3) My go-to relaxation drink is:",
            isQuestion: true,
            questionOptions: [
                {description: "A fresh-brewed coffee", selected: false},
                {description: "A tall mug of beer.", selected: false},
                {description: "A Moscow Mule", selected: false}
            ]
        },
        {
            description: "Press continue to receive ideas",
            isQuestion: false
        },

    ];
});
