function save() {
    var name = document.getElementById("name").value;
    var emailid= document.getElementById("email").value;
    var rate= document.getElementById("number").value;
    var event= document.getElementById("event-details").value;
  
    var time = document.getElementsByName("when");
    var len = time.length;
    for (var i = 0; i < len; i++) {
      if (time[i].checked) {
        time = time[i].value;
        break;
      }
    }
  
    var where = document.getElementById("where").value;
  
    var feelings = document.getElementsByName("feelings");
    var len = feelings.length;
    var feelings= [];
    for (var i = 0; i < len; i++) {
      if (feelings[i].checked) {
        feelings.push(feelings[i].value);
      }
    }
    document.write("<b>Your Name: </b> " + name + "<br>");
    document.write("<b>Email: </b> " + emailid + "<br>");
    document.write("<b>On a scale of 1-10, how good was it?: </b> " + rate + "<br>");
    document.write("<b>Where did it happen?: </b> " + where + "<br>");
    document.write("<b>At what time of the day did it happen?: </b> " + time + "<br>");
    document.write("<b>What emotions did you experience? [Select all that apply]: </b> " + feelings + "<br>");
    document.write("<b>Your Detail: </b> " + event + "<br>");
  }
  
