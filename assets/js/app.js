$(function () {
  $("#emailButton").click(function (e) {
    e.preventDefault();

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var subject = $("#subject").val();
    var msg = $("#message").val();

    if (!firstName || firstName.length === 0) return;
    if (!lastName || lastName.length === 0) return;
    if (!subject || subject.length === 0) return;
    if (!msg || msg.length === 0) return;

    subject = subject + " (" + firstName + " " + lastName + ")";
    var mailtoUrl = "mailto:LancoCarpetCleaning1@hotmail.com﻿?subject=" +
      subject + "&body=" + msg;
    window.location.href = mailtoUrl;
  });
});

goog_snippet_vars = function () {
  var w = window;
  w.google_conversion_id = 996898759;
  w.google_conversion_label = "mrA6CJGC8wQQx--t2wM";
  w.google_conversion_value = 1;
}
// DO NOT CHANGE THE CODE BELOW.
goog_report_conversion = function (url) {
  goog_snippet_vars();
  window.google_conversion_format = "3";
  window.google_is_call = true;
  var opt = new Object();
  opt.onload_callback = function () {
    if (typeof (url) != 'undefined') {
      window.location = url;
    }
  }
  var conv_handler = window['google_trackConversion'];
  if (typeof (conv_handler) == 'function') {
    conv_handler(opt);
  }
}