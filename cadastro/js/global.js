(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });
    
        var myCalendar = $('.js-datepicker');
        var isClick = 0;
    
        $(window).on('click',function(){
            isClick = 0;
        });
    
        $(myCalendar).on('apply.daterangepicker',function(ev, picker){
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
        });
    
        $('.js-btn-calendar').on('click',function(e){
            e.stopPropagation();
    
            if(isClick === 1) isClick = 0;
            else if(isClick === 0) isClick = 1;
    
            if (isClick === 1) {
                myCalendar.focus();
            }
        });
    
        $(myCalendar).on('click',function(e){
            e.stopPropagation();
            isClick = 1;
        });
    
        $('.daterangepicker').on('click',function(e){
            e.stopPropagation();
        });
    
    
    } catch(er) {console.log(er);}
    /*[ Select 2 Config ]
        ===========================================================*/
    
    try {
        var selectSimple = $('.js-select-simple');
    
        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });
    
    } catch (err) {
        console.log(err);
    }
    

})(jQuery);

/* ==========================================================================
                              SHOW AND HIDE PASSWORD
========================================================================== */


function passwordToggle() {
    console.log("MA OÊ")
     let pass = document.getElementById("key");
     let confirmPass = document.getElementById("authKey");
     let eyeOpen = document.getElementById("hide1");
     let eyeSlash = document.getElementById("hide2");
     
     if(pass.type === "password"){
        pass.type = "text";
        confirmPass.type = "text";
         eyeOpen.style.display = "block";
         eyeSlash.style.display = "none";
     }
     else{
        pass.type = "password";
        confirmPass.type = "password";
        eyeOpen.style.display = "none";
        eyeSlash.style.display = "block";
    

     
     
     }
}

$(document).ready(function(){
    $('#telefone').mask('(00) 0000-0000');
    });




