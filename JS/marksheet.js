// Function to get URL parameter by name
function getURLParameter(name) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

$(document).ready(function() {
  // Get the formData parameter from the URL
  var formDataParam = getURLParameter('formData');

  if (formDataParam) {
      // Parse the JSON string back to an object
      var formData = JSON.parse(formDataParam);

      // Display the form data on the page
      $("#collegName").text(formData.collegName);
      $("#studentName").text(formData.studentName);
      $("#fatherName").text(formData.fatherName);
      $("#boardName").text(formData.boardName);
      $("#batchName").text(formData.batchName);
     
       

       // Calculate the average
       var subject1 = parseInt(formData.subject1);
       var subject2 = parseInt(formData.subject2);
       var subject3 = parseInt(formData.subject3);
       var subject4 = parseInt(formData.subject4);
       var subject5 = parseInt(formData.subject5);
       var subject6 = parseInt(formData.subject6);
        
       

    if (subject1 <= 35) {
        $("#subject1").css("color", "red");
       
    }
    if (subject2 <= 35) {
        $("#subject2").css("color", "red");
       
    }
    if (subject3 <= 35) {
        $("#subject3").css("color", "red");
       
    }
    if (subject4 <= 35) {
        $("#subject4").css("color", "red");
       
    }
    if (subject5 <= 35) {
        $("#subject5").css("color", "red");
       
    }
    if (subject6 <= 35) {
        $("#subject6").css("color", "red");
       
    }
    
    var total=(subject1 + subject2 + subject3 + subject4 + subject5 + subject6);
    var avg = (subject1 + subject2 + subject3 + subject4 + subject5 + subject6) / 6;
    
    $("#total").text(total);
    
    if (subject1 <= 35 || subject2 <= 35 || subject3 <= 35 || subject4 <= 35 || subject5 <= 35 || subject6 <= 35 || avg<=35) {
      $("#result").text("Result: Fail").css("color", "red");
      $("#avg").text("Average: " + avg.toFixed(2)+ " %").css("color","red");
    } else {
       
        $("#result").text("Result: Pass").css("color", "green");
        $("#avg").text("Average: " + avg.toFixed(2)+ " %");
    }
    

    
    $("#subject1").text(formData.subject1);
    $("#subject2").text(formData.subject2);
    $("#subject3").text(formData.subject3);
    $("#subject4").text(formData.subject4);
    $("#subject5").text(formData.subject5);
    $("#subject6").text( formData.subject6);


  }
});