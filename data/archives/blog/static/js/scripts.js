var page_initializer = function(){
    var onpageload = [];
    function register_onload(func){
        if($ || jQuery){
            register_onload = function(){
                if($.isFunction(func)) $(document).ready(func);
                else return false;
                return true;
            }
            return register_onload(func);
        }
        if(isFunction(func)){
            onpageload[onpageload.length] = func;
            return true;
        } else {
            return false;
        }
    }
    function isFunction(){
        return !!(typeof func == 'function' || toString.call(func) || typeof window[func] == 'function');
    }
    function init_page(){
        for(var i=0, len = onpageload.length; i < len; i++) {
            onpageload[i]();
        }
    }
    return {register_onload:register_onload, init_page:init_page};
}();

function validate() {
    if (!document.getElementById('comment_type1').checked && !document.getElementById('comment_type2').checked) {
        document.getElementById('validation').innerHTML = 'Select a Comment Type before proceeding.';
        document.getElementById('validation').style.display = 'block';
        if (document.getElementById('success')) {
            document.getElementById('success').style.display = 'none';
        }
        if (document.getElementById('error')) {
            document.getElementById('error').style.display = 'none';
        }
        return false;
    }

    if (document.getElementById('comment_type1').checked) {

        if (document.getElementById('name').value == '' ||  document.getElementById('email').value == '' || document.getElementById('comment').value == '') {
            document.getElementById('validation').innerHTML = 'Please fill out all fields before proceeding.';
            document.getElementById('validation').style.display = 'block';
            if (document.getElementById('success')) {
                document.getElementById('success').style.display = 'none';
            }
            if (document.getElementById('error')) {
                document.getElementById('error').style.display = 'none';
            }
            return false;
        }
        var email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!email_regex.test(document.getElementById('email').value)) {
            document.getElementById('validation').innerHTML = 'Please enter a valid Email Address before proceeding.';
            document.getElementById('validation').style.display = 'block';
            if (document.getElementById('success')) {
                document.getElementById('success').style.display = 'none';
            }
            if (document.getElementById('error')) {
                document.getElementById('error').style.display = 'none';
            }
            return false;
        }

    }

    if (document.getElementById('comment_type2').checked) {

        if (document.getElementById('openid_identifier').value == '' ||  document.getElementById('comment').value == '') {
            document.getElementById('validation').innerHTML = 'Please fill out all fields before proceeding.';
            document.getElementById('validation').style.display = 'block';
            if (document.getElementById('success')) {
                document.getElementById('success').style.display = 'none';
            }
            if (document.getElementById('error')) {
                document.getElementById('error').style.display = 'none';
            }
            return false;
        }

    }

    return true;
}

function clear_name(field) {
    if (field.value == 'Your Name') {
        field.value = '';
    }
}

function populate_name(field) {
    if (field.value == '') {
        field.value = 'Your Name';
    }
}

function clear_email(field) {
    if (field.value == 'Your Email') {
        field.value = '';
    }
}

function populate_email(field) {
    if (field.value == '') {
        field.value = 'Your Email';
    }
}


function clear_openid(field) {
    if (field.value == 'Your OpenID Identity') {
        field.value = '';
    }
}

function populate_openid(field) {
    if (field.value == '') {
        field.value = 'Your OpenID Identity';
    }
}

function clear_comments(field) {
    if (field.value == 'Your Comments') {
        field.value = '';
    }
}

function populate_comments(field) {
    if (field.value == '') {
        field.value = 'Your Comments';
    }
}
