$(function(){
  $("#emailButton").click(function(e){
    e.preventDefault();

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var subject = $("#subject").val();
    var msg = $("#message").val();

    if (!firstName || firstName.length === 0) return;
    if (!lastName || lastName.length === 0) return;
    if (!subject || subject.length === 0) return;
    if (!msg || msg.length === 0) return;

    subject = subject+" ("+firstName+" "+lastName+")";
    var mailtoUrl = "mailto:LancoCarpetCleaning1@hotmail.com﻿?subject="+subject+"&body="+msg;
    window.location.href = mailtoUrl;
  });
})