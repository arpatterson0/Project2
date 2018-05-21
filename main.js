
$(function(){
    var $contacts = $('#contacts');
    var $firstname =$('#fisrtname');
    var $Lastname =$('#lastname');
    var $email =$('#email');
    var $company =$('#company');
    var $phonenumber =$('#phonenumber');
    var $Date =$('#Date');
    function addContacts(contacts){
        $contacts.append('<li>fisrtname: ' + contacts.$firstname +  ' ,lastname: ' + contacts.$Lastname + ', email' + contacts.$email+ ', company'+ contacts.$company+ ', phonenumber '+contacts.$phonenumber + ', Date' +contacts.$Date+ '</li>')
    }
$.ajax({
type: 'GET',
url: 'http://localhost:3000/contact',
success: function(contacts){
    $.each(contacts, function(i,contact){
        addContacts(contacts);
    });
},
error: function(){
    alert('error loading contacts');
}

})
$('add-contacts').on('click', function(){
    var contact = {
        fisrtname: $firstname.val(),
        lastname: $Lastname.val(),
        email: $email.val(),
company:$company.val(),
phonenumber: $phonenumber.val(),
Date: $Date.val(),
    };
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/contact',
        data: contact,
        success: function(newContact){
               addContacts(newContact);
            },
error: function(){
    alert('error saving contacts')
}
})
})
})
