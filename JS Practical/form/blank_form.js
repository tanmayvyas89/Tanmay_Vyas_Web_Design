function form_valid() {
    let fname = document.getElementById('fname').value;
    let mname = document.getElementById('mname').value;
    let lname = document.getElementById('lname').value;
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let other = document.getElementById('other').checked;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;
    let mobile = document.getElementById('pincode').value;
    let dob = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;

    if (fname == '' && mname == '' && lname == '' && male == false && female == false && other == false && address == '' && pincode == '' && state == '' && country == '' && dob == '' && mobile == '' && email == '' && pass == '' && cpass == '') {

        document.getElementById('msg1').innerHTML = 'Enter Your First Name';
        document.getElementById('msg2').innerHTML = 'Enter Your Middle Name';
        document.getElementById('msg3').innerHTML = 'Enter Your Last Name';
        document.getElementById('msg4').innerHTML = 'Select Gender';
        document.getElementById('msg5').innerHTML = 'Enter Address';
        document.getElementById('msg6').innerHTML = 'Enter Pincode';
        document.getElementById('msg7').innerHTML = 'Enter State';
        document.getElementById('msg8').innerHTML = 'Enter Country';
        document.getElementById('msg9').innerHTML = 'Enter DOB';
        document.getElementById('msg10').innerHTML = 'Enter Mobile No';
        document.getElementById('msg11').innerHTML = 'Enter Email Id';
        document.getElementById('msg12').innerHTML = 'Enter Password';
        document.getElementById('msg13').innerHTML = 'Enter Confirm Password';
        return false;
    }
}

function show_pass() {
    let pass = document.getElementById('pass');
    let cpass = document.getElementById('cpass');

    if (pass.type == "password" && cpass.type == "password") {
        pass.type = "text";
        cpass.type = "text";
        return false;

    } else {
        pass.type = "password";
        cpass.type = "password";
        return false;
    }

}