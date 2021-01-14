
console.log("h");
var us=document.getElementById("user");
us.textContent=sessionStorage.getItem("emails");
var url_string1=window.location.href;
        
          var url_string=decodeURI(url_string1);
         console.log(url_string);
var url= new URL(url_string);
var assgn= url.searchParams.get("assname");
var hjcordiref= firebase.database().ref(`${sessionStorage.getItem("uids")}/${sessionStorage.getItem("roomi")}/Assigment/${assgn}/submission`);
     hjcordiref.orderByChild('email').on("child_added", function(data){
          var newVoke = data.val();
         console.log(data.val());
         if(newVoke.email){
         
         var html = "";
          html +=`<div class="col-lg-4 col-sm-12 mt-4" >
      
      <div class="card-body"  style="background-color: aliceblue">
<div class="row">
<div class="col-5">
        <h5 class="card-field card-title" style="font-weight:700;">Email: ${newVoke.email}</h5>



</div>

       </div> 
          


<a  style="display: inline-block" href="${newVoke.link}" class="mt-2 btn btn-success">Open</a>
<a  style="display: inline-block" href="https://assigno-b8431.web.app/evaluate.html?assname=${assgn}&email=${newVoke.email}" class="mt-2 btn btn-warning">Evaluate</a>

      </div>
    </div>
`

          document.getElementById("classe").innerHTML += html;
         }
         });