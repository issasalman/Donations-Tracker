'use strict';

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function setDonation(){
  localStorage.setItem('allDonation',JSON.stringify(Donation.all));


}


function getDonatino(){

  let donationArr=JSON.parse(localStorage.getItem('allDonation'));

  if(donationArr !==null){
    for (let i = 0; i < donationArr.length; i++) {

      new Donation(donationArr[i].name,donationArr[i].amount,donationArr[i].age);
    }

  }



}




Donation.all=[];
function Donation(name,amount,age){
  this.name=name;
  this.amount=amount;
  this.age=age;
  Donation.all.push(this);
  this.render();
  setDonation();
}



let table =document.getElementById('table');


Donation.prototype.render=function(){
  let trData =document.createElement('tr');
  table.appendChild(trData);
  let td1 =document.createElement('td');
  trData.appendChild(td1);

  let td2 =document.createElement('td');
  trData.appendChild(td2);

  let td3 =document.createElement('td');
  trData.appendChild(td3);


  td1.textContent=this.name;
  td2.textContent=this.amount;
  td3.textContent=this.age;



};



let formDonation=document.getElementById('donationForm');
formDonation.addEventListener('submit',handleDonation);


function handleDonation(event)
{
  event.preventDefault();

  let name=event.target.donatorName.value;
  let amount=event.target.donationAmount.value;
  let age=randomAge(20,60);

  new Donation(name,amount,age);



}
getDonatino();


let clearItem=document.getElementById('clearItems');
clearItem.addEventListener('click',clearItems);

function clearItems(){
  localStorage.clear();
  location.reload();


}
