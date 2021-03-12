//THIS CODE IS FOR CLEAR Register form BUTTON
function BTN_Form_Clear(){
  document.getElementById("txtname").value = "";
  document.getElementById("txtemail").value = "";
  document.getElementById("txtpnum").value = "";
  document.getElementById("country").selectedIndex = "0";
  document.getElementById("state").options.length="1";
  document.getElementById("dist").options.length="1";
  document.getElementById("state").selectedIndex = "0";
  document.getElementById("dist").selectedIndex = "0";
  document.getElementById("male").checked=false;
  document.getElementById("female").checked=false;
  document.getElementById("other").checked=false;
  document.getElementById("fsubmit").value="Submit";
}
//this code is for search form clear button
function BTN_search_clear(){
  document.getElementById("txtsearchname").value = "";
  document.getElementById("txtsearchemail").value = "";
  document.getElementById("searchStatus").selectedIndex = "0";
}
// this code is for tab functionality
function Tab_Open(evt, Names) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Names).style.display = "block";
    evt.currentTarget.className += " active";
  }
// state dropdown binding function
  function State_appended(){
    var c=document.getElementById("country").value;
    var CINDIA= ["Andhra pradesh","Telangana","Tamil nadu"];
    var CUSA = ["California","Texas","Georgia"];
  if(c=="INDIA"){
    document.getElementById("state").options.length=1;
    document.getElementById("state").value="select";
    document.getElementById("dist").options.length=1;
    document.getElementById("dist").value="select";
  for (i = 0; i < CINDIA.length; i++) {
      var data = '<option value="'+CINDIA[i]+'">' + CINDIA[i] + '</option>';
      $('#state').append(data);
  }}
  else if(c=="USA"){
    document.getElementById("state").options.length=1;
    document.getElementById("state").value="select";
    document.getElementById("dist").options.length=1;
    document.getElementById("dist").value="select";
    for (i = 0; i < CUSA.length; i++) {
      var data = '<option value="'+CUSA[i]+'">' + CUSA[i] + '</option>';
      $('#state').append(data);
  }}else {document.getElementById("state").option.length=0;}
  }
  // dist dropdown binding function
  function dist_appended(){
    var s=document.getElementById("state").value;
    var sAP= ["Guntur", "Visakhapatnam", "East Godavari", "West Godavari"];
    var sTS = ["Hyderabad.", "Karimnagar", "Khammam","Siddipet"];
    var sTN = ["Chennai", "Coimbatore", "Dharmapuri", "Erode"];
    var sca = ["Los Angeles", "San Francisco", "Tehama"];
    var stx = ["Houston", "Plano", "Sherman"];
    var sga = ["Atlanta", "Baxley", "Pearson"];
  if(s=="Andhra pradesh"){
    document.getElementById("dist").options.length=1;
    document.getElementById("dist").value="select";
  for (i = 0; i < sAP.length; i++) {
      var data = '<option value="'+sAP[i]+'">' + sAP[i] + '</option>';
      $('#dist').append(data);
  }}
  else if(s=="Telangana"){
    document.getElementById("dist").options.length=1;
    document.getElementById("dist").value="select";
    for (i = 0; i < sTS.length; i++) {
      var data = '<option value="'+sTS[i]+'">' + sTS[i] + '</option>';
      $('#dist').append(data);
  }}else if(s=="Tamil nadu"){
    document.getElementById("dist").options.length=1;
    document.getElementById("dist").value="select";
    for (i = 0; i < sTN.length; i++) {
      var data = '<option value="'+sTN[i]+'">' + sTN[i] + '</option>';
      $('#dist').append(data);
  }}else if(s=="California"){
    document.getElementById("dist").options.length=1;
    document.getElementById("dist").value="select";
    for (i = 0; i < sca.length; i++) {
      var data = '<option value="'+sca[i]+'">' + sca[i] + '</option>';
      $('#dist').append(data);
  }}else if(s=="Texas"){
    document.getElementById("dist").options.length=1;
    document.getElementById("dist").value="select";
    for (i = 0; i < stx.length; i++) {
      var data = '<option value="'+stx[i]+'">' + stx[i] + '</option>';
      $('#dist').append(data);
  }}else if(s=="Georgia"){
    document.getElementById("dist").options.length=1;
    document.getElementById("dist").value="select";
    for (i = 0; i < sga.length; i++) {
      var data = '<option value="'+sga[i]+'">' + sga[i] + '</option>';
      $('#dist').append(data);
  }}else {document.getElementById("dist").option.length=1;document.getElementById("dist").value="select";}
  }

  function btn_search() {
      var input, filter, table, tr, td, i, txtValue,Emails;
      input = document.getElementById("txtsearchname");
      filter = input.value;
      table = document.getElementById("tblrecords");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent;
          if (!filter || txtValue === filter ) {
            tr[i].style.display = "";
          }
           else {
            tr[i].style.display = "none";
          }
        }
      }

  }
  function btn_email_search(){
    var  Einput,table, tr, td, i, txtValue,Emails;
    Einput = document.getElementById("txtsearchemail");
    Emails = Einput.value;
    table = document.getElementById("tblrecords");
    tr = table.getElementsByTagName("tr");
    for (j = 0; j < tr.length; j++) {
      td = tr[j].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent;
        if (!Emails || txtValue === Emails) {
          tr[j].style.display = "";
        }
         else {
          tr[j].style.display = "none";
        }
      }
    }
  }
  function btn_dropdown_search() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("drpstatussearch");
    filter = input.value;
    table = document.getElementById("tblrecords");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[7];
      if (td) {
        if (td.innerHTML.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
// function all_search_btn(){
//   var  Einput,table, tr,dropvalue, filter, txtname,Emails,x,drop2;
//   table = document.getElementById("tblrecords");
//   tr = table.getElementsByTagName("tr");
//   txtname = document.getElementById("txtsearchname");
//   filter = input.value;
//   Einput = document.getElementById("txtsearchemail");
//   Emails = Einput.value;
//   drop2 = document.getElementById("drpstatussearch");
//   dropvalue = drop2.value;
//   for (let x = 0; x < tr.length; x++) {
//     if (!(filter=="")){
//       btn_search();
//     }
//     else if(!(Emails=="")){
//       btn_email_search();
//     }
//     else if(!(dropvalue=="")){
//       btn_dropdown_search();
//     }
//     else{
//       tr[i].style.display = "";
//     }

//   }
// }
 