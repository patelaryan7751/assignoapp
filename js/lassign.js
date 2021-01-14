
console.log("h");
var us=document.getElementById("user");
us.textContent=sessionStorage.getItem("emails");
var hjcordiref= firebase.database().ref(`${sessionStorage.getItem("uids")}/${sessionStorage.getItem("roomi")}/Assigment`);
     hjcordiref.orderByChild('assname').on("child_added", function(data){
          var newVoke = data.val();
         console.log(data.val());
         if(newVoke.assname){
         
         var html = "";
          html +=`<div class="col-lg-4 col-sm-12 mt-4" >
      
      <div class="card-body"  style="background-color: aliceblue">
<div class="row">
<div class="col-5">
        <h5 class="card-field card-title" style="font-weight:700;">Assignmennt Name: ${newVoke.assname}</h5>



</div>
<div class="col-7" style="margin-left=90%">
       <img src="images/assigno.png" class="img-fluid" width="100px" height="25px"> 
</div>
       </div> 
          


<a  style="display: inline-block" href="${newVoke.link}" class="mt-2 btn btn-success">Open</a>
<a  style="display: inline-block" href="https://assigno-b8431.web.app/submission.html?assname=${newVoke.assname}" class="mt-2 btn btn-success">Submissions</a>

      </div>
    </div>
`

          document.getElementById("classe").innerHTML += html;
         }
         });