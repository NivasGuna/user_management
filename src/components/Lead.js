import React, { useContext, useState} from "react";
 import "../index.css";



import data from "../data.json";

import{Link, useNavigate } from "react-router-dom";
 import {Contexted} from "../Context";

function Lead() {

let [filtered, updatefilter]= useState(false);

var navigate= useNavigate();

let { profile, updateprofile}= useContext(Contexted);

var [order, updateorder]= useState("Ascending");

var [datas, updatedatas] =useState(data);

let array =[];

let updatearray = [];

let arraylength =datas.length;
data.map((events) => {

    var x = events.Company;
    
    array.push(x.toLowerCase());
    
    });
    
    console.log(array);
    
    function starting (events) {
    
    if (events === "Ascending") {
    
    updateorder(events);
    
    let x =array.sort();
    
    x.map((event) => {
    
    datas.map((events) => {
         if (event=== events.Company.toLowerCase()) {
    
    updatearray.push(events);
         }
    });
    
    updatedatas (updatearray);
    
    });
    
    console.log(updatearray);
    
    } else if (events=== "Descending") {
         let x =array.sort().reverse();
         updateorder(events);

x.map((event) => {

datas.map((events) => {

if (event === events.Company.toLocaleLowerCase()) { 
    updatearray.push(events);

} });

updatedatas(updatearray);

});

console.log(updatearray); }
 else {

updateorder(events); updatedatas(data);

}
    }

function profiled(events) { 
    console.log(events); 
    updateprofile(events);
     navigate("/profile");
}



return (
    <div>
<div className="flex w-screen">

<div className="flex w-1/2">

<p className="mx-4 px-3 hover:bg-gray-100 cursor-pointer hover:shadow-inner border-black border-[1px] ">

<i className="bi bi-funnel " onClick={() => updatefilter((prev) =>!prev)}></i>

</p>

<select className="border-[1px] px-2 border-black"> <option value="AllLeads">AllLeads</option>

<option value="Dsc">Dec</option>

<option value="Asc">Asc</option>

</select>

</div>

<div className="flex w-1/2 justify-end px-4">

<select className="border-[1px] bg-blue-600 px-2 text-sm text-center text-white rounded-[4px]">

<option value="CreateLead" className="bg-white text-black">

CreateLead

</option>
<option value="Dsc" className="bg-white text-black">

Dsc

</option>

<option value= "Asc" className="bg-white text-black">

Asc

</option>

</select>

<select className="border-[1px] bg-blue-600 px-2 mx-2 text-center text-white rounded-[4px] rounded-xs"> <option value="action">Action</option>

<option value="Dsc" className="bg-white text-black">

Dsc
</option>
<option value="Asc" className="bg-white text-black">



Asc

</option>

</select>

</div>

</div>
<div className="flex mx-4 py-4">
    <h6 className="font-semibold">{`Total No of Records ${arraylength} - sort by Company ( ${order})`}</h6>
</div>

<div className="grid grid-cols-12">

{filtered && (

<div className="col-span-3 border-[1px] rounded-md shadow-md border-black mx-2" onClick={() => updatefilter(true)}>

<h5 className="font-bold ml-2 py-2" >Filter Leads 

</h5>

<div className="flex border-black border-[1px] rounded-full w-3/4 mx-auto">

<i className="bi bi-search ml-2"></i>

<input

type="search"

list="Leads"

className="Focus:outline-none ml-2 w-2/4 rounded-full"

></input>

</div>

<br></br>

<div>

<p className="mx-2">

<span>

<i class="bi bi-chevron-down text-xs mr-2"></i>

</span>
<span className="font-bold text-sm">

System Defined Filters

</span>

</p>

<ul className="mx-2 text-sm">

<li>

 <input type="checkbox" className="mr-2 mt-2"></input> <span>Touched Records</span>

</li>

<li>

<input type="checkbox" className="mr-2 mt-2"></input> <span>unTouched Records</span>

</li>

<li>

<input type="checkbox" className="mr-2 mt-2"></input>

<span>Touched Records</span>

</li>
<li>

<input type="checkbox" className="mr-2 mt-2"></input>

<span> Records Action</span>

</li>

<li>

<input type="checkbox" className="mr-2 mt-2"></input> <span>Related Records Action</span>

</li>

<li>

<input type="checkbox" className="mr-2 mt-2"></input> <span>Touched Records</span>

</li>

<li>

<input type="checkbox" className="mr-2 mt-2"></input>

<span>Touched Records</span>

</li>

<li>

<input type="checkbox" className="mr-2 mt-2"></input>

<span>Touched Records</span>

</li>

<li>

<input type="checkbox" className="mr-2 mt-2"></input>

<span>Touched Records</span>

</li>

</ul>

</div>

<br></br>
<div>

<p className="mx-2 ">

<span>

<i class="bi bi-chevron-down text-xs mr-2"></i>

</span> <span className="font-bold text-sm">website Activity</span>

</p>

<ul className="mx-2 text-sm">

<li>

<input type="checkbox" className="mr-2 mt-2"></input> <span>Chats</span>

</li>

<li>

<input type="checkbox" className="mr-2 mt-2"></input>

<span>Attended By</span>

</li>
<li>
<input type="checkbox" className="mr-2 mt-2"></input>

<span>Browser</span>

</li>
<li>
<input type="checkbox" className="mr-2 mt-2"></input>

<span> Chrome</span>

</li>

<li>

<input type="checkbox" className="mr-2 mt-2"></input> <span>search Engine</span>

</li>

<li> <input type="checkbox" className="mr-2 mt-2"></input>

<span>portal Name</span>

</li> <li>

<input type="checkbox" className="mr-2 mt-2"></input> <span>Time Visited</span>

</li> <li>

<input type="checkbox" className="mr-2 mt-2"></input> <span>Days Visited</span>

</li>

<li> <input type="checkbox" className="mr-2 mt-2"></input>

<span>Average Time Spend</span>

</li>

</ul>

</div> </div>
)}




<div className={` ${filtered ? "col-span-9": "col-span-12"}`}>

<table className=" border-collapse shadow-lg ml-4 border-slate-400">

<thead>

<tr className="text-sm">

<th className="border rounded-1g border-slate-400"> 
<div className="w-full flex">

<input type="checkbox" className="ml-[13px]"></input> <span className="w-[100%] text-center">Lead Name</span>

</div>

</th>

<th className="border border-slate-400"> 
<div className="relative flex items-center pl-2"> Company*

<ul class="ml-p2 w-full flex justify-end">
     <li class="dropdown inline tracking-wide">

<p>

<i class="bi bi-list"></i>

</p>

<div class="dropdown-menu absolute hidden h-auto flex pt-1 py-4"> 
<ul class="block w-[130px] bg-gray-100 shadow ">

<li class="p-1">

<Link class="block text-base uppercase" onClick={() => starting("Ascending")}>
<span>

</span>

<i class="bi bi-arrow-up-short"></i>

Asc </Link>

</li>

<li class="p-1">

<Link class="block text-base uppercase" onClick={() => starting("Descending")}>

<span>

<i class="bi bi-arrow-down-short"></i>

</span>

Dsc
 </Link>

</li>

<li class="p-1">

<a class="block text-base uppercase" onClick={() => starting("unsort")}>

Unsort

</a>

</li>

</ul>

</div>

</li>

</ul>
</div>
</th>

<th className="border border-slate-400">

<div className="w-full flex">

<p className="w-1/2 text-start pl-2">Email*</p> <p className="w-1/2 text-end">
<i class="bi bi-list"></i>




</p>

</div>

</th>

<th className="border border-slate-400">

<div className="w-full flex">

<p className="w-1/2 text-start pl-2">LeadOwner*</p> <p className="w-1/2 text-end">

<i class="bi bi-list"></i>

</p>

</div>

</th>

<th className="border border-slate-400">

<div className="w-full flex overflow">

<p className="w-1/2 text-start pl-2">First Name*</p>

<p className="w-1/2 text-end my-auto">

<i class="bi bi-list"></i>

</p>

</div>
</th>
<th className="border border-slate-400">

<div className="w-full flex overflow"> <p className="w-1/2 text-start pl-2">Last Name* </p>

<p className="w-1/2 text-end my-auto">

<i class="bi bi-list"></i>

</p>

</div>

</th>

<th className="border border-slate-400">

<div className="w-full flex">

<p className="w-1/2 text-start pl-2">Title*</p> <p className="w-1/2 text-end my-auto">

<i class="bi bi-list"></i>

</p>

</div>

</th>

<th className="border pl-2 text-start border-slate-400">

Phone

</th>

<th className="border pl-2 text-start border-slate-400">

Fax </th>

<th className="border pl-2 text-start border-slate-400">

Mobile

</th>

<th className="border pl-2 text-start

border-slate-400">website</th>

<th className="border Lead sources

pl-2 text-start border-slate-400">

</th>

</tr>
 </thead>

<tbody>

{datas.map((events, index) => {

return (

<tr className="text- text-sm">

<td className="border

border-slate-400"> <div className="w-full flex">

<input

type="checkbox"

className="ml-[13px] mr-16"

></input>

<span onClick={() => profiled (events)}

className="w-[100%] pl-2 flex justify-start px-12 cursor-pointer">

{events.LeadName}

</span> </div>
</td>
<td className="border pl-2 border-slate-400">

{events.Company}

</td>

<td className="border pl-2 border-slate-400">

{events.Email}

</td>

<td className="border pl-2 border-slate-400">{events.LeadOwner}

</td>
<td className="border pl-2 border-slate-400">{events.FirstName}

</td>


<td className="border pl-2 border-slate-400">

{events.LastName}

</td>

<td className="border pl-2 border-slate-400">

{events.Title}

</td>

<td className="border pl-2 text-ellipsis border-slate-400">

{events.phone} <span>

<i className="bi ml-2 bi-telephone"></i>

</span> </td>

<td className="border text-center border-slate-400">

{events.fax} </td>

<td className="border pl-2 border-slate-400">
{events.Mobile}

</td>

<td className="border pl-2 border-slate-400">

{events.website}

</td>

<td className="border pl-2 border-slate-400">

{events.Leadsource}

</td>

</tr>
);})}
</tbody>
</table>
</div>
</div>






    </div>

)






}
export default Lead;