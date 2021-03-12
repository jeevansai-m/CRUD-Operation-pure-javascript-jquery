// this function is  to validate the submit form
function isform_validate(){
    isValid = true;
    var txtname = document.getElementById("txtname");
    var txtemail = document.getElementById("txtemail");
    var txtpnum = document.getElementById("txtpnum");
    var country = document.getElementById("country");
    var State = document.getElementById("State");
    var dist = document.getElementById("dist");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var other = document.getElementById("other");
    var emailvaild =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneno = /^\d{10}$/;   
    if (txtname.value == "" || txtname.value.length >=12 || txtname.value.length <= 3 ) {
        if(txtname.value == ""){
          alert("*name should not be empty");}
        else{
          alert("*name should be min 3 or max 12 words");
        }
        isValid = false;
    }
    else if (emailvaild.test(txtemail.value) == false)
    {
    alert("*Invalid email id");
    isValid = false;
    }
    else if (!(txtpnum.value.match(phoneno))) {
        alert("*must be 10 digit number");
        isValid = false;
    }
    else if( country.value=="select" 
    || state.value=="select" ||
    dist.value=="select" ){
        alert("please select country , state & dist.");
        isValid = false;
    }
    else if (male.checked==false && female.checked==false && other.checked==false ){
        alert("please select the gender");
        isValid = false;
    }
    else{
    isValid = true;
    return isValid;}
}
//submit function 
var selectedRow = null;
function Btn_onform_submit() {
    if (isform_validate()) {
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
            Tab_Open(event, 'search');}
        else{
            insertNewRecord(formData);
            Tab_Open(event, 'search');
        }
        BTN_Form_Clear();
    }
}
// to get radio button selected function
function Radio_Value() { 
    var ele = document.getElementsByName("gender");
    for(i = 0; i < ele.length; i++) { 
          
        if(ele[i].type="radio") { 
          
            if(ele[i].checked) {
                
            result = ele[i].value; }
        } 
    }
    return result;
}
// read the input form
function readFormData() {
    var formData = {};
    formData["txtname"] = document.getElementById("txtname").value;
    formData["txtemail"] = document.getElementById("txtemail").value;
    formData["txtpnum"] = document.getElementById("txtpnum").value;
    formData["country"] = document.getElementById("country").value;
    formData["state"] = document.getElementById("state").value;
    formData["dist"] = document.getElementById("dist").value;
    formData["gender"] = Radio_Value();
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("tblrecords").getElementsByTagName('tbody')[0];
    // var newRow = table.insertRow(table.length);
    var newRow = table.insertRow(0);
    var records = [data.txtname,data.txtemail,data.txtpnum,data.country,data.state,data.dist,data.gender];
    for (var i=0;i<records.length;i++){
        cell = newRow.insertCell(i);
        cell.innerHTML = records[i];
    }
    cell7 = newRow.insertCell(7);
    cell7.innerHTML =  `<a id="btnstatus" value="áctive" onclick="Btn_Status_Getcell(this)" style="color:green;"  class="glyphicon glyphicon-ok" data-toggle="modal"  data-target="#myModal">áctive</a>

    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Status Edit</h4>
          </div>
          <div class="modal-body">
            <p>Click Ok to Change the Current Status</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" onclick="BTN_Satus_change()" data-dismiss="modal">OK</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
        
      </div>
    </div>`;


    cell8 = newRow.insertCell(8);
    cell8.innerHTML = `<a id="btnEdit" onClick="onEdit(this)" >Edit</a> &nbsp &nbsp
                       <a id="btnDelete" onClick="onDelete(this)">Delete</a>`;
    
}
function onEdit(td) {
    document.getElementById("fsubmit").value="update";
    selectedRow = td.parentElement.parentElement;
    document.getElementById("txtname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("txtemail").value = selectedRow.cells[1].innerHTML;
    document.getElementById("txtpnum").value = selectedRow.cells[2].innerHTML;
    document.getElementById("country").value = selectedRow.cells[3].innerHTML;
    State_appended();
    document.getElementById("state").value = selectedRow.cells[4].innerHTML;
    dist_appended();
    document.getElementById("dist").value = selectedRow.cells[5].innerHTML;
    if(result=="male"){
    document.getElementById("male").checked = true;
    }
    else if(result=="female")
    {
        document.getElementById("female").checked =true;
    }
    else if(result=="other")
    {
        document.getElementById("other").checked =true;
    }
    Tab_Open(event, 'Register');
    row = td.parentElement.parentElement;
    document.getElementById("tblrecords").deleteRow(row.rowIndex);
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tblrecords").deleteRow(row.rowIndex);
        BTN_Form_Clear();
    }
}
function Btn_Status_Getcell(td){
    // var table = document.getElementById("tblrecords").getElementsByTagName('tbody')[0];
    // table.insertRow(table.length).insertCell(7).innerHTML 
    selectedRow = td.parentElement.parentElement;

}
function BTN_Satus_change(){
    selectedRow.cells[0].innerHTML = selectedRow.cells[0].innerHTML;
    selectedRow.cells[1].innerHTML = selectedRow.cells[1].innerHTML;
    selectedRow.cells[2].innerHTML = selectedRow.cells[2].innerHTML;
    selectedRow.cells[3].innerHTML = selectedRow.cells[3].innerHTML;
    selectedRow.cells[4].innerHTML = selectedRow.cells[4].innerHTML;
    selectedRow.cells[5].innerHTML = selectedRow.cells[5].innerHTML;
    selectedRow.cells[6].innerHTML = selectedRow.cells[6].innerHTML;
    selectedRow.cells[7].innerHTML = `<a id="btnstatus" onclick="Btn_Status_Getcell(this)" value="inactive" style="color:red;"  type="button" class="glyphicon glyphicon-remove" data-toggle="modal" data-target="#myModal">inactive</a>
    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Status Edit</h4>
          </div>
          <div class="modal-body">
            <p>Click Ok to Change the Current Status</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" onclick="Btn_Active_change()" data-dismiss="modal">OK</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;
    selectedRow.cells[8].innerHTML= `<a  style="color:black;"  >Edit</a> &nbsp &nbsp
                       <a style="color:black;" id="btnDelete" >Delete</a>`;
          
}
function Btn_Active_change(){
    selectedRow.cells[0].innerHTML = selectedRow.cells[0].innerHTML;
    selectedRow.cells[1].innerHTML = selectedRow.cells[1].innerHTML;
    selectedRow.cells[2].innerHTML = selectedRow.cells[2].innerHTML;
    selectedRow.cells[3].innerHTML = selectedRow.cells[3].innerHTML;
    selectedRow.cells[4].innerHTML = selectedRow.cells[4].innerHTML;
    selectedRow.cells[5].innerHTML = selectedRow.cells[5].innerHTML;
    selectedRow.cells[6].innerHTML = selectedRow.cells[6].innerHTML;
    selectedRow.cells[7].innerHTML = `<a id="btnstatus" onclick="Btn_Status_Getcell(this)" value="áctive" style="color:green;"  class="glyphicon glyphicon-ok" data-toggle="modal" data-target="#myModal">áctive</a>

    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Status Edit</h4>
          </div>
          <div class="modal-body">
            <p>Click Ok to Change the Current Status</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" onclick="BTN_Satus_change()" data-dismiss="modal">OK</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
        
      </div>
    </div>`;
    selectedRow.cells[8].innerHTML= `<a id="btnEdit" onClick="onEdit(this)" >Edit</a> &nbsp &nbsp
                       <a id="btnDelete" onClick="onDelete(this)">Delete</a>`;
    

    }
 