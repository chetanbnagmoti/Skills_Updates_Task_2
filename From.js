$(document).ready(function() {
    $('#form-submit').submit(function(event){
        event.preventDefault(); // Prevent default form submission behavior

        // Get other form values
        var studentName = $("#studentName").val().toUpperCase();
        var fatherName = $("#fatherName").val().toUpperCase();
        var collegName = $("#collegeSelect").val().toUpperCase();
        var boardName = $("#boardName").val().toUpperCase();
        var batchName=$("#batchName").val().toUpperCase();
        var subject1=$("#subject1").val();
        var subject2=$("#subject2").val();
        var subject3=$("#subject3").val();
        var subject4=$("#subject4").val();
        var subject5=$("#subject5").val();
        var subject6=$("#subject6").val();

        // Create an object with form values
        var formData = {
            studentName: studentName,
            fatherName: fatherName,
            collegName: collegName,
            boardName: boardName,
            batchName:batchName,
            subject1:subject1,
            subject2:subject2,
            subject3:subject3,
            subject4:subject4,
            subject5:subject5,
            subject6:subject6

        };

        // Convert the object to a JSON string
        var formDataJson = JSON.stringify(formData);

        // Encode the JSON string as a URI component
        var formDataParam = encodeURIComponent(formDataJson);

        // Append form data as a parameter to the URL
        var url = "Marksheet.html" + "?formData=" + formDataParam;

        // Navigate to the second page with the form data as parameters
        window.location.replace(url);
    });


      // Attach click event listener to the Reset button
      $("#reset").on("click", function() {
        // Get the form element by ID
        $("#studentName, #fatherName, #batchName, #collegeSelect, #boardName, #subject1, #subject2, #subject3, #subject4, #subject5, #subject6").val('');

        
    });
});