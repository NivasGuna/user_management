import React, {useContext, useState} from "react"; 
import {Link} from "react-router-dom";
 import {Contexted} from "../Context";

function Profilepage() {

var {profile, updateprofile}= useContext(Contexted);

const [first, setfirst]= useState(false);
 const [inputs, updateinput]=useState(""); 
 var [task, updateTask]=useState("No Products Added")

let [hidden, updatehidden]= useState(false);



return(
    <div className="scrollbar-hide">

<div className="flex p-2">

<img src="../../assets/chr.jpg" className="float-left w-[38px] rounded-full mx-2 h-[38px]" /> <h6 className="px-2 font-bold">{`${profile.LeadName} (Sample) -`}</h6>

<h6 className="mt-2 text-xs">{profile.Company}</h6>

</div>

<div className="w-full border-2 grid grid-cols-12 ">
     {first && (

<div className="col-span-2 border-2 height-[100%]">
     <h6 className="font-bold">

<span>

<i className="bi bi-arrow-bar-left mr-2" onClick={() => setfirst (false)}></i>

</span>
Related list
</h6>

<ul className="mx-6 gap-y-4">
     <li className="hover:text-blue-400 py-1">

<Link to="/">Notes</Link> </li>

<li className="hover:text-blue-400 py-1">
     <Link to="/">Attachments</Link>

</li>

<li className="hover:text-blue-400 py-1">

<Link to="/">Products</Link>

</li>

<li className="hover:text-blue-400 py-1"> 
<Link to="/">Open activities</Link>

</li>

<li className="hover:text-blue-400 py-1"> 
<Link to="/">Closed activities</Link> </li>

<li className="hover:text-blue-400 py-1"> <Link to="/">Emails</Link>

</li> <li className="hover:text-blue-400 py-1"> <Link to="/">Invites Meetings</Link>

</li> <li className="hover:text-blue-400 py-1"> <Link to="/">Campaigns</Link>
</li>

<li className="hover:text-blue-400 py-1"> <Link to="/">social</Link> </li>

<li className="hover:text-blue-400 py-1"> <Link to="/">Visits zoho sales</Link>

</li> 
 <li className="hover:text-blue-400 py-1">

<Link to="/">Add Related List</Link>

</li> </ul>

<div className="px-6 py-6"> <h6 className="font-bold">Links</h6>

<ul>

<li className="hover:text-blue-400 py-1"> <Link to="/">Add Link</Link>

</li> </ul>

</div>

</div>
)}


<div className={`${first ? "col-span-10" : "col-span-12"} Leads`}>

<div class="flex ">

<span class="ml-4">

{!first && ( 

<i className= "bi bi-play my-auto mr-2" onClick={() => setfirst(true)} ></i>
)}
</span>

<div class="rounded-full w-[200px] border-[1px] border-black">

<button class="w-[50%] rounded-full hover:bg-[#bae6fd] hover:border-2 border-[#bae6fd]">

overview

</button>

<button class="w-[50%] rounded-full hover:bg-[#bae6fd] hover:border-2 border-[#bae6fd]"> Timeline

</button>

</div>

</div>

<div className="flex shadow-lg m-4 p-2 border-[1px]">
      <div className="text-md flex mx-auto ">

<div className="text-end ">

<h6 className="my-[5px] ">Lead owner </h6>
 <h6 className="my-[5px]">Email </h6>


<h6 className="my-[5px]">website </h6>
 <h6 className="my-[5px]">Industry </h6>
</div>
<div>

<h6 className="ml-8 my-[5px]">{profile.LeadOwner}</h6> <h6 className="ml-8 my-[5px] text-blue-500">{profile. Email}</h6> <h6 className="ml-8 my-[5px] text-blue-500">{profile.website}</h6>

<h6 className="ml-8 my-[5px]">{profile.Leadsource}</h6>

</div>

</div>
</div>


<div className="mt-6 shadow-1g m-4 border-[1px]">

<p className="flex border-b-[1px] border-gray-300 cursor-pointer">

{hidden ? <i className="bi bi-arrow-up-circle-fill mx-4" onClick={() => updatehidden((prev) => !prev)}></i>: <i className="bi bi-arrow-down-circle-fill mx-4" onClick={() => updatehidden((prev)=> !prev)}></i>}

{hidden ? (

<p onClick={() => updatehidden (false)}>Hide Details</p>

):(

<p onClick={() => updatehidden (true)}>Show Details</p>
)}
</p>

{hidden && (

<div className=" w-full">
<p className="text-blue-500 p-2">Lead Information</p>

<div className="w-[50%] float-left border-[1px]">

<div className="text-md flex mx-auto">

<div className="text-end ml-20"> <h6 className="my-[5px]">Lead owner </h6>

<h6 className="my-[5px]">Title </h6>

<h6 className="my-[5px]">phone </h6>

<h6 className="my-[5px] ">Mobile </h6>

<h6 className="my-[5px]">Lead sources </h6>

<h6 className="my-[5px]">Industry </h6> 
<h6 className="my-[5px] ">Annual Revenue </h6>

<h6 className="my-[5px]">Modefied By </h6>

</div>
 <div>

<h6 className="ml-8 my-[5px]">{profile.LeadOwner}</h6>

<h6 className="ml-8 my-[5px] ">{profile.Title}</h6>

<h6 className="ml-8 my-[5px] flex"> <p className="bg-green-300 rounded-1g mr-2"> <i class="bi bi-telephone p-[5px]"></i>

</p>

{profile.phone}

</h6>

<h6 className="ml-8 my-[5px] flex"> <p className="bg-green-300 rounded-md mr-2">

<i class="bi bi-telephone p-[5px]"></i>
</p>

{profile.Mobile}

</h6>



<h6 className="ml-8 my-[5px]">{profile.Leadsource}</h6>


<h6 className="ml-8 my-[5px] ">Service Provider</h6> <h6 className="ml-8 my-[5px] ">OMR85,00,000</h6>

<h6 className="ml-8 my-[5px] ">{profile.LeadOwner}</h6> </div>

</div>

</div>

<div className="border-2">



<div className="text-md flex mx-auto"> 
<div className="text-end ml-20">

<h6 className="my-[5px]">Company</h6>

<h6 className="my-[5px]">LeadName </h6> <h6 className="my-[5px]">Email </h6>

<h6 className="my-[5px]">Fax </h6> <h6 className="my-[5px] ">website</h6>

<h6 className="my-[5px]">Lead status</h6>

<h6 className="my-[5px] ">no of Employess</h6>

<h6 className="my-[5px]">credited By </h6>

</div>

<div>

<h6 className="ml-8 my-[5px] ">{profile.Company}</h6>

<h6 className="ml-8 my-[5px] ">{profile.LeadName}</h6>

<h6 className="ml-8 my-[5px] text-blue-500">

{profile.Email}

</h6>

<h6 className="ml-8 my-[5px] ">{profile.fax}</h6>

<h6 className="ml-8 my-[5px] text-blue-500">

{profile.website}

</h6>

<h6 className="ml-8 my-[5px] ">{profile.Leadsource}</h6> <h6 className="ml-8 my-[5px] ">-</h6>

<h6 className="ml-8 my-[5px] ">{profile.LeadOwner}</h6>

</div>

</div>

</div>

</div>
)}
</div>

<div className="shadow-md m-4 mt-6 border-[1px]"> 
<div className="flex border-b-[2px] p-1 border-gray-200"><h6 className="font-bold mx-2">Notes</h6> 

<select className="border-2 text-xs ml-[400px]" >

<option value="Recent Last"> Recent Last

</option>

<option value="Last Recent">

Last Recent

</option> 
</select>

</div>


<div className="Flex">

<img src="../../assets/chr.jpg" className="float-left w-[30px] rounded-full mx-6 my-4 h-[30px]"/>

<div className="text-[13px] ">

<h6 className="nt-4">{profile.LeadOwner}</h6>

<div className="flex mt-1">

<p className="mr-2">Lead</p>

<p className="mx-2 text-blue-500">{profile. LeadName}</p>

<p className="mx-2">Add Notes</p>

</div>

</div>

</div>


<input type="text" placeholder="Add Task" className="border-2 border-gray-300 mx-4 my-2 w-[500px] placeholder-black placeholder:text-xs" ></input>

</div>

<div className="shadow-md m-4 border-[1px]">

<div className="border-b-[2px] border-gray-200 grid grid-cols-12">

<h6 className="font-bold mx-4 my-2 col-span-11">Attachments</h6> <select className=" text-center border-[1px] m-1 col-span-1 rounded-md text-xs bg-blue-200"> I

<option value="Recent Last">Attach</option> <option value="Last Recent">Last Recent</option>

</select>

</div>

<h6 className=" text-center text-xs">No items Added</h6>

</div>

<div className="m-4 border-[1px] shadow-md">

<h6 className="font-bold mx-4">Products</h6>

<div className="w -1/3 mx-2 p-2">

<input 

type="text"

title="Choose a video please"

placeholder="Add Products"

className="focus:outline-none

border-[1px]" onChange={(events)=>{
     events.preventDefault()
     updateinput(events.target.value)
}
     }

/>

<button class="rounded-xs px-2 bg-blue-200" onClick={() =>updateTask(inputs)}>Save Changes</button>

<br></br>

</div>

<h6 className="text-center w-full text-black py-2" >{task} </h6>
</div>
</div>
</div>
</div>

)}

export default Profilepage;



