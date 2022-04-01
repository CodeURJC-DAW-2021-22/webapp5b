let token = "";
let currentPage = 0;
let maxPages = 0;



function more() {
    if(currentPage < maxPages - 1) {
        $.ajax({
            url: "/apiadmin/manageUsers/" + (currentPage + 1),
            type: "get",
            dataType: "json"
        }).done(function (users) {
        	for(let i=0; i<users.length; i++) {
        		let user= users[i];
        		$("tbody").append("<tr id=\"user-"+user.id+"\">\r\n"
        				+ "                            <td scope=\"row\" class=\"user-id\">"+user.id+"</td>\r\n"
        				+ "                            <td class=\"user-username\">"+user.username+"</td>\r\n"
        				+ "                            <td class=\"user-email\">"+user.email+"</td>\r\n"
        				+ "                            <td class=\"user-name\">"+user.name+"</td>\r\n"
        				+ "                            <td class=\"user-lastName\">"+user.lastName+"</td>\r\n"
        				+ "                            <td class=\"user-address\">"+user.address+"</td>\r\n"
        				+ "                            <td class=\"user-phone\">"+user.phoneNumber+"</td>\r\n"
        				+ "                            <td class=\"user-birthdate\">"+user.birthDate+"</td>\r\n"
        				+ "                            <td class=\"user-role\">"+user.role+"</td>\r\n"
        				+ "                            <td><button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#modalAddEditUserData\"\r\n"
        				+ "                                data-id=\""+user.id+"\" onclick=\"edit_user_load($(this).data('id'));\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button></td>\r\n"
        				+ "                            <td><button data-id=\""+user.id+"\" onclick=\"delete_user($(this).data('id'));\" class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button></td>\r\n"
        				+ "                          </tr>")
        	}
        	currentPage++;
            if(currentPage >= maxPages - 1) {
                $("#more-btn").hide();
            }
        });
    }
};

function edit_user_load(id){
	$("#saveButton").attr("onclick","updateUser();");

    trSelected = "#user-" + id;
    editUsername = trSelected + " .user-username";
    editEmail = trSelected + " .user-email";
    editName = trSelected + " .user-name";
    editLastName = trSelected + " .user-lastName";
    editAddress = trSelected + " .user-address";
    editPhone = trSelected + " .user-phone";
    editBirthdate = trSelected + " .user-birthdate";
    editRole = trSelected + " .user-role";

    $("#editId").val(id);
    $("#editUserName").val($(editUsername)[0].innerHTML);
    $("#editEmail").val($(editEmail)[0].innerHTML);
    $("#editName").val($(editName)[0].innerHTML);
    $("#editLastName").val($(editLastName)[0].innerHTML);
    $("#editAddress").val($(editAddress)[0].innerHTML);
    $("#editPhone").val($(editPhone)[0].innerHTML);
    $('#editBirthDate').val($(editBirthdate)[0].innerHTML);
    $("#editRole").val($(editRole)[0].innerHTML);

    $("editPassword").attr("required", "false");
};

function updateUser() {
	
	var dataObj = {
			id: $("#editId")[0].defaultValue,
            username: $("#editUserName")[0].value,
            password: $("#editPassword")[0].value,
            email: $("#editEmail")[0].value,
            name: $("#editName")[0].value,
            lastName: $("#editLastName")[0].value,
            address: $("#editAddress")[0].value,
            mobileNumber: $("#editPhone")[0].value,
            birthdate: $("#editBirthDate")[0].value,
            role: $("#editRole")[0].value
	};
    $.ajax({
        url: "/api/users/updateAdminInfo/"+dataObj.id,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(dataObj),
        success: function(result) {
        	 success_alert();
        	 $('#dismiss-modal-users').click();
        	 $("#user-"+dataObj.id+" .user-username").html(dataObj.username);
             $("#user-"+dataObj.id+" .user-email").html(dataObj.email);
             $("#user-"+dataObj.id+" .user-name").html(dataObj.name);
             $("#user-"+dataObj.id+" .user-lastName").html(dataObj.lastName);
             $("#user-"+dataObj.id+" .user-address").html(dataObj.address);
             $("#user-"+dataObj.id+" .user-phone").html(dataObj.mobileNumber);
             $("#user-"+dataObj.id+" .user-birthdate").html(dataObj.birthdate);
             $("#user-"+dataObj.id+" .user-role").html(dataObj.role);
        }
    })
}


function deleteUser(id) {
	$.ajax({
        url: "/api/users/deleteUser/"+id,
        type: "DELETE",
        success: function(result) {
        	 success_alert();
             $("#user-"+id).remove();
        }
    })
}


$('#button-add-user').click(function(){
	$("#saveButton").attr("onclick","addUser();");
    $("editPassword").attr("required", "true");

    $("#editId").val('');
    $("#editPassword").val('');
    $("#editUserName").val('');
    $("#editEmail").val('');
    $("#editName").val('');
    $("#editLastName").val('');
    $("#editAddress").val('');
    $("#editPhone").val('');
    $('#editBirthDate').val('');
    $("#editRole").val('');
});

function addUser() {
	var dataObj = {
			id: $("tbody")[0].childElementCount+1,
            username: $("#editUserName")[0].value,
            password: $("#editPassword")[0].value,
            email: $("#editEmail")[0].value,
            name: $("#editName")[0].value,
            lastName: $("#editLastName")[0].value,
            address: $("#editAddress")[0].value,
            mobileNumber: $("#editPhone")[0].value,
            birthdate: $("#editBirthDate")[0].value,
            role: $("#editRole")[0].value
	};
    $.ajax({
        url: "/api/users/createUser",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(dataObj),
        success: function(result) {
        	 success_alert();
        	 $('#dismiss-modal-users').click();
        	 let addHTML = '<tr id="user-'+dataObj.id+'"> <td scope="row" class="user-id">'+dataObj.id+'</td> <td class="user-username">'+
		                     dataObj.username+'</td>' + '<td class="user-email">'+dataObj.email+'</td> <td class="user-name">'+dataObj.name+'</td>' +
		                     '<td class="user-lastName">'+dataObj.lastName+'</td> <td class="user-address">'+dataObj.address+'</td>' +
		                     '<td class="user-phone">'+dataObj.mobileNumber+'</td> <td class="user-birthdate">'+dataObj.birthdate+'</td>' +
		                     '<td class="user-role">'+dataObj.role+'</td>'+
		                     '<td><button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalAddEditUserData" '+
		                     'data-id="'+dataObj.id+'" onclick="edit_user_load('+dataObj.id+');"><i class="fa fa-pencil" aria-hidden="true"></i></button></td>' +
		                     '<td><button data-id="'+dataObj.id+'" onclick="deleteUser('+dataObj.id+');" '+
		                     'class="btn btn-primary" type="button"><i class="fa fa-trash" aria-hidden="true"></i></button></td> </tr>';
             $('tbody').append(addHTML);
        }
    })
}


function success_alert(){
    $('#manage-users-container').prepend('<div class="alert alert-success" role="alert" id="success-alert"> Operation succeded! </div>');
    setTimeout(function() {
        $('#success-alert').remove();
      }, 3000);
}

function error_alert(){
    $('#manage-users-container').prepend('<div class="alert alert-danger" role="alert" id="error-alert"> Operation failed! </div>');
    setTimeout(function() {
        $('#error-alert').remove();
      }, 3000);
}

$(document).ready(function () {
    token = $("#csrf-token").attr("content");
    maxPages = Number($("#max-pages").attr("content"));
});